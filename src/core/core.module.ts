import { routes } from '@/routes';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'cms',
            synchronize: true,
            autoLoadEntities: true,
        }),
        RouterModule.forRoutes(routes),
    ],
})
export class CoreModule {}
