import {Component, input, InputSignal} from '@angular/core';

@Component({
  templateUrl: 'saveButton.html',
  selector: 'save-button'
})
export class SaveButton {
  saveItem = input.required<() => void>()
}
