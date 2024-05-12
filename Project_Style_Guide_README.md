
# Project Style Guide 🎨

This README provides the styling conventions and guidelines for our project. It's crucial for maintaining a cohesive and consistent appearance throughout our application. All team members are encouraged to adhere to these guidelines.

## Color Palette 🖌️

Our application uses a specific set of colors to maintain consistency and brand identity. Here is the primary color palette:

- **Primary Color**: `#007BFF` (Blue)
- **Secondary Color**: `#6C757D` (Gray)
- **Accent Color**: `#28A745` (Green)
- **Error Color**: `#DC3545` (Red)
- **Warning Color**: `#FFC107` (Yellow)

## Typography 📜

Typography is crucial in maintaining a clean and accessible interface. We use the following typefaces:

- **Primary Font**: 'Roboto', sans-serif
- **Headings**: 'Montserrat', sans-serif
- **Code or Monospace**: 'Source Code Pro', monospace

Font sizes for various elements are standardized as follows:

- **Headers**:
  - `H1`: 32px
  - `H2`: 24px
  - `H3`: 18.72px
  - `H4`: 16px
  - `H5`: 13.28px
  - `H6`: 10.72px
- **Body Text**: 16px
- **Captions & Overlines**: 12px

## Spacing and Layout 📐

Consistency in spacing creates rhythm and improves the visual compositions of our layouts:

- **Standard Margin and Padding**:
  - `Small (s)`: 8px
  - `Medium (m)`: 16px
  - `Large (l)`: 24px
  - `Extra Large (xl)`: 32px

Grid systems and flex layouts should follow these spacing units.

## Buttons and Interactive Elements 👆

- **Primary Button**:
  - Background: `#007BFF`
  - Color: `#FFFFFF`
- **Secondary Button**:
  - Border: `1px solid #6C757D`
  - Color: `#6C757D`
- **Hover and Active States**:
  - Darken the background color by 10% for hover states.
  - Darken the background color by 20% for active states.

Ensure interactive elements have clear visual feedback.

## Icons and Images 📷

- Icons should be used consistently and be of the same style throughout the app.
- Images should be high-quality and serve to enhance the user interface, not detract from it.

## CSS and Component Styling 💅

- Use CSS Modules or Styled Components to avoid style leakage.
- Name CSS classes using BEM (Block Element Modifier) methodology for easy readability and maintenance.

## Example Component Styling

Here’s an example of a Button component styled using our guidelines:

```jsx
import React from 'react';
import './Button.css'; // Assuming CSS Module usage

const Button = ({ label, primary }) => {
  const className = primary ? 'button button--primary' : 'button button--secondary';
  return <button className={className}>{label}</button>;
};

export default Button;
```

```css
/* Button.css */
.button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
}

.button--primary {
  background-color: #007BFF;
  color: white;
}

.button--primary:hover {
  background-color: darken(#007BFF, 10%);
}

.button--secondary {
  background-color: transparent;
  border: 1px solid #6C757D;
  color: #6C757D;
}

.button--secondary:hover {
  background-color: #f8f9fa;
}
```

## Getting Started with Styling 🚀

To apply these styles:

1. Clone the design assets repository:
   ```bash
   git clone <design-assets-url>
   ```
2. Import the global style file into your project to ensure all base styles are loaded:
   ```javascript
   import './styles/global.css';
   ```

This README is a dynamic document; as our application evolves, please ensure to update these guidelines to reflect any new styles or changes.

---
