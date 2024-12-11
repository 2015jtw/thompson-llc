import { defineQuery } from "next-sanity";

export const SERVICES_QUERY = defineQuery(`*[_type == "service"]{
  _id, title, icon, body
}`);

export const ABOUT_QUERY = defineQuery(
  `*[_type == "about"]{ _id, name, image, body }`
);

export const HERO_QUERY = defineQuery(`
  *[_type == "hero"]{ _id, missionStatement, subtitle, primaryButtonText, primaryButtonSlug, secondaryButtonText, secondaryButtonSlug, backgroundImage }
  `);
