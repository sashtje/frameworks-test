import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {User, UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  users$: Observable<User[]> = of([]);
  input = '';

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.fetchUsers();
  }
}
