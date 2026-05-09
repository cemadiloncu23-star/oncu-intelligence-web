# Clean build cache and start development server

Write-Host "Cleaning build cache..." -ForegroundColor Yellow
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Cache cleaned" -ForegroundColor Green

Write-Host ""
Write-Host "Starting development server on port 3001..." -ForegroundColor Cyan

npm run dev:3001
