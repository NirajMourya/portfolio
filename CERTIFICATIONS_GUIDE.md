# Certifications & Trainings Section

The portfolio now includes a dedicated certifications section to showcase your professional certifications and trainings.

## File Structure

```
public/
├── images/
│   └── certifications/        # Store certification images here
│       ├── react-cert.jpg
│       ├── js-advanced.jpg
│       └── ...
└── certifications/            # Store PDF certificates here
    ├── full-stack-cert.pdf
    └── ...
```

## Adding Certifications

Edit `src/lib/siteData.js` and add to the `certificationsData` array:

### For Image Certificates
```javascript
{
  id: 1,
  title: "React Certification",
  issuer: "Udemy",
  date: "2023",
  type: "image",
  src: "/images/certifications/react-cert.jpg",
  alt: "React Certification",
  link: "https://www.udemy.com",
}
```

### For PDF Certificates
```javascript
{
  id: 2,
  title: "Full Stack Development",
  issuer: "Coursera",
  date: "2022",
  type: "pdf",
  src: "/certifications/full-stack-cert.pdf",
  link: "https://www.coursera.org",
}
```

## Field Descriptions

- **id**: Unique identifier for the certification
- **title**: Name of the certification
- **issuer**: Organization or platform that issued the certification
- **date**: Year or date of completion
- **type**: Either `"image"` or `"pdf"`
- **src**: Path to the image/PDF file
- **alt**: Alt text for images (for accessibility)
- **link**: URL to the certification course or issuer page

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: 800x600px or larger
- **File Size**: Keep under 300KB for optimal performance
- **Content**: Use high-contrast, legible images
- **Location**: `public/images/certifications/`

## PDF Guidelines

- **Format**: PDF only
- **File Size**: Keep under 5MB
- **Naming**: Use descriptive names (e.g., `react-advanced-cert.pdf`)
- **Location**: `public/certifications/`

## Navigation

The certifications section is now accessible via:
- Direct link: `yourdomain.com/#certifications`
- Navigation menu: "Certifications" link added to navbar
- Automatic section display between Projects and Contact sections

## Styling

The section automatically:
- Displays in a responsive grid (1 column on mobile, 2 on tablet, 3 on desktop)
- Shows hover effects with scale and overlay
- Has smooth animations when scrolled into view
- Matches the portfolio's dark theme and color scheme

## Tips

1. Add 3-6 certifications for best visual balance
2. Order certifications by relevance or recency
3. Use consistent sizing for images
4. Keep issuer names short and recognizable
5. Test PDF links work correctly when deployed

## Customization

To customize the section:
- Edit title and description in `CertificationSection.jsx`
- Modify grid columns in the className (change `lg:grid-cols-3`)
- Adjust card styling in `CertificationCard.jsx`
- Change animation timing in `CertificationSection.jsx` variants

## Example Complete Entry

```javascript
{
  id: 1,
  title: "Full Stack Web Development",
  issuer: "The Complete JavaScript Course",
  date: "2023",
  type: "image",
  src: "/images/certifications/fullstack-2023.jpg",
  alt: "Full Stack Web Development Certificate",
  link: "https://www.udemy.com/course/the-complete-javascript-course-2023-from-zero-to-expert/",
},
{
  id: 2,
  title: "AWS Solutions Architect",
  issuer: "Amazon Web Services",
  date: "2024",
  type: "pdf",
  src: "/certifications/aws-solutions-architect.pdf",
  link: "https://aws.amazon.com/certification/",
}
```
