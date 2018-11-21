export function TrigonometryInterfaceDecorator<T>() {
    return (t: T): any => {};
}
export interface TrigonometryInterface {

    instance?:TrigonometryInterface;

    sinWithAmplitude(rad:number, amplitude:number):number;
    sinWithShift(rad:number, shift:number):number;
    cosWithAmplitude(rad:number, amplitude:number):number;
    cosWithShift(rad:number, shift:number):number;
}