#!/bin/bash

# Ensure we are in the project root directory, assuming the script is run from there
PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Create the directory structure
mkdir -p "$PROJECT_ROOT/backend/config"
mkdir -p "$PROJECT_ROOT/backend/controllers"
mkdir -p "$PROJECT_ROOT/backend/models"
mkdir -p "$PROJECT_ROOT/backend/routes"
mkdir -p "$PROJECT_ROOT/backend/services"
mkdir -p "$PROJECT_ROOT/backend/tests"

mkdir -p "$PROJECT_ROOT/frontend/public"
mkdir -p "$PROJECT_ROOT/frontend/src/assets"
mkdir -p "$PROJECT_ROOT/frontend/src/components"
mkdir -p "$PROJECT_ROOT/frontend/src/services"
mkdir -p "$PROJECT_ROOT/frontend/src/states"
mkdir -p "$PROJECT_ROOT/frontend/src/tests"

mkdir -p "$PROJECT_ROOT/cypress"

mkdir -p "$PROJECT_ROOT/docs/designs"

# Create .gitkeep files in every directory to ensure they are tracked by Git
find "$PROJECT_ROOT" -type d -exec touch {}/.gitkeep \;

# Remove .gitkeep from directories that will contain files
rm "$PROJECT_ROOT/backend/.gitkeep"
rm "$PROJECT_ROOT/frontend/.gitkeep"
rm "$PROJECT_ROOT/docs/.gitkeep"

# Create main app files
touch "$PROJECT_ROOT/backend/app.js"
touch "$PROJECT_ROOT/frontend/src/App.js"
touch "$PROJECT_ROOT/frontend/src/index.js"

# Initialize backend Node.js project
cd "$PROJECT_ROOT/backend"
npm init -y
# Add backend dependencies like express, mongoose
npm install express mongoose
cd "$PROJECT_ROOT"

# Initialize frontend React project
cd "$PROJECT_ROOT/frontend"
npx create-react-app .
cd "$PROJECT_ROOT"

# Initialize root package.json for convenience scripts
cat > "$PROJECT_ROOT/package.json" <<EOF
{
  "name": "africansentiment-news",
  "version": "1.0.0",
  "description": "A full-stack web app for newspaper article sentiment analysis.",
  "scripts": {
    "install": "cd backend && npm install && cd ../frontend && npm install",
    "start-backend": "cd backend && node app.js",
    "start-frontend": "cd frontend && npm start",
    "test-backend": "cd backend && npm test",
    "test-frontend": "cd frontend && npm test",
    "test-e2e": "cd frontend && npx cypress open"
  },
  "author": "",
  "license": "ISC"
}
EOF

# Initialize Git repository and make the first commit
git init
git add .
git commit -m "Initial project structure"

# Provide feedback
echo "Project setup complete. Navigate to africansentiment-news and start coding!"
