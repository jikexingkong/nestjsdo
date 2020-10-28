import { routes } from '@/routes';
import { Global, Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';
import { DtoValidationPipe } from './pipes';

const imports = [
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
];
const providers = [
    {
        provide: APP_PIPE,
        useFactory: () =>
            new DtoValidationPipe({
                transform: true,
                forbidUnknownValues: true,
                validationError: { target: false },
            }),
    },
];
@Global()
@Module({
    imports,
    providers,
})
export class CoreModule {}
