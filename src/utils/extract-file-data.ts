import fs from "fs";

export const extractFileData = (filePath: string, defaultStructure: unknown) => {
  return fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    : defaultStructure
}