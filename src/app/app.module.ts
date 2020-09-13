import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';

import { StoreModule } from '@ngrx/store';
import { youtubeClientReducer } from './redux/reducers/youtube-client.reducer';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        YoutubeModule,
        AuthModule,
        StoreModule.forRoot({
            customCard: youtubeClientReducer
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
