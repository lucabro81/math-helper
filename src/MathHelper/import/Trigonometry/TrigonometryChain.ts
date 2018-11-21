import { AbsBaseChain } from "../AbsBaseChain";
import { TrigonometryInterface } from "./TrigonometryInterface";

export class TrigonometryChain extends AbsBaseChain{

    private static instance:TrigonometryChain;
    private static class_ref:TrigonometryInterface;

    /**
     * @constructor
     */
    private constructor() {
        super();
        if (TrigonometryChain.instance) {
            throw "TrigonometryChain already instantiated";
        }
    }

    /**
     *
     * @param initial_value
     * @param class_ref
     * @returns {TrigonometryChain}
     */
    public static getInstance(initial_value:any, class_ref:TrigonometryInterface):TrigonometryChain {

        TrigonometryChain.class_ref = class_ref;

        if (!TrigonometryChain.instance) {
            TrigonometryChain.instance = new TrigonometryChain();
        }
        TrigonometryChain.instance.curr_value = initial_value;
        return TrigonometryChain.instance;
    }

    /**
     *
     * @param amplitude
     * @returns {TrigonometryChain}
     */

    public sinWithAmplitude(amplitude:number):TrigonometryChain {
        this.curr_value = TrigonometryChain.class_ref.sinWithAmplitude(<number>this.curr_value, amplitude);
        return this;
    }

    /**
     *
     * @param shift
     * @returns {TrigonometryChain}
     */
    public sinWithShift(shift:number):TrigonometryChain {
        this.curr_value = TrigonometryChain.class_ref.sinWithShift(<number>this.curr_value, shift);
        return this;
    }

    /**
     *
     * @param amplitude
     * @returns {TrigonometryChain}
     */
    public cosWithAmplitude(amplitude:number):TrigonometryChain {
        this.curr_value = TrigonometryChain.class_ref.cosWithAmplitude(<number>this.curr_value, amplitude);
        return this;
    }

    /**
     *
     * @param shift
     * @returns {TrigonometryChain}
     */
    public cosWithShift(shift:number):TrigonometryChain {
        this.curr_value = TrigonometryChain.class_ref.cosWithShift(<number>this.curr_value, shift);
        return this;
    }

}