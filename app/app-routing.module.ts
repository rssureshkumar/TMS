import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {singleItemComponent }  from './components/translationValidation/singleItem.component';
import {translationValidationComponent }  from './components/translationValidation/translationValidation.component';

const appRoutes: Routes = [
{ path: '', component: translationValidationComponent },
  { path: 'translation-validation', component: translationValidationComponent },
  { path: 'single-item', component: singleItemComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}