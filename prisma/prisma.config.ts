// prisma.config.ts  ← Letakkan di ROOT folder (sama dengan package.json)
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",   // ← ini yang benar, bukan prismaSchemaPath

  datasource: {
    url: env("DATABASE_URL"),       // pakai env() dari prisma/config
  },
});