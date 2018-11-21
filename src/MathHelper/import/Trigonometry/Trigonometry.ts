import { TrigonometryChain } from "./TrigonometryChain";
import { TrigonometryInterface, TrigonometryInterfaceDecorator } from "./TrigonometryInterface";
import { AbsBaseHelper } from "../AbsBaseHelper";

@TrigonometryInterfaceDecorator<TrigonometryInterface>()
export class Trigonometry extends AbsBaseHelper {

    public static chain(initial_value?:any):TrigonometryChain {
        let value_to_pass:any = (initial_value !== undefined ) ? initial_value : Trigonometry.value_to_pass;
        return TrigonometryChain.getInstance(value_to_pass, Trigonometry);
    }

    public static sinWithAmplitude(rad:number, amplitude:number):number {
        return amplitude*Math.sin(rad);
    }

    public static sinWithShift(rad:number, shift:number):number {
        return Math.sin(rad + shift);
    }

    public static cosWithAmplitude(rad:number, amplitude:number):number {
        return amplitude*Math.cos(rad);
    }

    public static cosWithShift(rad:number, shift:number):number {
        return Math.cos(rad + shift);
    }
}