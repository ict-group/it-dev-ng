import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {DeviceListComponent} from './components/device/device-list.component';
import {DeviceEditComponent} from './components/device/device-edit.component';
import {AppAuthGuard} from './app.authguard';
import {DeviceViewComponent} from './components/device/device-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: '', component: HomepageComponent, canActivate: [AppAuthGuard]},
  {
    path: 'devices',
    canActivate: [AppAuthGuard],
    children: [
      {path: '', component: DeviceListComponent, canActivate: [AppAuthGuard]},
      {path: 'list', component: DeviceListComponent, canActivate: [AppAuthGuard]},
      {path: 'view/:id', component: DeviceViewComponent, canActivate: [AppAuthGuard]},
      {path: 'edit/:id', component: DeviceEditComponent, canActivate: [AppAuthGuard]},
      {path: 'new', component: DeviceEditComponent, canActivate: [AppAuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule {
}
