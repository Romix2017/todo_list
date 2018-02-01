var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from "../../Models/Todo";
import { List } from 'immutable';
import { TodoService } from "../../Services/toDoService";
import { TodoStore } from "../../../Store/todoStore";
import { toggleTodo, deleteTodo } from '../../../Store/todoActions';
var TodoList = (function () {
    function TodoList(todoService, store) {
        this.todoService = todoService;
        this.store = store;
        this.toggleAll = new EventEmitter();
        this.deleteTodo = new EventEmitter();
    }
    TodoList.prototype.changeCompleted = function (todo) {
        var res;
        todo.completed == true ? res = false : res = true;
        return res;
    };
    TodoList.prototype.onToggleTodo = function (todo) {
        var _this = this;
        var updateTodo = new Todo({ id: todo.id, description: todo.description, completed: this.changeCompleted(todo) });
        this.todoService.toggleTodo(updateTodo)
            .subscribe(function (res) { return _this.store.dispatch(toggleTodo(updateTodo)); }, function (err) { return console.log('error toggling todo' + err); });
    };
    TodoList.prototype.delete = function (todo) {
        var _this = this;
        this.todoService.deleteTodo(todo)
            .subscribe(function (res) { return _this.store.dispatch(deleteTodo(todo)); }, function (err) { return console.log('error deleting todo' + err); });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TodoList.prototype, "todos", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TodoList.prototype, "toggleAll", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TodoList.prototype, "deleteTodo", void 0);
    TodoList = __decorate([
        Component({
            selector: 'todo-list',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n        <section id=\"main\" [hidden]=\"todos.size === 0\">\n            <label for=\"toggle-all\">Mark all as complete</label>\n            <ul id=\"todo-list\">\n                <li *ngFor=\"let todo of todos\" [ngClass]=\"{completed: todo.completed}\">\n                    <div class=\"view\">\n                        <input class=\"toggle\" type=\"checkbox\" (change)=\"onToggleTodo(todo)\" [checked]=\"todo.completed\">\n                        <label>{{todo.description}}</label>\n                        <button class=\"destroy\" (click)=\"delete(todo)\"></button>\n                    </div>\n                </li>\n            </ul>\n        </section>\n    "
        }),
        __metadata("design:paramtypes", [TodoService, TodoStore])
    ], TodoList);
    return TodoList;
}());
export { TodoList };
//# sourceMappingURL=todoList.component.js.map