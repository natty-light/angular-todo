import {Component, signal} from '@angular/core';
import {TodoItem} from './todoItem/todoItem';
import {ItemService} from '../../services/itemService';
import {ToDoItem} from '../../types';
import {DraftToDoItem} from './draftTodoItem/draftTodoItem';

@Component({
  selector: 'to-do-list',
  imports: [TodoItem, DraftToDoItem],
  templateUrl: 'todoList.html'
})
export class ToDoList {
  itemService: ItemService
  isAddingItem = signal<boolean>(false)
  localItem = signal<Partial<ToDoItem>>({})
  constructor(service: ItemService) {
    this.itemService = service;

    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleItemComplete(itemId: number) {
    this.itemService.updateItem(itemId, { completed: true })
  }

  handleAddItem() {
    alert('clicked')
    if (this.localItem()) {
      this.itemService.addItem(this.localItem() as ToDoItem)
      this.localItem.set({})
    }
    this.isAddingItem.set(false)
  }

  handleAddDraft() {
    this.isAddingItem.set(true)
  }

  items() {
    return this.itemService.items
  }
}
