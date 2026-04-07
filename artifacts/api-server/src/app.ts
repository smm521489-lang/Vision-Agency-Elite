import express, { type Express } from "express";
import path from "node:path";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// --- Логирование через pino ---
app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  })
);

// --- CORS и парсинг JSON ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API маршруты ---
app.use("/api", router);

// --- Статика фронтенда (React/Vite) ---
const frontendPath = path.resolve(__dirname, "../../mamasoliyev137/dist/public");
app.use(express.static(frontendPath));

// --- SPA fallback для React ---
app.use((req, res, next) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(frontendPath, "index.html"));
  } else {
    next();
  }
});

export default app;
