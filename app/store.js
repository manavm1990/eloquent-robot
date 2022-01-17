import roads from "./roads.js";
import { buildGraph } from "./utils.js";

const roadGraph = buildGraph(roads);

export class Store {
  constructor(
    robotLocation = "Post Office",
    villageParcels = [{ location: "Post Office", address: "Alice's House" }]
  ) {
    this.location = robotLocation;
    this.parcels = villageParcels;
  }

  move(destination) {
    // Don't bother if we can't get there from here.
    if (!roadGraph[this.location].includes(destination)) {
      return this;
    }

    return new Store(
      // Move 🤖 to new location
      destination,
      this.parcels
        .map((parcel) =>
          // Is the parcel coming from that previous location?
          parcel.location === this.location
            ? // If so, update the parcel to be at the new location
              {
                ...parcel,
                location: destination,
              }
            : parcel
        )

        // Drop off parcels
        .filter((parcel) => parcel.address !== destination)
    );
  }
}
