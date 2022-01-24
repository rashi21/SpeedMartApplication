import {
  Component,
  DoCheck,
  HostListener,
  OnChanges,
  OnInit,
} from '@angular/core';
import * as faker from 'faker';
import { UserService } from './app.service';
import { DemoData } from './demo-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tasks = [
    { name: 'Toys Factory', class: 'pi pi-palette' },
    { name: 'Delivery', class: 'pi pi-download' },
    { name: 'Legal', class: 'pi pi-briefcase' },
    { name: 'Disconnect', class: 'pi pi-ban' },
  ];
  displayDeliveryScreen: boolean = false;
  textToBeDisplayed: string = '';
  optionIsClicked: boolean = false;

  demoData: DemoData[] = [];
  faultyWishers: number[] = [];
  screenWidth = screen.width;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.demoData = this.service.getWishData();
    this.faultyWishers = this.service.buggyRecords();
    console.log(this.faultyWishers);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  displayDeliveryOption(): void {
    this.textToBeDisplayed = '';
    this.displayDeliveryScreen = !this.displayDeliveryScreen;
  }

  itemSelected(task: string): void {
    console.log(faker.name.firstName());
    this.optionIsClicked = true;
    this.displayDeliveryScreen = false;
    if (task == this.tasks[1].name) {
      this.textToBeDisplayed = '';
      this.displayDeliveryScreen = true;
    } else
      this.textToBeDisplayed = `${task} Menu option is clicked and work is on progress...`;
  }
}
