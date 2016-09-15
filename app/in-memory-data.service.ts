import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let locations = [
      { id: 1, name: "Solingen" },
      { id: 2, name: "Düsseldorf" },
      { id: 3, name: "Frankfurt" }
    ];
    return {locations};
  }
}