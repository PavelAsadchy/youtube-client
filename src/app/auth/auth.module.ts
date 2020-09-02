import { NgModule } from '@angular/core';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        LoginPageComponent,
    ],
    imports: [
        SharedModule,
        AuthRoutingModule
    ],
    providers: [],
    exports: [
        LoginPageComponent
    ]
})
export class AuthModule { }
