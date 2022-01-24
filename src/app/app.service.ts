/*
Service Class to fetch Wish List for Santa
Author: Rashi Saxena
*/ 

import * as faker from 'faker';
import { Injectable } from '@angular/core';
import { DemoData } from './demo-data';

@Injectable()
export class UserService {
  //method to fetch all the data of the wish list (fetching fake data for ease)
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

  // method to fetch or identify poorly behaved children
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
