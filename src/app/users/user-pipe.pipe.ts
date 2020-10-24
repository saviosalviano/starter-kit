import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@app/models/user.model';

@Pipe({
  name: 'userPipe',
})
export class UserPipePipe implements PipeTransform {
  transform(user: User, ...args: unknown[]): unknown {
    return user.login;
  }
}
