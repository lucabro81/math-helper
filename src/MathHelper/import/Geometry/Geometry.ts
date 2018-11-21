import { GeometryChain } from "./GeometryChain";
import { GeometryInterface, GeometryInterfaceDecorator } from "./GeometryInterface";
import { AbsBaseHelper } from "../AbsBaseHelper";

@GeometryInterfaceDecorator<GeometryInterface>()
export class Geometry extends AbsBaseHelper {

    public static chain(initial_value?:any):GeometryChain {
        let value_to_pass:any = (initial_value !== undefined ) ? initial_value : Geometry.value_to_pass;
        return GeometryChain.getInstance(value_to_pass, Geometry);
    }

    /**
     *
     * @param a
     * @param b
     * @param c
     * @param data
     * @returns {[number,number,number,number,number]}
     */
    public static parabola(a:number, b:number, c:number, data:Array<number>):Array<number> {
        return data.map((x) => a*(Math.pow(x, 2)) + b*x + c);
    }

    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @param data
     * @returns {number[]}
     */
    public static ellipse(cx:number, cy:number, a:number, b:number, data:Array<number>):Array<number> {

        let first_half:Array<number> = data.map((x) => b*Math.sqrt(1 - Math.pow((x - cx)/a, 2) - cy));
        let second_half:Array<number> = data.reverse().map((x) => -b*Math.sqrt(1 - Math.pow((x - cx)/a, 2) - cy));

        return first_half.concat(second_half);
    }

    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @param rad
     * @returns {Array<Array<number>>}
     */
    public static ellipseParametric(cx:number, cy:number, a:number, b:number, rad:number):Array<Array<number>> {

        let coordinates:Array<Array<number>> = [];
        let n_points = Math.floor(2*Math.PI / rad);

        for (let i = 1; i <= n_points; i++) {
            let x:number = a*Math.cos(rad*i + cx);
            let y:number = b*Math.sin(rad*i + cy);

            coordinates.push([x, y]);
        }

        return coordinates;
    }

    /**
     *
     * @param dimensions_set
     * @param pos
     * @param new_value_at_pos
     * @returns {Array<number>}
     */
    // public modifyProportions(dimensions_set:Array<number>, pos:number, new_value_at_pos:number):Array<number> {
    //
    // }
}