import {Gender} from './enums/Gender';

export class User {
   constructor(
    userName?: string,
    password?: string,
    email?: string,
    address?: string,
    firstName?: string,
    lastName?: string,
    gender?: Gender
  ) {}
}
