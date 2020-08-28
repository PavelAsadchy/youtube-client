import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { RegistrationComponent } from './core/components/registration/registration.component';
import { SearchInputComponent } from './core/components/search-input/search-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './youtube/pipes/search.pipe';
import { SortByViewsPipe } from './youtube/pipes/sortByViews.pipe';
import { SortByDatePipe } from './youtube/pipes/sortByDate.pipe';
import { BorderBottomColorDirective } from './youtube/directives/border-bottom-color.directive';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { NotFoundComponent } from './youtube/components/not-found/not-found.component';
import { DetailedInformationComponent } from './youtube/components/detailed-information/detailed-information.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchResultsComponent,
        SearchItemComponent,
        RegistrationComponent,
        SearchInputComponent,
        SortByViewsPipe,
        SortByDatePipe,
        SearchPipe,
        BorderBottomColorDirective,
        LoginPageComponent,
        NotFoundComponent,
        DetailedInformationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
