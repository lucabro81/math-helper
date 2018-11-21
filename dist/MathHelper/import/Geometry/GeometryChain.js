import { AbsBaseChain } from "../AbsBaseChain";
export class GeometryChain extends AbsBaseChain {
    /**
     * @constructor
     */
    constructor() {
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
    static getInstance(initial_value, class_ref) {
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
    parabola(a, b, c) {
        this.curr_value = GeometryChain.class_ref.parabola(a, b, c, this.curr_value);
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
    ellipse(cx, cy, a, b) {
        this.curr_value = GeometryChain.class_ref.ellipse(cx, cy, a, b, this.curr_value);
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
    ellipseParametric(cx, cy, a, b) {
        console.log(cx, cy, a, b, this.curr_value);
        this.curr_value = GeometryChain.class_ref.ellipseParametric(cx, cy, a, b, this.curr_value);
        return this;
    }
}
