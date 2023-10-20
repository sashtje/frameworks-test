import { Pipe, PipeTransform } from '@angular/core';
import {User} from "./user.service";

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {
  transform(users: User[], input: string): User[] {
    return users.filter(user => user.name.toLowerCase().includes(input.toLowerCase()));
  }
}
