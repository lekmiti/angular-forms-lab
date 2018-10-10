import {Gender} from './enums/Gender';

export class User {
   constructor(
    public userName?: string,
    public password?: string,
    public email?: string,
    public address?: string,
    public firstName?: string,
    public lastName?: string,
    public gender?: Gender
  ) {}
}
