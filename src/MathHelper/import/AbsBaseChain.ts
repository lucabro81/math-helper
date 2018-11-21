//import { GeometryChain } from "./Geometry/GeometryChain";
import { Geometry } from "./Geometry/Geometry";
import { AbsBaseHelper } from "./AbsBaseHelper";
//import { GeneralChain } from "./General/GeneralChain";
//import { General } from "./General/General";
//import { TrigonometryChain } from "./Trigonometry/TrigonometryChain";
//import { Trigonometry } from "./Trigonometry/Trigonometry";

export class AbsBaseChain {

    protected curr_value:any;

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
    public chainWith<T extends any, O extends any>(class_ref:T, curr_value?:any):O {

        let value_to_pass:any;

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
    public switchTo<T>(class_ref:T): T {
        (<any>class_ref).value_to_pass = this.curr_value;
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
    public done():any {
        return this.curr_value;
    }

    /**
     *
     * @param stringify
     * @returns {any}
     */
    // public getCurrValue(stringify:boolean = false):any {
    //     if (stringify) return JSON.stringify(this.curr_value);
    //     return this.curr_value;
    // }

}