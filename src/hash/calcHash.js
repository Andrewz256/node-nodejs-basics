import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
   const input = await readFile('./src/hash/files/fileToCalculateHashFor.txt');
   const hash = createHash('sha256').update(input).digest("hex");
   console.log('SHA256 Hash of file is ' + hash)
};

await calculateHash();