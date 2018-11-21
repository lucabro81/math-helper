//import { GeneralChain } from "./General/GeneralChain";
//import { General } from "./General/General";
//import { TrigonometryChain } from "./Trigonometry/TrigonometryChain";
//import { Trigonometry } from "./Trigonometry/Trigonometry";
export class AbsBaseChain {
    /**
     *
     * @param curr_value
     * @returns {GeneralChain}
     */
    // public chainWithGeneral(curr_value?:any):GeneralChain {
    //     let value_to_pass:any;
    //     if (curr_value) {
    //         value_to_pass = curr_value;
    //     }
    //     else {
    //         value_to_pass = this.curr_value;
    //     }
    //     return GeneralChain.getInstance(value_to_pass, General);
    // }
    /**
     *
     * @param class_ref
     * @param curr_value
     * @returns {TrigonometryChain|GeneralChain|GeometryChain}
     */
    chainWith(class_ref, curr_value) {
        let value_to_pass;
        if (curr_value) {
            value_to_pass = curr_value;
        }
        else {
            value_to_pass = this.curr_value;
        }
        return class_ref.chain(value_to_pass);
    }
    /**
     *
     * @param class_ref
     * @returns {T}
     */
    switchTo(class_ref) {
        class_ref.value_to_pass = this.curr_value;
        return class_ref;
    }
    /**
     *
     * @param curr_value
     * @returns {TrigonometryChain}
     */
    // public chainWithTrigonometry(curr_value?:any):TrigonometryChain {
    //     let value_to_pass:any;
    //     if (curr_value) {
    //         value_to_pass = curr_value;
    //     }
    //     else {
    //         value_to_pass = this.curr_value;
    //     }
    //     return TrigonometryChain.getInstance(value_to_pass, Trigonometry);
    // }
    /**
     *
     * @returns {any}
     */
    done() {
        return this.curr_value;
    }
}
