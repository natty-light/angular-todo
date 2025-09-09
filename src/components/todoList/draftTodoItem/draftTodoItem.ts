import {Component, input, signal, WritableSignal} from '@angular/core';
import {ToDoItem} from '../../../types';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'draft-to-do-item',
  imports: [
    FormsModule
  ],
  templateUrl: 'draftTodoItem.html'
})
export class DraftToDoItem {
  localItem = input.required<WritableSignal<Partial<Omit<ToDoItem, 'id'>>>>()
  saveItem = input.required<() => void>()

  onTextChange(event: Event) {
    this.localItem().update((item) => ({...item, text: (event.target as HTMLInputElement).value}))
  }
}
