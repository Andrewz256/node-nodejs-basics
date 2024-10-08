import { cp, stat } from 'fs/promises'
const copy = async () => {
    try {
        await stat('./src/fs/files_copy')
        console.error('FS operation failed');
    }
    catch (err) {
        try {
            await cp('./src/fs/files' , './src/fs/files_copy', {recursive: true} );
            console.log('Copying SUCCESS');
        }
        catch (err) {
            console.error('Path for copying not exist');
        }
    }
};

await copy();
