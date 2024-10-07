import { readFile }from 'fs/promises'
const read = async () => {

    try {
        const contents = await readFile('./fs/files/fileToRead.txt', { encoding: 'utf8' });
        console.log('file content HERE:');
        console.log(contents);
    }
    catch (err) {
        console.error('FS operation failed: path not exist');
    }

};

await read();