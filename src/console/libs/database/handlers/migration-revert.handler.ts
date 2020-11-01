import { getCurrentDb } from '@/core';
import { execShell } from '../../common';
import { getTypeorm } from './typeorm';

export const MigrationRevertHandler = async (args: any) => {
    const typeCommand = await getTypeorm(args);
    let command = `${typeCommand} migration:revert -c ${getCurrentDb('name')}`;
    if (args.transaction) command = `${command} -t ${args.transaction}`;
    execShell(command, 'Revert migration failed!', 'Finished revert migration');
};
