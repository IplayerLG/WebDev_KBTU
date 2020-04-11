import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Sale } from './sale';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const sales = [
      { 
        company : "pandora",
        deadline : new Date(2020, 5, 5),
        subscribers : 330,
        value : 600,
        cost : 300,
        discription : "5 nice rings in price of 3",
        id : 1,
        images : ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUgpPs1wGdI1rqcqicEXgU_KlTh6oEq9vkp2oIE8A33n8c0o6a&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbjkGUFZOxToYUMusCxi0Y7f1lDlS6_KXB74msX2TxduYClWBL&usqp=CAU"]
      },
      { 
        company : "pandora",
        deadline : new Date(2020, 5, 10),
        subscribers : 0,
        value : 900,
        cost : 400,
        discription : "5 nice rings in price of 3",
        id : 2,
        images : ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhOJqy8loztEQvVWIpQjleWiEGs2O-ohtKF6Ojdo0kbAATu-oj&usqp=CAU"]
      },
      { 
        company : "pandora",
        deadline : new Date(2020, 5, 10),
        subscribers : 0,
        value : 900,
        cost : 400,
        discription : "5 nice rings in price of 3",
        id : 3,
        images : ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhOJqy8loztEQvVWIpQjleWiEGs2O-ohtKF6Ojdo0kbAATu-oj&usqp=CAU"]
      },
      { 
        company : "pandora",
        deadline : new Date(2020, 5, 10),
        subscribers : 0,
        value : 900,
        cost : 400,
        discription : "5 nice rings in price of 3",
        id : 4,
        images : ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhOJqy8loztEQvVWIpQjleWiEGs2O-ohtKF6Ojdo0kbAATu-oj&usqp=CAU"]
      },
      { 
        company : "pandora",
        deadline : new Date(2020, 5, 10),
        subscribers : 0,
        value : 900,
        cost : 400,
        discription : "5 nice rings in price of 3",
        id : 5,
        images : ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhOJqy8loztEQvVWIpQjleWiEGs2O-ohtKF6Ojdo0kbAATu-oj&usqp=CAU"]
      },
    ];
    return {sales};
  }
  genId(sales: Sale[]): number {
    return sales.length > 0 ? Math.max(...sales.map(sale => sale.id)) + 1 : 11;
  }
}