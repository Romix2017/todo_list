var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var Header = (function () {
    function Header() {
        this.todo = new EventEmitter();
    }
    Header.prototype.addTodo = function (input) {
        if (!input.value)
            return false;
        this.todo.next(input.value);
        input.value = "";
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], Header.prototype, "todo", void 0);
    Header = __decorate([
        Component({
            selector: 'todo-header',
            template: "\n        <header id=\"header\">\n            <h1>todos</h1>\n            <form id=\"todo-form\" (ngSubmit)=\"addTodo(input)\" autocomplete=\"off\">\n                <input id=\"new-todo\" placeholder=\"What needs to be done?\" #input>\n            </form>\n        </header>\n    "
        })
    ], Header);
    return Header;
}());
export { Header };
//# sourceMappingURL=header.component.js.map