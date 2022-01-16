export function buildGraph(edges) {
  return edges.reduce((graph, edge) => {
    const [start, end] = edge.split("-");
    graph[start] = graph[start] ? [...graph[start], end] : [end];
    graph[end] = graph[end] ? [...graph[end], start] : [start];
    return graph;
  }, {});
}
