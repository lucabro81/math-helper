import { GeneralInterface } from "./GeneralInterface";
import { AbsBaseChain } from "../AbsBaseChain";
export declare class GeneralChain extends AbsBaseChain {
    private static instance;
    private static class_ref;
    protected curr_value: any;
    /**
     * @constructor
     */
    private constructor();
    /**
     *
     * @param initial_value
     * @param class_ref
     * @returns {GeneralChain}
     */
    static getInstance<T>(initial_value: any, class_ref: GeneralInterface): GeneralChain;
    /**
     *
     * @param n
     * @returns {boolean}
     */
    isPrime(): GeneralChain;
    /**
     *
     * @returns {GeneralChain}
     */
    isEvenBitwise(): GeneralChain;
    /**
     *
     * @param base
     * @param n_bits
     * @returns {GeneralChain}
     */
    bitForNumberByBase(base: number, n_bits?: number): GeneralChain;
    /**
     *
     * @param divisor
     * @returns {GeneralChain}
     */
    isDivisibleByPowOf2(divisor: number): GeneralChain;
    /**
     *
     * @param divisor
     * @returns {GeneralChain}
     */
    isDivisible(divisor: number): GeneralChain;
    /**
     *
     * @param divisor
     * @returns {GeneralChain}
     */
    factorial(): GeneralChain;
}
