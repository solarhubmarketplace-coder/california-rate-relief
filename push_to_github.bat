@echo off
echo ========================================
echo  SunSpeed - Push to GitHub
echo ========================================
echo.

cd /d "%~dp0"

echo Initializing git repository...
git init

echo.
echo Adding all files...
git add .

echo.
echo Creating first commit...
git commit -m "Initial commit - SunSpeed AI Solar CRM"

echo.
echo Setting branch to main...
git branch -M main

echo.
echo Connecting to GitHub...
git remote add origin https://github.com/solarhubmarketplace-coder/sunspeed.git

echo.
echo Pushing code to GitHub...
git push -u origin main

echo.
echo ========================================
echo  Done! Your code is now on GitHub.
echo  Visit: https://github.com/solarhubmarketplace-coder/sunspeed
echo ========================================
pause
