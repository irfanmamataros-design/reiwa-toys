// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: {
    file: "prisma/schema.prisma",   // gunakan key 'file'
  },
  datasource: {
    provider: "mysql",
    url: process.env.DATABASE_URL!,
  },
});