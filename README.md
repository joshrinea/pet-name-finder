# Pet-Name-Finder

## Overview

This project is a web application built using React and Vite. The application provides name ideas for your pet with filter options.

---

## Setup Instructions

### Prerequisites

- Node.js v22.16.0 (used during development)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/joshrinea/pet-name-finder.git
cd pet-name-finder
```

2. Install dependencies:

```bash
npm install
```

3. Run on local machine:

```bash
npm run dev
```

4. Open the application in your browser:

```text
http://localhost:5173
```

---

## Architecture Explanation

The application follows a component-based architecture using React.

### Structure

```text
src/
├── assets/        # Static resources
├── components/    # Reusable UI components
├── data/          # static data
├── hooks/         # custom hooks for filter options
├── interface/     # interfaces
├── services/      # Functions for loading data from JSON files in the public folder
├── App.jsx        # Main application component
├── main.jsx       # Application entry point
└── styles         # css files
```

### Application Flow

1. `main.jsx` initializes the React application.
2. `App.jsx` serves as the root component.
3. Components render the user interface.
4. Data is loaded from JSON files stored in the public folder.
5. React hooks manage state, filtering logic, and UI updates.

This structure promotes separation of concerns, maintainability, and scalability.

---

## Assumptions Made

- Node.js and npm are installed on the target machine.
- The JSON data files in the public folder are present and accessible.
- Users access the application using a modern web browser.
- No external API dependencies are required.
- No additional configuration is required beyond dependency installation.

---

## Repository

Git Repository: [https://github.com/joshrinea/pet-name-finder.git]