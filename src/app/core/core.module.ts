import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HeaderComponent,
        RegistrationComponent,
        SearchInputComponent,
    ],
    imports: [
        SharedModule
    ],
    providers: [],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule { }
