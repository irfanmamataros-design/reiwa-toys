// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  prismaSchemaPath: "prisma/schema.prisma",   // gunakan prismaSchemaPath
  datasource: {
    provider: "mysql",
    url: process.env.DATABASE_URL!,
  },
});