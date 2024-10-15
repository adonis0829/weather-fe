# Weather App

This project is a weather application built using **React**, **Redux**, and **TypeScript**. The app allows users to search for cities and view real-time weather information, including temperature, wind speed, humidity, and more. The application also features debounced search functionality to optimize API calls during typing.

## Features

- Search for cities with real-time suggestions.
- View detailed weather information for the selected city.
- Debounced search to reduce API requests.
- Responsive design, styled with **SCSS**.
- State management using **Redux**.
- Type safety with **TypeScript**.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: (>=14.x recommended)
- **npm** or **yarn**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install

3. Set up environment variables by creating a `.env` file at the root of the project:

   ``touch .env``

   Add the following environment variables to the `.env` file:  
   ```bash
   REACT_APP_WEATHER_API_KEY=<Your Weather API Key>
   REACT_APP_GEO_API_KEY=<Your Geo API Key>
   REACT_APP_WEATHER_API_BASE_URL=https://api.weatherapi.com/
   REACT_APP_GEO_API_BASE_URL=https://api.geoapify.com/


## Running the Project

1. To create a production build, run:
   ```bash
   npm run build
   # or
   yarn build

This will create a `build` folder containing the optimized app ready for deployment.

## Available Scripts

In the project directory, you can run:

 - `npm start`: Runs the app in development mode.
 - `npm run build`: Builds the app for production.
 - `npm test`: Runs the test suite (if implemented).
 - `npm run lint`: Lints the code using ESLint (if configured).
