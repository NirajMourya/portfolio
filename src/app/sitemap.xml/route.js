import { projectsData, siteMeta } from "@/lib/siteData";

export async function GET() {
  const baseUrl = siteMeta.url;

  const staticPages = [
    { path: "/", priority: 1.0, changefreq: "weekly" },
    { path: "/#about", priority: 0.8, changefreq: "monthly" },
    { path: "/#projects", priority: 0.9, changefreq: "weekly" },
    { path: "/#contact", priority: 0.8, changefreq: "monthly" },
  ];

  const projectPages = projectsData.map((project) => ({
    path: `/#projects?id=${project.id}`,
    priority: 0.7,
    changefreq: "monthly",
  }));

  const allPages = [...staticPages, ...projectPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
