export const stripHtml = (value: string) =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const formatHtmlParagraphs = (value: string) => {
  if (/<(p|ul|ol|blockquote)\b/i.test(value)) return value;

  return value
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
};

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
