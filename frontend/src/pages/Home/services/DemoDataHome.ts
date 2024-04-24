export interface About {
  location: string;
  currentTemperature: number;
  currentWeather: string;
  timeChecked: string;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  windSpeed: number;
  rainChance: number;
}

export interface WeatherData {
  hourlyForecast: HourlyForecast[];
}

export interface SuggestionItem {
  itemType: string;
  description: string;
  icon: string;
}

export interface Suggestion {
  title: string;
  items: SuggestionItem[];
  chanceOfRain: number;
}

export interface ForecastSummary {
  date: Date;
  minTemperature: number;
  maxTemperature: number;
  humidity: number;
  rain: string; // Assuming rain is the type of precipitation which might still be a string e.g., "light rain"
}

export interface Table {
  forecastSummary: ForecastSummary[];
}

export const demoData = {
  About: {
    location: "Horsens",
    currentTemperature: 13,
    currentWeather: "Partly Cloudy",
    timeChecked: "Monday, 08:45 AM",
  },
  WeatherData: {
    hourlyForecast: [
      { time: "6 AM", temperature: 6, windSpeed: 20, rainChance: 23 },
      { time: "9 AM", temperature: 6, windSpeed: 20, rainChance: 23 },
      { time: "12 PM", temperature: 6, windSpeed: 20, rainChance: 23 },
      { time: "3 PM", temperature: 6, windSpeed: 20, rainChance: 23 },
      { time: "6 PM", temperature: 6, windSpeed: 20, rainChance: 23 },
      { time: "9 PM", temperature: 6, windSpeed: 20, rainChance: 23 },
      { time: "12 AM", temperature: 6, windSpeed: 20, rainChance: 23 },
      { time: "3 AM", temperature: 6, windSpeed: 20, rainChance: 23 },
    ],
  },
  Suggestion: {
    title: "Clothes for Rain",
    items: [
      {
        itemType: "Jacket",
        description: "Waterproof Jacket",
        icon: "jacket_icon_path",
      },
      {
        itemType: "Pants",
        description: "Water-Resistant Pants",
        icon: "pants_icon_path",
      },
      {
        itemType: "Shoes",
        description: "Waterproof Shoes",
        icon: "shoes_icon_path",
      },
    ],
    chanceOfRain: 50,
  },
  Table: {
    forecastSummary: [
      {
        date: new Date("2024-04-21T00:00:00Z"),
        minTemperature: 3,
        maxTemperature: 12,
        humidity: 67,
        rain: "light_rain_icon_path",
      },
      {
        date: new Date("2024-04-22T00:00:00Z"),
        minTemperature: 4,
        maxTemperature: 13,
        humidity: 65,
        rain: "light_rain_icon_path",
      },
      {
        date: new Date("2024-04-23T00:00:00Z"),
        minTemperature: 5,
        maxTemperature: 14,
        humidity: 60,
        rain: "moderate_rain_icon_path",
      },
      {
        date: new Date("2024-04-24T00:00:00Z"),
        minTemperature: 6,
        maxTemperature: 15,
        humidity: 58,
        rain: "heavy_rain_icon_path",
      },
    ],
  },
};
