import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "", // Esto permite importar bibliotecas correctamente en la plataforma; por favor, no editar
});
