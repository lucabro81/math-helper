import { AbsBaseChain } from "../AbsBaseChain";
import { TrigonometryInterface } from "./TrigonometryInterface";
export declare class TrigonometryChain extends AbsBaseChain {
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
     * @returns {TrigonometryChain}
     */
    static getInstance(initial_value: any, class_ref: TrigonometryInterface): TrigonometryChain;
    /**
     *
     * @param amplitude
     * @returns {TrigonometryChain}
     */
    sinWithAmplitude(amplitude: number): TrigonometryChain;
    /**
     *
     * @param shift
     * @returns {TrigonometryChain}
     */
    sinWithShift(shift: number): TrigonometryChain;
    /**
     *
     * @param amplitude
     * @returns {TrigonometryChain}
     */
    cosWithAmplitude(amplitude: number): TrigonometryChain;
    /**
     *
     * @param shift
     * @returns {TrigonometryChain}
     */
    cosWithShift(shift: number): TrigonometryChain;
}
