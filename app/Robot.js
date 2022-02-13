import { roadGraph } from "./lib.js";

export class Robot {
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

    return new Robot(
      // Move 🤖 to new location
      destination,
      this.parcels
        .map((parcel) =>
          // Is the parcel coming from that previous location?
          parcel.location === this.location
            ? // If so, update the parcel to be at the new location.
              {
                ...parcel,
                location: destination,
              }
            : parcel
        )

        // Drop off parcels that belong here
        .filter((parcel) => parcel.address !== destination)
    );
  }
}
