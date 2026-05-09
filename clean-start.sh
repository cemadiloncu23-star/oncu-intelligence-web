#!/bin/bash

# Quick cleanup and start script

echo "Cleaning build cache..."
rm -rf .next
echo "Cache cleaned"

echo ""
echo "Starting development server on port 3001..."
npm run dev:3001
