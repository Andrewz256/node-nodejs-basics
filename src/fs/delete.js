import { unlink } from 'fs/promises'
const remove = async () => {
        try {
            await unlink('./src/fs/files/fileToRemove.txt');
            console.log('Delete SUCCESS');
        }
        catch (err) {
            console.error('FS operation failed: File not exist');
        }
    
};

await remove();