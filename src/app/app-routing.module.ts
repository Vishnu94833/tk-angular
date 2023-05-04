// import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { Subform1Component } from './components/reactive-form-example/subform1/subform1.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'reactive-form', component: ReactiveFormExampleComponent},
  {
    path: 'design-patterns',
    loadChildren: () =>
      import('./design-patterns/design-pattern.module').then(
        (m) => m.DesignPatternModule
      ),
  },
  {
    path: 'dynamic-form',
    loadChildren: () =>
    import('./components/dynamic-reactive-form/dynamic-reactive-form.module').then(
      (m) => m.DynamicReactiveFormModule
    ),
  },
  {
    path: 'json-api',
    loadChildren: () =>
    import('./jsonplaceholder/jsonplaceholder.module').then(
      (m) => m.JsonplaceholderModule
    ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
