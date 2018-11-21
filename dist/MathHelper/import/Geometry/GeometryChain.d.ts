import { GeometryInterface } from "./GeometryInterface";
import { AbsBaseChain } from "../AbsBaseChain";
export declare class GeometryChain extends AbsBaseChain {
    private static instance;
    private static class_ref;
    /**
     * @constructor
     */
    private constructor();
    /**
     *
     * @param initial_value
     * @param class_ref
     * @returns {GeometryChain}
     */
    static getInstance(initial_value: any, class_ref: GeometryInterface): GeometryChain;
    /**
     *
     * @param a
     * @param b
     * @param c
     * @returns {GeometryChain}
     */
    parabola(a: number, b: number, c: number): GeometryChain;
    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @returns {GeometryChain}
     */
    ellipse(cx: number, cy: number, a: number, b: number): GeometryChain;
    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @returns {GeometryChain}
     */
    ellipseParametric(cx: number, cy: number, a: number, b: number): GeometryChain;
}
