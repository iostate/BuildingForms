import {AppComponent} from './app.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup/signup.component';
import {UsersComponent} from './users/users-component/users-component.component';

const appRoutes: Routes = [
  {path: 'home', component: AppComponent},
  // {path: 'search', component: SearchBarComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'users', component: UsersComponent},
  // {path: 'search', component: SearchBarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
