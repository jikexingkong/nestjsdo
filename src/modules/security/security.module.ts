import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { UserManageController } from './controllers/user-manage/user-manage.controller';
import { UserController } from './controllers/user/user.controller';
import { CenterController } from './controllers/center/center.controller';

@Module({
  controllers: [AuthController, UserManageController, UserController, CenterController]
})
export class SecurityModule {}
