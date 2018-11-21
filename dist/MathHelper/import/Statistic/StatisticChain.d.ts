import { AbsBaseChain } from "../AbsBaseChain";
import { StatisticInterface } from "./StatisticInterface";
export declare class StatisticChain extends AbsBaseChain {
    private static instance;
    private static class_ref;
    /**
     * @constructor
     */
    private constructor();
    /**
     *
     * @param initial_value
     * @param class_ref
     * @returns {GeometryChain}
     */
    static getInstance(initial_value: any, class_ref: StatisticInterface): StatisticChain;
}
