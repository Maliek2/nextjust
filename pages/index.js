import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Google Amp Help Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Malic News " />
        <hr />
        <p className="description">
          AMP's development workflow
Start
Building a 'Hello World' page and try adding your first interactive feature to an AMP page.

Create your AMP HTML page
Integrate
Combine your pages with non-AMP pages, a PWA, native apps and more.

Integrate AMP with your app
Learn
Get to know how AMP is different and acquire the fundamentals for how AMP works.

AMP HTML Specification
Optimize & Measure
Make more out of your AMP pages through analytics, optimal delivery and caching.

Configure analytics
Develop
Create every content, layout, and feature your website needs.

Style & layout

        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
