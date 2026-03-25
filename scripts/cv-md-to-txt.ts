import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.resolve(__dirname, "../src/assets/cv.md");
const outputPath = path.resolve(__dirname, "../src/assets/cv.txt");
const outputPathMobile = path.resolve(__dirname, "../src/assets/cv.mobile.txt");
const BLOCK_ART = [
  "███████████████████████████████████████▓▒░░░  ░ ░  ░ ░░░ ░░░░░░░░░▒▓████████████████████████████████",
  "████████████████████████████████████▒░      ░░░     ░░░░░░░░░░░░░░░░░▒▒█████████████████████████████",
  "████████████████████████████████▓░       ░░░░░░▒░░▒▒░░░░          ░░░░░░▒▓██████████████████████████",
  "██████████████████████████████▓░    ░░░░░░░░▒░░░░░░░░▒▒▒▒░░░░░░░░░   ░░░░░▒▓████████████████████████",
  "████████████████████████████▓░   ░░░░░▒▒▒░░▒▒░░░░░░░▒▒▒░░░▒▒▒▒▒░░░░░░░   ░░░░▓██████████████████████",
  "███████████████████████████▓░    ░░░▒░░▒▒░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░   ░▒█████████████████████",
  "██████████████████████████▒    ░░░░░░░░    ░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▒░░░░░░░░     ░▒████████████████████",
  "█████████████████████████▒   ░    ░░   ░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒░░                 ░▓█████████████████▓▓",
  "████████████████████████▓░ ░    ░   ░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░      ░▒▓████████▓▓▓▓▓▓▓▓▓▓",
  "█████████████████████▓▒░░░    ░░  ░░ ░░░    ░░░░░░░░░░▒▒▒▒▒▒▒▒░░░              ░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "█████████████████▓█▓▒░░░░░  ░░░░░░░       ░ ░   ░░░░░▒▒▒▓▓▓▓▓▓▓▒▒▒░   ░░        ░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░              ░░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░    ░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░ ░▒▒▒▒░░░░          ░ ░░░░▒▒▓▓▓▓▓▓█████▓▓▓▓▓▒▒▒▒░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░▒▓▓▓▒▒▒░░░░░░░░░░░░░▒▒▒▒▓▓▓▓▓██████████▓▓▓▓▓▒▒▒▒▒░▒▒░░░░░░░▒░▒▒░▒░░░░░░░░░░░",
  "▒▒▓▒▓▒▒▒▒▓▓▓▓▒▒▒▒▒▒░░░░▒▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓███████████████▓▓▓▓▓▓▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▓▓▓▓████████████████████▓▓▓▓▓▓▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████████████▓▓█▓█▓▓▓▓▓▓▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▓▒░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████████████████▓▓▓▓█▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████████▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▒▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓█▓█▓█▓███████▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓█████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "███████████████████▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓██▓▓▓▓█████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓░░░░▓▓▓▓▓▓▓▓",
  "████████████████████▓▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒░░░▒▓▓▓▓▓▓▓",
  "████████████████████▓▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▒▒▓▓▒▒▒▒▓▓█▓▓▓▓",
  "█████████████████████▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓██▓▓▓▓▓▓▒▓▓▓▓▓▓▒▒▓█▓▓█▓▓▓",
  "▓▓▓██████████████████▓▒▒▒▓▓▓▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▓▒▒▒░░░░░   ░░░░░░▒▒▒▒▒▓▓▓▓▓█▓▓█▓▓▓▓▓▒░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓",
  "█▓▓█▓▓█████████████▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░             ░▒▒▒▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▒░░░░▒▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓█▓▓▓▓▓████████▓▒▒▒▒▒▒▒▒░░░       ░░░░░▒▒▒▒▒░░░         ░▒▒▒▒░▒▒▓▓▓█▓███▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓",
  "▓█▓▓▓▓█▓█▓▓▓█▓█▓█▓▓░ ░░▒▒░░              ░▒▒▓▓▒▒▒░░░   ░░░░░▒▒▒▒▓▓▓▓▓▓█████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓█▓▓▒  ░▒▒░░░              ▒▓▓▓▓▓▒▒▒▒░░░░▒▒▒▒▒▒▓▓▓████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▒░░▒▒▒░░ ░░░░░░░░░░░░░▒▓███▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓█▓█████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒░░░░░░░░░░░░▒▒▓███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓████▓██████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▒▒▒▓▓▓▒▒▒▒▓█████████████████████▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓███████▓█▓▓████▓▓████▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓▓▓▓▒▒▒▒▓████▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▓▓▓▓███▓███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓▓▓▓▓▒▒▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▒▒▒▒▒░░▒▒▒▒▒▒░  ░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒░  ░░░░░░░░▒▒▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░  ░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░▒▒▓▓▓▓▓▓▓▓▒▒▒▓▓▓▓▓▒▒▒▒▒▓▒▓▓▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒░░░   ░░░░░░░░▒▒▒▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░▒▒░░░░▒░░▒▒▒▒▒▒▒▒░░▒▒░▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒░░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░      ░░▒▒▒▒▓▒▓▒▒▓▓▒▒▒▒▒▒▒▒▒░░░▒▒▒▒▓██▓▓▓▓▓▓▓▓▓▓▓▓▒▓▒",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒░░░░▒▒▒▒▒▓██▓▓▓▓▓▓▓▓▒▓▒▓▒▒▒",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░▒▒▒▒▒▓████▒▒▓▓▓▓▓▓▓▓▓▒▒▒",
  "▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▒▓▓▒▒▒▒░░░░░░░▒▒▒▒▒▓█████░░▒▓▓▓▓▒▓▒▓▒▒▒",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░▒▒▒▒▒███████▒ ░▒▓▓▓▒▓▓▓▒▒▒",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░▒▒▒░░░░░░░░░ ░░░░░░▒▒▒▒█████████░  ░▒▓▓▓▒▓▓▒▒▒",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░  ░░░░░░░░░░        ░░░░░░░░▒▓██████████▓     ░▒▒▒▒▒▒▒▒",
].join("\n");
const BLOCK_ART_MOBILE = [
  "███████████████████               ████████████████",
  "████████████████     ▒▒██▒░░         █████████████",
  "██████████████   ░▒█▓░    ░▒▒██████    ███████████",
  "█████████████         ░████▓▓█▒         ██████████",
  "████████████                             ██████▓▓ ",
  "░▓█▓█████                 ░▓█████        ▓▒▒░░░░░ ",
  "░░░░▒░▒░   ██░        ░▒█████████▒░              ",
  "      ░▒   ███████▓███████████████░▒▒░           ",
  "      ░░  ▓███████████████████▓████▒             ",
  "▒▓▒▒▒▒▓█  █▓▓▒▓▓▓▒▓▒▓▒▒▒▒▓▓▓▓▓▒▓█▓█▓▓░░  ░▒░░░░░ ",
  "░▓███████░ ▓░░░░▒░▒▒▓▒▓█████▓▒░░▒▒▒▓▓▓▒░   ████▓▒ ",
  "▓█████████ ░░░░▒▓▓▓▒█▓█████▓▓██████▓██▒ ████  ███░",
  "▓█████████░  ░░▓▓███▓▓▓████████████▒▓██▒██░█▒ ▓██▒",
  "▒▓▓████████ ██████████▒▒░          ▒▓███▓   █████▒",
  "▒█▓██████░░▒▒        ░░          ▒█████████ ░██▓▓░",
  "▒▓▓▓▓▓▓▓█            ░██▓▒    ░███████▓▒▒▓▓█▒▓▓▓▓░",
  "░▓▓██▓█▓███ ▓░       ████████████▓█▓▓▒░░░░████▓▓▓░",
  "░▓▓▓▓██▓████▓███████░░███████████▓▓▒░░ ░▒▒█▒░▒▓▓▒░",
  "░▓▓▓▓▓▓▓▓▓██▓ ▒▒▓██▒ ██████▓▓▓████▓▓▒▒░▒░ ▒▓▓▓▓▒▒░",
  "░▒▒▒▒▒▓▓▓▓▓▓█  ░▒▓▓░▒▒███  ░░░░▒▓▓▓▒▒▒▓▒░░██▓▓▒▒▓░",
  "▒▒▒▓▒▒▒▒▒▒▓██  ░▒░░      ▓████▒░░▒▒▒▒▓▓░░█▒▒▒▒▒▒ ",
  "▓▓▒▒▒▒▓▒▒▓▓▒██  ░░█████▓████░ ░█▓▒░▒▓▓░ ▒▓▓▒▒▒▒▒ ",
  "▒▒▒▒▒▒▒▒▒▒▒▓▓█▒ ░░           ░  ▒░░▒▓░  ▓▓▒▒▒▒▒░ ",
  "▒▒▒▒▒▒▒▒▒▓▓▓▒▓█    ▒░░▒▒    ░▓▓▒▒▒█▒   ░█▒░▒░░░░ ",
  "▒▒▒▒▒▒▒▒▒▓▓▓▒▒▓█         █████████░   ░ ██ █▒░░░ ",
  "░░░░▒░▒▒▒▒▒▓▓▓▓███  ░███▓▓█████▓       ███ ▒█▓▒▒ ",
  "                ░█░                ░█████       ",
].join("\n");
const BOX_TOTAL_WIDTH = 100;
const BOX_TOTAL_WIDTH_MOBILE = 50;
const H4_LABEL_PREFIX = "@@BOX_LABEL@@:";

function getBoxInnerWidth(totalWidth: number): number {
  return totalWidth - 4;
}

function centerText(text: string, width: number): string {
  if (text.length >= width) {
    return text.slice(0, width);
  }

  const leftPadding = Math.floor((width - text.length) / 2);
  const rightPadding = width - text.length - leftPadding;
  return `${" ".repeat(leftPadding)}${text}${" ".repeat(rightPadding)}`;
}

function createTopBanner(totalWidth: number): string {
  const innerWidth = totalWidth - 2;
  const borderLine = `+${"-".repeat(innerWidth)}+`;

  return [
    borderLine,
    `|${centerText("RIKU KALLIO - CURRICULUM VITAE", innerWidth)}|`,
    `|${centerText("Software Architect | Hands-on Fullstack", innerWidth)}|`,
    borderLine,
    "",
  ].join("\n");
}

function convertInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1");
}

function isBlockArtLine(line: string): boolean {
  return /^[\s█▓▒░]+$/.test(line) && line.trim().length > 0;
}

function formatHeading(level: number, text: string): string[] {
  const cleaned = convertInlineMarkdown(text.trim());

  if (level === 1) {
    return [
      "",
      cleaned.toUpperCase(),
      "=".repeat(Math.max(8, cleaned.length)),
      "",
    ];
  }

  if (level === 2) {
    return ["", cleaned, "-".repeat(Math.max(6, cleaned.length)), ""];
  }

  if (level === 3) {
    return ["", cleaned, "~".repeat(Math.max(6, cleaned.length)), ""];
  }

  if (level === 4) {
    return ["", `${H4_LABEL_PREFIX}${cleaned.toUpperCase()}`, ""];
  }

  return ["", `- ${cleaned}`];
}

function wrapText(text: string, width: number): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return [""];
  }

  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    if (!currentLine) {
      currentLine = word;
      continue;
    }

    if (currentLine.length + 1 + word.length <= width) {
      currentLine += ` ${word}`;
      continue;
    }

    lines.push(currentLine);
    currentLine = word;
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function createAsciiBox(
  lines: string[],
  totalWidth: number,
  label?: string,
): string[] {
  const totalDashCount = totalWidth - 2;
  const innerWidth = getBoxInnerWidth(totalWidth);
  const horizontal = "-".repeat(totalDashCount);
  const boxedLines = lines.length > 0 ? lines : [""];

  let topBorder = `.${horizontal}.`;

  if (label && label.trim().length > 0) {
    const labelToken = `*${label.trim().toUpperCase()}*`;

    if (labelToken.length < totalDashCount) {
      const remainingDashes = totalDashCount - labelToken.length;
      const leftDashCount = Math.floor(remainingDashes / 2);
      const rightDashCount = remainingDashes - leftDashCount;
      topBorder = `.${"-".repeat(leftDashCount)}${labelToken}${"-".repeat(rightDashCount)}.`;
    }
  }

  return [
    topBorder,
    ...boxedLines.map((line) => `| ${line.padEnd(innerWidth, " ")} |`),
    `'${horizontal}'`,
  ];
}

function isHeadingUnderline(line: string): boolean {
  return /^[=\-~]{6,}$/.test(line.trim());
}

function isHeadingLine(lines: string[], index: number): boolean {
  const nextLine = lines[index + 1] ?? "";
  return isHeadingUnderline(nextLine);
}

function isLevel4LabelLine(line: string): boolean {
  return line.startsWith(H4_LABEL_PREFIX);
}

function extractLevel4Label(line: string): string {
  return line.slice(H4_LABEL_PREFIX.length).trim();
}

function isListLine(line: string): boolean {
  return /^\s*(?:-|\d+\.)\s+/.test(line);
}

function normalizeListLine(line: string): string {
  return line.trim().replace(/^\*\s+/, "- ");
}

function wrapListItem(line: string, innerWidth: number): string[] {
  const match = line.match(/^(\d+\.\s+|-\s+)(.*)$/);

  if (!match) {
    return wrapText(line, innerWidth);
  }

  const prefix = match[1];
  const text = match[2];
  const wrapped = wrapText(text, innerWidth - prefix.length);

  if (wrapped.length === 0) {
    return [prefix.trimEnd()];
  }

  const lines = [`${prefix}${wrapped[0]}`];

  for (let i = 1; i < wrapped.length; i += 1) {
    lines.push(`${" ".repeat(prefix.length)}${wrapped[i]}`);
  }

  return lines;
}

function boxParagraphs(lines: string[], totalWidth: number): string[] {
  const output: string[] = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];
  let pendingBoxLabel: string | undefined;
  const innerWidth = getBoxInnerWidth(totalWidth);

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) {
      return;
    }

    const paragraphGroups: string[] = [];
    let currentGroup: string[] = [];

    for (const line of paragraphBuffer) {
      if (line === "") {
        if (currentGroup.length > 0) {
          paragraphGroups.push(currentGroup.join(" ").trim());
          currentGroup = [];
        }
        continue;
      }

      currentGroup.push(line);
    }

    if (currentGroup.length > 0) {
      paragraphGroups.push(currentGroup.join(" ").trim());
    }

    const wrappedLines = paragraphGroups.flatMap((group, index) => {
      const groupLines = wrapText(group, innerWidth);

      if (index === 0) {
        return groupLines;
      }

      return ["", ...groupLines];
    });

    output.push(...createAsciiBox(wrappedLines, totalWidth, pendingBoxLabel));
    paragraphBuffer = [];
    pendingBoxLabel = undefined;
  };

  const flushList = () => {
    if (listBuffer.length === 0) {
      return;
    }

    const listLines = listBuffer.flatMap((line) =>
      wrapListItem(line, innerWidth),
    );
    output.push(...createAsciiBox(listLines, totalWidth, pendingBoxLabel));
    listBuffer = [];
    pendingBoxLabel = undefined;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (line.trim() === "") {
      if (paragraphBuffer.length > 0) {
        paragraphBuffer.push("");
      }
      flushList();
      output.push("");
      continue;
    }

    if (isLevel4LabelLine(line)) {
      flushParagraph();
      flushList();
      pendingBoxLabel = extractLevel4Label(line);
      continue;
    }

    if (isListLine(line)) {
      flushParagraph();
      listBuffer.push(normalizeListLine(line));
      continue;
    }

    if (
      isBlockArtLine(line) ||
      isHeadingUnderline(line) ||
      isHeadingLine(lines, i)
    ) {
      flushParagraph();
      flushList();
      pendingBoxLabel = undefined;
      output.push(line);
      continue;
    }

    flushList();
    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushList();
  return output;
}

function convertMarkdownToText(
  markdown: string,
  options: {
    totalWidth: number;
    blockArt: string;
  },
): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let isInKeyExperiencesList = false;

  for (const rawLine of lines) {
    const line = rawLine;
    const trimmedLine = line.trim();

    if (trimmedLine === "Key experiences:") {
      isInKeyExperiencesList = true;
      out.push("Key experiences:");
      continue;
    }

    if (isInKeyExperiencesList && trimmedLine === "") {
      isInKeyExperiencesList = false;
      out.push("");
      continue;
    }

    if (isInKeyExperiencesList) {
      out.push(
        `- ${convertInlineMarkdown(trimmedLine.replace(/^[-*]\s+/, ""))}`,
      );
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const title = headingMatch[2];
      out.push(...formatHeading(level, title));
      continue;
    }

    const bulletMatch = line.match(/^\s*[-*]\s+(.*)$/);
    if (bulletMatch) {
      out.push(`- ${convertInlineMarkdown(bulletMatch[1])}`);
      continue;
    }

    const numberedMatch = line.match(/^\s*(\d+)\.\s+(.*)$/);
    if (numberedMatch) {
      out.push(
        `${numberedMatch[1]}. ${convertInlineMarkdown(numberedMatch[2])}`,
      );
      continue;
    }

    out.push(convertInlineMarkdown(line));
  }

  const boxed = boxParagraphs(out, options.totalWidth);
  const merged = boxed.join("\n").replace(/\n{4,}/g, "\n\n\n");
  const topBanner = createTopBanner(options.totalWidth);
  return `${topBanner}${options.blockArt}\n\n${merged}`.trimEnd() + "\n";
}

async function main(): Promise<void> {
  const markdown = await fs.readFile(inputPath, "utf8");
  const desktopOutput = convertMarkdownToText(markdown, {
    totalWidth: BOX_TOTAL_WIDTH,
    blockArt: BLOCK_ART,
  });
  const mobileOutput = convertMarkdownToText(markdown, {
    totalWidth: BOX_TOTAL_WIDTH_MOBILE,
    blockArt: BLOCK_ART_MOBILE,
  });

  await fs.writeFile(outputPath, desktopOutput, "utf8");
  await fs.writeFile(outputPathMobile, mobileOutput, "utf8");

  console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
  console.log(`Generated ${path.relative(process.cwd(), outputPathMobile)}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
