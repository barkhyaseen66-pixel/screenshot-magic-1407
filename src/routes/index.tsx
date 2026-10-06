import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero, QuestionSection, BookOverview, Scoreboard } from "@/components/sections/Opening";
import { Masks, JosephStory, Journey, QuietSpace, Freedom } from "@/components/sections/Story";
import { Author, Legacy, Praise, BuySection, Newsletter, Footer } from "@/components/sections/Closing";

const title = "Am I Enough? | Joseph Estes";
const description =
  "Explore Am I Enough? by Joseph Estes, a reflective journey through identity, achievement, faith, purpose, worth and the freedom to become who you were created to be.";

const schema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Am I Enough?",
  isbn: "978-1-963452-00-0",
  author: { "@type": "Person", name: "Joseph Estes" },
  publisher: { "@type": "Organization", name: "Collingwood Press" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <QuestionSection />
        <BookOverview />
        <Scoreboard />
        <Masks />
        <JosephStory />
        <Journey />
        <QuietSpace />
        <Freedom />
        <Author />
        <Legacy />
        <Praise />
        <BuySection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
