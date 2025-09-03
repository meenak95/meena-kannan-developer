@echo off
echo Starting Portfolio Server...
echo.
echo Your portfolio will be available at:
echo - Local:    http://localhost:3000
echo - Network:  http://192.168.1.40:3000
echo.
echo Press Ctrl+C to stop the server
echo.
npx serve -s dist -l 3000
