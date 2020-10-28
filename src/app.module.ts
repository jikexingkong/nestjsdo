import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ContentModule } from './modules/content/content.module';
import { SecurityModule } from './modules/security/security.module';

@Module({
    imports: [CoreModule, SecurityModule, ContentModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
