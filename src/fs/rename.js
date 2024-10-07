import { rename as renaming, stat } from 'fs/promises'
const rename = async () => {
    try {
        await stat('fs/files/properFilename.md');
        console.error('FS operation failed');
    }
    catch (err) {
        try {
            await renaming('./fs/files/wrongFilename.txt' , './fs/files/properFilename.md');
            console.log('Renaming SUCCESS');
        }
        catch (err) {
            console.error('FS operation failed');
        }
    }
};

await rename();