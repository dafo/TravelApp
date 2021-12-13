import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InAppComponent } from './in-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [{ path: '', component: InAppComponent, children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }, { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } }, { path: 'articles', component: ArticlesComponent, data: { text: 'Articles' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InAppRoutingModule {
}
