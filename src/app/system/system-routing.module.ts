import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SystemComponent} from "./system.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {
    path: 'system', component: SystemComponent, children: [
    {path: 'main', component: MainComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
