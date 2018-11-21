# math-helper

## Installation
```
npm install math-helper --save
```
    
## Docs

### Index
* [**General**](#general)
    * [isPrime(n: number): boolean](#isPrime)
    * [nextPrime(n: number): number](#nextPrime)
    * [isEven(num: number): boolean](#isEven)
    * [isEvenBitwise(num: number): boolean](#isEvenBitwise)
    * [log(base: number, value: number): number](#log)
    * [powerOfTwo(num: number): boolean](#powerOfTwo)
    * [isDivisibleByPowOf2(num: number, divisor: number): boolean](#isDivisibleByPowOf2)
    * [isDivisible(num: number, divisor: number): boolean](#isDivisible)
    * [bitForNumberByBase(num: number, base: number, n_bits: number): number](#bitForNumberByBase)
    * [factorial(num: number, tmp_fact?: number): number](#factorial)
* Geometry
    * parabola(a:number, b:number, c:number, data:Array<number>): Array<number>
    * ellipse(cx:number, cy:number, a:number, b:number, data:Array<number>): Array<number>
    * ellipseParametric(cx:number, cy:number, a:number, b:number, rad:number): Array<Array<number>>
* Statistic
    * arithmeticMean(data:Array<number>):number
    * arithmeticWeightedMean(data:Array<Array<number>>):number
    * linearRegression(data:Array<Array<number>>):Array<Array<number>>
    * binomialCoefficient(n:number, m:number):number
    * howManyPermutationsR(data:Array<any>):number
    * howManyPermutations(data:Array<any>):number
    * howManyDispositionsR(data:Array<any>, m:number):number
    * howManyDispositions(data:Array<any>, m:number):number
    * howManyCombinationsR(data:Array<any>, m:number):number
    * howManyCombinations(data:Array<any>, m:number):number
* Trigonometry
    * sinWithAmplitude(rad:number, amplitude:number):number
    * sinWithShift(rad:number, shift:number):number
    * cosWithAmplitude(rad:number, amplitude:number):number
    * cosWithShift(rad:number, shift:number):number

### General <a name="general"></a>

#### isPrime(n: number): boolean <a name="isPrime"></a>
```Typescript
import * as MH from 'math-helper'
 
let is_prime:boolean = MH.General.isPrime(13);
console.log(is_prime) // true
 
let is_not_prime:boolean = MH.General.isPrime(14);    
console.log(is_not_prime) // false
```

#### nextPrime(n: number): number
```Typescript
import * as MH from 'math-helper'
 
let next_prime:number = MH.General.nextPrime(12);
console.log(next_prime) // 13
```
    
#### isEven(num: number): boolean;
```Typescript
import * as MH from 'math-helper'
 
console.log(MH.General.isEven(1223)); // false
console.log(MH.General.isEven(1222)); // true
```
    
#### isEvenBitwise(num: number): boolean;
Come la precedente ma utilizza operazioni bitwise, utile nel caso di grandi iterazioni

#### log(base: number, value: number): number;
```Typescript
import * as MH from 'math-helper'
 
let log:number = MH.General.isEven(12, 144);
console.log(log); // 2
```
È possibile specificare una base arbitraria (**N.B.**: non sono ancora presenti controlli su base e argomento)

#### powerOfTwo(num: number): boolean;
```Typescript
import * as MH from 'math-helper'
 
let result:number = MH.General.powerOfTwo(12); 
console.log(result); // 4096
```
Calcole le potenze di due specificando l'esponente, con operazioni bitwise

#### isDivisibleByPowOf2(num: number, divisor: number): boolean;
```Typescript
import * as MH from 'math-helper'
 
let is_divisible: boolean = MH.General.isDivisibleByPowOf2(1234, 16);
console.log(is_divisible); // false
```
Controlla se un numero è divisibile per una potenza di 2 con operazioni bitwise, non funziona correttamente se si passa un divisore che non sia potenza di 2

#### isDivisible(num: number, divisor: number): boolean;
Come il precedente ma usa solo l'operatore % e non ha limitazioni per i dati in ingresso

#### bitForNumberByBase(num: number, base: number, n_bits: number): number;
```Typescript
import * as MH from 'math-helper'
 
let nbit:number = MH.General.bitForNumberByBase(1234, 16); // 1234 -> 0x4D2
console.log(nbit); // 3
```
Fornisce il numero di bit necessari a rappresentare il numero in ingresso in funzione dalla base fornita

#### factorial(num: number, tmp_fact?: number): number; <a name="factorial"></a>
```Typescript
import * as MH from 'math-helper'
 
let factorial:number = MH.General.factorial(17);
console.log(factorial); // 355687428096000
```
Calcolo con funzione tail recursive