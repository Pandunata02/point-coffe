#!/bin/bash

# Coffee Shop Landing Page - Quick Start Script
# This script installs all dependencies and starts the development server

echo "☕ Aroma Café Landing Page - Quick Start"
echo "========================================"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

echo "📦 Installing dependencies..."
echo ""

# Install all required packages
npm install tailwindcss postcss autoprefixer framer-motion aos react-scroll lucide-react @tsparticles/react @tsparticles/slim react-scroll-parallax

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Starting development server..."
    echo ""
    
    # Start the dev server
    npm run dev
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
