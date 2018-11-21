var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Geometry_1;
import { GeometryChain } from "./GeometryChain";
import { GeometryInterfaceDecorator } from "./GeometryInterface";
import { AbsBaseHelper } from "../AbsBaseHelper";
let Geometry = Geometry_1 = class Geometry extends AbsBaseHelper {
    static chain(initial_value) {
        let value_to_pass = (initial_value !== undefined) ? initial_value : Geometry_1.value_to_pass;
        return GeometryChain.getInstance(value_to_pass, Geometry_1);
    }
    /**
     *
     * @param a
     * @param b
     * @param c
     * @param data
     * @returns {[number,number,number,number,number]}
     */
    static parabola(a, b, c, data) {
        return data.map((x) => a * (Math.pow(x, 2)) + b * x + c);
    }
    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @param data
     * @returns {number[]}
     */
    static ellipse(cx, cy, a, b, data) {
        let first_half = data.map((x) => b * Math.sqrt(1 - Math.pow((x - cx) / a, 2) - cy));
        let second_half = data.reverse().map((x) => -b * Math.sqrt(1 - Math.pow((x - cx) / a, 2) - cy));
        return first_half.concat(second_half);
    }
    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @param rad
     * @returns {Array<Array<number>>}
     */
    static ellipseParametric(cx, cy, a, b, rad) {
        let coordinates = [];
        let n_points = Math.floor(2 * Math.PI / rad);
        for (let i = 1; i <= n_points; i++) {
            let x = a * Math.cos(rad * i + cx);
            let y = b * Math.sin(rad * i + cy);
            coordinates.push([x, y]);
        }
        return coordinates;
    }
};
Geometry = Geometry_1 = __decorate([
    GeometryInterfaceDecorator()
], Geometry);
export { Geometry };
