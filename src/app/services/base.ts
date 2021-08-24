import { Route, Routes } from '@angular/router';
import { ThirukurralComponent } from '../components/thirukurral/thirukurral.component';

export class ComponentConfig {
  routePath: string = '';
  componentName: any;
}

export abstract class BaseClass {
  static COMPONENT_CONFIG: ComponentConfig = new ComponentConfig();
  static COMPONENT_CONFIG_LIST: ComponentConfig[];

  constructor() {}

  loadAllComponents() {
    let componentList = [ThirukurralComponent];

    let route: Route;
    let routes: Routes;

    componentList.forEach((element) => {
      debugger;
      console.log(element.COMPONENT_CONFIG);

      //   route.component = element.COMPONENT_CONFIG.componentName;
      routes.push({
        // path: element.COMPONENT_CONFIG.routePath,
      });
    });
  }
}
