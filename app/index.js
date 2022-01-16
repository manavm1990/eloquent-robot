import roads from "./roads.js";
import { buildGraph } from "./utils.js";

export function createWorld() {
  return buildGraph(roads);
}
