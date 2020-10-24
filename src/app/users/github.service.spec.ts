import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule } from '@core';
import { GitHubService } from './github.service';

describe('GithubService', () => {
  let githubService: GitHubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [GitHubService],
    });

    githubService = TestBed.inject(GitHubService);
    httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getUser', () => {
    it('should return a array with github users', () => {
      // Arrange
      // const mockQuote = { value: 'a random quote' };

      // Act
      const githubSubscription = githubService.getUsers();

      // Assert
      // githubSubscription.subscribe((users: Array<User>) => {
      //  expect(users).toEqual(mockQuote.value);
      // });
      // httpMock.expectOne({}).flush(mockQuote);
    });

    it('should return a string in case of error', () => {
      // Act
      // const randomQuoteSubscription = githubService.getUsers();
      // Assert
      // randomQuoteSubscription.subscribe((users: Array<User>) => {
      //  expect(typeof users).toEqual('array');
      //  expect(users).toContain('Error');
      // });
      // httpMock.expectOne({}).flush(null, {
      //  status: 500,
      //  statusText: 'error',
      // });
    });
  });
});
