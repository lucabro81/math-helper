export function GeneralInterfaceDecorator<T>() {
    return (t: T): any => {};
}
export interface GeneralInterface {

    instance?:GeneralInterface;

    isPrime(n: number);
    nextPrime(n: number): number
    getInteger(num: string): number;
    getFloat(num: string): number;
    isEven(num: number): boolean;
    isOdd(num: number): boolean;
    isEvenBitwise(num: number): boolean;
    isOddBitwise(num: number): boolean;
    log(base: number, value: number): number;
    powerOfTwo(num: number): boolean;
    isDivisibleByPowOf2(num: number, divisor: number): boolean;
    isDivisible(num: number, divisor: number): boolean;
    bitForNumberByBase(num: number, base: number, n_bits: number): number;
    factorial(num: number, tmp_fact?: number): number;

}