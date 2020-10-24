import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '@app/models/user.model';

const routes = {
  users: (c?: GitHubContext) => `/users/${c?.username || ''}`.replace(/\/$/, ''),
};

export interface GitHubContext {
  username: string;
}

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => new GitHubService(http),
  deps: [HttpClient],
})
export class GitHubService {
  constructor(private httpClient: HttpClient) {}

  getUsers(context?: GitHubContext): Observable<Array<User>> {
    return this.httpClient.get(routes.users(context)).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load users :-('))
    );
  }
}
