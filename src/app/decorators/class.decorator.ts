export function logged(constructorFn: Function) {
  console.log(constructorFn.name); // Will log the class Person constructor.
}

export function Unsub(obs$ = []) {
  return function (constructor: any) {
    const orig = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
      for (const ob$ of obs$) {
        this[ob$].unsubscribe();
      }
      orig.apply();
    };
  };
}

export function AutoUnsub(obs$: any) {
  return function (constructor: any) {
    const orig = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
      for (const prop in this) {
        const property = this[prop];
        if (
          typeof property.unsubscribe === 'function' &&
          // @ts-ignore
          !obs$.includes(property)
        )
          // @ts-ignore
          obs$.push(property);
      }
      for (const ob$ of obs$) {
        // @ts-ignore
        ob$.unsubscribe();
      }
      orig.apply();
    };
  };
}
