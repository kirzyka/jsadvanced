import alias from "@rollup/plugin-alias";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import css from "rollup-plugin-import-css";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

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
        css({
            output: "bundle.css",
        }),
        nodeResolve(),
        typescript({
            compilerOptions: {
                lib: ["es2016", "dom"],
                target: "es2016",
            },
        }),
    ],
};
