// import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/fraud-transaction-detail/list/list.component';
import { GotHousesComponent } from './components/got-houses/got-houses.component';

const routes: Routes = [
  { path: '', component: GotHousesComponent },
  { path: 'list', component: ListComponent },
];

// function loadAllComponents() {
//   let arr: any[] = [];
//   arr.forEach((r) => {
//     routes.push(r.COMPONENT_CONFIG);
//   });
//   return routes;
// }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
