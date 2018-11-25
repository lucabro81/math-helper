import { GeometryInterface } from "./GeometryInterface";
import { AbsBaseChain } from "../AbsBaseChain";

export class GeometryChain extends AbsBaseChain {

    private static instance:GeometryChain;
    private static class_ref:GeometryInterface;

    /**
     * @constructor
     */
    private constructor() {
        super();
        if (GeometryChain.instance) {
            throw "GeometryChain already instantiated";
        }
    }

    /**
     *
     * @param initial_value
     * @param class_ref
     * @returns {GeometryChain}
     */
    public static getInstance(initial_value:any, class_ref:GeometryInterface):GeometryChain {

        GeometryChain.class_ref = class_ref;

        if (!GeometryChain.instance) {
            GeometryChain.instance = new GeometryChain();
        }
        GeometryChain.instance.curr_value = initial_value;
        return GeometryChain.instance;
    }

    /**
     *
     * @param a
     * @param b
     * @param c
     * @returns {GeometryChain}
     */
    public parabola(a:number, b:number, c:number):GeometryChain {
        this.curr_value = GeometryChain.class_ref.parabola(a, b, c)(this.curr_value);
        return this;
    }

    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @returns {GeometryChain}
     */
    public ellipse(cx:number, cy:number, a:number, b:number):GeometryChain {
        this.curr_value = GeometryChain.class_ref.ellipse(cx, cy, a, b)(this.curr_value);
        return this;
    }

    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @returns {GeometryChain}
     */
    public ellipseParametric(cx:number, cy:number, a:number, b:number):GeometryChain {

        console.log(cx, cy, a, b, this.curr_value);

        this.curr_value = GeometryChain.class_ref.ellipseParametric(cx, cy, a, b, <number>this.curr_value);
        return this;
    }

}