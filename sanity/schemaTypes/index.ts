import { type SchemaTypeDefinition } from "sanity";
import { serviceType } from "./serviceType";
import { aboutType } from "./aboutType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType, aboutType],
};
