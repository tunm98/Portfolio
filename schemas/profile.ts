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
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(50),
    }),
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "github",
          title: "Github URL",
          type: "url",
          initialValue: "https://github.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "twitter",
          title: "Twitter URL",
          type: "url",
          initialValue: "https://twitter.com/",
        },
        {
          name: "twitch",
          title: "Twitch URL",
          type: "url",
          initialValue: "https://twitch.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    },
  ],
};
export default profile;
