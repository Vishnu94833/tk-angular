import { Injectable, Injector } from '@angular/core';

// Custom decorator factory
export function InjectService(serviceToken: any) {
  return function(target: any, propertyKey: string) {
    let serviceInstance: any;

    // Create a getter for the property
    const getter = function() {
      if (!serviceInstance) {
        // Access the ReflectiveInjector and get the service instance
        const injector = Injector.create([serviceToken]);
        serviceInstance = injector.get(serviceToken);
      }
      return serviceInstance;
    };

    // Replace the property with the getter
    Object.defineProperty(target, propertyKey, {
      get: getter,
      enumerable: true,
      configurable: true
    });
  };
}