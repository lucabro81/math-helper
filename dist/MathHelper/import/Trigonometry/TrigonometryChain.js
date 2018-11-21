import { AbsBaseChain } from "../AbsBaseChain";
export class TrigonometryChain extends AbsBaseChain {
    /**
     * @constructor
     */
    constructor() {
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
    static getInstance(initial_value, class_ref) {
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
    sinWithAmplitude(amplitude) {
        this.curr_value = TrigonometryChain.class_ref.sinWithAmplitude(this.curr_value, amplitude);
        return this;
    }
    /**
     *
     * @param shift
     * @returns {TrigonometryChain}
     */
    sinWithShift(shift) {
        this.curr_value = TrigonometryChain.class_ref.sinWithShift(this.curr_value, shift);
        return this;
    }
    /**
     *
     * @param amplitude
     * @returns {TrigonometryChain}
     */
    cosWithAmplitude(amplitude) {
        this.curr_value = TrigonometryChain.class_ref.cosWithAmplitude(this.curr_value, amplitude);
        return this;
    }
    /**
     *
     * @param shift
     * @returns {TrigonometryChain}
     */
    cosWithShift(shift) {
        this.curr_value = TrigonometryChain.class_ref.cosWithShift(this.curr_value, shift);
        return this;
    }
}
