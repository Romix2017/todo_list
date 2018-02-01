import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "../mainComponent/app.component";
import { Header } from "../Components/Header/header.component";
import { Footer } from "../Components/Footer/footer.component";
import { TodoList } from "../Components/TodoList/todoList.component";
import { TodoStore } from "../../Store/todoStore";
import { TodoService } from "../Services/toDoService";
import { HttpClientModule } from "@angular/common/http"
import { HttpModule } from "@angular/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from '../dbService'
import { AppHttpModule } from "./AppHttpModule";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, HttpModule, HttpClientModule, AppHttpModule, FormsModule, ReactiveFormsModule],
    declarations: [App, Header, TodoList, Footer],
    bootstrap: [App],
    providers: [TodoService, TodoStore]
})
export class AppModule { }

