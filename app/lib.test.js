import { roadGraph } from "./lib";

it("should have a correct graph", () => {
  expect(roadGraph).toEqual({
    "Alice's House": ["Bob's House", "Cabin", "Post Office"],
    "Bob's House": ["Alice's House", "Town Hall"],
    Cabin: ["Alice's House"],
    "Post Office": ["Alice's House", "Marketplace"],
    "Town Hall": ["Bob's House", "Daria's House", "Marketplace", "Shop"],
    "Daria's House": ["Ernie's House", "Town Hall"],
    "Ernie's House": ["Daria's House", "Grete's House"],
    "Grete's House": ["Ernie's House", "Farm", "Shop"],
    Farm: ["Grete's House", "Marketplace"],
    Shop: ["Grete's House", "Marketplace", "Town Hall"],
    Marketplace: ["Farm", "Post Office", "Shop", "Town Hall"],
  });
});
