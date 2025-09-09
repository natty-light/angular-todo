import {Component, input, type WritableSignal} from '@angular/core';
import {ToDoItem} from '../../../types';

@Component({
  selector: 'draft-to-do-item',
  templateUrl: 'draftTodoItem.html'
})
export class DraftToDoItem {
  localItem = input.required<WritableSignal<Partial<Omit<ToDoItem, 'id'>>>>()
  saveItem = input.required<() => void>()

  onTextChange(event: Event) {
    this.localItem().update((item) => ({...item, text: (event.target as HTMLInputElement).value}))
  }
}
