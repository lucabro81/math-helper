import { GeneralChain } from "./GeneralChain";
import { AbsBaseHelper } from "../AbsBaseHelper";
export declare class General extends AbsBaseHelper {
    static chain(initial_value: any): GeneralChain;
    /**
     *
     * @param n
     * @returns {boolean}
     */
    static isPrime(n: number): boolean;
    /**
     *
     * @param n
     * @returns {number}
     */
    static nextPrime(n: number): number;
    /**
     *
     * @param num
     * @returns {number}
     */
    static getInteger(num: string): number;
    /**
     *
     * @param num
     * @returns {number}
     */
    static getFloat(num: string): number;
    /**
     *
     * @param num
     * @returns {boolean}
     */
    static isEven(num: number): boolean;
    /**
     *
     * @param num
     * @returns {boolean}
     */
    static isOdd(num: number): boolean;
    /**
     *
     * @param num
     * @returns {boolean}
     */
    static isEvenBitwise(num: number): boolean;
    /**
     *
     * @param num
     * @returns {boolean}
     */
    static isOddBitwise(num: number): boolean;
    /**
     * if it's needed a base different from 10
     *
     * @param base
     * @param value
     * @returns {number}
     */
    static log(base: number, value: number): number;
    /**
     * https://graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2
     *
     * @param num
     * @returns {boolean}
     */
    static powerOfTwo(num: number): boolean;
    /**
     *
     * @param num
     * @param divisor
     * @returns {boolean}
     */
    static isDivisibleByPowOf2(num: number, divisor: number): boolean;
    /**
     *
     * @param num
     * @param divisor
     * @returns {boolean}
     */
    static isDivisible(num: number, divisor: number): boolean;
    /**
     * Fornisce il numero di bit necessari a rappresentare il numero in ingresso in funzione dalla base fornita
     *
     * @param num
     * @param base
     * @param n_bits
     * @returns {number}
     */
    static bitForNumberByBase(num: number, base: number, n_bits?: number): number;
    /**
     *
     * @param str
     * @returns {boolean}
     */
    static isBinary(str: string): boolean;
    /**
     *
     * @param str
     * @param bit
     */
    static stringToBin(str: string, bit?: number): number;
    /**
     * there isn't factorial of negative number
     *
     * @param num
     * @param tmp_fact
     * @returns {number}
     */
    static factorial(num: number, tmp_fact?: number): number;
}
