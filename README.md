# Connection AI Landing Page

A modern, responsive landing page for the Connection AI Chrome Extension.

## Features

- Modern, responsive design
- Interactive elements using vanilla JavaScript
- Showcases the Chrome extension's features and usage
- Dark theme that matches the extension's UI

## Getting Started

### Prerequisites

- Node.js (v14 or newer)

### Installation

1. Clone the repository or navigate to the landing-page directory if you already have the repository

```bash
cd landing-page
```

2. Install dependencies

```bash
npm install
```

### Running the Landing Page Locally

1. Start the development server

```bash
npm run dev
```

This will start a local development server at [http://localhost:3000](http://localhost:3000).

2. Alternatively, you can use the standard node server

```bash
npm start
```

## Project Structure

```
landing-page/
├── css/
│   └── styles.css       # Main stylesheet
├── images/              # Images, icons, and mockups
├── js/
│   └── main.js          # JavaScript functionality
├── 404.html             # 404 error page
├── index.html           # Main landing page
├── package.json         # Project dependencies
├── README.md            # This file
└── server.js            # Simple Node.js server for local testing
```

## Deployment

The landing page can be deployed to various hosting platforms like:

- GitHub Pages
- Netlify
- Vercel
- Any standard web hosting service

To prepare for production deployment:

1. Update any production URLs/links in the HTML files
2. Consider minifying CSS and JavaScript files for production

## Customization

- **Colors**: Edit the CSS variables in `css/styles.css` to change the color scheme
- **Content**: Update the text and features in `index.html`
- **Images**: Replace mockup images in the `images/` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details. 