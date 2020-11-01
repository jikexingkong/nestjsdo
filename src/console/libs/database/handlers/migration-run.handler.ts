import { getCurrentDb } from '@/core';
import { execShell } from '../../common';
import { getTypeorm } from './typeorm';

export const MigrationRunHandler = async (args: any) => {
    const typeCommand = await getTypeorm(args);
    let command = `${typeCommand} migration:run -c ${getCurrentDb('name')}`;
    if (args.transaction) command = `${command} -t ${args.transaction}`;
    execShell(command, 'Run migration failed!', 'Finished run migration');
};
