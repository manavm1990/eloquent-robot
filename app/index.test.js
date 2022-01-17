import { createWorld } from "./index.js";
import { Store } from "./store.js";

it("should create a correct graph", () => {
  expect(createWorld()).toEqual({
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

it("update state to reflect moving a 📦 from the 🏣 and deliver to Alice's 🏠", () => {
  const initialState = new Store("Post Office", [
    { place: "Post Office", address: "Alice's House" },
  ]);
  const finalState = initialState.move("Alice's House");

  expect(finalState).toEqual({
    location: "Alice's House",
    parcels: [],
  });
});
