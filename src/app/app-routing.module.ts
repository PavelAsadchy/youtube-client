import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { NotFoundComponent } from './youtube/components/not-found/not-found.component';
import { DetailedInformationComponent } from './youtube/components/detailed-information/detailed-information.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: SearchResultsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'search/:id',
        component: DetailedInformationComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
