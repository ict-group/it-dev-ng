import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {AppAuthGuard} from './app.authguard';
import {DeveloperListComponent} from './components/developers/developer-list.component';
import {DeveloperEditComponent} from "./components/developers/developer-edit.component";
import {DeveloperViewComponent} from "./components/developers/developer-view.component";
import {BlogPostListComponent} from "./components/blogposts/blog-post-list.component";
import {BlogPostEditComponent} from "./components/blogposts/blog-post-edit.component";
import {BlogPostViewComponent} from "./components/blogposts/blog-post-view.component";


const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: '', component: HomepageComponent, canActivate: [AppAuthGuard]},
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule {
}
