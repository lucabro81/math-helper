var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Trigonometry_1;
import { TrigonometryChain } from "./TrigonometryChain";
import { TrigonometryInterfaceDecorator } from "./TrigonometryInterface";
import { AbsBaseHelper } from "../AbsBaseHelper";
let Trigonometry = Trigonometry_1 = class Trigonometry extends AbsBaseHelper {
    static chain(initial_value) {
        let value_to_pass = (initial_value !== undefined) ? initial_value : Trigonometry_1.value_to_pass;
        return TrigonometryChain.getInstance(value_to_pass, Trigonometry_1);
    }
    static sinWithAmplitude(rad, amplitude) {
        return amplitude * Math.sin(rad);
    }
    static sinWithShift(rad, shift) {
        return Math.sin(rad + shift);
    }
    static cosWithAmplitude(rad, amplitude) {
        return amplitude * Math.cos(rad);
    }
    static cosWithShift(rad, shift) {
        return Math.cos(rad + shift);
    }
};
Trigonometry = Trigonometry_1 = __decorate([
    TrigonometryInterfaceDecorator()
], Trigonometry);
export { Trigonometry };
