import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HomeComponent } from './home/home.component';
import { ShareModuleModule } from './share-module/share-module.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
