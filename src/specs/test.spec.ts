import { General } from "../MathHelper/import/General/General";

describe("General", () => {
    it("factorial'", () => {
        expect<number>(General.factorial(-500)).toEqual(-1);
        expect<number>(General.factorial(0)).toEqual(1);
        expect<number>(General.factorial(1)).toEqual(1);
        expect<number>(General.factorial(2)).toEqual(2);
        expect<number>(General.factorial(3)).toEqual(6);
        expect<number>(General.factorial(4)).toEqual(24);
        expect<number>(General.factorial(5)).toEqual(120);
        expect<number>(General.factorial(6)).toEqual(720);
        expect<number>(General.factorial(7)).toEqual(5040);
        expect<number>(General.factorial(8)).toEqual(40320);
        expect<number>(General.factorial(9)).toEqual(362880);
        expect<number>(General.factorial(10)).toEqual(3628800);
        expect<number>(General.factorial(11)).toEqual(39916800);
        expect<number>(General.factorial(12)).toEqual(479001600);
        expect<number>(General.factorial(13)).toEqual(6227020800);
        expect<number>(General.factorial(14)).toEqual(87178291200);
        expect<number>(General.factorial(15)).toEqual(1307674368000);
        expect<number>(General.factorial(16)).toEqual(20922789888000);
        expect<number>(General.factorial(17)).toEqual(355687428096000);
    });

    it("isPrime'", () => {
        expect<boolean>(General.isPrime(0)).toEqual(false);
        expect<boolean>(General.isPrime(1)).toEqual(false);
        expect<boolean>(General.isPrime(2)).toEqual(true);
        expect<boolean>(General.isPrime(3)).toEqual(true);
        expect<boolean>(General.isPrime(4)).toEqual(false);
        expect<boolean>(General.isPrime(5)).toEqual(true);
        expect<boolean>(General.isPrime(6)).toEqual(false);
        expect<boolean>(General.isPrime(7)).toEqual(true);
        expect<boolean>(General.isPrime(8)).toEqual(false);
        expect<boolean>(General.isPrime(9)).toEqual(false);
        expect<boolean>(General.isPrime(10)).toEqual(false);
    });

    it("nextPrime'", () => {
        expect<number>(General.nextPrime(0)).toEqual(2);
        expect<number>(General.nextPrime(2)).toEqual(3);
        expect<number>(General.nextPrime(3)).toEqual(5);
        expect<number>(General.nextPrime(5)).toEqual(7);
        expect<number>(General.nextPrime(7)).toEqual(11);
        expect<number>(General.nextPrime(11)).toEqual(13);
        expect<number>(General.nextPrime(13)).toEqual(17);
        expect<number>(General.nextPrime(17)).toEqual(19);
        expect<number>(General.nextPrime(19)).toEqual(23);
    });
});