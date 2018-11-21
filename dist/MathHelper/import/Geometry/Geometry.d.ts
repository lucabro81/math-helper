import { GeometryChain } from "./GeometryChain";
import { AbsBaseHelper } from "../AbsBaseHelper";
export declare class Geometry extends AbsBaseHelper {
    static chain(initial_value?: any): GeometryChain;
    /**
     *
     * @param a
     * @param b
     * @param c
     * @param data
     * @returns {[number,number,number,number,number]}
     */
    static parabola(a: number, b: number, c: number, data: Array<number>): Array<number>;
    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @param data
     * @returns {number[]}
     */
    static ellipse(cx: number, cy: number, a: number, b: number, data: Array<number>): Array<number>;
    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @param rad
     * @returns {Array<Array<number>>}
     */
    static ellipseParametric(cx: number, cy: number, a: number, b: number, rad: number): Array<Array<number>>;
}
