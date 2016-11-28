import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-ng2/main';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import {TMSAppComponent }  from '../components/TMSApp.component';
import {singleItemComponent }  from '../components/translationValidation/singleItem.component';
import {translationValidationComponent }  from '../components/translationValidation/translationValidation.component';
import { TMSdataService } from '../../services/TMSdata.service';

@NgModule({
	imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule,AgGridModule.forRoot(), RouterModule.forRoot(appRoutes)],
    declarations: [
    TMSAppComponent,
    translationValidationComponent,
    singleItemComponent
  ],
  
  providers: [TMSdataService],
  bootstrap: [ TMSAppComponent ]
 })
