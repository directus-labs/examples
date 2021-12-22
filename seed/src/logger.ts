import { bold, green, yellow, red } from "colorette";

export const logger = {
  info: (msg: string) => console.log(`${bold(green("[Info]"))} ${msg}`),
  warn: (msg: string) => console.warn(`${bold(yellow("[Warn]"))} ${msg}`),
  error: (msg: string) => console.error(`${bold(red("[Error]"))} ${msg}`),
};
