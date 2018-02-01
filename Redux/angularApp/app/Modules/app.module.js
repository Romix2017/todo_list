var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "../mainComponent/app.component";
import { Header } from "../Components/Header/header.component";
import { Footer } from "../Components/Footer/footer.component";
import { TodoList } from "../Components/TodoList/todoList.component";
import { TodoStore } from "../../Store/todoStore";
import { TodoService } from "../Services/toDoService";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { AppHttpModule } from "./AppHttpModule";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, HttpModule, HttpClientModule, AppHttpModule, FormsModule, ReactiveFormsModule],
            declarations: [App, Header, TodoList, Footer],
            bootstrap: [App],
            providers: [TodoService, TodoStore]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map