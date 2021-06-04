import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FavoritesUserPageComponent } from './favorites-user-page/favorites-user-page.component';

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([{
      path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo:'/admin/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent},
        {path: 'dashboard', component: DashboardPageComponent},
        {path: 'add', component: AddPageComponent},
        {path: 'favorites-user-page', component: FavoritesUserPageComponent},
        {path: 'team/:id/edit', component: EditPageComponent},

      ]
    }])
  ],
  exports:[RouterModule],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    AddPageComponent,
    DashboardPageComponent,
    EditPageComponent,
    FavoritesUserPageComponent
  ]
})
export class AdminModule{

}
