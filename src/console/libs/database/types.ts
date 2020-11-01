import Faker from 'faker';
import ora from 'ora';
import { Connection, ObjectType } from 'typeorm';
import { EntityFactory } from './factory';

/**
 * CLI RESET DB命令参数
 */
export interface DbRefreshArguments {
    connection?: string;
    seed: boolean;
}

/**
 * CLI Seed命令参数
 */
export interface SeedArguments {
    connection?: string;
    class?: string;
    forceInit?: boolean;
}

/**
 * Seeder类接口
 */
export interface Seeder {
    load: (factory: DataFactory, connection: Connection) => Promise<void>;
}

/**
 * Seeder类构造器接口
 */
export type SeederConstructor = new (
    seeders: SeederConstructor[],
    spinner: ora.Ora,
    args: SeedArguments,
) => Seeder;

/**
 * factory函数的接口
 */
export interface EntityFactoryDefinition<Entity, Settings> {
    entity: ObjectType<Entity>;
    factory: DataFactoryFunction<Entity, Settings>;
}

/**
 * factory回调函数接口
 */
export type DataFactoryFunction<Entity, Settings> = (
    faker: typeof Faker,
    settings?: Settings,
) => Entity;

export type EntityProperty<Entity> = {
    [Property in keyof Entity]?: Entity[Property];
};

/**
 *  获取entity映射的factory的函数接口
 */
export type DataFactory = <Entity, Settings>(
    entity: ObjectType<Entity>,
) => (settings?: Settings) => EntityFactory<Entity, Settings>;
