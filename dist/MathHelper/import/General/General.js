var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var General_1;
import { GeneralChain } from "./GeneralChain";
import { GeneralInterfaceDecorator } from "./GeneralInterface";
import { AbsBaseHelper } from "../AbsBaseHelper";
let General = General_1 = class General extends AbsBaseHelper {
    static chain(initial_value) {
        let value_to_pass = (initial_value !== undefined) ? initial_value : General_1.value_to_pass;
        return GeneralChain.getInstance(value_to_pass, General_1);
    }
    /**
     *
     * @param n
     * @returns {boolean}
     */
    static isPrime(n) {
        if (n <= 3)
            return n > 1;
        else if (General_1.isEven(n) || (n % 3 === 0))
            return false;
        let i = 5;
        while (i * i <= n) {
            if ((n % i === 0) || (n % (i + 2) === 0))
                return false;
            i += 6;
        }
        return true;
    }
    /**
     *
     * @param n
     * @returns {number}
     */
    static nextPrime(n) {
        let next = n + 1;
        if (!General_1.isPrime(next)) {
            return General_1.nextPrime(next);
        }
        return next;
    }
    /**
     *
     * @param num
     * @returns {number}
     */
    static getInteger(num) {
        let parse_int = parseInt(num, 10);
        return (parse_int) ? parse_int : 0;
    }
    /**
     *
     * @param num
     * @returns {number}
     */
    static getFloat(num) {
        let parse_float = parseFloat(num);
        return (parse_float) ? parse_float : 0;
    }
    /**
     *
     * @param num
     * @returns {boolean}
     */
    static isEven(num) {
        return (num % 2) === 0;
    }
    /**
     *
     * @param num
     * @returns {boolean}
     */
    static isOdd(num) {
        return (num % 2) !== 0;
    }
    /**
     *
     * @param num
     * @returns {boolean}
     */
    static isEvenBitwise(num) {
        return (num & 1) === 0;
    }
    /**
     *
     * @param num
     * @returns {boolean}
     */
    static isOddBitwise(num) {
        return (num & 1) !== 0;
    }
    /**
     * if it's needed a base different from 10
     *
     * @param base
     * @param value
     * @returns {number}
     */
    static log(base, value) {
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
    static powerOfTwo(num) {
        return num && !(num & (num - 1));
    }
    /**
     *
     * @param num
     * @param divisor
     * @returns {boolean}
     */
    static isDivisibleByPowOf2(num, divisor) {
        return (num & (divisor - 1)) === 0;
    }
    /**
     *
     * @param num
     * @param divisor
     * @returns {boolean}
     */
    static isDivisible(num, divisor) {
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
    static bitForNumberByBase(num, base, n_bits = 0) {
        num = Math.floor(num / base);
        n_bits++;
        if (num === 0) {
            return n_bits;
        }
        return General_1.bitForNumberByBase(num, base, n_bits);
    }
    /**
     *
     * @param str
     * @returns {boolean}
     */
    static isBinary(str) {
        let regex = new RegExp(/[^01]/);
        return regex.test(str);
    }
    /**
     *
     * @param str
     * @param bit
     */
    static stringToBin(str, bit = 8) {
        return 0;
    }
    /**
     * there isn't factorial of negative number
     *
     * @param num
     * @param tmp_fact
     * @returns {number}
     */
    static factorial(num, tmp_fact = 1) {
        if (num === 1 || num === 0) {
            return tmp_fact;
        }
        if (num < 0) {
            return -1;
        }
        return General_1.factorial(num - 1, tmp_fact * num);
    }
};
General = General_1 = __decorate([
    GeneralInterfaceDecorator()
], General);
export { General };
