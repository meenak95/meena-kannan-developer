Write-Host "Starting Portfolio Server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio will be available at:" -ForegroundColor Yellow
Write-Host "- Local:    http://localhost:3000" -ForegroundColor Cyan
Write-Host "- Network:  http://192.168.1.40:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Red
Write-Host ""
npx serve -s dist -l 3000
