import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';

import { StoreModule } from '@ngrx/store';
import { youtubeClientReducers } from './redux/reducers/youtube-client.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { YoutubeCardEffects } from './redux/effects/youtube-card.effects';

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
        StoreModule.forRoot(youtubeClientReducers),
        EffectsModule.forRoot([YoutubeCardEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
