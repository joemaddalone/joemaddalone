import { execSync } from 'child_process';

export const commit = (msg) => {
    execSync(`npm run git -- "${msg}"`);
};
