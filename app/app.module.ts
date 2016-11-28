import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-ng2/main';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import {TMSNavigationComponent }  from './components/menu/TMSNavigation.component';
import {TMSHeaderComponent }  from './components/header/TMSHeader.component';
import {TMSFooterComponent }  from './components/footer/TMSFooter.component';
import {TMSAppComponent }  from './components/TMSApp.component';
import {singleItemComponent }  from './components/translationValidation/singleItem.component';
import {translationValidationComponent }  from './components/translationValidation/translationValidation.component';
import { appRoutes } from './services/TMSdata.service';
import { TMSdataService } from './services/TMSdata.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule,AgGridModule.forRoot(), AppRoutingModule],
    declarations: [
	TMSHeaderComponent,
	TMSNavigationComponent,
	TMSFooterComponent,
    TMSAppComponent,
    translationValidationComponent,
    singleItemComponent
  ],
  
  providers: [TMSdataService],
  bootstrap: [ TMSAppComponent ]
 })
export class AppModule { }
