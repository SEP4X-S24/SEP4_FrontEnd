export interface SuggestionItem {
  itemType: string;
  description: string;
  icon: string;
}

export default interface Suggestion {
  title: string;
  items: SuggestionItem[];
  chanceOfRain: number;
}
