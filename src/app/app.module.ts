import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccordionModule } from 'ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { SubstituteComponent } from './substitute-component/substitute-component.component';
import { RegisterPipe } from './substitute-component/register-pipe.pipe';
import { DiagnosePipe } from './substitute-component/diagnose-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SubstituteComponent,
    RegisterPipe,
    DiagnosePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AccordionModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
