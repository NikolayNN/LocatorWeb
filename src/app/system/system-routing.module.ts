import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SystemComponent} from "./system.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {
    path: 'system', component: SystemComponent, pathMatch: 'full', children: [
    {path: 'main', component: MainComponent, pathMatch: 'full'}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
