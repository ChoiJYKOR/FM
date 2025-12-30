import fs from 'fs';
import path from 'path';

export function getLectureContent(part: 1 | 2 | 3): string {
  const fileName = `ailecture_0${part}.md`;
  const filePath = path.join(process.cwd(), 'app', 'lecture', fileName);
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error reading lecture file ${fileName}:`, error);
    return '';
  }
}

