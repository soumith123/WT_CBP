import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent },
  {path:'login', component:LoginComponent},
  {path:"users/:username", component:UsersComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'admin/:username', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AdminGuard] },
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
