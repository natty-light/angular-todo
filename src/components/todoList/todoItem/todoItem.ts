import {Component, input, output, signal} from '@angular/core';
import {ToDoItem} from '../../../types';
import {ItemService} from '../../../services/itemService';
import {SaveButton} from '../saveButton/saveButton';


@Component({
  selector: 'to-do-item',
  imports: [
    SaveButton
  ],
  templateUrl: 'todoItem.html'
})
export class TodoItem {
  itemService: ItemService
  item = input.required<ToDoItem>()
  draftItemText = signal('')
  isEditing = signal(false)
  onItemComplete = input.required<(id: number) => void>()
  constructor(service: ItemService) {
    this.itemService = service

    this.onSave = this.onSave.bind(this)
  }

  completeItem() {
    this.onItemComplete()(this.item().id)
  }

  onEditItem() {
    this.isEditing.set(true)
  }

  onTextChange(event: Event) {
    this.draftItemText.set((event.target as HTMLInputElement).value)
  }

  onSave() {
    const { id, ...rest } = this.item()
    this.itemService.updateItem(id, {
      ...rest,
      text: this.draftItemText()
    })
    this.isEditing.set(false)
  }


}
