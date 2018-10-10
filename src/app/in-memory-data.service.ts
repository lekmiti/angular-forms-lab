import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      {userName: 'user', password: 'user', email: 'user@zsoft-consulting.com', firstName: 'user', lastName: 'user', gender: 'MALE' },
      {userName: 'admin', password: 'admin', email: 'admin@zsoft-consulting.com', firstName: 'admin', lastName: 'admin', gender: 'FEMALE'},
    ];
    return {users};
  }
}
