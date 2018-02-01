var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'reflect-metadata';
import { Todo } from "../Models/Todo";
import { TodoService } from "../Services/toDoService";
import { TodoStore } from "../../Store/todoStore";
import { loadTodos, addTodo, startBackendAction, endBackendAction } from '../../Store/todoActions';
import { List } from 'immutable';
import { Component } from '@angular/core';
import 'rxjs/Rx';
var App = (function () {
    function App(store, todoService) {
        this.store = store;
        this.todoService = todoService;
        todoService.getAllTodos()
            .subscribe(function (res) {
            var todos = res.data.map(function (todo) {
                return new Todo({ id: todo.id, description: todo.description, completed: todo.completed });
            });
            store.dispatch(loadTodos(List(todos)));
        }, function (err) { return console.log("Error retrieving Todos"); });
        store.subscribe(function (state) { return console.log('new state received '); });
    }
    App.prototype.onAddTodo = function (description) {
        var _this = this;
        var newTodo = new Todo({ id: Math.random(), description: description, completed: false });
        this.store.dispatch(startBackendAction('Saving Todo...'));
        this.todoService.saveTodo(newTodo)
            .subscribe(function (res) {
            _this.store.dispatch(addTodo(newTodo));
            _this.store.dispatch(endBackendAction());
        }, function (err) {
            _this.store.dispatch(endBackendAction('Error occurred: '));
        });
    };
    App = __decorate([
        Component({
            selector: 'app',
            template: "\n        <div>\n            <section id=\"todoapp\">\n                <todo-header (todo)=\"onAddTodo($event)\"></todo-header>\n                <todo-list [todos]=\"store.getState().todos\"></todo-list>\n                <todo-footer [hidden]=\"store.getState().todos.size === 0\" [count]=\"store.getState().todos.size\"></todo-footer>\n            </section>\n            <footer id=\"info\">\n                <p>{{store.getState().uiState.message}}</p>\n                <p>Add, Remove and Complete TODOs</p>\n            </footer>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [TodoStore, TodoService])
    ], App);
    return App;
}());
export { App };
//# sourceMappingURL=app.component.js.map