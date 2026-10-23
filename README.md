# Sandhu Anantvir - UI Garden Component Library
**Student Name:** Anantvir Kaur Sandhu  
**Project Name:** `sandhu_anantvir_library`  
**Container Name:** `Sandhu_Anantvir_coding_assignment12`  
**Working Directory:** `/Sandhu_Anantvir_ui_garden`  
**Port:** `8083`  

---
## Overview
This project is a React and TypeScript UI component library and UI Garden built as part of Assignment 12. It features custom UI components documented using Storybook, styled using `styled-components`, thoroughly tested with Jest unit tests, and fully containerized using Docker.

---

### Step 1: Project Setup
npx create-react-app sandhu_anantvir_library --template typescript

navigate into project folder
cd sandhu_anantvir_library

### Step 2: Install Styled Components and testing/storybook dependencies
npm install styled-components
npm install --save-dev @types/styled-components jest-styled-components @testing-library/react @testing-library/jest-dom

### Step 3: Initialize Storybook
npx storybook@latest init

### Step 4 : Created 9 Components in src/components
1.Button
2.Card
3.Img
4.Dropdown
5.HeroImage
6.RadioButton
7.Label
8.Text
9.Table

### Step 5: Created files for each component
1.stories.tsx
2.types.tsx
3.test.tsx
4.tsx
5.index.ts

### Step 6: Created index.ts in src

### Step 7: npm run storybook
http://localhost:6006

### Step 8: Created dockerfile

### Step 9: Created dockerignore

### Step 10: Build docker image
docker build -t sandhu_anantvir_library .

### Step 11: Run the container named sandhu_anantvir_coding_assignment12 mapped to port 8083
docker run -d -p 8083:8083 --name sandhu_anantvir_coding_assignment12 sandhu_anantvir_coding_assignment12
http://localhost:8083.

### Step 12: Initialize Git
git init

### Step 13: Git Status
git status

### Step 14: Commit changes
git add .
git commit -m "Complete Coding Assignment 12 "

### Step 15: Branch
git branch -M main
git remote add origin https://github.com/asandhu-33/sandhu_anantvir_ui_garden.git

### Step 16: Push origin
git push -u origin main