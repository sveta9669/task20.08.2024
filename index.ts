import * as fs from 'fs';
import * as path from 'path';
import * as commandLineArgs from 'command-line-args';

const definition = [
    { name: 'path', alias: 'p', type: String, defaultValue: process.cwd() },
];

const options = commandLineArgs(definition);

let directoryPath: string = options.path == process.cwd() ? options.path : process.cwd() + options.path;

console.log(`Directory path: ${directoryPath}`);

function isEmpty(directory: string): boolean {
    return fs.readdirSync(directory).length === 0;
}

function spaceCount(space: number): string {
    let start = '';
    for (let i = 0; i < space; i++) {
        start += '  ';
    }
    return start;
}

function nestedFilesNames(directory: string, space: number = 0): void {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const spaces = spaceCount(space);

        if (fs.statSync(filePath).isDirectory()) {
            console.log(`${spaces}${file}`);
            if (!isEmpty(filePath)) {
                nestedFilesNames(filePath, space + 1);
            } else {
                console.log(`------------------`);
            }
        } else {
            console.log(`${spaces}${file}`);
        }
    }
}


nestedFilesNames(directoryPath);

