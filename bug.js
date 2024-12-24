```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // Example custom color
      },
    },
  },
  plugins: [],
};
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Issue</title>
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <div class="bg-custom-blue p-4">
    <p>This should be blue!</p>
  </div>
</body>
</html>
```