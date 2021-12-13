import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InAppRoutingModule } from './in-app-routing.module';
import { InAppComponent } from './in-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxButtonModule, IgxRippleModule, IgxCardModule, IgxIconModule, IgxGridModule, IgxToggleModule, IgxAvatarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    InAppComponent,
    DashboardComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    InAppRoutingModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCardModule,
    IgxIconModule,
    IgxGridModule,
    FormsModule,
    IgxToggleModule,
    IgxAvatarModule,
    IgxNavigationDrawerModule
  ]
})
export class InAppModule {
}
