export function GeometryInterfaceDecorator<T>() {
    return (t: T): any => {};
}
export interface GeometryInterface {

    instance?:GeometryInterface;

    plane(a:number, b:number, c:number, d:number):Polynomial3D;
    projectOnPlane(polynomial:Polynomial2D, plane:Polynomial3D):Polynomial3D;
    parabola(a:number, b:number, c:number):Polynomial2D;
    parabolaParametric(a:number, from:number, to:number, step:number):Array<Array<number>>;
    ellipse(cx:number, cy:number, a:number, b:number):Polynomial2D;
    ellipseParametric(cx:number, cy:number, a:number, b:number, rad:number): Array<Array<number>>;

}
export type Polynomial2D = (data:Array<number>) => Array<number>;
export type Polynomial3D = (data:Array<Array<number>>) => Array<number>;