import { TrigonometryChain } from "./TrigonometryChain";
import { AbsBaseHelper } from "../AbsBaseHelper";
export declare class Trigonometry extends AbsBaseHelper {
    static chain(initial_value?: any): TrigonometryChain;
    static sinWithAmplitude(rad: number, amplitude: number): number;
    static sinWithShift(rad: number, shift: number): number;
    static cosWithAmplitude(rad: number, amplitude: number): number;
    static cosWithShift(rad: number, shift: number): number;
}
