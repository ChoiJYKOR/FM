import fs from 'fs';
import path from 'path';

export function getLectureContent(part: 1 | 2 | 3 | 'bonus'): string {
  const fileName = part === 'bonus' ? 'Anomaly Detection_01.md' : `ailecture_0${part}.md`;
  const filePath = path.join(process.cwd(), 'app', 'lecture', fileName);

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error reading lecture file ${fileName}:`, error);
    return '';
  }
}


