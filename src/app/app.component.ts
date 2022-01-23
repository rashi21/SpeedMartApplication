import { Component } from '@angular/core';
import { DemoData } from './demo-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks = ['Toys Factory', 'Delivery', 'Legal', 'Disconnect'];
  displayDeliveryScreen: boolean = false;
  textToBeDisplayed: string = '';
  optionIsClicked: boolean = false;

  demoData = DemoData;

  displayDeliveryOption(): void {
    this.textToBeDisplayed = '';
    this.displayDeliveryScreen = true;
  }

  itemSelected(task: string): void {
    this.optionIsClicked = true;
    this.displayDeliveryScreen = false;
    if (task == this.tasks[1]) {
      this.textToBeDisplayed = '';
      this.displayDeliveryScreen = true;
    } else
      this.textToBeDisplayed = `${task} Menu option is clicked and work is on progress...`;
  }
}
