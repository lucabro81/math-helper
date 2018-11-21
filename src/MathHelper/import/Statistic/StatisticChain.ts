import { AbsBaseChain } from "../AbsBaseChain";
import { StatisticInterface } from "./StatisticInterface";

export class StatisticChain extends AbsBaseChain {

    private static instance: StatisticChain;
    private static class_ref: StatisticInterface;

    /**
     * @constructor
     */
    private constructor() {
        super();
        if (StatisticChain.instance) {
            throw "GeometryChain already instantiated";
        }
    }

    /**
     *
     * @param initial_value
     * @param class_ref
     * @returns {GeometryChain}
     */
    public static getInstance(initial_value: any, class_ref: StatisticInterface): StatisticChain {

        StatisticChain.class_ref = class_ref;

        if (!StatisticChain.instance) {
            StatisticChain.instance = new StatisticChain();
        }
        StatisticChain.instance.curr_value = initial_value;
        return StatisticChain.instance;
    }
}