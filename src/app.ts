// test purpose only

import { General } from "./MathHelper/import/General/General";
import { Geometry } from "./MathHelper/import/Geometry/Geometry";
import { GeometryChain } from "./MathHelper/import/Geometry/GeometryChain";

console.log(
    General
      .chain(3)
      .bitForNumberByBase(6, 8)
      .switchTo(Geometry)
      .chain(Math.PI/12)
      // .chainWith<Geometry, GeometryChain>(Geometry, Math.PI/12)
      .ellipseParametric(3, 2,4,5)
      .done()
);