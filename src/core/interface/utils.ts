import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { ConnectionOptions } from 'typeorm';
import { BaseConnectionOptions } from 'typeorm/connection/BaseConnectionOptions';
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

/** ****************************************** Dabase Util **************************************** */
/**
 * 各种类型的数据库连接都适用的联合类型,以下配置都符合此类型
 * 原生typeorm的配置
 * 自定义cli命令行时增加的配置
 * Nestjs typeorm module增加的配置
 * 数据库配置文件的类型
 */
export type DbOptions =
    | ConnectionOptions
    | DbCliOptions
    | DbNestModuleOptions
    | DbOptionCollection;

/**
 * 运行自定义CLI命令时的数据库连接配置
 */
export type DbCliOptions = ConnectionOptions & {
    readonly factories?: string[];
    readonly seeds?: string[];
};

/**
 * 用于Nest Typeorm Module的配置
 */
export type DbNestModuleOptions = TypeOrmModuleOptions;

/**
 * 同时包含自定义CLI和Nest Typeorm Module的数据库配置的交叉类型
 */
export type DbOptionCollection = DbCliOptions & DbNestModuleOptions;

/**
 * 只用于配置文件的额外配置
 */
export interface DbAdditional {
    entities?: BaseConnectionOptions['entities'];
    subscribers?: BaseConnectionOptions['subscribers'];
}
