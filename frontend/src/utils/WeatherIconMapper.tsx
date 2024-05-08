import { IconType } from "react-icons";
import * as Icon from "react-icons/wi";

const weatherIconMapper = new Map<string, IconType>();

weatherIconMapper.set("DaySunny", Icon.WiDaySunny);
weatherIconMapper.set("NightClear", Icon.WiNightClear);
weatherIconMapper.set("DayCloudy", Icon.WiDayCloudy);
weatherIconMapper.set("NightCloudy", Icon.WiNightCloudy);
weatherIconMapper.set("DayRain", Icon.WiDayRain);
weatherIconMapper.set("NightRain", Icon.WiNightRain);
weatherIconMapper.set("DayThunderstorm", Icon.WiDayThunderstorm);
weatherIconMapper.set("NightThunderstorm", Icon.WiNightThunderstorm);
weatherIconMapper.set("DaySnow", Icon.WiDaySnow);
weatherIconMapper.set("NightSnow", Icon.WiNightSnow);
weatherIconMapper.set("DaySleet", Icon.WiDaySleet);
weatherIconMapper.set("NightSleet", Icon.WiNightSleet);
weatherIconMapper.set("DayHail", Icon.WiDayHail);
weatherIconMapper.set("NightHail", Icon.WiNightHail);
weatherIconMapper.set("DayFog", Icon.WiDayFog);
weatherIconMapper.set("NightFog", Icon.WiNightFog);
weatherIconMapper.set("DayCloudyGusts", Icon.WiDayCloudyGusts);
weatherIconMapper.set("NightCloudyGusts", Icon.WiNightCloudyGusts);
weatherIconMapper.set("NightPartlyCloudy", Icon.WiNightPartlyCloudy);
weatherIconMapper.set("DayWindy", Icon.WiDayWindy);
weatherIconMapper.set("DayHaze", Icon.WiDayHaze);
weatherIconMapper.set("DayLightning", Icon.WiDayLightning);
weatherIconMapper.set("NightLightning", Icon.WiNightLightning);
weatherIconMapper.set("DayRainMix", Icon.WiDayRainMix);
weatherIconMapper.set("NightRainMix", Icon.WiNightRainMix);

export default weatherIconMapper;
