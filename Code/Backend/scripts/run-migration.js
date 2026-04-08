#!/usr/bin/env node

/**
 * Migration Runner Script
 * Runs SQL migration files against Supabase PostgreSQL database
 *
 * Usage: node scripts/run-migration.js migrations/002_add_email_sequences.sql
 */

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

// Database connection string (password needs URL encoding: @ becomes %40)
const DB_URL = process.env.DATABASE_URL;

const migrationFile = process.argv[2];

if (!migrationFile) {
  console.error("❌ Usage: node scripts/run-migration.js <migration-file.sql>");
  console.error(
    "   Example: node scripts/run-migration.js migrations/002_add_email_sequences.sql",
  );
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), migrationFile);

if (!fs.existsSync(filePath)) {
  console.error(`❌ Migration file not found: ${filePath}`);
  process.exit(1);
}

const sql = fs.readFileSync(filePath, "utf8");

async function runMigration() {
  console.log(`📄 Reading migration: ${migrationFile}`);
  console.log(`🔗 Connecting to PostgreSQL...`);

  const client = new Client({
    connectionString: DB_URL,
    ssl: {
      rejectUnauthorized: false, // Supabase uses SSL
    },
  });

  try {
    await client.connect();
    console.log("✅ Connected to database\n");

    // Execute the entire SQL file as one query
    // PostgreSQL can handle multiple statements separated by semicolons
    console.log(`📝 Executing migration SQL...\n`);

    try {
      await client.query(sql);
      console.log(`✅ Migration executed successfully\n`);
    } catch (error) {
      // Some errors are expected (e.g., IF NOT EXISTS)
      if (
        error.message.includes("already exists") ||
        error.message.includes("duplicate")
      ) {
        console.log(
          `⚠️  Some objects already exist (this is OK): ${error.message.split("\n")[0]}\n`,
        );
      } else {
        console.error(`❌ Migration failed:`, error.message);
        throw error;
      }
    }

    console.log("✨ Migration completed successfully!\n");

    // Verify tables were created
    console.log("🔍 Verifying tables...");
    const tablesToCheck = [
      "email_sequences",
      "email_sequence_steps",
      "lead_sequence_tracking",
    ];

    for (const tableName of tablesToCheck) {
      const result = await client.query(
        `
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = $1
        );
      `,
        [tableName],
      );

      if (result.rows[0].exists) {
        console.log(`✅ Table '${tableName}' exists`);
      } else {
        console.log(`❌ Table '${tableName}' not found`);
      }
    }

    // Check columns in email_logs
    console.log("\n🔍 Verifying email_logs columns...");
    const columnsResult = await client.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_schema = 'public' 
      AND table_name = 'email_logs'
      AND column_name IN ('sequence_id', 'sequence_step_id');
    `);

    const existingColumns = columnsResult.rows.map((r) => r.column_name);
    if (existingColumns.includes("sequence_id")) {
      console.log("✅ Column email_logs.sequence_id exists");
    } else {
      console.log("❌ Column email_logs.sequence_id not found");
    }
    if (existingColumns.includes("sequence_step_id")) {
      console.log("✅ Column email_logs.sequence_step_id exists");
    } else {
      console.log("❌ Column email_logs.sequence_step_id not found");
    }
  } catch (error) {
    console.error("\n❌ Migration failed:", error.message);
    console.error(error);
    process.exit(1);
  } finally {
    await client.end();
    console.log("\n🔌 Disconnected from database");
  }
}

runMigration();
