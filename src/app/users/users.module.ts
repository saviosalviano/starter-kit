import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersRowComponent } from './users-row/users-row.component';
import { UserPipePipe } from './user-pipe.pipe';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, UsersRoutingModule],
  declarations: [UsersComponent, UsersRowComponent, UserPipePipe],
})
export class UsersModule {}
