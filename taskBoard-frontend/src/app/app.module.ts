import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import {DragulaModule} from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TaskboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
    NgbModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
