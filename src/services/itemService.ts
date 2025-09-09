import {Injectable, signal} from '@angular/core';
import {ToDoItem} from '../types';

@Injectable({providedIn: 'root'})
export class ItemService {
  items: ToDoItem[];
  idCounter = signal(0)

  constructor() {
    this.items = [];
  }

  addItem(item: Omit<ToDoItem, 'id'>) {
    this.items.push({
      id: this.idCounter(),
      ...item
    })
    this.idCounter.update((val) => val++)
  }

  deleteItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  updateItem(id: number, newItemFields: Partial<Omit<ToDoItem, 'id'>>) {
    const idx = this.items.findIndex((item) => item.id === id);
    if (idx < 0) {
      return
    }
    this.items[idx] = { ...this.items[idx], ...newItemFields }
  }
}
