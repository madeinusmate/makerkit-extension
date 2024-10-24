// vite.config.ts
import { defineConfig } from "file:///Users/stefano/Dev/trustRadar/chrome-extension/trustRadar-extension/node_modules/vite/dist/node/index.js";
import { crx } from "file:///Users/stefano/Dev/trustRadar/chrome-extension/trustRadar-extension/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import react from "file:///Users/stefano/Dev/trustRadar/chrome-extension/trustRadar-extension/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";

// src/manifest.ts
import { defineManifest } from "file:///Users/stefano/Dev/trustRadar/chrome-extension/trustRadar-extension/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// package.json
var package_default = {
  name: "trustradar-extension",
  displayName: "trustRadar-extension",
  version: "0.0.0",
  author: "MIU Digital",
  description: "",
  type: "module",
  license: "MIT",
  keywords: [
    "chrome-extension",
    "react",
    "vite",
    "create-chrome-ext"
  ],
  engines: {
    node: ">=14.18.0"
  },
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    preview: "vite preview",
    fmt: "prettier --write '**/*.{tsx,ts,json,css,scss,md}'",
    zip: "npm run build && node src/zip.js"
  },
  dependencies: {
    "@heroicons/react": "^2.1.5",
    "@nanostores/react": "ai/react",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.2",
    ai: "^3.4.0",
    "class-variance-authority": "^0.7.0",
    clsx: "^2.1.1",
    "lucide-react": "^0.441.0",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7"
  },
  devDependencies: {
    "@crxjs/vite-plugin": "^2.0.0-beta.19",
    "@types/chrome": "^0.0.246",
    "@types/node": "^22.5.5",
    "@types/react": "^18.2.28",
    "@types/react-dom": "^18.2.13",
    "@vitejs/plugin-react": "^4.1.0",
    autoprefixer: "^10.4.20",
    gulp: "^4.0.2",
    "gulp-zip": "^6.0.0",
    postcss: "^8.4.47",
    prettier: "^3.0.3",
    tailwindcss: "^3.4.12",
    typescript: "^5.2.2",
    vite: "^4.4.11"
  }
};

// src/manifest.ts
var isDev = process.env.NODE_ENV == "development";
var manifest_default = defineManifest({
  name: `${package_default.displayName || package_default.name}${isDev ? ` \u27A1\uFE0F Dev` : ""}`,
  description: package_default.description,
  version: package_default.version,
  manifest_version: 3,
  icons: {
    16: "img/logo-16.png",
    32: "img/logo-34.png",
    48: "img/logo-48.png",
    128: "img/logo-128.png"
  },
  action: {
    default_icon: "img/logo-48.png"
  },
  background: {
    service_worker: "src/background/index.ts",
    type: "module"
  },
  content_scripts: [
    {
      matches: ["<all_urls>", "http://*/*", "https://*/*"],
      js: ["src/contentScript/index.ts"]
    }
  ],
  side_panel: {
    default_path: "sidepanel.html"
  },
  host_permissions: ["<all_urls>"],
  web_accessible_resources: [
    {
      resources: ["img/logo-16.png", "img/logo-34.png", "img/logo-48.png", "img/logo-128.png"],
      matches: []
    }
  ],
  permissions: ["sidePanel", "storage", "cookies", "scripting", "activeTab", "tabs"]
});

// vite.config.ts
var __vite_injected_original_dirname = "/Users/stefano/Dev/trustRadar/chrome-extension/trustRadar-extension";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: "build",
      rollupOptions: {
        output: {
          chunkFileNames: "assets/chunk-[hash].js"
        }
      }
    },
    plugins: [crx({ manifest: manifest_default }), react()],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL21hbmlmZXN0LnRzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9zdGVmYW5vL0Rldi90cnVzdFJhZGFyL2Nocm9tZS1leHRlbnNpb24vdHJ1c3RSYWRhci1leHRlbnNpb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zdGVmYW5vL0Rldi90cnVzdFJhZGFyL2Nocm9tZS1leHRlbnNpb24vdHJ1c3RSYWRhci1leHRlbnNpb24vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3N0ZWZhbm8vRGV2L3RydXN0UmFkYXIvY2hyb21lLWV4dGVuc2lvbi90cnVzdFJhZGFyLWV4dGVuc2lvbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBjcnggfSBmcm9tICdAY3J4anMvdml0ZS1wbHVnaW4nXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9zcmMvbWFuaWZlc3QnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgYnVpbGQ6IHtcbiAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgICAgb3V0RGlyOiAnYnVpbGQnLFxuXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL2NodW5rLVtoYXNoXS5qcycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwbHVnaW5zOiBbY3J4KHsgbWFuaWZlc3QgfSksIHJlYWN0KCldLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9zdGVmYW5vL0Rldi90cnVzdFJhZGFyL2Nocm9tZS1leHRlbnNpb24vdHJ1c3RSYWRhci1leHRlbnNpb24vc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc3RlZmFuby9EZXYvdHJ1c3RSYWRhci9jaHJvbWUtZXh0ZW5zaW9uL3RydXN0UmFkYXItZXh0ZW5zaW9uL3NyYy9tYW5pZmVzdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc3RlZmFuby9EZXYvdHJ1c3RSYWRhci9jaHJvbWUtZXh0ZW5zaW9uL3RydXN0UmFkYXItZXh0ZW5zaW9uL3NyYy9tYW5pZmVzdC50c1wiO2ltcG9ydCB7IGRlZmluZU1hbmlmZXN0IH0gZnJvbSAnQGNyeGpzL3ZpdGUtcGx1Z2luJ1xuaW1wb3J0IHBhY2thZ2VEYXRhIGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuLy9AdHMtaWdub3JlXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lTWFuaWZlc3Qoe1xuICBuYW1lOiBgJHtwYWNrYWdlRGF0YS5kaXNwbGF5TmFtZSB8fCBwYWNrYWdlRGF0YS5uYW1lfSR7aXNEZXYgPyBgIFx1MjdBMVx1RkUwRiBEZXZgIDogJyd9YCxcbiAgZGVzY3JpcHRpb246IHBhY2thZ2VEYXRhLmRlc2NyaXB0aW9uLFxuICB2ZXJzaW9uOiBwYWNrYWdlRGF0YS52ZXJzaW9uLFxuICBtYW5pZmVzdF92ZXJzaW9uOiAzLFxuICBpY29uczoge1xuICAgIDE2OiAnaW1nL2xvZ28tMTYucG5nJyxcbiAgICAzMjogJ2ltZy9sb2dvLTM0LnBuZycsXG4gICAgNDg6ICdpbWcvbG9nby00OC5wbmcnLFxuICAgIDEyODogJ2ltZy9sb2dvLTEyOC5wbmcnLFxuICB9LFxuICBhY3Rpb246IHtcbiAgICBkZWZhdWx0X2ljb246ICdpbWcvbG9nby00OC5wbmcnLFxuICB9LFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgc2VydmljZV93b3JrZXI6ICdzcmMvYmFja2dyb3VuZC9pbmRleC50cycsXG4gICAgdHlwZTogJ21vZHVsZScsXG4gIH0sXG4gIGNvbnRlbnRfc2NyaXB0czogW1xuICAgIHtcbiAgICAgIG1hdGNoZXM6IFsnPGFsbF91cmxzPicsICdodHRwOi8vKi8qJywgJ2h0dHBzOi8vKi8qJ10sXG4gICAgICBqczogWydzcmMvY29udGVudFNjcmlwdC9pbmRleC50cyddLFxuICAgIH0sXG4gIF0sXG4gIHNpZGVfcGFuZWw6IHtcbiAgICBkZWZhdWx0X3BhdGg6ICdzaWRlcGFuZWwuaHRtbCcsXG4gIH0sXG4gIGhvc3RfcGVybWlzc2lvbnM6IFsnPGFsbF91cmxzPiddLFxuICB3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXM6IFtcbiAgICB7XG4gICAgICByZXNvdXJjZXM6IFsnaW1nL2xvZ28tMTYucG5nJywgJ2ltZy9sb2dvLTM0LnBuZycsICdpbWcvbG9nby00OC5wbmcnLCAnaW1nL2xvZ28tMTI4LnBuZyddLFxuICAgICAgbWF0Y2hlczogW10sXG4gICAgfSxcbiAgXSxcbiAgcGVybWlzc2lvbnM6IFsnc2lkZVBhbmVsJywgJ3N0b3JhZ2UnLCAnY29va2llcycsICdzY3JpcHRpbmcnLCAnYWN0aXZlVGFiJywgJ3RhYnMnXSxcbn0pXG4iLCAie1xuICBcIm5hbWVcIjogXCJ0cnVzdHJhZGFyLWV4dGVuc2lvblwiLFxuICBcImRpc3BsYXlOYW1lXCI6IFwidHJ1c3RSYWRhci1leHRlbnNpb25cIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjBcIixcbiAgXCJhdXRob3JcIjogXCJNSVUgRGlnaXRhbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJjaHJvbWUtZXh0ZW5zaW9uXCIsXG4gICAgXCJyZWFjdFwiLFxuICAgIFwidml0ZVwiLFxuICAgIFwiY3JlYXRlLWNocm9tZS1leHRcIlxuICBdLFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIj49MTQuMTguMFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCIsXG4gICAgXCJmbXRcIjogXCJwcmV0dGllciAtLXdyaXRlICcqKi8qLnt0c3gsdHMsanNvbixjc3Msc2NzcyxtZH0nXCIsXG4gICAgXCJ6aXBcIjogXCJucG0gcnVuIGJ1aWxkICYmIG5vZGUgc3JjL3ppcC5qc1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBoZXJvaWNvbnMvcmVhY3RcIjogXCJeMi4xLjVcIixcbiAgICBcIkBuYW5vc3RvcmVzL3JlYWN0XCI6IFwiYWkvcmVhY3RcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1pY29uc1wiOiBcIl4xLjMuMFwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNjcm9sbC1hcmVhXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiOiBcIl4xLjEuMFwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXBcIjogXCJeMS4xLjJcIixcbiAgICBcImFpXCI6IFwiXjMuNC4wXCIsXG4gICAgXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjogXCJeMC43LjBcIixcbiAgICBcImNsc3hcIjogXCJeMi4xLjFcIixcbiAgICBcImx1Y2lkZS1yZWFjdFwiOiBcIl4wLjQ0MS4wXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInRhaWx3aW5kLW1lcmdlXCI6IFwiXjIuNS4yXCIsXG4gICAgXCJ0YWlsd2luZGNzcy1hbmltYXRlXCI6IFwiXjEuMC43XCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI6IFwiXjIuMC4wLWJldGEuMTlcIixcbiAgICBcIkB0eXBlcy9jaHJvbWVcIjogXCJeMC4wLjI0NlwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjIuNS41XCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMi4yOFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4yLjEzXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl40LjEuMFwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjBcIixcbiAgICBcImd1bHBcIjogXCJeNC4wLjJcIixcbiAgICBcImd1bHAtemlwXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC40N1wiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4wLjNcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xMlwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjIuMlwiLFxuICAgIFwidml0ZVwiOiBcIl40LjQuMTFcIlxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJYLFNBQVMsb0JBQW9CO0FBQ3haLFNBQVMsV0FBVztBQUNwQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVOzs7QUNIZ1gsU0FBUyxzQkFBc0I7OztBQ0FoYTtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLEVBQ1gsUUFBVTtBQUFBLEVBQ1YsYUFBZTtBQUFBLEVBQ2YsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsVUFBWTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFXO0FBQUEsSUFDVCxNQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsS0FBTztBQUFBLElBQ1AsT0FBUztBQUFBLElBQ1QsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsS0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLGNBQWdCO0FBQUEsSUFDZCxvQkFBb0I7QUFBQSxJQUNwQixxQkFBcUI7QUFBQSxJQUNyQix5QkFBeUI7QUFBQSxJQUN6QiwrQkFBK0I7QUFBQSxJQUMvQix3QkFBd0I7QUFBQSxJQUN4QiwyQkFBMkI7QUFBQSxJQUMzQixJQUFNO0FBQUEsSUFDTiw0QkFBNEI7QUFBQSxJQUM1QixNQUFRO0FBQUEsSUFDUixnQkFBZ0I7QUFBQSxJQUNoQixPQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixrQkFBa0I7QUFBQSxJQUNsQix1QkFBdUI7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDakIsc0JBQXNCO0FBQUEsSUFDdEIsaUJBQWlCO0FBQUEsSUFDakIsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCO0FBQUEsSUFDaEIsb0JBQW9CO0FBQUEsSUFDcEIsd0JBQXdCO0FBQUEsSUFDeEIsY0FBZ0I7QUFBQSxJQUNoQixNQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixTQUFXO0FBQUEsSUFDWCxVQUFZO0FBQUEsSUFDWixhQUFlO0FBQUEsSUFDZixZQUFjO0FBQUEsSUFDZCxNQUFRO0FBQUEsRUFDVjtBQUNGOzs7QURwREEsSUFBTSxRQUFRLFFBQVEsSUFBSSxZQUFZO0FBRXRDLElBQU8sbUJBQVEsZUFBZTtBQUFBLEVBQzVCLE1BQU0sR0FBRyxnQkFBWSxlQUFlLGdCQUFZLElBQUksR0FBRyxRQUFRLHNCQUFZLEVBQUU7QUFBQSxFQUM3RSxhQUFhLGdCQUFZO0FBQUEsRUFDekIsU0FBUyxnQkFBWTtBQUFBLEVBQ3JCLGtCQUFrQjtBQUFBLEVBQ2xCLE9BQU87QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLEtBQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGdCQUFnQjtBQUFBLElBQ2hCLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmO0FBQUEsTUFDRSxTQUFTLENBQUMsY0FBYyxjQUFjLGFBQWE7QUFBQSxNQUNuRCxJQUFJLENBQUMsNEJBQTRCO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLGtCQUFrQixDQUFDLFlBQVk7QUFBQSxFQUMvQiwwQkFBMEI7QUFBQSxJQUN4QjtBQUFBLE1BQ0UsV0FBVyxDQUFDLG1CQUFtQixtQkFBbUIsbUJBQW1CLGtCQUFrQjtBQUFBLE1BQ3ZGLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhLENBQUMsYUFBYSxXQUFXLFdBQVcsYUFBYSxhQUFhLE1BQU07QUFDbkYsQ0FBQzs7O0FEekNELElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUVSLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLFNBQVMsQ0FBQyxJQUFJLEVBQUUsMkJBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUFBLElBQ3BDLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
