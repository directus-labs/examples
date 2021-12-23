import parseArgs from "minimist";

export const getArgv = () => parseArgs(process.argv.slice(2));
