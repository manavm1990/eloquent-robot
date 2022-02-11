/**
 * Graph is a 🗺️ map - edges are locations on the 🗺️ map.
 * @param {string[]} edges - An array of string locations.
 * @returns An object with array values listing all of the connected edges.
 */
export function buildGraph(edges) {
  return edges.reduce((graph, edge) => {
    const [start, end] = edge.split("-");
    graph[start] = graph[start] ? [...graph[start], end] : [end];
    graph[end] = graph[end] ? [...graph[end], start] : [start];
    return graph;
  }, {});
}
