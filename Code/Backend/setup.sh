#!/bin/bash
# Sun Speed CRM Backend - Server Setup Script
# Installs NVM, Node 22, PM2, and starts the backend

set -e

APP_NAME="sun-speed-crm-backend"
APP_DIR="$(cd "$(dirname "$0")" && pwd)"
NODE_VERSION="22"

echo "=== Sun Speed CRM Backend Setup ==="
echo "App directory: $APP_DIR"

# 1. Install NVM if not present
if [ ! -d "$HOME/.nvm" ]; then
    echo "Installing NVM..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
else
    echo "NVM already installed"
fi

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# 2. Install Node 22
echo "Installing Node.js $NODE_VERSION..."
nvm install $NODE_VERSION
nvm use $NODE_VERSION
nvm alias default $NODE_VERSION

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# 3. Install PM2 globally
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
else
    echo "PM2 already installed: $(pm2 -v)"
fi

# 4. Install dependencies
echo "Installing app dependencies..."
cd "$APP_DIR"
npm install --production

# 5. Check .env file
if [ ! -f "$APP_DIR/.env" ]; then
    echo ""
    echo "WARNING: No .env file found!"
    echo "Copy .env.example to .env and configure before starting."
    echo ""
fi

# 6. Start/restart with PM2
echo "Starting $APP_NAME with PM2..."
pm2 delete "$APP_NAME" 2>/dev/null || true
pm2 start src/app.js --name "$APP_NAME" --node-args="--require dotenv/config"
pm2 save

echo ""
echo "=== Setup Complete ==="
echo ""
echo "PM2 Commands:"
echo "  pm2 status              - Check app status"
echo "  pm2 logs $APP_NAME      - View logs"
echo "  pm2 restart $APP_NAME   - Restart app"
echo "  pm2 stop $APP_NAME      - Stop app"
echo "  pm2 startup             - Auto-start PM2 on boot (run once)"
echo ""
