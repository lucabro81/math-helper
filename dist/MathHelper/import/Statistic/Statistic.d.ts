import { AbsBaseHelper } from "../AbsBaseHelper";
import { StatisticChain } from "./StatisticChain";
export declare class Statistic extends AbsBaseHelper {
    /**
     *
     * @param initial_value
     * @returns {StatisticChain}
     */
    static chain(initial_value?: any): StatisticChain;
    /**
     *
     * @param data
     * @returns {number}
     */
    static arithmeticMean(data: Array<number>): number;
    static arithmeticWeightedMean(data: Array<Array<number>>): number;
    /**
     *
     * @param data
     * @returns {Array}
     */
    static linearRegression(data: Array<Array<number>>): Array<Array<number>>;
    /**
     * (n m) = n!/m!(n-m)!
     *
     * @param n
     * @param m
     * @returns {number}
     */
    static binomialCoefficient(n: number, m: number): number;
    /**
     *
     * @param data
     * @returns {number}
     */
    static howManyPermutationsR(data: Array<any>): number;
    /**
     *
     * @param data
     * @returns {number}
     */
    static howManyPermutations(data: Array<any>): number;
    /**
     * Dr(n,m) = n^m
     *
     * @param data
     * @param m
     * @returns {number}
     */
    static howManyDispositionsR(data: Array<any>, m: number): number;
    /**
     * D(n,m) = n!/(n-m)!
     *
     * @param data
     * @param m
     * @returns {number}
     */
    static howManyDispositions(data: Array<any>, m: number): number;
    /**
     * Cr(n,m) = (n+m-1)!/m!(n-1)!
     *
     * @param data
     * @param m
     * @returns {number}
     */
    static howManyCombinationsR(data: Array<any>, m: number): number;
    /**
     * C(n,m) = n!/(n-m)!m!
     *
     * @param data
     * @param m
     * @returns {number}
     */
    static howManyCombinations(data: Array<any>, m: number): number;
    /**
     *
     * @param data
     * @returns {Array<number>}
     * @private
     */
    private static _repetitions;
}
