import { cp, stat } from 'fs/promises'
const copy = async () => {
    try {
        await stat('./fs/files_copy')
        console.error('FS operation failed');
    }
    catch (err) {
        try {
            await cp('./fs/files' , './fs/files_copy', {recursive: true} );
            console.log('Copying SUCCESS');
        }
        catch (err) {
            console.error('Path for copying not exist');
        }
    }
};

await copy();
