"use client";
import { useEffect, useState, useRef } from "react";

const Cursor = () => {
  const cursorDotOutline = useRef<HTMLDivElement | null>(null);
  const cursorDot = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef(0);
  const previousTimeRef = useRef(0);
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  let cursorVisible = useRef<boolean>(false);
  let cursorEnlarged = useRef<boolean>(false);

  /**
   * Mouse Moves
   */
  const onMouseMove = (event: MouseEvent) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };
  const onMouseEnter = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };
  const onMouseLeave = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };
  const onMouseDown = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };
  const onMouseUp = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };
  const onResize = (event: UIEvent) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  /**
   * Hooks
   */
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);
    requestRef.current = requestAnimationFrame(animateDotOutline);

    // Handle Link Hovers
    handleLinkHovers();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  /**
   * Position Dot (cursor)
   * @param {event}
   */
  function positionDot(e: MouseEvent) {
    cursorVisible.current = true;
    toggleCursorVisibility();
    // Position the dot
    endX = e.pageX;
    endY = e.pageY;
    if (cursorDot.current) {
      cursorDot.current.style.top = endY + "px";
      cursorDot.current.style.left = endX + "px";
    }
  }

  /**
   * Toggle Cursor Visiblity
   */
  function toggleCursorVisibility() {
    if (cursorVisible.current) {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.opacity = "1";
        cursorDotOutline.current.style.opacity = "1";
      }
    } else {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.opacity = "0";
        cursorDotOutline.current.style.opacity = "0";
      }
    }
  }

  /**
   * Toggle Cursor Size
   */
  function toggleCursorSize() {
    if (cursorDot.current && cursorDotOutline.current) {
      if (cursorEnlarged.current) {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(5)";
      } else {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(1)";
      }
    }
  }

  /**
   * Handle LInks
   * Applies mouseover/out hooks on all links
   * to trigger cursor animation
   */
  function handleLinkHovers() {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
      });
      el.addEventListener("mouseout", () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
      });
    });
  }

  /**
   * Animate Dot Outline
   * Aniamtes cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      if (cursorDotOutline.current) {
        cursorDotOutline.current.style.top = y + "px";
        cursorDotOutline.current.style.left = x + "px";
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };
  return (
    <div id="cursor">
      <div ref={cursorDotOutline} id="cursor-dot-outline" className="dot1" />
      <div ref={cursorDotOutline} id="cursor-dot-outline" className="dot2" />
      {/* <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDotOutline} id="cursor-dot-outline" /> */}
      <div ref={cursorDot} id="cursor-dot" />
    </div>
  );
};

export default Cursor;
