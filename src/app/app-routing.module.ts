// import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDashboardComponent } from './components/photo-dashboard/photo-dashboard.component';
import { ThirukurralComponent } from './components/thirukurral/thirukurral.component';

const routes: Routes = [];

function loadAllComponents() {
  let arr = [ThirukurralComponent, PhotoDashboardComponent];
  arr.forEach((r) => {
    routes.push(r.COMPONENT_CONFIG);
  });
  console.log(routes);
  return routes;
}

@NgModule({
  imports: [RouterModule.forRoot(loadAllComponents())],
  exports: [RouterModule],
})
// @logged
export class AppRoutingModule {}
