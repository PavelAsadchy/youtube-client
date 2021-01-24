import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './youtube/components/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminPageComponent } from './youtube/components/admin-page/admin-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('src/app/auth/auth.module').then(module => module.AuthModule)
    },
    {
        path: 'search',
        loadChildren: () => import('src/app/youtube/youtube.module').then(module => module.YoutubeModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent,
        canActivate: [AuthGuard]
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
