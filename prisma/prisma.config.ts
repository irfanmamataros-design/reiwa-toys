// prisma.config.ts  ← Letakkan di ROOT folder (sama dengan package.json)
import "dotenv/config";

const config = {
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
} as const;

export default config;