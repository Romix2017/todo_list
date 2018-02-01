var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { createStore, applyMiddleware } from 'redux';
import { todoApp } from './todoReducers';
import { List } from 'immutable';
import * as Logger from 'redux-logger';
import { ReduxStore } from "angular2-redux-store";
var logger = Logger.createLogger({
    stateTransformer: function (state) {
        return {
            todos: state.todos,
            uiState: state.uiState
        };
    }
});
var createStoreWithMiddleware = applyMiddleware(logger)(createStore);
var store = createStoreWithMiddleware(todoApp, {
    todos: List([]),
    uiState: {
        actionOngoing: false,
        message: "Ready"
    }
});
var TodoStore = (function (_super) {
    __extends(TodoStore, _super);
    function TodoStore() {
        return _super.call(this, store) || this;
    }
    TodoStore = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], TodoStore);
    return TodoStore;
}(ReduxStore));
export { TodoStore };
//# sourceMappingURL=todoStore.js.map