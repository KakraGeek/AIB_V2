#!/usr/bin/env node

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import ftpDeploy from "ftp-deploy";

// Get the directory of the current script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env.deploy manually
function loadEnvFile(filePath) {
  try {
    const envPath = resolve(__dirname, filePath);
    const envContent = readFileSync(envPath, 'utf8');
    const envVars = {};
    
    envContent.split('\n').forEach(line => {
      line = line.trim();
      if (line && !line.startsWith('#')) {
        const [key, ...valueParts] = line.split('=');
        if (key && valueParts.length > 0) {
          envVars[key] = valueParts.join('=');
        }
      }
    });
    
    return envVars;
  } catch (error) {
    console.error('❌ Error loading .env.deploy:', error.message);
    return {};
  }
}

// Load environment variables
const envVars = loadEnvFile('../.env.deploy');

// Set environment variables
Object.entries(envVars).forEach(([key, value]) => {
  process.env[key] = value;
});

// Validate required environment variables
const required = ["FTP_HOST", "FTP_USER", "FTP_PASS", "REMOTE_ROOT"];
for (const k of required) {
  if (!process.env[k]) {
    console.error(`❌ Missing ${k} in .env.deploy`);
    console.error(`Available env vars:`, Object.keys(envVars));
    process.exit(1);
  }
}

// Determine if using SFTP (port 22) or FTP (port 21)
const isSftp = String(process.env.FTP_PORT || "21") === "22";

// Configuration for ftp-deploy
const ftpConfig = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS,
  host: process.env.FTP_HOST,
  port: Number(process.env.FTP_PORT || 21),
  localRoot: "dist",
  remoteRoot: process.env.REMOTE_ROOT,
  include: ["**/*", ".*"], // Include hidden files like .htaccess
  deleteRemote: true, // Remove old files on server
  sftp: isSftp,
  forcePasv: false,
  exclude: [
    ".git/**",
    ".gitignore",
    "node_modules/**",
    "src/**",
    "*.log"
  ]
};

console.log("🚀 Starting deployment...");
console.log(`📁 Local: dist/`);
console.log(`🌐 Remote: ${ftpConfig.host}:${ftpConfig.port}${ftpConfig.remoteRoot}`);
console.log(`🔐 Protocol: ${isSftp ? "SFTP" : "FTP"}`);
console.log(`👤 User: ${ftpConfig.user}`);
console.log(`📋 Include pattern: ${ftpConfig.include.join(', ')}`);
console.log("");

// Create deploy instance
const deploy = new ftpDeploy();

try {
  console.log("⏳ Deploying files...");
  await deploy.deploy(ftpConfig);
  
  console.log("");
  console.log("✅ Deployment completed successfully!");
  console.log("");
  
  if (process.env.SITE_URL) {
    console.log(`🌍 Your site should now be available at: ${process.env.SITE_URL}`);
    console.log("🔍 Please verify the deployment by visiting the URL in your browser.");
  }
  
} catch (error) {
  console.error("");
  console.error("❌ Deployment failed!");
  console.error("Error:", error?.message || error);
  console.error("");
  console.error("🔧 Troubleshooting tips:");
  console.error("   - Check your FTP credentials in .env.deploy");
  console.error("   - Verify the server is accessible");
  console.error("   - Check if the remote directory exists");
  console.error("   - Ensure you have write permissions");
  process.exit(1);
}
