import { readdir } from 'fs/promises';

const list = async () => {
        try {
            let list = await readdir('./fs/files', {recursive: true});
            console.log(list);
            console.log('file list HERE');
        }
        catch (err) {
            console.error('FS operation failed: path not exist');
        }
};

await list();