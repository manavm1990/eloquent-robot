import { Robot } from "./Robot.js";

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
