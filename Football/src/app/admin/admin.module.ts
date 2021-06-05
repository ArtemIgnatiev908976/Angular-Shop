import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FavoritesUserPageComponent } from './favorites-user-page/favorites-user-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "../shared/auth.guard";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo:'/admin/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent},
        {path: 'dashboard', component: DashboardPageComponent, canActivate:[AuthGuard]},
        {path: 'add', component: AddPageComponent, canActivate:[AuthGuard]},
        {path: 'favorites-user-page', component: FavoritesUserPageComponent, canActivate:[AuthGuard]},
        {path: 'team/:id/edit', component: EditPageComponent, canActivate:[AuthGuard]},

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
