import dayjs from 'dayjs';
/** ****************************************** Time Util **************************************** */
/**
 * 时间生成器参数接口
 */
export interface TimeOptions {
    date?: dayjs.ConfigType;
    format?: dayjs.OptionType;
    locale?: string;
    strict?: boolean;
    zonetime?: string;
}

/** ****************************************** 数据库配置 **************************************** */

export interface DatabaseConfig {
    default: string;
    enabled: string[];
    connections: DbOption[];
    common: {
        [key: string]: any;
    };
}
