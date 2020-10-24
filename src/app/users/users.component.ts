import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { User } from '@app/models/user.model';

import { GitHubService } from './github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  isLoading = false;

  users: Array<User> = [];

  constructor(private githubService: GitHubService) {}

  ngOnInit() {
    this.isLoading = true;
    this.githubService
      .getUsers()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((users: Array<User>) => {
        this.users = users;
      });
  }
}
