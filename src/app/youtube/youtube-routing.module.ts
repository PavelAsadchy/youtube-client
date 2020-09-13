import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailedInformationComponent } from './components/detailed-information/detailed-information.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CanProceedToDetailedGuard } from '../shared/guards/can-proceed-to-detailed.guard';

const routes: Routes = [
    {
        path: '',
        component: SearchResultsComponent
    },
    {
        path: 'admin',
        component: AdminPageComponent
    },
    {
        path: ':id',
        component: DetailedInformationComponent,
        canActivate: [CanProceedToDetailedGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YoutubeRoutingModule { }
