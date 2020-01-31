import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { isObservable, Observable } from 'rxjs';
import { Todo } from 'src/interfaces/todo';

describe('TodoService', () => {
  let todoService: TodoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    todoService = TestBed.get(TodoService);
  });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('#getTodos without add should return empty Todo list', () => {
    expect(todoService.getTodos()).toEqual([]);
  });

  it('#todoSub should return an observable of type Todo list', () => {
    expect(isObservable<Todo[]>(todoService.todoSub())).toBeTruthy();
  });

  it('#getTodos.title should equal a before pushed title', () => {
    const date: Date = new Date('01/31/2020');
    todoService.addTodo('testValue');
    const expectedResult: Todo[] = [{title: 'testValue', due_date: undefined}];
    const result: Todo[] = todoService.getTodos();
    expect(result[0].title === expectedResult[0].title).toBeTruthy();
  });

  it('#getTodos.due_date should equal a before pushed date', () => {
    const date: Date = new Date('01/31/2020');
    todoService.addTodo('testValue', date);
    const expectedResult: Todo[] = [{title: 'testValue', due_date: date}];
    const result: Todo[] = todoService.getTodos();
    expect(result[0].due_date === expectedResult[0].due_date).toBeTruthy();
  });
});
