import { AbsBaseChain } from "../AbsBaseChain";
export class StatisticChain extends AbsBaseChain {
    /**
     * @constructor
     */
    constructor() {
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
    static getInstance(initial_value, class_ref) {
        StatisticChain.class_ref = class_ref;
        if (!StatisticChain.instance) {
            StatisticChain.instance = new StatisticChain();
        }
        StatisticChain.instance.curr_value = initial_value;
        return StatisticChain.instance;
    }
}
