import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AddItemComponent } from './content/add-item/add-item.component';
import { ListComponent } from './content/list/list.component';
import { CardComponent } from './content/list/card/card.component';
import { TodoService } from './services/todo.service';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AddItemComponent,
    ListComponent,
    CardComponent,
    LoginComponent,
    ErrorComponent,
 
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
    
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
