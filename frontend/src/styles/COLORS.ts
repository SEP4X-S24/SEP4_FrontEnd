

export const COLORS = () => {
    const getComputedStyleValue = (property: any) => {
        return getComputedStyle(document.documentElement)
          .getPropertyValue(property)
          .trim();
      };

      
    return {
        
        black: getComputedStyleValue("--color-black"),
        white: getComputedStyleValue("--color-white"),
        gray1: getComputedStyleValue("--color-gray-1"),
        gray2: getComputedStyleValue("--color-gray-2"),
        gray3: getComputedStyleValue("--color-gray-3"),
        primaryDark: getComputedStyleValue("--color-primary-dark"),
        primary: getComputedStyleValue("--color-primary"),
        primary2: getComputedStyleValue("--color-primary-2"),
        primaryLight: getComputedStyleValue("--color-primary-light"),
        secondary: getComputedStyleValue("--color-secondary"),
        tertiary: getComputedStyleValue("--color-tertiary"),
        dangerLight: getComputedStyleValue("--color-danger-light"),
        info: getComputedStyleValue("--color-info"),
        infoLight: getComputedStyleValue("--color-info-light"),
        success: getComputedStyleValue("--color-success"),
        successLight: getComputedStyleValue("--color-success-light"),
    }
};
