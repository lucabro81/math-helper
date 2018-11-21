import { General } from "../MathHelper/import/General/General";
describe("General", () => {
    it("factorial'", () => {
        expect(General.factorial(-500)).toEqual(-1);
        expect(General.factorial(0)).toEqual(1);
        expect(General.factorial(1)).toEqual(1);
        expect(General.factorial(2)).toEqual(2);
        expect(General.factorial(3)).toEqual(6);
        expect(General.factorial(4)).toEqual(24);
        expect(General.factorial(5)).toEqual(120);
        expect(General.factorial(6)).toEqual(720);
        expect(General.factorial(7)).toEqual(5040);
        expect(General.factorial(8)).toEqual(40320);
        expect(General.factorial(9)).toEqual(362880);
        expect(General.factorial(10)).toEqual(3628800);
        expect(General.factorial(11)).toEqual(39916800);
        expect(General.factorial(12)).toEqual(479001600);
        expect(General.factorial(13)).toEqual(6227020800);
        expect(General.factorial(14)).toEqual(87178291200);
        expect(General.factorial(15)).toEqual(1307674368000);
        expect(General.factorial(16)).toEqual(20922789888000);
        expect(General.factorial(17)).toEqual(355687428096000);
    });
    it("isPrime'", () => {
        expect(General.isPrime(0)).toEqual(false);
        expect(General.isPrime(1)).toEqual(false);
        expect(General.isPrime(2)).toEqual(true);
        expect(General.isPrime(3)).toEqual(true);
        expect(General.isPrime(4)).toEqual(false);
        expect(General.isPrime(5)).toEqual(true);
        expect(General.isPrime(6)).toEqual(false);
        expect(General.isPrime(7)).toEqual(true);
        expect(General.isPrime(8)).toEqual(false);
        expect(General.isPrime(9)).toEqual(false);
        expect(General.isPrime(10)).toEqual(false);
    });
    it("nextPrime'", () => {
        expect(General.nextPrime(0)).toEqual(2);
        expect(General.nextPrime(2)).toEqual(3);
        expect(General.nextPrime(3)).toEqual(5);
        expect(General.nextPrime(5)).toEqual(7);
        expect(General.nextPrime(7)).toEqual(11);
        expect(General.nextPrime(11)).toEqual(13);
        expect(General.nextPrime(13)).toEqual(17);
        expect(General.nextPrime(17)).toEqual(19);
        expect(General.nextPrime(19)).toEqual(23);
    });
});
