import roads from "./roads.js";
import { Robot } from "./Robot.js";
import { buildGraph } from "./utils.js";

it("should create a correct graph", () => {
  expect(buildGraph(roads)).toEqual({
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

it("updates the 🤖 to reflect moving a 📦 from the 🏣 and deliver to Alice's 🏠", () => {
  const robot = new Robot("Post Office", [
    { place: "Post Office", address: "Alice's House" },
  ]);
  const updatedRobot = robot.move("Alice's House");

  expect(updatedRobot).toEqual({
    location: "Alice's House",
    parcels: [],
  });
});
