import { readFile, appendFile, writeFile } from "fs/promises";


async function deleteFile(){
    await writeFile('random.txt', '')
}
async function write() {
    await deleteFile();
    for(let i = 0; i < 100; i++){
        let randomNum = (Math.floor(Math.random() * 101)).toString();
        await appendFile('random.txt', randomNum +'\n');
    }
}

async function read() {
    const numbers = await readFile('random.txt');
    console.log(numbers.toString());
}

async function main() {
    await write();
    await read();
}

main()