import { GeneralChain } from "./GeneralChain";
import { GeneralInterface, GeneralInterfaceDecorator } from "./GeneralInterface";
import { AbsBaseHelper } from "../AbsBaseHelper";

@GeneralInterfaceDecorator<GeneralInterface>()
export class General extends AbsBaseHelper {

    public static chain(initial_value:any):GeneralChain {
        let value_to_pass:any = (initial_value !== undefined ) ? initial_value : General.value_to_pass;
        return GeneralChain.getInstance(value_to_pass, General);
    }

    /**
     *
     * @param n
     * @returns {boolean}
     */
    public static isPrime(n: number): boolean {
        if (n <= 3)
            return n > 1;
        else if (General.isEven(n) || (n % 3 === 0))
            return false;
        let i = 5;
        while (i * i <= n) {
            if ((n % i === 0) || (n % (i + 2) === 0))
                return false;
            i += 6
        }
        return true;
    }

    /**
     *
     * @param n
     * @returns {number}
     */
    public static nextPrime(n: number): number {

        let next: number = n + 1;

        if (!General.isPrime(next)) {
            return General.nextPrime(next);
        }

        return next;

    }

    /**
     *
     * @param num
     * @returns {number}
     */
    public static getInteger(num: string): number {
        let parse_int = parseInt(num, 10);
        return (parse_int) ? parse_int : 0;
    }

    /**
     *
     * @param num
     * @returns {number}
     */
    public static getFloat(num: string): number {
        let parse_float = parseFloat(num);
        return (parse_float) ? parse_float : 0;
    }

    /**
     *
     * @param num
     * @returns {boolean}
     */
    public static isEven(num: number): boolean {
        return (num % 2) === 0;
    }

    /**
     *
     * @param num
     * @returns {boolean}
     */
    public static isOdd(num: number): boolean {
        return (num % 2) !== 0;
    }

    /**
     *
     * @param num
     * @returns {boolean}
     */
    public static isEvenBitwise(num: number): boolean {
        return (num & 1) === 0;
    }

    /**
     *
     * @param num
     * @returns {boolean}
     */
    public static isOddBitwise(num: number): boolean {
        return (num & 1) !== 0;
    }

    /**
     * if it's needed a base different from 10
     *
     * @param base
     * @param value
     * @returns {number}
     */
    public static log(base: number, value: number): number {
        if (base === 10) {
            return Math.log(value);
        }
        return Math.log(value) / Math.log(base);
    }

    /**
     * https://graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2
     *
     * @param num
     * @returns {boolean}
     */
    public static powerOfTwo(num: number): boolean {
        return num && !(num & (num - 1));
    }

    /**
     *
     * @param num
     * @param divisor
     * @returns {boolean}
     */
    public static isDivisibleByPowOf2(num: number, divisor: number): boolean {
        return (num & (divisor - 1)) === 0;
    }

    /**
     *
     * @param num
     * @param divisor
     * @returns {boolean}
     */
    public static isDivisible(num: number, divisor: number): boolean {
        return (num % divisor) === 0;
    }

    /**
     * Fornisce il numero di bit necessari a rappresentare il numero in ingresso in funzione dalla base fornita
     *
     * @param num
     * @param base
     * @param n_bits
     * @returns {number}
     */
    public static bitForNumberByBase(num: number, base: number, n_bits: number = 0): number {
        num = Math.floor(num / base);
        n_bits++;
        if (num === 0) {
            return n_bits;
        }
        return General.bitForNumberByBase(num, base, n_bits);
    }

    /**
     *
     * @param str
     * @returns {boolean}
     */
    public static isBinary(str:string):boolean {
        let regex = new RegExp(/[^01]/);
        return regex.test(str);
    }

    /**
     *
     * @param str
     * @param bit
     */
    public static stringToBin(str:string, bit:number = 8):number {
        return 0;
    }

    /**
     * there isn't factorial of negative number
     *
     * @param num
     * @param tmp_fact
     * @returns {number}
     */
    public static factorial(num:number, tmp_fact:number = 1):number {
        if (num === 1 || num === 0) {
            return tmp_fact;
        }
        if (num < 0) {
            return -1;
        }
        return General.factorial(num-1, tmp_fact*num);
    }

}