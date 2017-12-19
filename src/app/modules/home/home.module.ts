import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatButtonModule} from '@angular/material';
import {Routing} from 'app/modules/home/home.routes';
import {HomePageComponent} from './pages/home.page';

@NgModule({
    imports: [
        CommonModule,
        Routing,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [
        HomePageComponent
    ]
})

export class HomeModule {
}
