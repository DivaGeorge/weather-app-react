# 🌤️ Weather App

A modern, responsive weather application built with React and Vite. Get real-time weather information for any city worldwide with a beautiful, dynamic background that changes based on weather conditions.

## ✨ Features

- **Real-time Weather Data**: Get current weather information using OpenWeatherMap API
- **Dynamic Backgrounds**: Background changes based on weather conditions (sunny, cloudy, rainy, snowy, stormy)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: User-friendly error messages for invalid cities
- **Modern UI**: Clean and intuitive interface with smooth animations

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/weather-app) <!-- Replace with your actual GitHub Pages URL -->

## 🛠️ Technologies Used

- **React 19.1.1** - Frontend framework
- **Vite 7.1.7** - Build tool and development server
- **OpenWeatherMap API** - Weather data source
- **CSS3** - Styling with dynamic background classes
- **ESLint** - Code linting and formatting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

## 🚀 Getting Started

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Enter a city name and click "Get Weather"

## 📁 Project Structure

```
weather-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css          # Main application styles
│   ├── App.jsx          # Main application component
│   ├── Weather.jsx      # Weather display component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── .env                 # Environment variables (create this)
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features Breakdown

### Dynamic Backgrounds
The app automatically changes its background based on weather conditions:
- ☀️ **Sunny**: Clear sky backgrounds
- ☁️ **Cloudy**: Overcast sky backgrounds  
- 🌧️ **Rainy**: Rainy weather backgrounds
- ❄️ **Snowy**: Winter snow backgrounds
- ⛈️ **Stormy**: Thunderstorm backgrounds

### Weather Information Display
- Current temperature in Celsius
- Weather description
- Humidity percentage
- Wind speed in m/s
- City name

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

This app uses the OpenWeatherMap API to fetch weather data:
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: City name, API key, metric units
- **Response**: Current weather data including temperature, humidity, wind speed, and weather conditions

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Select source as "GitHub Actions" or "Deploy from a branch"

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variable: `VITE_WEATHER_API_KEY`

### Vercel
1. Import your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_WEATHER_API_KEY`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues

If you find any bugs or have suggestions, please open an issue on GitHub.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

---

⭐ **Star this repository if you found it helpful!**
