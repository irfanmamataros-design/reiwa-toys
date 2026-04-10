// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",   // cukup string, bukan objek
  datasource: {
    provider: "mysql",
    url: process.env.DATABASE_URL!, // gunakan process.env langsung
  },
});