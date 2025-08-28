import {Component, input} from '@angular/core';
import {ToDoItem} from '../../../types';

@Component({
  selector: 'draft-to-do-item',
  templateUrl: 'draftTodoItem.html'
})
export class DraftToDoItem {
  item = input<ToDoItem>()
}
