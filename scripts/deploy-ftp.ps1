# PowerShell Deployment Script for Agile Insurance
# Usage: .\scripts\deploy-ftp.ps1

Write-Host "🚀 Agile Insurance - FTP Deployment Script" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# Check if .env.deploy exists
if (-not (Test-Path ".env.deploy")) {
    Write-Host "❌ .env.deploy file not found!" -ForegroundColor Red
    Write-Host "Please ensure you have created the .env.deploy file with your credentials." -ForegroundColor Yellow
    exit 1
}

# Check if dist folder exists
if (-not (Test-Path "dist")) {
    Write-Host "❌ dist/ folder not found!" -ForegroundColor Red
    Write-Host "Please run 'npm run build' first." -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Build folder found" -ForegroundColor Green
Write-Host "✅ Environment file found" -ForegroundColor Green
Write-Host ""

# Ask for confirmation before deployment
$confirmation = Read-Host "🤔 Are you sure you want to deploy to production? (y/N)"
if ($confirmation -ne "y" -and $confirmation -ne "Y") {
    Write-Host "❌ Deployment cancelled." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "🚀 Starting deployment..." -ForegroundColor Green

# Run the deployment
try {
    npm run deploy:ftp
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
        Write-Host "🌍 Your site should now be available at: https://agilebrokersgh.com" -ForegroundColor Cyan
    } else {
        Write-Host "❌ Deployment failed!" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "❌ Deployment failed with error: $_" -ForegroundColor Red
    exit 1
}
