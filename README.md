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
* [**Geometry**](#geometry)
    * [plane(a:number, b:number, c:number, d:number):Polynomial3D](#plane)
    * [projectOnPlane(polynomial:Polynomial2D, plane:Polynomial3D):Polynomial3D](#projectOnPlane)
    * [parabola(a:number, b:number, c:number):Polynomial2D](#parabola)
    * [parabolaParametric(a:number, from:number, to:number, step:number):Array<Array<number>>](#parabolaParametric)
    * [ellipse(cx:number, cy:number, a:number, b:number):Polynomial2D](#ellipse)
    * [ellipseParametric(cx:number, cy:number, a:number, b:number, rad:number): Array<Array<number>>](#ellipseParametric)
* [**Statistic**](#statistic)
    * [arithmeticMean(data:Array<number>):number](#arithmeticMean)
    * [arithmeticWeightedMean(data:Array<Array<number>>):number](#arithmeticWeightedMean)
    * [linearRegression(data:Array<Array<number>>):Array<Array<number>>](#linearRegression)
    * [binomialCoefficient(n:number, m:number):number](#binomialCoefficient)
    * [howManyPermutationsR(data:Array<any>):number](#howManyPermutationsR)
    * [howManyPermutations(data:Array<any>):number](#howManyPermutations)
    * [howManyDispositionsR(data:Array<any>, m:number):number](#howManyDispositionsR)
    * [howManyDispositions(data:Array<any>, m:number):number](#howManyDispositions)
    * [howManyCombinationsR(data:Array<any>, m:number):number](#howManyCombinationsR)
    * [howManyCombinations(data:Array<any>, m:number):number](#howManyCombinations)
* [**Trigonometry**](#trigonometry)
    * [sinWithAmplitude(rad:number, amplitude:number):number](#sinWithAmplitude)
    * [sinWithShift(rad:number, shift:number):number](#sinWithShift)
    * [cosWithAmplitude(rad:number, amplitude:number):number](#cosWithAmplitude)
    * [cosWithShift(rad:number, shift:number):number](#cosWithShift)


### General <a name="general"></a>

#### isPrime(n: number): boolean <a name="isPrime"></a>
```Typescript
import * as MH from 'math-helper'
 
let is_prime:boolean = MH.General.isPrime(13);
console.log(is_prime) // true
 
let is_not_prime:boolean = MH.General.isPrime(14);    
console.log(is_not_prime) // false
```

#### nextPrime(n: number): number <a name="nextPrime"></a>
```Typescript
import * as MH from 'math-helper'
 
let next_prime:number = MH.General.nextPrime(12);
console.log(next_prime) // 13
```
    
#### isEven(num: number): boolean; <a name="isEven"></a>
```Typescript
import * as MH from 'math-helper'
 
console.log(MH.General.isEven(1223)); // false
console.log(MH.General.isEven(1222)); // true
```
    
#### isEvenBitwise(num: number): boolean <a name="isEvenBitwise"></a>
Come la precedente ma utilizza operazioni bitwise, utile nel caso di grandi iterazioni

#### log(base: number, value: number): number <a name="log"></a>
```Typescript
import * as MH from 'math-helper'
 
let log:number = MH.General.isEven(12, 144);
console.log(log); // 2
```
È possibile specificare una base arbitraria (**N.B.**: non sono ancora presenti controlli su base e argomento)

#### powerOfTwo(num: number): boolean <a name="powerOfTwo"></a>
```Typescript
import * as MH from 'math-helper'
 
let result:number = MH.General.powerOfTwo(12); 
console.log(result); // 4096
```
Calcole le potenze di due specificando l'esponente, con operazioni bitwise

#### isDivisibleByPowOf2(num: number, divisor: number): boolea <a name="isDivisibleByPowOf2"></a>
```Typescript
import * as MH from 'math-helper'
 
let is_divisible: boolean = MH.General.isDivisibleByPowOf2(1234, 16);
console.log(is_divisible); // false
```
Controlla se un numero è divisibile per una potenza di 2 con operazioni bitwise, non funziona correttamente se si passa un divisore che non sia potenza di 2

#### isDivisible(num: number, divisor: number): boolean <a name="isDivisible"></a>
Come il precedente ma usa solo l'operatore % e non ha limitazioni per i dati in ingresso

#### bitForNumberByBase(num: number, base: number, n_bits: number): number <a name="bitForNumberByBase"></a>
```Typescript
import * as MH from 'math-helper'
 
let nbit:number = MH.General.bitForNumberByBase(1234, 16); // 1234 -> 0x4D2
console.log(nbit); // 3
```
Fornisce il numero di bit necessari a rappresentare il numero in ingresso in funzione dalla base fornita

#### factorial(num: number, tmp_fact?: number): number <a name="factorial"></a>
```Typescript
import * as MH from 'math-helper'
 
let factorial:number = MH.General.factorial(17);
console.log(factorial); // 355687428096000
```
Calcolo con funzione tail recursive

### Geometry <a name="geometry"></a>

#### plane(a:number, b:number, c:number, d:number):Polynomial3D <a name="plane"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<Array<number>> = Array.from({length: 100}, () => [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
let plane:Array<number> = MH.Geometry.plane(2, 3, 4)(data);

console.log(plane);
```

#### projectOnPlane(polynomial:Polynomial2D, plane:Polynomial3D):Polynomial3D <a name="projectOnPlane"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<Array<number>> = Array.from({length: 100}, () => [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);

let plane:MH.Polynomial3D = MH.Geometry.plane(2, 3, 4);
let parabola:MH.Polynomial2D> = MH.Geometry.parabola(2, 3, 4);

let projection:Array<number> = MH.Geometry.projectOnPlane(parabola, plane)(data);

console.log(projection);
```

#### parabola(a:number, b:number, c:number):Polynomial2D <a name="ellipseParametric"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let parabola:Array<number> = MH.Geometry.parabola(2, 3, 4)(data);

console.log(parabola);
```

#### parabolaParametric(a:number, from:number, to:number, step:number):Array<Array<number>> <a name="parabolaParametric"></a>
```Typescript
import * as MH from 'math-helper'

let parabola:Array<number> = MH.Geometry.parabolaParametric(2, 0, 100, 0.01);
console.log(parabola);
```

#### ellipse(cx:number, cy:number, a:number, b:number):Polynomial2D <a name="ellipse"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let ellipse:Array<number> = MH.Geometry.ellipse(2, 3, 4, 5)(data);
console.log(ellipse);
```

#### ellipseParametric(cx:number, cy:number, a:number, b:number, rad:number): Array<Array<number>> <a name="ellipseParametric"></a>
```Typescript
import * as MH from 'math-helper'

let ellipse:Array<number> = MH.Geometry.ellipseParametric(2, 3, 4, 5, 0.1);
console.log(ellipse);
```


### Statistic <a name="statistic"></a>

#### arithmeticMean(data:Array<number>):number <a name="arithmeticMean"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let mean:Array<number> = MH.Statistic.arithmeticMean(data);

console.log(mean);
```

#### arithmeticWeightedMean(data:Array<Array<number>>):number <a name="arithmeticWeightedMean"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let mean:Array<number> = MH.Statistic.arithmeticWeightedMean(data);

console.log(mean);
```

#### linearRegression(data:Array<Array<number>>):Array<Array<number>> <a name="linearRegression"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<Array<number>> = Array.from({length: 100}, () => [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
let regression:Array<Array<number>> = MH.Statistic.linearRegression(data);

console.log(regression);
```

#### binomialCoefficient(n:number, m:number):number <a name="binomialCoefficient"></a>
```Typescript
import * as MH from 'math-helper'

let bc:Array<Array<number>> = MH.Statistic.binomialCoefficient(5, 2);

console.log(bc); // 10
```

#### howManyPermutationsR(data:Array<any>):number <a name="howManyPermutationsR"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let permutations:number = MH.Statistic.howManyPermutationsR(data);

console.log(permutations);
```
Permutazioni con ripetizione

#### howManyPermutations(data:Array<any>):number <a name="howManyPermutations"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let permutations:number = MH.Statistic.howManyPermutations(data);

console.log(permutations);
```

#### howManyDispositionsR(data:Array<any>, m:number):number <a name="howManyDispositionsR"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let dispositions:number = MH.Statistic.howManyDispositionsR(data);

console.log(dispositions);
```
Disposizioni con ripetizione

#### howManyDispositions(data:Array<any>, m:number):number <a name="howManyDispositions"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let dispositions:number = MH.Statistic.howManyDispositions(data);

console.log(dispositions);
```

#### howManyCombinationsR(data:Array<any>, m:number):number <a name="howManyCombinationsR"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let combinations:number = MH.Statistic.howManyCombinationsR(data);

console.log(combinations);
```
Combinazioni con ripetizione

#### howManyCombinations(data:Array<any>, m:number):number <a name="howManyCombinations"></a>
```Typescript
import * as MH from 'math-helper'

let data:Array<number> = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
let combinations:number = MH.Statistic.howManyCombinations(data);

console.log(combinations);
```


### Trigonometry <a name="trigonometry"></a>

#### sinWithAmplitude(rad:number, amplitude:number):number <a name="sinWithAmplitude"></a>
```Typescript
import * as MH from 'math-helper'

let sin:number = MH.Trogonometry.sinWithAmplitude(Math.PI/6, 3);
console.log(sin);
```

#### sinWithShift(rad:number, shift:number):number <a name="sinWithShift"></a>
```Typescript
import * as MH from 'math-helper'

let sin:number = MH.Trogonometry.sinWithShift(Math.PI/6, 3);
console.log(sin);
```

#### cosWithAmplitude(rad:number, amplitude:number):number <a name="cosWithAmplitude"></a>
```Typescript
import * as MH from 'math-helper'

let cos:number = MH.Trogonometry.cosWithAmplitude(Math.PI/6, 3);
console.log(cos);
```

#### cosWithShift(rad:number, shift:number):number <a name="cosWithShift"></a>
```Typescript
import * as MH from 'math-helper'

let cos:number = MH.Trogonometry.cosWithShift(Math.PI/6, 3);
console.log(cos);
```
