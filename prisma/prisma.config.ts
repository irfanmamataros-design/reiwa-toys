// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: {
    path: "prisma/schema.prisma",   // gunakan objek dengan key path
  },
  datasource: {
    provider: "mysql",
    url: process.env.DATABASE_URL!,
  },
});