import 'reflect-metadata';
import { Header } from '../Components/Header/header.component';
import { TodoList } from '../Components/TodoList/todoList.component';
import { Todo } from "../Models/Todo";
import { Footer } from "../Components/Footer/footer.component";
import { TodoService } from "../Services/toDoService";
import { TodoStore } from "../../Store/todoStore";
import { loadTodos, addTodo, startBackendAction, endBackendAction } from '../../Store/todoActions';
import { List } from 'immutable';
import { Component, Output, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
@Component({
    selector: 'app',
    template: `
        <div>
            <section id="todoapp">
                <todo-header (todo)="onAddTodo($event)"></todo-header>
                <todo-list [todos]="store.getState().todos"></todo-list>
                <todo-footer [hidden]="store.getState().todos.size === 0" [count]="store.getState().todos.size"></todo-footer>
            </section>
            <footer id="info">
                <p>{{store.getState().uiState.message}}</p>
                <p>Add, Remove and Complete TODOs</p>
            </footer>
        </div>
    `
})
export class App {

    constructor(private store: TodoStore, private todoService: TodoService) {

        todoService.getAllTodos()
            .subscribe(
            res => {
                let todos = (<Todo[]>res.data).map((todo: any) =>
                    new Todo({ id: todo.id, description: todo.description, completed: todo.completed }));

                store.dispatch(loadTodos(List(todos)));
            },
            err => console.log("Error retrieving Todos")
            );

        store.subscribe(
            (state: any) => console.log('new state received ')
        );
    }

    onAddTodo(description: any) {

        let newTodo = new Todo({ id: Math.random(), description: description, completed: false });
        this.store.dispatch(startBackendAction('Saving Todo...'));

        this.todoService.saveTodo(newTodo)
            .subscribe(
            res => {
                this.store.dispatch(addTodo(newTodo));
                this.store.dispatch(endBackendAction());
            },
            err => {
                this.store.dispatch(endBackendAction('Error occurred: '));
            }
            );
    }

}

