import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "R3Branding",
      fileName: "r3-rapier-branding",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@react-three/fiber",
        "@react-three/rapier",
        "three",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
