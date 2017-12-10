import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from 'app/shared/components/header/header.component'
import {FooterComponent} from './components/footer/footer.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
  ]
})
export class SharedModule {

  constructor() {
  }

}
