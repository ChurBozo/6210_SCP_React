import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/6210_SCP_React/", // This should match your GitHub repo name
  plugins: [react()],
});
