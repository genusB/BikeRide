import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
 
import { NgxSpinnerModule } from 'ngx-spinner';
import { AutofocusDirective } from './directives/auto-focus.directive';

@NgModule({
  imports:      [CommonModule, NgxSpinnerModule],
  declarations: [AutofocusDirective],
  exports:      [NgxSpinnerModule, AutofocusDirective],
  providers:    []
})
export class SharedModule { }