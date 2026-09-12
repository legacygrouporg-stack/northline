import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/about", "/book"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
  }));
}
