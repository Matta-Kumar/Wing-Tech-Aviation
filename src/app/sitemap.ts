import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://site-two-eta-83.vercel.app";

const routes = [
  "",
  "/about",
  "/cpl",
  "/ame",
  "/cabin-crew",
  "/airport-management",
  "/eligibility",
  "/admissions",
  "/campus",
  "/career-pathways",
  "/faq",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
