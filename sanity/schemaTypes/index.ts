import { type SchemaTypeDefinition } from "sanity";
import { serviceType } from "./serviceType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType],
};
