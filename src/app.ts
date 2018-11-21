// test purpose only

import { General } from "./MathHelper/import/General/General";
import { Geometry } from "./MathHelper/import/Geometry/Geometry";

console.log(
    General
      .chain(3)
      .bitForNumberByBase(6, 8)
      .switchTo(Geometry)
      .chain(Math.PI/12)
      .ellipseParametric(3,2,4,5)
      .done()
);