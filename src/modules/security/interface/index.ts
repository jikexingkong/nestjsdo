/** ************************************ AUTH CONFIG ******************************** */
export interface SecurityConfig {
    auth: {
        secret: string;
        token_expired: number;
        refresh_secret: string;
        refresh_token_expired: number;
    };
}
/** ************************************ JWT荷载 ******************************** */
export interface JwtPayload {
    sub: string;
    iat: number;
}
