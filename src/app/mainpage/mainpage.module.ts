import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from '../home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: homeComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'home',
        // canActivate: [AuthGuard],
        loadChildren: () =>
        import('../home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];
@NgModule({
  
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    ReactiveFormsModule,
    
  ],
  declarations: [MainpageComponent],
  exports: [RouterModule],
  // providers: [SidebarService],

})
export class MainpageModule {}
