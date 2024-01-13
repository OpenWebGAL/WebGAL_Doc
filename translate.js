import axios from "axios";
import fs from "fs-extra";
import * as path from "path";

// 获取命令行参数
const args = process.argv.slice(2);
const targetLang = args[0] || 'ja'; // 默认目标语言为英语
// 假设你希望通过命令行参数指定目录
const specifiedDirectory = args[1] || 'src/ja/webgal-script'; // 默认为当前目录

const translateMarkdown = async (filePath) => {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        const response = await axios.post('https://translate-md.icedn.com', `[${targetLang}]\n${content}`);
        await fs.writeFile(filePath, response.data);
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
    }
};

const traverseDirectory = async (dir) => {
    const files = await fs.readdir(dir);
    for (let file of files) {
        const fullPath = path.join(dir, file);
        const stat = await fs.stat(fullPath);
        if (stat.isDirectory()) {
            await traverseDirectory(fullPath);
        } else if (path.extname(file) === '.md') {
            await translateMarkdown(fullPath);
        }
    }
};

traverseDirectory(specifiedDirectory);