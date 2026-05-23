import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig(async (env) => {
  const { command, mode } = env;
  const internalPlugins = [];

  internalPlugins.push(tailwindcss());
  internalPlugins.push(tsConfigPaths({ projects: ["./tsconfig.json"] }));



  const tanstackStartDefaults = {
    importProtection: {
      behavior: "error",
      client: {
        files: ["**/server/**"],
        specifiers: ["server-only"]
      }
    },
    server: { 
      entry: "server",
      preset: "vercel"
    }
  };
  
  internalPlugins.push(tanstackStart(tanstackStartDefaults));
  internalPlugins.push(viteReact());

  let envDefine = {};
  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  for (const [key, value] of Object.entries(loadedEnv)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  return {
    define: envDefine,
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core"
      ]
    },
    server: {
      host: "::",
      port: 8080,
      watch: {
        awaitWriteFinish: {
          stabilityThreshold: 1000,
          pollInterval: 100
        }
      }
    },
    plugins: internalPlugins
  };
});
