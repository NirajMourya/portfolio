# Portfolio Website

A modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion. It presents skills, projects, and a contact form with email delivery via Resend.

## Installation

1. Clone the repository: `git clone https://github.com/NirajMourya/portfolio.git`
2. Navigate to the project directory: `cd portfolio`
3. Install the dependencies: `npm install`

## Usage

1. Create a `.env.local` file in the project root.
2. Add the following environment variables:

```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=you@yourdomain.com
```

3. Start the development server: `npm run dev`
4. Open your browser and visit `http://localhost:3000`

## Features

- Responsive landing page with animated hero and project gallery
- Filterable project cards with live previews and repository links
- Contact form sending email through the Resend API
- Mobile-friendly navigation overlay
- Local font loading for consistent typography

## Dependencies

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Resend
- Heroicons

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).