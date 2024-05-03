
import { IconType } from 'react-icons';
import * as Icon from "react-icons/wi";

interface WeatherIconMapper {
    [key: string]: IconType;
  }

  
  const weatherIconMapper: WeatherIconMapper = {
    "DaySunny": Icon.WiDaySunny,
    "NightClear": Icon.WiNightClear,
    "DayCloudy": Icon.WiDayCloudy,
    "NightCloudy": Icon.WiNightCloudy,
    "DayRain": Icon.WiDayRain,
    "NightRain": Icon.WiNightRain,
    "DayThunderstorm": Icon.WiDayThunderstorm,
    "NightThunderstorm": Icon.WiNightThunderstorm,
    "DaySnow": Icon.WiDaySnow,
    "NightSnow": Icon.WiNightSnow,
    "DaySleet": Icon.WiDaySleet,
    "NightSleet": Icon.WiNightSleet,
    "DayHail": Icon.WiDayHail,
    "NightHail": Icon.WiNightHail,
    "DayFog": Icon.WiDayFog,
    "NightFog": Icon.WiNightFog,
    "DayCloudyGusts": Icon.WiDayCloudyGusts,
    "NightCloudyGusts": Icon.WiNightCloudyGusts,
    "NightPartlyCloudy": Icon.WiNightPartlyCloudy,
    "DayWindy": Icon.WiDayWindy,
    "DayHaze": Icon.WiDayHaze,
    "DayLightning": Icon.WiDayLightning,
    "NightLightning": Icon.WiNightLightning,
    "DayRainMix": Icon.WiDayRainMix,
    "NightRainMix": Icon.WiNightRainMix,
  };
  
  export default weatherIconMapper;
