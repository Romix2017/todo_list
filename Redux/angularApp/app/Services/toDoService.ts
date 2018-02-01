import { Injectable, Inject } from '@angular/core';
import { Todo } from "../Models/Todo";
import { List } from 'immutable';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Http, URLSearchParams, Headers, RequestOptionsArgs } from '@angular/http'

@Injectable()
export class TodoService {

    constructor(private http: Http) {
        this.http = http;
    }

    getAllTodos(): Observable<any> {

        return this.http.get("api/latest/todos").map(res => res.json());
    }

    saveTodo(newTodo: Todo): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        console.log(newTodo);
        return this.http.post('api/latest/todos', JSON.stringify(newTodo.toJS()), { headers: headers });
    }

    deleteTodo(deletedTodo: Todo): Observable<any> {
        let params = new URLSearchParams();
        params.append('id', '' + deletedTodo.id);

        return this.http.delete('api/latest/todos/', { params: params });
    }


    toggleTodo(toggled: Todo) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/latest/todos/' + toggled.id, toggled, { headers: headers });
        // this toggled.id is very tricky part, in order to update a record in in-memory-server
        // we have to specify this id straight in the request string, otherwise error will arise. 

    }
}

