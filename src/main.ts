import { ApplicationRef, enableProdMode } from '@angular/core';
import {
  bootstrapApplication,
  enableDebugTools,
} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(module => {
  let applicationRef = module.injector.get(ApplicationRef);
  let appComponent = applicationRef.components[0];
  enableDebugTools(appComponent);
})
  .catch(err => console.error(err));

// Standalone Bootstrap
// bootstrapApplication(AppComponent);
