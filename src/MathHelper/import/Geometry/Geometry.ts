import { GeometryChain } from "./GeometryChain";
import { Polynomial2D, Polynomial3D, GeometryInterface, GeometryInterfaceDecorator } from "./GeometryInterface";
import { AbsBaseHelper } from "../AbsBaseHelper";

@GeometryInterfaceDecorator<GeometryInterface>()
export class Geometry extends AbsBaseHelper {

    /**
     *
     * @param initial_value
     * @returns {GeometryChain}
     */
    public static chain(initial_value?:any):GeometryChain {
        let value_to_pass:any = (initial_value !== undefined ) ? initial_value : Geometry.value_to_pass;
        return GeometryChain.getInstance(value_to_pass, Geometry);
    }

    /**
     *
     * @param a
     * @param b
     * @param c
     * @param d
     * @returns {Polynomial3D}
     */
    public static plane(a:number, b:number, c:number, d:number):Polynomial3D {
        return (data:Array<Array<number>>) => {
            return data.map((xy:Array<number>) => (-a/c)*xy[0] + (-b/c)*xy[1] + (-d/c));
        };
    }

    /**
     *
     * @param a
     * @param b
     * @param c
     * @returns {Polynomial2D}
     */
    public static parabola(a:number, b:number, c:number):Polynomial2D {
        return (data:Array<number>) => {
            return data.map((x:number) => a*(Math.pow(x, 2)) + b*x + c);
        };
    }

    /*
     * X(t)=x cos(a) -f(x) sin(a)
     * Y(t)=x sin(a) +f(x) cos(a)
     */

    /**
     * x = at^2, y = 2at
     *
     * @param a
     * @param from
     * @param to
     * @param step
     */
    public static parabolaParametric(a:number, from:number, to:number, step:number):Array<Array<number>> {

        let coordinates:Array<Array<number>> = [];
        let n_points = Math.floor((to-from)/step);

        for (let i = 1; i <= n_points; i++) {
            let x:number = a*Math.pow(step, 2);
            let y:number = 2*a*step;

            coordinates.push([x, y]);
        }

        return coordinates;

    }

    /**
     *
     * @param polynomial
     * @param plane
     * @returns {Polynomial3D}
     */
    public static projectOnPlane(polynomial:Polynomial2D, plane:Polynomial3D):Polynomial3D {
        return (data:Array<Array<number>>) => {

            let x_arr:Array<number> = data.map((xy:Array<number>) => xy[0]);
            let new_data:Array<Array<number>> = polynomial(x_arr).map((y:number, i:number) => { return [data[i][0], y]});

            return plane(new_data);
        }
    }

    /**
     *
     * @param cx
     * @param cy
     * @param a
     * @param b
     * @returns {Polynomial2D}
     */
    public static ellipse(cx:number, cy:number, a:number, b:number):Polynomial2D {

        return (data:Array<number>) => {
            let first_half: Array<number> = data.map((x) => b * Math.sqrt(1 - Math.pow((x - cx) / a, 2) - cy));
            let second_half: Array<number> = first_half.concat().reverse().map((x) => -x);

            return first_half.concat(second_half);
        }
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

    // public static cicle()

    // public static cicleParametric()
}