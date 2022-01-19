import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: "src/index.ts",
  output: {
    file: "bundle/index.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve(),
    commonjs({ ignoreDynamicRequires: true }),
    json(),
    esbuild({ minify: true }),
  ],
};
