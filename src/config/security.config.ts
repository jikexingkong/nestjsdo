import { ConfigRegister, env } from '@/core';
import { SecurityConfig } from '@/modules/security/interface';

export const security: ConfigRegister<SecurityConfig> = () => ({
    auth: {
        secret: env('AUTH_TOKEN_SECRET', 'my-secret'),
        token_expired: env('AUTH_TOKEN_EXPIRED', 3600),
        refresh_secret: env('AUTH_REFRESH_TOKEN_SECRET', 'my-refresh-secret'),
        refresh_token_expired: env('AUTH_REFRESH_TOKEN_EXPIRED', 3600 * 30),
    },
});
