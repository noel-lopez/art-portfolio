import fs from "fs";
import path from "path";

const root = process.cwd();
export const imagesFolder = "/images/";

export const getImages = (): string[] =>
  fs.readdirSync(path.join(root, `public${imagesFolder}`));
