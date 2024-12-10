// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const SERVICES_QUERY = defineQuery(`*[_type == "service"]{
  _id, title, body
}`);
