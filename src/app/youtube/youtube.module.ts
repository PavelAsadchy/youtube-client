import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { SortByViewsPipe } from './pipes/sortByViews.pipe';
import { SortByDatePipe } from './pipes/sortByDate.pipe';
import { BorderBottomColorDirective } from './directives/border-bottom-color.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailedInformationComponent } from './components/detailed-information/detailed-information.component';

@NgModule({
    declarations: [
        SearchResultsComponent,
        SearchItemComponent,
        SortByViewsPipe,
        SortByDatePipe,
        SearchPipe,
        BorderBottomColorDirective,
        NotFoundComponent,
        DetailedInformationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        SearchResultsComponent,
        NotFoundComponent
    ]
})
export class YoutubeModule { }
