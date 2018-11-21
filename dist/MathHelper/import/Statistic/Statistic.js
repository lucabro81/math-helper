var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Statistic_1;
import { AbsBaseHelper } from "../AbsBaseHelper";
import { StatisticInterfaceDecorator } from "./StatisticInterface";
import { StatisticChain } from "./StatisticChain";
import { General } from "../General/General";
let Statistic = Statistic_1 = class Statistic extends AbsBaseHelper {
    /**
     *
     * @param initial_value
     * @returns {StatisticChain}
     */
    static chain(initial_value) {
        let value_to_pass = (initial_value !== undefined) ? initial_value : Statistic_1.value_to_pass;
        return StatisticChain.getInstance(value_to_pass, Statistic_1);
    }
    /**
     *
     * @param data
     * @returns {number}
     */
    static arithmeticMean(data) {
        let l = data.length;
        return data.reduce((acc, curr_value) => {
            return acc + curr_value;
        }, 0) / l;
    }
    static arithmeticWeightedMean(data) {
        let l = data.length;
        let sum_arr = data.reduce((acc, curr_value) => {
            acc[0] += curr_value[0] * curr_value[1];
            acc[1] += curr_value[1];
            return acc;
        }, [0, 0]);
        return sum_arr[0] / sum_arr[1];
    }
    /**
     *
     * @param data
     * @returns {Array}
     */
    static linearRegression(data) {
        return [];
    }
    /**
     * (n m) = n!/m!(n-m)!
     *
     * @param n
     * @param m
     * @returns {number}
     */
    static binomialCoefficient(n, m) {
        if ((n <= 0) || (m < 0) || (n <= m))
            return 0;
        return General.factorial(n) / (General.factorial(m) * General.factorial(n - m));
    }
    /**
     *
     * @param data
     * @returns {number}
     */
    static howManyPermutationsR(data) {
        let perm_den = Statistic_1._repetitions(data).reduce((acc, curr_value) => {
            return (curr_value > 1) ? acc * General.factorial(curr_value) : acc;
        }, 1);
        return General.factorial(data.length) / perm_den;
    }
    /**
     *
     * @param data
     * @returns {number}
     */
    static howManyPermutations(data) {
        return General.factorial(data.length);
    }
    /**
     * Dr(n,m) = n^m
     *
     * @param data
     * @param m
     * @returns {number}
     */
    static howManyDispositionsR(data, m) {
        let n = data.length;
        return Math.pow(n, m);
    }
    /**
     * D(n,m) = n!/(n-m)!
     *
     * @param data
     * @param m
     * @returns {number}
     */
    static howManyDispositions(data, m) {
        let n = data.length;
        if (n === m)
            return General.factorial(n);
        if (n < m)
            return 0;
        return General.factorial(n) / General.factorial(n - m);
    }
    /**
     * Cr(n,m) = (n+m-1)!/m!(n-1)!
     *
     * @param data
     * @param m
     * @returns {number}
     */
    static howManyCombinationsR(data, m) {
        let n = data.length;
        return Statistic_1.binomialCoefficient(n + m - 1, m);
    }
    /**
     * C(n,m) = n!/(n-m)!m!
     *
     * @param data
     * @param m
     * @returns {number}
     */
    static howManyCombinations(data, m) {
        let n = data.length;
        if (n === m)
            return 1;
        if (n < m)
            return 0;
        return General.factorial(n) / (General.factorial(n - m) * General.factorial(m));
    }
    /**
     *
     * @param data
     * @returns {Array<number>}
     * @private
     */
    static _repetitions(data) {
        let repetitions = [];
        let keys_checked = [];
        for (let i = 0; i < data.length; i++) {
            if (keys_checked.indexOf(i) >= 0) {
                let item = data[i];
                let value = data.reduce((acc, curr_value, curr_index) => {
                    if (curr_value === item) {
                        keys_checked.push(curr_index);
                        acc += curr_value;
                    }
                    return acc;
                }, 0);
                repetitions.push(value);
            }
        }
        return repetitions;
    }
};
Statistic = Statistic_1 = __decorate([
    StatisticInterfaceDecorator()
], Statistic);
export { Statistic };
