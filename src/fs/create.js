import { writeFile, access, constants } from 'fs/promises'

const create = async () => {
    try {
        await access('./fs/files/fresh.txt', constants.F_OK)
        console.error('FS operation failed');
    }
    catch (err) {
        try {
            await writeFile('./fs/files/fresh.txt', 'I am fresh and young');
            console.log('Copying SUCCESS');
        }
        catch (err) {
            console.error('Path not exist');
        }
    }
};

await create();