import { PiletApi } from "spa-app";
import { fromNg } from "piral-ng/convert";
import { Tile } from "./Tile";

export function setup(app: PiletApi) {
  app.registerTile(fromNg(Tile), {
    initialColumns: 4,
    initialRows: 2,
  });
}
