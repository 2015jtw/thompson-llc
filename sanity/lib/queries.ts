import { defineQuery } from "next-sanity";

export const SERVICES_QUERY = defineQuery(`*[_type == "service"]{
  _id, title, icon, body
}`);

export const ABOUT_QUERY = defineQuery(
  `*[_type == "about"]{ _id, name, image, body }`
);
