import {Component, input, output} from '@angular/core';
import {ToDoItem} from '../../../types';


@Component({
  selector: 'to-do-item',
  templateUrl: 'todoItem.html'
})
export class TodoItem {
  item = input.required<ToDoItem>()
  onItemComplete = input.required<(id: number) => void>()

  completeItem() {
    this.onItemComplete()(this.item().id)
  }
}
