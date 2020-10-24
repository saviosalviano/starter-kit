import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '@app/models/user.model';

@Component({
  selector: 'app-users-row',
  templateUrl: './users-row.component.html',
  styleUrls: ['./users-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersRowComponent {
  @Input() data: string[];

  constructor() {}

  identify(index: number, item: User) {
    return item.id;
  }
}
