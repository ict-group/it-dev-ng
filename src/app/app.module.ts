import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';


import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {MySharedModule} from './modules/myshared.module';
import {HomepageComponent} from './components/homepage/homepage.component';
import {DeviceListComponent} from './components/device/device-list.component';
import {DeviceEditComponent} from './components/device/device-edit.component';
import {SearchTagsComponent} from './common/search-tags.component';
import {OutputPrintable} from './pipes/output-printable';
import {CheckboxModule, ConfirmationService, ConfirmDialogModule, MessageService} from 'primeng';
import {KeycloakService, KeycloakAngularModule} from 'keycloak-angular';
import {keycloakConfig} from '../environments/environment';
import {DeviceViewComponent} from './components/device/device-view.component';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({config: keycloakConfig});
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DeviceListComponent,
    DeviceEditComponent,
    SearchTagsComponent,
    OutputPrintable,
    DeviceViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MySharedModule,
    CardModule,
    InputTextModule,
    TableModule,
    DropdownModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    ButtonModule,
    TabViewModule,
    FormsModule,
    ConfirmDialogModule,
    CheckboxModule,
    KeycloakAngularModule
  ],
  providers: [
    MessageService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
