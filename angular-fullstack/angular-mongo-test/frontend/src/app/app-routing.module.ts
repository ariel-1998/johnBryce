import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './components/actions/actions.component';
import { ContentComponent } from './components/layout/content/content.component';

const routes: Routes = [
  { path: "home", component: ContentComponent},
  { path: "actions", component: ActionsComponent},
  { path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
