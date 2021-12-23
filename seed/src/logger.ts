import { bold, green, yellow, red, gray } from "colorette";

const ts = (date: Date) =>
  `${String(date.getHours()).padStart(2, "0")}:${date
    .toISOString()
    .slice(14, -1)}`;

export const logger = {
  info: (msg: string) =>
    console.log(`${gray(ts(new Date()))} ${bold(green("[Info]"))} ${msg}`),
  warn: (msg: string) =>
    console.warn(`${gray(ts(new Date()))} ${bold(yellow("[Warn]"))} ${msg}`),
  error: (msg: string) =>
    console.error(`${gray(ts(new Date()))} ${bold(red("[Error]"))} ${msg}`),
};
