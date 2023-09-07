import { defineField } from "sanity";
import Html from "@/assets/png/html.png";
import Css from "@/assets/png/css.png";
import Js from "@/assets/png/js.png";
import Ts from "@/assets/png/ts.png";
import Nextjs from "@/assets/png/nextjs.png";
import Reactjs from "@/assets/png/reactjs.png";
import ReactQuery from "@/assets/png/reactQuery.png";
import Sass from "@/assets/png/sass.png";
import Tailwind from "@/assets/png/tailwind.png";
import Sveltejs from "@/assets/png/sveltejs.png";
import Bootstrap from "@/assets/png/bootstrap.png";
import Mui from "@/assets/png/mui.png";
import Figma from "@/assets/png/figma.png";
import Git from "@/assets/png/git.png";
import Gitlab from "@/assets/png/gitlab.png";
import BitBucket from "@/assets/png/bitbucket.png";
import BrowserStack from "@/assets/png/browserstack.png";
import Gsuite from "@/assets/png/gsuite.png";
import Jira from "@/assets/png/jira.png";
import MicrosoftOffice from "@/assets/png/microsoftOffice.png";
import Postman from "@/assets/png/postman.png";
import ReactNative from "@/assets/png/reactNative.png";
import Swagger from "@/assets/png/swagger.png";
import Vscode from "@/assets/png/vscode.png";

const profile = {
  name: "skills",
  title: "Skills",
  type: "document", // Use 'document' if this is a top-level content type
  description: "Add skills with icons",
  fields: [
    // {
    //   name: "skillArray",
    //   title: "Skills List",
    //   type: "array",
    //   of: [
    //     {
    //       type: "object",
    //       name: "skill",
    //       title: "Skill",
    //       fields: [
    //         {
    //           name: "skillName",
    //           title: "Skill Name",
    //           type: "string",
    //           description: "Name of the skill (e.g., HTML, CSS, JS)",
    //         },
    //         {
    //           name: "skillIcon",
    //           title: "Skill Icon",
    //           type: "image",
    //           description: "Upload your icon",
    //           options: { hotspot: true },
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    },
  ],
};

export const post = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true, // Enables user to select a focus area in the Studio UI
      },
    },
  ],
};

export default profile;
