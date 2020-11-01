import { getCurrentDb } from '@/core';
import { execShell } from '../../common';
import { getTypeorm } from './typeorm';

export const MigrationGenerateHandler = async (args: any) => {
    const typeCommand = await getTypeorm(args);
    let command = `${typeCommand} migration:generate -n ${
        args.name
    } -c ${getCurrentDb('name')}`;
    if (args.dir) command = `${command} -d ${args.dir}`;
    if (args.pretty) command = `${command} -p`;
    execShell(
        command,
        'Generate migration failed!',
        'Finished generate migration',
    );
};
