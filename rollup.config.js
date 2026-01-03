import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import alias from "@rollup/plugin-alias";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import sass from "sass";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    input: "src/app.ts",
    output: {
        dir: "dist",
        format: "es",
        chunkFileNames: "[name].js",
        manualChunks(id) {
            if (id.includes("\\core\\")) {
                return "core";
            }
        },
        sourcemap: true,
    },
    plugins: [
        alias({
            entries: [
                {
                    find: "@core",
                    replacement: path.resolve(__dirname, "core"),
                },
            ],
        }),
        postcss({
            extract: true,
            minimize: true,
            sourceMap: true,
            extensions: [".css", ".scss"],
            use: [
                [
                    "sass",
                    {
                        includePaths: ["src"],
                        implementation: sass,
                    },
                ],
            ],
        }),
        nodeResolve(),
        typescript({
            tsconfig: "./tsconfig.json",
            compilerOptions: {
                lib: ["es2020", "dom"],
                target: "es2020",
                sourceMap: true,
            },
        }),
    ],
};
