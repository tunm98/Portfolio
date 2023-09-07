// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getSkills() {
  const query = groq`
    *[_type == "skills"] {
      _id,
      skills
  `;

  return await client.fetch(query);
}
