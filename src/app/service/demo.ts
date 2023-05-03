export class Super{
     protected doMath(a: number, b: number): number {
        console.log(`result is: ${a + b}`);
        return a + b;
      }
}

export class Sub extends Super{
    
    doMath(a: number, b: number): number {
        console.log(`result is ${a * b}`);
        // 👇️ this calls parent's doMath method
        // super.doMath(a, b);
    
        return a * b;
      }
}


