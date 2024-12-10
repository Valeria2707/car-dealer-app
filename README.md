# Vehicle Models Application

## Overview

The **Vehicle Models Application** is a web application that allows users to browse vehicle models based on a selected make and year. The app is built using Next.js for server-side rendering and static site generation, ensuring a fast and responsive user experience.

### Features

- **Dynamic Routing**: Users can navigate to specific routes for vehicle makes and years.
- **Asynchronous Data Fetching**: Fetches vehicle makes and models from external APIs.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern UI**: Features a gradient background and user-friendly components.

### Architecture

- **Framework**: [Next.js](https://nextjs.org/) for server-side rendering and static site generation.
- **API Services**: Includes organized services in the `services/` directory to handle data fetching for makes and vehicles.
- **Reusable Components**: All reusable UI components, such as `VehicleModelsList`, are located in the `components/` folder.
- **Constants**: Centralized constants for better maintainability are stored in the `constants/` folder.
- **Hooks**: Custom hooks for handling logic and state management are defined in the `hooks/` folder.
- **Utilities**: Helper functions for repetitive tasks, such as generating years, are located in the `utils/` folder.
- **Global Styles**: Defined in the `globals.css` file inside the `app/` folder for a consistent UI across the app.

---

## Getting Started

Follow these steps to set up and run the application:

### Prerequisites

- Node.js v16+ installed on your system.
- A package manager like `npm` or `yarn`.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Valeria2707/car-dealer-app.git
   cd vehicle-models-app

   ```

2. Install dependencies:
   npm install

   # or

   yarn install

3. To start the development server:
   npm run start

   # or

   yarn start

4. To create a production build:
   npm run build

   # or

   yarn build
