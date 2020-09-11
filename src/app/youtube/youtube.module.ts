import { NgModule } from '@angular/core';

import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortByViewsPipe } from './pipes/sortByViews.pipe';
import { SortByDatePipe } from './pipes/sortByDate.pipe';
import { BorderBottomColorDirective } from './directives/border-bottom-color.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailedInformationComponent } from './components/detailed-information/detailed-information.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

@NgModule({
    declarations: [
        SearchResultsComponent,
        SearchItemComponent,
        SortByViewsPipe,
        SortByDatePipe,
        SearchPipe,
        BorderBottomColorDirective,
        NotFoundComponent,
        DetailedInformationComponent,
        AdminPageComponent
    ],
    imports: [
        SharedModule,
        YoutubeRoutingModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ],
    exports: [
        SearchResultsComponent,
        NotFoundComponent
    ]
})
export class YoutubeModule { }
