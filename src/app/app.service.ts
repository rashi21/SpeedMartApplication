import * as faker from 'faker';
import { Injectable } from '@angular/core';
import { DemoData } from './demo-data';

@Injectable()
export class UserService {
  getWishData(): DemoData[] {
    let wishData = [];
    for (let i = 0; i < 100; i++) {
      wishData.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        address: faker.address.country(),
        wishes: faker.vehicle.type(),
      });
    }

    return wishData;
  }

  buggyRecords(): number[] {
    let bugUser = [];
    for (let i = 0; i < 20; i++) {
      bugUser.push(faker.datatype.number()%99);
    }
    let filter = new Set(bugUser);
    bugUser = [...filter];
    return bugUser;
  }
}
