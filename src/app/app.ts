import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from '../components/header/header';
import {ToDoList} from '../components/todoList/todoList';

@Component({
  selector: 'app-root',
  imports: [Header, ToDoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-todo');
}
