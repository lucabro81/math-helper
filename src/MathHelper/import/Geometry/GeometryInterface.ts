export function GeometryInterfaceDecorator<T>() {
    return (t: T): any => {};
}
export interface GeometryInterface {

    instance?:GeometryInterface;

    parabola(a:number, b:number, c:number, data:Array<number>): Array<number>;
    ellipse(cx:number, cy:number, a:number, b:number, data:Array<number>): Array<number>;
    ellipseParametric(cx:number, cy:number, a:number, b:number, rad:number): Array<Array<number>>;

}