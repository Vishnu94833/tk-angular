// // component-identifier.service.ts
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class ComponentIdentifierService {
//   private componentIds = new Map<string, string>();

//   generateComponentId(): string {
//     const componentId = this.generateUniqueId(); // You need to implement this function
//     return componentId;
//   }

//   associateComponentId(componentId: string, component: any): void {
//     this.componentIds.set(componentId, component.constructor.name);
//   }

//   getComponentName(componentId: string): string | undefined {
//     return this.componentIds.get(componentId);
//   }
// }
