import { type SchemaTypeDefinition } from "sanity";
import { serviceType } from "./serviceType";
import { aboutType } from "./aboutType";
import { heroType } from "./heroType";
import { problemType } from "./problemType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType, aboutType, heroType, problemType],
};
