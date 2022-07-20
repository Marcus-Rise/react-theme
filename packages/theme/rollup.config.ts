import pkg from "./package.json";
import type { RollupOptions } from "rollup";
import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import eslint from "@rbnlffl/rollup-plugin-eslint";
import dts from "rollup-plugin-dts";

const input: RollupOptions["input"] = "src/index.ts";
const plugins: RollupOptions["plugins"] = [
  eslint({ throwOnError: true }),
  nodeResolve(),
  commonjs(),
  typescript({ tsconfig: "./tsconfig.build.json" }),
  terser(),
];

export default defineConfig([
  {
    input,
    external: ["react"],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins,
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
]);
