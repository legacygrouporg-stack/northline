import { packages } from "@/lib/packages";
import { siteConfig } from "@/lib/site";

export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        founder: {
          "@type": "Person",
          name: siteConfig.owner,
        },
        areaServed: "Africa",
        serviceType: "Brand and launch systems",
      },
      ...packages.map((item) => ({
        "@type": "Offer",
        name: item.name,
        description: item.summary,
        price: item.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        url: `${siteConfig.url}/book?package=${item.slug}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
