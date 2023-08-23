import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { MatButtonModule } from '@angular/material/button'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { FormComponent } from './components/form/form.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, CustomTableComponent, FormComponent, NavigationComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatTableModule, 
    MatInputModule, 
    MatIconModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
