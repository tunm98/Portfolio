"use client";
import { FC, useState, useEffect } from "react";
import { getSkills } from "../../../sanity/sanity.query";
import type { SkillsType } from "../../../types";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  const [skills, setSkills] = useState<SkillsType[]>([]);
  // console.log("🚀 ~ file: Skills.tsx:10 ~ skills:", skills);
  useEffect(() => {
    getSkills().then((data) => {
      console.log("🚀 ~ file: Skills.tsx:13 ~ getSkills ~ data:", data);

      setSkills(data);
    });
  }, []);
  return <div>Nguyeen</div>;
};

export default Skills;
