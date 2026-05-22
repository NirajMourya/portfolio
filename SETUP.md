# Project Setup & Development Guide

## Environment Configuration

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your environment variables:
   - `RESEND_API_KEY`: Get from [Resend Dashboard](https://resend.com)
   - `FROM_EMAIL`: Email address for sending contact form messages (must be verified in Resend)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Code Quality

### Formatting
```bash
# Format all files
npm run format

# Check formatting without changes
npm run format:check
```

### Linting
```bash
npm run lint
```

## Building

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── components/        # Page components
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   ├── not-found.jsx      # 404 page
│   ├── globals.css        # Global styles
├── lib/
│   ├── siteData.js        # Centralized site content & config
│   └── ErrorBoundary.jsx  # Error boundary component
├── components/
│   └── ErrorBoundary.jsx  # Error boundary for app

public/
├── robots.txt             # SEO crawler instructions
├── resume/                # Resume file
└── images/                # Images and assets
```

## Key Improvements Made

### ✅ Performance
- Image optimization in `next.config.mjs` (WebP, AVIF support)
- Compression enabled
- Removed X-Powered-By header

### ✅ SEO
- Dynamic `sitemap.xml` route
- `robots.txt` for crawler instructions
- Enhanced OpenGraph & Twitter metadata

### ✅ Maintainability
- Centralized content in `siteData.js`
- Code formatting with Prettier
- Fixed ProjectTag accessibility

### ✅ UX/Error Handling
- 404 page component
- Error boundary support
- Improved meta tags for mobile/social

### ✅ Developer Experience
- `.env.example` template
- `.prettierrc` configuration
- Formatter scripts in package.json

## Customization

### Updating Site Content
Edit `src/lib/siteData.js` to update:
- Site metadata
- Navigation links
- Hero section content
- About section & tabs
- Projects list
- Social links
- Footer content

### Adding New Projects
Add objects to `projectsData` array in `src/lib/siteData.js`:
```javascript
{
  id: 10,
  title: "Project Name",
  description: "Short description",
  image: "/images/projects/ProjectName.png",
  tags: ["All", "Web", "Mobile"],
  gitURL: "https://github.com/...",
  previewURL: "https://...",
}
```

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
Standard Next.js deployment. See [Next.js docs](https://nextjs.org/docs/deployment).

## Contributing

1. Create a feature branch
2. Make changes
3. Run `npm run format` to format code
4. Run `npm run lint` to check for errors
5. Test thoroughly before committing

## Troubleshooting

### Email not sending
- Verify `RESEND_API_KEY` is set correctly
- Check `FROM_EMAIL` is verified in Resend dashboard
- Review Resend API limits

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

## Performance Tips

- Keep project images under 200KB
- Use WebP format for images when possible
- Minimize animation complexity for mobile devices
- Test with Lighthouse: `npm run build && npm start` then audit in Chrome DevTools

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend Email API](https://resend.com/docs)
