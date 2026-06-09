export const stripHtml = (value: string) =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const createFaqSchema = (id: string, faqs: readonly (readonly string[])[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": id,
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: stripHtml(answer)
    }
  }))
});

export const createServiceSchema = ({
  id,
  name,
  description,
  url,
  providerId = "https://evoluxwebdesign.co.uk/#localbusiness",
  areaServed = "United Kingdom"
}: {
  id: string;
  name: string;
  description: string;
  url: string;
  providerId?: string;
  areaServed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": id,
  name,
  description,
  url,
  provider: { "@id": providerId },
  areaServed
});
