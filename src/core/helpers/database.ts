import { Connection, ObjectType } from 'typeorm';
import { DbOptionsType } from '../constants';
import { Gkr } from '../gkr';
import { DbOptions } from '../interface';
import { Database } from '../utils';

const db = () => Gkr.util.get(Database);

/**
 * 获取一个类型的所有数据库连接配置
 * 默认为Typeorm原始连接类型
 *
 * @export
 * @param {DbOptionsType} [type]
 * @returns {DbOptions[]}
 */
export function dbConfigs(type?: DbOptionsType): DbOptions[] {
    return db().getOptions(type);
}

/**
 * 通过连接名与类型获取此连接的数据库配置
 *
 * @export
 * @param {string} [name]
 * @param {DbOptionsType} [type]
 * @returns {DbOptions}
 */
export function dbConfig(name?: string, type?: DbOptionsType): DbOptions {
    return db().getOption(name, type);
}

/**
 * 获取所有数据库连接名
 *
 * @export
 * @returns {string[]}
 */
export function dbNames(): string[] {
    return db().names;
}

export function defaultDbName() {
    return db().default;
}

/**
 * 创建临时链接
 *
 * @export
 * @param {string} [name]
 * @returns {Promise<Connection>}
 */
export async function makeConnect(name?: string): Promise<Connection> {
    return await db().createConnection(name);
}

/**
 * 获取Entity类名
 *
 * @export
 * @template T
 * @param {ObjectType<T>} entity
 * @returns {string}
 */
export function entityName<T>(entity: ObjectType<T>): string {
    if (entity instanceof Function) {
        return entity.name;
    }
    if (entity) {
        return new (entity as any)().constructor.name;
    }
    throw new Error('Enity is not defined');
}

/**
 * 重置外键
 *
 * @export
 * @param {Connection} connection
 * @param {boolean} [enabled=true]
 * @returns {Promise<Connection>}
 */
export async function foreignKey(
    connection: Connection,
    enabled = true,
): Promise<Connection> {
    return await db().resetForeignKey(connection, enabled);
}
