import { GeneralInterface } from "./GeneralInterface";
//import { AbsBaseChain } from "../AbsBaseChain";
import { Geometry } from "../Geometry/Geometry";
import { GeometryChain } from "../Geometry/GeometryChain";
import { AbsBaseChain } from "../AbsBaseChain";

export class GeneralChain extends AbsBaseChain{

    private static instance:GeneralChain;
    private static class_ref:GeneralInterface;

    protected curr_value:any;

    /**
     * @constructor
     */
    private constructor() {
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
    public static getInstance<T>(initial_value:any, class_ref:GeneralInterface):GeneralChain {
        
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
    public isPrime(): GeneralChain {
        this.curr_value = GeneralChain.class_ref.isPrime(<number>this.curr_value);
        return this;
    }

    /**
     *
     * @returns {GeneralChain}
     */
    public isEvenBitwise(): GeneralChain {
        this.curr_value = GeneralChain.class_ref.isEvenBitwise(<number>this.curr_value);
        return this;
    }

    /**
     *
     * @param base
     * @param n_bits
     * @returns {GeneralChain}
     */
    public bitForNumberByBase(base: number, n_bits: number = 0):GeneralChain {
        this.curr_value = GeneralChain.class_ref.bitForNumberByBase(this.curr_value, base, n_bits);
        return this;
    }

    /**
     *
     * @param divisor
     * @returns {GeneralChain}
     */
    public isDivisibleByPowOf2(divisor: number):GeneralChain {
        this.curr_value = GeneralChain.class_ref.isDivisibleByPowOf2(<number>this.curr_value, divisor);
        return this;
    }

    /**
     *
     * @param divisor
     * @returns {GeneralChain}
     */
    public isDivisible(divisor: number):GeneralChain {
        this.curr_value = GeneralChain.class_ref.isDivisible(<number>this.curr_value, divisor);
        return this;
    }

    /**
     *
     * @param divisor
     * @returns {GeneralChain}
     */
    public factorial():GeneralChain {
        this.curr_value = GeneralChain.class_ref.factorial(<number>this.curr_value);
        return this;
    }
}