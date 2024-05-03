

export const COLORS = () => {
    const getComputedStyleValue = (property: any) => {
        return getComputedStyle(document.documentElement)
          .getPropertyValue(property)
          .trim();
      };

      
    return {
        
        black: getComputedStyleValue("--color-black"),
        white: getComputedStyleValue("--color-white"),
        primaryDark: getComputedStyleValue("--color-primary-dark"),
        primary: getComputedStyleValue("--color-primary"),
        secondary: getComputedStyleValue("--color-secondary"),
        tertiary: getComputedStyleValue("--color-tertiary")
    }
};
