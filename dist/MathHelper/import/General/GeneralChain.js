import { AbsBaseChain } from "../AbsBaseChain";
export class GeneralChain extends AbsBaseChain {
    /**
     * @constructor
     */
    constructor() {
        super();
        if (GeneralChain.instance) {
            throw "GeneralChain already instantiated";
        }
        GeneralChain.instance = this;
    }
    /**
     *
     * @param initial_value
     * @param class_ref
     * @returns {GeneralChain}
     */
    static getInstance(initial_value, class_ref) {
        GeneralChain.class_ref = class_ref;
        if (!GeneralChain.instance) {
            GeneralChain.instance = new GeneralChain();
        }
        GeneralChain.instance.curr_value = initial_value;
        return GeneralChain.instance;
    }
    /**
     *
     * @param n
     * @returns {boolean}
     */
    isPrime() {
        this.curr_value = GeneralChain.class_ref.isPrime(this.curr_value);
        return this;
    }
    /**
     *
     * @returns {GeneralChain}
     */
    isEvenBitwise() {
        this.curr_value = GeneralChain.class_ref.isEvenBitwise(this.curr_value);
        return this;
    }
    /**
     *
     * @param base
     * @param n_bits
     * @returns {GeneralChain}
     */
    bitForNumberByBase(base, n_bits = 0) {
        this.curr_value = GeneralChain.class_ref.bitForNumberByBase(this.curr_value, base, n_bits);
        return this;
    }
    /**
     *
     * @param divisor
     * @returns {GeneralChain}
     */
    isDivisibleByPowOf2(divisor) {
        this.curr_value = GeneralChain.class_ref.isDivisibleByPowOf2(this.curr_value, divisor);
        return this;
    }
    /**
     *
     * @param divisor
     * @returns {GeneralChain}
     */
    isDivisible(divisor) {
        this.curr_value = GeneralChain.class_ref.isDivisible(this.curr_value, divisor);
        return this;
    }
    /**
     *
     * @param divisor
     * @returns {GeneralChain}
     */
    factorial() {
        this.curr_value = GeneralChain.class_ref.factorial(this.curr_value);
        return this;
    }
}
