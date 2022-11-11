import presetIcons from "@unocss/preset-icons";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import compress from "vite-plugin-compress";

import { tamaguiExtractPlugin, tamaguiPlugin } from "@tamagui/vite-plugin";

const tamaguiConfig = {
    config: "./src/tamagui.config.ts",
    components: ["tamagui", "@tamagui/core"],
};

// https://vitejs.dev/config/
export default defineConfig((env) => ({
    base: "/",
    root: "./",
    build: { outDir: "./dist", sourcemap: true },
    plugins: [
        UnoCSS({ presets: [presetIcons({})] }),
        react(),
        ...(env.mode === "viz" ? [compress()] : []),
        checker({ typescript: true, overlay: { initialIsOpen: false, position: "tl" } }),
        tamaguiPlugin(tamaguiConfig),
        // optional, adds the optimizing compiler:
        // tamaguiExtractPlugin(tamaguiConfig),
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: "/src",
            },
        ],
    },
}));
