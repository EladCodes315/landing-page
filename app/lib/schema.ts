export function generatePersonSchema(locale: "en" | "he") {
  const name = "Elad Ayaso";
  const baseUrl = "https://eaproductstudios.com";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: baseUrl,
    jobTitle:
      locale === "en"
        ? "MVP Builder & Product Engineer"
        : "מפתח MVP ומהנדס מוצר",
    description:
      locale === "en"
        ? "Building MVPs that turn ideas into real products. Helping early-stage startups go from idea to production."
        : "בונה אפליקציות ומערכות דיגיטליות לעסקים. ליווי מלא מרעיון ועד מוצר עובד.",
    sameAs: [
      "https://linkedin.com/in/eladayaso",
      "https://github.com/EladCodes315",
    ],
  };
}

export function generateServiceSchema(locale: "en" | "he") {
  const baseUrl = "https://eaproductstudios.com";

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "EA Product Studios",
    url: `${baseUrl}/${locale}`,
    description:
      locale === "en"
        ? "MVP development and product engineering services for early-stage startups. From idea to production-ready product."
        : "פיתוח MVP ושירותי הנדסת מוצר לסטארטאפים. מרעיון למוצר עובד בפרודקשן.",
    areaServed: "Worldwide",
    serviceType:
      locale === "en"
        ? "Software Development, MVP Building, Product Engineering"
        : "פיתוח תוכנה, בניית MVP, הנדסת מוצר",
    priceRange: "$$",
  };
}
