export function StatisticInterfaceDecorator<T>() {
    return (t: T): any => {};
}
export interface StatisticInterface {

    instance?:StatisticInterface;

    arithmeticMean(data:Array<number>):number;
    arithmeticWeightedMean(data:Array<Array<number>>):number;
    linearRegression(data:Array<Array<number>>):Array<Array<number>>;
    binomialCoefficient(n:number, m:number):number;
    howManyPermutationsR(data:Array<any>):number;
    howManyPermutations(data:Array<any>):number;
    howManyDispositionsR(data:Array<any>, m:number):number;
    howManyDispositions(data:Array<any>, m:number):number;
    howManyCombinationsR(data:Array<any>, m:number):number;
    howManyCombinations(data:Array<any>, m:number):number;
}