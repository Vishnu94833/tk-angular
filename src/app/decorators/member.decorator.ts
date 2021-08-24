import { Injector } from '@angular/core';
import { DataService } from '../services/data.service';

export function Emoji() {
  return function (target: any, key: string | symbol) {
    let val = target[key];

    const getter = () => {
      return val;
    };
    const setter = (next: any) => {
      val = `🍦 ${next.toUpperCase()} 🍦`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export function get(url: string) {
  return function (target: any, key: string | symbol) {
    let val = target[key];

    // let injector = SharedModule.injector.get(DataService);

    const getter = () => {
      return val;
    };
    const setter = (next: any) => {
      // val = injector.fetchAllData(url);
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export class SharedModule {
  static injector: Injector;

  constructor(injector: Injector) {}
}
