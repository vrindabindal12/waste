export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts", // Removed src/ prefix
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://zerotohero_owner:SPVe2rokvBf6@ep-bitter-shadow-a5lbwa60.us-east-2.aws.neon.tech/zerotohero?sslmode=require",
    connectionString:
      "postgresql://zerotohero_owner:SPVe2rokvBf6@ep-bitter-shadow-a5lbwa60.us-east-2.aws.neon.tech/zerotohero?sslmode=require",
  },
};