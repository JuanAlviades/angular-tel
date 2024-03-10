// in-memory-data.service.ts

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      // ... Agrega más elementos según tus necesidades
    ];

    return { items };
  }

  // Método opcional: genera el ID para un nuevo elemento
  genId(collection: any[], property: string): number {
    return collection.length > 0 ? Math.max(...collection.map(item => item[property])) + 1 : 1;
  }
}
