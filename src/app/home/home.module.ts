import { NgModule } from '@angular/core';
import { homeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: homeComponent, title: 'Dashboard' },
  { path: 'home', component: homeComponent, title: 'Dashboard' },
];

@NgModule({
  declarations: [homeComponent],
  imports: [RouterModule.forChild(appRoutes)],
})
export class HomeModule {}
