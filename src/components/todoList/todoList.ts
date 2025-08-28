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
  localItem = signal<Partial<ToDoItem> | null>(null)
  constructor(private service: ItemService) {
    this.itemService = service;
  }

  handleItemComplete(itemId: number) {
    this.itemService.updateItem(itemId, { completed: true })
  }

  handleAddItem() {
    if (this.localItem()) {
      this.itemService.addItem(this.localItem() as ToDoItem)
    }
  }

  handleAddDraft() {
    this.isAddingItem.set(true)
    this.localItem.set({
      id: this.itemService.idCounter()
    })
  }

  handleUpdateDraft(fields: Partial<Omit<ToDoItem, 'id'>>) {
    this.localItem.update((value) => ({ ...value, ...fields }))
    this.isAddingItem.set(false)
  }

  items() {
    return this.itemService.items
  }
}
