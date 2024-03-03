import config from "../config";

export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${config.site.url}/sitemap-index.xml
`,
    {
      status: 200,
    },
  );
}
