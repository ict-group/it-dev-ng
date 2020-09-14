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
import {HomepageComponent} from './components/homepage/homepage.component';
import {SearchTagsComponent} from './common/search-tags.component';
import {OutputPrintable} from './pipes/output-printable';
import {
    CalendarModule,
    CheckboxModule, ChipsModule,
    ConfirmationService,
    ConfirmDialogModule, EditorModule, FileUploadModule,
    InputMaskModule, InputTextareaModule,
    MessageService
} from 'primeng';
import {KeycloakService, KeycloakAngularModule} from 'keycloak-angular';
import {keycloakConfig} from '../environments/environment';
import {DeveloperListComponent} from './components/developers/developer-list.component';
import {DeveloperEditComponent} from './components/developers/developer-edit.component';
import {DeveloperViewComponent} from './components/developers/developer-view.component';
import {BlogPostListComponent} from './components/blogposts/blog-post-list.component';
import {BlogPostViewComponent} from './components/blogposts/blog-post-view.component';
import {BlogPostEditComponent} from './components/blogposts/blog-post-edit.component';
import {ActionEditComponent} from './components/actions/action-edit.component';
import {ActionListComponent} from './components/actions/action-list.component';
import {ActionViewComponent} from './components/actions/action-view.component';
import {TagListComponent} from './components/tags/tag-list.component';
import {CompanyListComponent} from './components/companies/company-list.component';
import {PerformedactionListComponent} from './components/performedactions/performedaction-list.component';
import {ProjectListComponent} from './components/projects/project-list.component';
import {ProjectViewComponent} from './components/projects/project-view.component';
import {ProjectEditComponent} from './components/projects/project-edit.component';
import {PerformedactionsblogpostListComponent} from './components/performedactionsblogpost/performedactionsblogpost-list.component';
import {PermitDirective} from './directives/permit';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => keycloak.init(
        {
            config: keycloakConfig,
            initOptions: {onLoad: 'login-required', checkLoginIframe: false}
        });
}

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        SearchTagsComponent,
        ActionEditComponent,
        ActionListComponent,
        ActionViewComponent,
        OutputPrintable,
        DeveloperListComponent,
        DeveloperEditComponent,
        DeveloperViewComponent,
        BlogPostListComponent,
        BlogPostViewComponent,
        BlogPostEditComponent,
        TagListComponent,
        CompanyListComponent,
        PerformedactionListComponent,
        ProjectListComponent,
        ProjectViewComponent,
        ProjectEditComponent,
        PerformedactionsblogpostListComponent,
        PermitDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule,
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
        KeycloakAngularModule,
        CalendarModule,
        InputMaskModule,
        ChipsModule,
        FileUploadModule,
        InputTextareaModule,
        EditorModule
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
