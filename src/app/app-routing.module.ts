import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {AppAuthGuard} from './app.authguard';
import {DeveloperListComponent} from './components/developers/developer-list.component';
import {DeveloperEditComponent} from './components/developers/developer-edit.component';
import {DeveloperViewComponent} from './components/developers/developer-view.component';
import {BlogPostListComponent} from './components/blogposts/blog-post-list.component';
import {BlogPostEditComponent} from './components/blogposts/blog-post-edit.component';
import {BlogPostViewComponent} from './components/blogposts/blog-post-view.component';
import {ActionListComponent} from './components/actions/action-list.component';
import {ActionEditComponent} from './components/actions/action-edit.component';
import {ActionViewComponent} from './components/actions/action-view.component';
import {TagListComponent} from './components/tags/tag-list.component';
import {CompanyListComponent} from './components/companies/company-list.component';
import {PerformedactionListComponent} from './components/performedactions/performedaction-list.component';
import {ProjectListComponent} from './components/projects/project-list.component';
import {ProjectViewComponent} from './components/projects/project-view.component';
import {ProjectEditComponent} from './components/projects/project-edit.component';
import {PerformedactionsblogpostListComponent} from './components/performedactionsblogpost/performedactionsblogpost-list.component';


const routes: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {path: '', component: HomepageComponent, canActivate: [AppAuthGuard]},
    {
        path: 'actions',
        canActivate: [AppAuthGuard],
        children: [
            {path: '', component: ActionListComponent, canActivate: [AppAuthGuard]},
            {path: 'new', component: ActionEditComponent, canActivate: [AppAuthGuard]},
            {path: 'edit/:id', component: ActionEditComponent, canActivate: [AppAuthGuard]},
            {path: 'view/:id', component: ActionViewComponent, canActivate: [AppAuthGuard]}
        ]
    },
    {
        path: 'developers',
        canActivate: [AppAuthGuard],
        children: [
            {path: '', component: DeveloperListComponent, canActivate: [AppAuthGuard]},
            {path: 'new', component: DeveloperEditComponent, canActivate: [AppAuthGuard]},
            {path: 'edit/:id', component: DeveloperEditComponent, canActivate: [AppAuthGuard]},
            {path: 'view/:id', component: DeveloperViewComponent, canActivate: [AppAuthGuard]}
        ]
    },
    {
        path: 'blogposts',
        canActivate: [AppAuthGuard],
        children: [
            {path: '', component: BlogPostListComponent, canActivate: [AppAuthGuard]},
            {path: 'new', component: BlogPostEditComponent, canActivate: [AppAuthGuard]},
            {path: 'edit/:id', component: BlogPostEditComponent, canActivate: [AppAuthGuard]},
            {path: 'view/:id', component: BlogPostViewComponent, canActivate: [AppAuthGuard]}
        ]
    },
    {
        path: 'tags',
        canActivate: [AppAuthGuard],
        children: [
            {path: '', component: TagListComponent, canActivate: [AppAuthGuard]}
        ]
    },
    {
        path: 'companies',
        canActivate: [AppAuthGuard],
        children: [
            {path: '', component: CompanyListComponent, canActivate: [AppAuthGuard]}
        ]
    },
    {
        path: 'performedactions',
        canActivate: [AppAuthGuard],
        children: [
            {path: '', component: PerformedactionListComponent, canActivate: [AppAuthGuard]}
        ]
    },
    {
        path: 'performedactionsblogpost',
        canActivate: [AppAuthGuard],
        children: [
            {path: '', component: PerformedactionsblogpostListComponent, canActivate: [AppAuthGuard]}
        ]
    },
    {
        path: 'projects',
        canActivate: [AppAuthGuard],
        children: [
            {path: '', component: ProjectListComponent, canActivate: [AppAuthGuard]},
            {path: 'new', component: ProjectEditComponent, canActivate: [AppAuthGuard]},
            {path: 'edit/:id', component: ProjectEditComponent, canActivate: [AppAuthGuard]},
            {path: 'view/:id', component: ProjectViewComponent, canActivate: [AppAuthGuard]}
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
