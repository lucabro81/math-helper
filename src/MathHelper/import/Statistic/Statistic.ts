import { AbsBaseHelper } from "../AbsBaseHelper";
import { StatisticInterface, StatisticInterfaceDecorator } from "./StatisticInterface";
import { StatisticChain } from "./StatisticChain";
import { General } from "../General/General";

@StatisticInterfaceDecorator<StatisticInterface>()
export class Statistic extends AbsBaseHelper {

    /**
     *
     * @param initial_value
     * @returns {StatisticChain}
     */
    public static chain(initial_value?:any):StatisticChain {
        let value_to_pass:any = (initial_value !== undefined ) ? initial_value : Statistic.value_to_pass;
        return StatisticChain.getInstance(value_to_pass, Statistic);
    }

    /**
     *
     * @param data
     * @returns {number}
     */
    public static arithmeticMean(data:Array<number>):number {

        let l:number = data.length;

        return data.reduce((acc, curr_value) => {
            return acc + curr_value;
        }, 0)/l;
    }

    public static arithmeticWeightedMean(data:Array<Array<number>>):number {

        let l:number = data.length;

        let sum_arr:Array<number> = data.reduce((acc:Array<number>, curr_value:Array<number>) => {
                acc[0] += curr_value[0]*curr_value[1];
                acc[1] += curr_value[1];
                return acc;
            }, [0, 0]);

        return sum_arr[0]/sum_arr[1];
    }

    /**
     *
     * @param data
     * @returns {Array}
     */
    public static linearRegression(data:Array<Array<number>>):Array<Array<number>> {
        return [];
    }

    /**
     * (n m) = n!/m!(n-m)!
     *
     * @param n
     * @param m
     * @returns {number}
     */
    public static binomialCoefficient(n:number, m:number):number {
        if ((n <= 0) || (m < 0) || (n <= m)) return 0;
        return General.factorial(n)/(General.factorial(m)*General.factorial(n-m));
    }

    /**
     *
     * @param data
     * @returns {number}
     */
    public static howManyPermutationsR(data:Array<any>):number {
        let perm_den = Statistic._repetitions(data).reduce((acc, curr_value) => {
            return (curr_value>1) ? acc*General.factorial(curr_value) : acc
        }, 1);
        return General.factorial(data.length)/perm_den;
    }

    /**
     *
     * @param data
     * @returns {number}
     */
    public static howManyPermutations(data:Array<any>):number {
        return General.factorial(data.length);
    }

    /**
     * Dr(n,m) = n^m
     *
     * @param data
     * @param m
     * @returns {number}
     */
    public static howManyDispositionsR(data:Array<any>, m:number):number {
        let n:number = data.length;
        return Math.pow(n, m);
    }

    /**
     * D(n,m) = n!/(n-m)!
     *
     * @param data
     * @param m
     * @returns {number}
     */
    public static howManyDispositions(data:Array<any>, m:number):number {

        let n:number = data.length;

        if (n === m) return General.factorial(n);
        if (n < m) return 0;

        return General.factorial(n)/General.factorial(n-m);
    }

    /**
     * Cr(n,m) = (n+m-1)!/m!(n-1)!
     *
     * @param data
     * @param m
     * @returns {number}
     */
    public static howManyCombinationsR(data:Array<any>, m:number):number {
        let n:number = data.length;
        return Statistic.binomialCoefficient(n + m - 1, m);
    }

    /**
     * C(n,m) = n!/(n-m)!m!
     *
     * @param data
     * @param m
     * @returns {number}
     */
    public static howManyCombinations(data:Array<any>, m:number):number {

        let n:number = data.length;

        if (n === m) return 1;
        if (n < m) return 0;

        return General.factorial(n)/(General.factorial(n-m)*General.factorial(m));
    }

    /**
     *
     * @param data
     * @returns {Array<number>}
     * @private
     */
    private static _repetitions(data:Array<any>):Array<number> {

        let repetitions:Array<number> = [];
        let keys_checked:Array<number> = [];

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

}