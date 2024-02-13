import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Shared/authGuard';
const routes: Routes = [

  { path: "", redirectTo: 'login', pathMatch: 'full' },
  {
    canActivate: [],
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },

  {
    path: "**",
    loadChildren: () =>
      import('./mainpage/mainpage.module').then(
        (m) => m.MainpageModule
      ),
  },
  //  { path: '**', component: MainpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
