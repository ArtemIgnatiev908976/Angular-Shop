import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {OneTeamPageComponent} from "./one-team-page/one-team-page.component";
import {FavoritesPageComponent} from "./favorites-page/favorites-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children:[
      {path:'', redirectTo:'/', pathMatch: 'full'},
      {path:'', component: MainPageComponent},
      {path:'team/:id', component: OneTeamPageComponent},
      {path: 'favorites', component: FavoritesPageComponent}
    ]
  },
  {
    path: 'admin' , loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
