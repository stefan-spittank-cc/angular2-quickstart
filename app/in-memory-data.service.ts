import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let locations = [
      { id: 1, name: "Solingen" },
      { id: 2, name: "Düsseldorf" },
      { id: 3, name: "Frankfurt" },
      { id: 4, name: "Novi Sad" },
      { id: 5, name: "München" },
      { id: 6, name: "Berlin" },
      { id: 7, name: "Stuttgart" },
      { id: 8, name: "Karlsruhe" },
      { id: 9, name: "Business Development" }
    ];
    return {locations};
  }
}