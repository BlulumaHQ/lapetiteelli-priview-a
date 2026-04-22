import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { EditorialReveal, HeroReveal, OrderButton, SEO, SectionLabel, siteMeta } from "@/components/site";
import aboutGalleryOne from "@/assets/about-gallery-1.jpg";
import aboutGalleryTwo from "@/assets/about-gallery-2.jpg";
import dailyStrip from "@/assets/daily-strip.jpg";
import eveningStrip from "@/assets/evening-strip.jpg";
import heroEditorialSmooth from "@/assets/hero-editorial-smooth.mp4.asset.json";
import heroPourOver from "@/assets/hero-pour-over.jpg";
import morningStrip from "@/assets/morning-strip.jpg";
import philosophyBeans from "@/assets/philosophy-beans.jpg";
import { coffeeSeries, coffees, getCoffeeBySlug } from "@/data/coffees";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, Minus } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

const heroVideo = heroEditorialSmooth.url;

type Coffee = (typeof coffees)[number];
type Faq = (typeof faqs)[number];

const featuredCollections = [
  {
    title: "Morning Rituals",
    description: "Luminous cups for early light, paperbacks left open, and first thoughts before the world arrives.",
    image: morningStrip,
    href: "/collection",
  },
  {
    title: "Daily Objects",
    description: "Coffee as an object of atmosphere — balanced, tactile, and designed to live beautifully on the shelf.",
    image: dailyStrip,
    href: "/shop",
  },
  {
    title: "Evening Studies",
    description: "Deeper roasts and quieter moods, intended for reflective rooms and long, unhurried conversations.",
    image: eveningStrip,
    href: "/journal",
  },
] as const;

const journalEntries = [
  {
    title: "Rooms for Slow Coffee",
    category: "Journal",
    description: "How light, ceramics, and silence shape the taste of a morning cup.",
    image: dailyStrip,
  },
  {
    title: "On Founder Heritage",
    category: "Art",
    description: "The paintings of Elli's father and the emotional language they bring to the brand.",
    image: aboutGalleryTwo,
  },
  {
    title: "Packaging as Keepsake",
    category: "Objects",
    description: "Why the outer shell should feel collected, not merely purchased.",
    image: morningStrip,
  },
] as const;

const galleryWorks = [
  {
    title: "Studies in Earth Tone",
    subtitle: "Founder's family archive",
    image: aboutGalleryOne,
  },
  {
    title: "Quiet Interior",
    subtitle: "Oil, paper, memory",
    image: philosophyBeans,
  },
  {
    title: "Hands at Work",
    subtitle: "Process as ritual",
    image: aboutGalleryTwo,
  },
] as const;

const merchandisingNotes = [
  "Coffee releases",
  "Found objects",
  "Table pieces",
  "Printed matter",
] as const;

export function HomePage() {
  const featuredProducts = coffees.slice(0, 4);

  return (
    <>
      <SEO
        title="la petite.elli — A quiet luxury in everyday rituals"
        description="An editorial boutique world of coffee, art, objects, and lifestyle pieces shaped with quiet luxury and refined daily rituals."
      />

      <section className="relative flex min-h-screen items-end overflow-hidden bg-background">
        <video
          className="absolute inset-0 h-full w-full scale-[1.015] object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroPourOver}
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="container-editorial relative z-10 w-full pb-16 pt-32 md:pb-24 md:pt-40">
          <HeroReveal className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.55fr)] lg:items-end">
            <div className="max-w-[760px] space-y-6 text-primary-foreground">
              <SectionLabel>Vancouver · Est. 2009</SectionLabel>
              <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-[0.01em] md:text-[7rem] lg:text-[8rem]">
                la petite.elli
              </h1>
              <p className="max-w-[520px] font-serif text-2xl font-light italic leading-[1.35] text-primary-foreground/88 md:text-3xl">
                A quiet luxury in everyday rituals
              </p>
              <div className="flex flex-col gap-4 pt-3 sm:flex-row">
                <Button variant="editorialPrimary" size="editorial" asChild>
                  <Link to="/collection">
                    Explore Collection <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="editorialGhost" size="editorial" asChild>
                  <Link to="/shop">
                    Enter the Shop <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="justify-self-end border-l border-primary-foreground/30 pl-6 text-sm leading-7 text-primary-foreground/78">
              <p className="max-w-[260px]">
                From coffee into a broader boutique language — objects, art, and pieces for the table, shelf, and room.
              </p>
            </div>
          </HeroReveal>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[720px] space-y-4">
              <SectionLabel>Featured Collection</SectionLabel>
              <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
                An editorial boutique built around atmosphere, not urgency.
              </h2>
            </div>
            <Link to="/shop" className="editorial-link text-sm uppercase tracking-[0.16em] text-ink-primary">
              View all collections <ArrowRight className="h-4 w-4" />
            </Link>
          </EditorialReveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredCollections.map((collection, index) => (
              <EditorialReveal key={collection.title} delay={index * 0.06}>
                <Link to={collection.href} className="group block space-y-4">
                  <div className="overflow-hidden bg-surface shadow-soft">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2 border-t border-border pt-4">
                    <h3 className="font-serif text-3xl font-light text-ink-primary">{collection.title}</h3>
                    <p className="max-w-[34ch] text-sm leading-7 text-ink-body">{collection.description}</p>
                  </div>
                </Link>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-surface">
        <div className="container-editorial grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.05fr)] lg:gap-18">
          <EditorialReveal className="space-y-6">
            <SectionLabel>Brand Story</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              Begun as a coffee house of feeling, evolving into a boutique language of living.
            </h2>
            <div className="space-y-5 text-base leading-[1.9] text-ink-body md:text-[17px]">
              <p>
                la petite.elli started with roasted coffee, but the heart of it has always been larger: a way of arranging daily life with tenderness, restraint, and depth.
              </p>
              <p>
                The cup came first. Then the shelf around it, the linen beneath it, the inherited painting on the wall, the object kept because it altered the atmosphere of a room.
              </p>
              <p className="font-serif text-[1.2em] font-light italic leading-[1.6] text-ink-primary">
                This is not a coffee shop website. It is a small editorial world for people who care how living feels.
              </p>
            </div>
            <Link to="/about" className="editorial-link text-sm uppercase tracking-[0.16em] text-ink-primary">
              Read the story <ArrowRight className="h-4 w-4" />
            </Link>
          </EditorialReveal>

          <EditorialReveal>
            <figure className="tint-panel overflow-hidden p-4 md:p-6">
              <img
                src={philosophyBeans}
                alt="Textural still life representing the tactile brand story of la petite.elli"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </figure>
          </EditorialReveal>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="max-w-[720px] space-y-4">
            <SectionLabel>Product Showcase</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              Packaging artwork designed to feel collected, held, and kept.
            </h2>
          </EditorialReveal>

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((coffee, index) => (
              <EditorialReveal key={coffee.slug} delay={index * 0.05}>
                <ProductCard coffee={coffee} />
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-strong">
        <div className="container-editorial grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <EditorialReveal className="space-y-5">
            <SectionLabel>Art / Heritage</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              Paintings by the founder&apos;s father remain part of the brand&apos;s emotional architecture.
            </h2>
            <p className="max-w-[40ch] text-base leading-[1.85] text-ink-body">
              They inform the palette, the pacing, and the sense that each release belongs as much to an exhibition wall as to a pantry shelf.
            </p>
          </EditorialReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {galleryWorks.map((work, index) => (
              <EditorialReveal key={work.title} delay={index * 0.05}>
                <figure className="space-y-3">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="space-y-1 border-t border-border pt-3">
                    <p className="font-serif text-2xl font-light text-ink-primary">{work.title}</p>
                    <p className="text-sm text-ink-muted">{work.subtitle}</p>
                  </figcaption>
                </figure>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-editorial grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
          <EditorialReveal className="space-y-4">
            <SectionLabel>Journal / Lifestyle</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              Notes from a slower, more cultivated domestic life.
            </h2>
          </EditorialReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {journalEntries.map((entry, index) => (
              <EditorialReveal key={entry.title} delay={index * 0.04}>
                <article className="space-y-4">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="space-y-2 border-t border-border pt-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">{entry.category}</p>
                    <h3 className="font-serif text-3xl font-light text-ink-primary">{entry.title}</h3>
                    <p className="text-sm leading-7 text-ink-body">{entry.description}</p>
                  </div>
                </article>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ShopPage() {
  return (
    <>
      <SEO title="Shop — la petite.elli" description="Browse coffee, future objects, and boutique collections curated with an editorial eye." />
      <section className="section-space bg-background">
        <div className="container-editorial space-y-10">
          <EditorialReveal className="max-w-[840px] space-y-4">
            <SectionLabel>Shop</SectionLabel>
            <h1 className="font-serif text-6xl font-light leading-[1.02] tracking-tight text-ink-primary md:text-8xl">
              Coffee now. Objects, art, and lifestyle pieces next.
            </h1>
            <p className="max-w-[620px] font-serif text-2xl font-light italic leading-[1.5] text-ink-body">
              A boutique catalogue where the cup is the beginning, not the end.
            </p>
          </EditorialReveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <EditorialReveal className="tint-panel p-8 md:p-10">
              <div className="space-y-5">
                <p className="editorial-kicker">Collection Notes</p>
                <ul className="space-y-4">
                  {merchandisingNotes.map((note) => (
                    <li key={note} className="flex items-center gap-3 text-base text-ink-body">
                      <Minus className="h-4 w-4 text-ink-muted" /> {note}
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-7 text-ink-muted">
                  Phase one focuses on the coffee collection while introducing the future shape of the brand.
                </p>
              </div>
            </EditorialReveal>

            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
              {coffees.map((coffee, index) => (
                <EditorialReveal key={coffee.slug} delay={index * 0.03}>
                  <ProductCard coffee={coffee} />
                </EditorialReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function CollectionPage() {
  return (
    <>
      <SEO
        title="Collections — la petite.elli"
        description="Explore the core coffee collection through an editorial catalogue of morning, daily, and evening releases."
      />
      <section className="section-space bg-background">
        <div className="container-editorial space-y-16">
          <EditorialReveal className="max-w-[820px] space-y-4">
            <SectionLabel>Collections</SectionLabel>
            <h1 className="font-serif text-6xl font-light leading-[1.02] tracking-tight text-ink-primary md:text-8xl">
              A catalogue of moods, rooms, and hours of the day.
            </h1>
            <p className="max-w-[680px] font-serif text-2xl font-light italic leading-[1.5] text-ink-body">
              Morning clarity, daily ease, evening depth — arranged as an editorial sequence rather than a conventional menu.
            </p>
          </EditorialReveal>

          <div className="flex flex-wrap gap-5 border-t border-b border-border py-4 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {coffeeSeries.map((series) => (
              <span key={series}>{series}</span>
            ))}
          </div>

          <div className="space-y-24 md:space-y-32">
            {coffees.map((coffee, index) => (
              <EditorialReveal key={coffee.slug} delay={index * 0.03}>
                <EditorialProductRow coffee={coffee} reverse={index % 2 === 1} />
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function CoffeeDetailPage({ slug }: { slug: string }) {
  const coffee = getCoffeeBySlug(slug);

  if (!coffee) {
    return (
      <section className="section-space bg-background">
        <div className="container-editorial text-center">
          <SectionLabel>Not Found</SectionLabel>
          <h1 className="mt-4 font-serif text-5xl font-light text-ink-primary">This release is no longer in the room.</h1>
          <div className="mt-8">
            <Button variant="editorialPrimary" size="editorial" asChild>
              <Link to="/collection">Back to Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const related = coffees.filter((item: Coffee) => item.series === coffee.series && item.slug !== coffee.slug).slice(0, 3);
  const accentStyle = { "--coffee-accent": coffee.accentColor } as CSSProperties;

  return (
    <>
      <SEO title={`${coffee.nameEn} — la petite.elli`} description={`${coffee.tagline} ${coffee.flavorProfile}`} />
      <section className="section-space bg-background" style={accentTint(coffee.accentColor)}>
        <div className="container-editorial grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.8fr)] lg:gap-20">
          <EditorialReveal className="space-y-6">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              <span className="inline-block h-2.5 w-10" style={{ backgroundColor: coffee.accentColor }} />
              {coffee.series} · {coffee.type}
            </div>
            <h1 className="font-serif text-6xl font-light leading-[1.02] tracking-tight text-ink-primary md:text-8xl">{coffee.nameEn}</h1>
            <p className="font-serif text-3xl font-light italic text-ink-body md:text-4xl">{coffee.nameZh}</p>
            <p className="text-sm uppercase tracking-[0.15em] text-ink-muted">
              {coffee.origin} · {coffee.roast} · {coffee.weight}
            </p>
            <p className="max-w-[520px] font-serif text-3xl font-light italic leading-tight text-ink-primary md:text-4xl">“{coffee.tagline}”</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <OrderButton>Order via LINE <ArrowRight className="h-4 w-4" /></OrderButton>
              <Button variant="editorialGhost" size="editorial" asChild>
                <Link to="/collection">
                  <ArrowLeft className="h-4 w-4" /> Back to Collection
                </Link>
              </Button>
            </div>
          </EditorialReveal>

          <EditorialReveal>
            <div className="tint-panel p-8 md:p-12">
              <CoffeePackage coffee={coffee} large />
            </div>
          </EditorialReveal>
        </div>
      </section>

      <section className="section-space bg-surface">
        <div className="container-editorial grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <EditorialReveal className="space-y-6" style={accentStyle}>
            <SectionLabel>Flavor Profile</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {coffee.flavorTags.map((tag: string) => (
                <span key={tag} className="border px-4 py-2 text-sm uppercase tracking-[0.12em] text-ink-primary" style={{ borderColor: coffee.accentColor }}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="space-y-3 text-sm leading-7 text-ink-muted">
              <p><span className="text-ink-primary">Aroma</span> — {coffee.aroma}</p>
              <p><span className="text-ink-primary">Body</span> — {coffee.body}</p>
              <p><span className="text-ink-primary">Finish</span> — {coffee.finish}</p>
            </div>
          </EditorialReveal>
          <EditorialReveal>
            <p className="font-serif text-3xl font-light italic leading-[1.45] text-ink-primary md:text-4xl">{coffee.flavorProfile}</p>
          </EditorialReveal>
        </div>
      </section>

      <section className="bg-background py-8 md:py-12">
        <EditorialReveal className="container-editorial">
          <div className="mx-auto max-w-[760px] border border-border bg-surface p-8 md:p-12">
            <SpecRow label="Origin" value={coffee.origin} />
            <SpecRow label="Roast" value={coffee.roast.replace(" Roast", "")} />
            <SpecRow label="Body & Acidity" value={coffee.body} />
            <SpecRow label="Finish" value={coffee.finish} />
          </div>
        </EditorialReveal>
      </section>

      <section className="section-space bg-background">
        <EditorialReveal className="container-editorial mx-auto max-w-[760px]">
          <SectionLabel>The Moment</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-light italic text-ink-primary md:text-4xl">{coffee.storyTitle}</h2>
          <div className="mt-6 space-y-5 text-base leading-[1.9] text-ink-body md:text-[17px]">
            {coffee.story.split("\n\n").map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </EditorialReveal>
      </section>

      <section className="section-space bg-surface-strong">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="mx-auto max-w-[620px] text-center">
            <SectionLabel>Best Enjoyed</SectionLabel>
            <p className="mt-4 font-serif text-3xl font-light italic leading-tight text-ink-primary md:text-4xl">{coffee.bestEnjoyed}</p>
          </EditorialReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item: Coffee) => (
              <EditorialReveal key={item.slug}>
                <Link to="/collection/$slug" params={{ slug: item.slug }} className="block space-y-4 border-t border-border pt-4">
                  <div className="h-1 w-16" style={{ backgroundColor: item.accentColor }} />
                  <p className="font-serif text-2xl font-light text-ink-primary">{item.nameEn}</p>
                  <p className="font-serif text-lg italic text-ink-body">{item.nameZh}</p>
                </Link>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <SEO title="About — la petite.elli" description="The evolving story of a Vancouver boutique brand shaped by coffee, art, and quiet domestic rituals." />
      <section className="section-space bg-background">
        <EditorialReveal className="container-editorial max-w-[900px] space-y-5">
          <SectionLabel>About</SectionLabel>
          <h1 className="font-serif text-6xl font-light leading-[1.02] tracking-tight text-ink-primary md:text-8xl">
            A boutique brand that began with coffee and kept listening to the room around it.
          </h1>
        </EditorialReveal>
      </section>

      <section className="bg-background pb-12">
        <EditorialReveal className="container-editorial mx-auto max-w-[760px] space-y-5 text-base leading-[1.9] text-ink-body md:text-[17px]">
          <p className="font-serif text-[1.12em] font-light italic text-ink-primary first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-none">
            la petite.elli began in 2009 with roasting, but its deeper subject has always been atmosphere.
          </p>
          <p>
            What made the early coffee memorable was never only flavor. It was the feeling of a cup placed well, packaging that lived beautifully in a kitchen, and the slower values that gathered around it.
          </p>
          <p>
            The brand now expands carefully into a broader boutique concept — coffee, objects, lifestyle goods, printed matter, and art — while remaining faithful to restraint, warmth, and editorial clarity.
          </p>
          <p>
            Paintings by the founder&apos;s father are a constant source of tone and proportion: muted colors, measured space, and an understanding that feeling often arrives through texture before language.
          </p>
          <p>
            His work can be viewed at{" "}
            <a
              href="https://johnlinart.ca/Art"
              target="_blank"
              rel="noreferrer"
              className="editorial-link text-ink-primary"
            >
              johnlinart.ca/Art
            </a>
            , and it remains one of the clearest references for the emotional world behind la petite.elli.
          </p>
          <p>
            We also operate{" "}
            <a href="https://bluluma.com/" target="_blank" rel="noreferrer" className="editorial-link text-ink-primary">
              Bluluma
            </a>
            , our visual design studio, where we bring the same editorial restraint and brand sensitivity to creative direction, websites, and identity systems.
          </p>
        </EditorialReveal>
      </section>

      <section className="section-space bg-surface">
        <div className="container-editorial grid gap-6 md:grid-cols-2 xl:grid-cols-[1.15fr_0.85fr_0.85fr]">
          {galleryWorks.map((item, index) => (
            <EditorialReveal key={item.title} delay={index * 0.04}>
              <figure className="space-y-3">
                <img src={item.image} alt={item.title} className="aspect-[4/5] w-full object-cover" loading="lazy" />
                <figcaption className="text-sm text-ink-muted">{item.subtitle}</figcaption>
              </figure>
            </EditorialReveal>
          ))}
        </div>

        <EditorialReveal className="container-editorial mt-12 max-w-[760px] space-y-4 border-t border-border pt-8">
          <SectionLabel>Art & Studio</SectionLabel>
          <p className="text-base leading-[1.9] text-ink-body md:text-[17px]">
            The art heritage behind the brand continues through Elli&apos;s father&apos;s paintings, which you can explore at{" "}
            <a href="https://johnlinart.ca/Art" target="_blank" rel="noreferrer" className="editorial-link text-ink-primary">
              johnlinart.ca/Art
            </a>
            . Alongside the brand, we also run{" "}
            <a href="https://bluluma.com/" target="_blank" rel="noreferrer" className="editorial-link text-ink-primary">
              Bluluma
            </a>
            , a professional visual design studio focused on thoughtful digital and brand work.
          </p>
        </EditorialReveal>
      </section>
    </>
  );
}

export function JournalPage() {
  return (
    <>
      <SEO title="Journal — la petite.elli" description="Editorial notes on coffee culture, interiors, art, and the slow rituals of living well." />
      <section className="section-space bg-background">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="max-w-[820px] space-y-4">
            <SectionLabel>Journal</SectionLabel>
            <h1 className="font-serif text-6xl font-light leading-[1.02] tracking-tight text-ink-primary md:text-8xl">
              Essays, interiors, culture, and the afterlife of a good cup.
            </h1>
          </EditorialReveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <EditorialReveal>
              <img src={dailyStrip} alt="Editorial still life for the journal" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            </EditorialReveal>
            <div className="grid gap-10">
              {journalEntries.map((entry, index) => (
                <EditorialReveal key={entry.title} delay={index * 0.04}>
                  <article className="grid gap-5 border-t border-border pt-5 md:grid-cols-[160px_1fr]">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">{entry.category}</p>
                    <div className="space-y-2">
                      <h2 className="font-serif text-3xl font-light text-ink-primary">{entry.title}</h2>
                      <p className="max-w-[52ch] text-base leading-[1.8] text-ink-body">{entry.description}</p>
                    </div>
                  </article>
                </EditorialReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function OrderPage() {
  const orderSteps = [
    ["01", "Join the LINE group", "Enter the community channel to see current releases, order windows, and quiet product notes."],
    ["02", "Request your selection", "Choose the coffee or collection pieces that suit the mood of your home and routine."],
    ["03", "Confirm delivery or pickup", "We reply personally to arrange fulfillment in a way that stays small, careful, and direct."],
  ] as const;

  return (
    <>
      <SEO title="Order — la petite.elli" description="Join the LINE ordering community for small-batch releases and direct boutique ordering." />
      <section className="section-space bg-background">
        <EditorialReveal className="container-editorial max-w-[820px] space-y-4">
          <SectionLabel>Ordering</SectionLabel>
          <h1 className="font-serif text-6xl font-light leading-[1.02] tracking-tight text-ink-primary md:text-8xl">
            Ordering happens quietly, through our LINE community.
          </h1>
          <p className="max-w-[680px] font-serif text-2xl font-light italic leading-[1.5] text-ink-body">
            A slower channel for releases, conversations, and direct access.
          </p>
        </EditorialReveal>
      </section>

      <section className="section-space bg-surface">
        <div className="container-editorial grid gap-8 lg:grid-cols-3">
          {orderSteps.map(([step, title, body], index) => (
            <EditorialReveal key={step} delay={index * 0.05}>
              <div className="h-full border border-border bg-background p-8 md:p-10">
                <p className="font-serif text-5xl font-light text-ink-primary">{step}</p>
                <h2 className="mt-6 font-serif text-3xl font-light text-ink-primary">{title}</h2>
                <p className="mt-4 text-base leading-[1.8] text-ink-body">{body}</p>
              </div>
            </EditorialReveal>
          ))}
        </div>
      </section>

      <section className="section-space bg-background">
        <EditorialReveal className="container-editorial mx-auto max-w-[760px] text-center">
          <SectionLabel>Join Here</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-ink-primary md:text-5xl">Enter the order group.</h2>
          <p className="mx-auto mt-5 max-w-[520px] text-base leading-[1.8] text-ink-body">
            A placeholder link is live for now until the final community address is ready.
          </p>
          <OrderButton className="mt-8">
            Open LINE <ArrowRight className="h-4 w-4" />
          </OrderButton>
        </EditorialReveal>
      </section>

      <section className="section-space bg-background pt-0">
        <div className="container-editorial mx-auto max-w-[760px]">
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq: Faq, index: number) => (
              <AccordionItem key={faq.q} value={`faq-${index}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-serif text-2xl font-light text-ink-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-[1.8] text-ink-body">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

export function WellnessPage() {
  return (
    <>
      <SEO title="Objects & Wellness — Coming Soon — la petite.elli" description="A future space for objects and wellness pieces, arriving in the same quiet editorial language." />
      <section className="section-space flex min-h-[70vh] items-center bg-background">
        <EditorialReveal className="container-editorial max-w-[840px] space-y-5">
          <SectionLabel>Coming Soon</SectionLabel>
          <h1 className="font-serif text-6xl font-light leading-[1.02] tracking-tight text-ink-primary md:text-8xl">
            Objects, wellness pieces, and future collections are in development.
          </h1>
          <p className="max-w-[620px] font-serif text-2xl font-light italic leading-[1.5] text-ink-body">
            The boutique world is expanding with the same measured pace and tactile focus.
          </p>
          <Button variant="editorialPrimary" size="editorial" asChild>
            <Link to="/shop">
              Return to Shop <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </EditorialReveal>
      </section>
    </>
  );
}

function EditorialProductRow({ coffee, reverse }: { coffee: Coffee; reverse?: boolean }) {
  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", reverse && "lg:[&>*:first-child]:order-2")}>
      <div className="relative">
        <div className="absolute left-5 top-5 h-full w-full bg-warm-highlight/12" />
        <div className="relative bg-surface p-6 md:p-10">
          <CoffeePackage coffee={coffee} />
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
          <span className="h-px w-12" style={{ backgroundColor: coffee.accentColor }} />
          {coffee.series} · {coffee.type}
        </div>
        <h2 className="font-serif text-4xl font-light text-ink-primary md:text-5xl">{coffee.nameEn}</h2>
        <p className="font-serif text-2xl font-light italic text-ink-body">{coffee.nameZh}</p>
        <p className="text-sm uppercase tracking-[0.14em] text-ink-muted">{coffee.origin} · {coffee.roast}</p>
        <div className="flex flex-wrap gap-3">
          {coffee.flavorTags.map((tag: string) => (
            <span key={tag} className="border border-border px-3 py-2 text-xs uppercase tracking-[0.14em] text-ink-body">
              {tag}
            </span>
          ))}
        </div>
        <p className="font-serif text-2xl font-light italic text-ink-primary">“{coffee.tagline}”</p>
        <p className="max-w-[540px] text-base leading-[1.8] text-ink-body">{coffee.flavorProfile}</p>
        <Link to="/collection/$slug" params={{ slug: coffee.slug }} className="editorial-link text-sm uppercase tracking-[0.16em] text-ink-primary">
          View detail <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function ProductCard({ coffee }: { coffee: Coffee }) {
  return (
    <Link to="/collection/$slug" params={{ slug: coffee.slug }} className="group block">
      <div className="space-y-5">
        <div className="h-px w-full" style={{ backgroundColor: coffee.accentColor }} />
        <div className="overflow-hidden bg-surface p-6 shadow-soft transition-transform duration-700 group-hover:-translate-y-1">
          <CoffeePackage coffee={coffee} />
        </div>
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">{coffee.series} · {coffee.type}</p>
          <h3 className="font-serif text-3xl font-light text-ink-primary">{coffee.nameEn}</h3>
          <p className="font-serif text-xl italic text-ink-body">{coffee.nameZh}</p>
          <p className="text-sm leading-7 text-ink-muted">{coffee.flavorTags.join(" · ")}</p>
        </div>
      </div>
    </Link>
  );
}

function CoffeePackage({ coffee, large }: { coffee: Coffee; large?: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const content = (
    <div className={cn("mx-auto w-full max-w-[280px]", large && "max-w-[360px]")}>
      <div className="border border-package-border bg-package-shell p-4 md:p-5">
        <div className="h-4 border-b border-package-border" />
        <div className="bg-background px-5 py-8 md:px-7 md:py-10">
          <div className="mx-auto mb-6 h-14 w-14 rounded-full border border-border bg-surface" />
          <p className="text-center text-[11px] uppercase tracking-[0.22em] text-ink-muted">{coffee.series}</p>
          <h4 className="mt-3 text-center font-serif text-4xl font-light text-ink-primary">{coffee.nameEn}</h4>
          <p className="mt-2 text-center font-serif text-lg italic text-ink-body">{coffee.nameZh}</p>
          <div className="mx-auto my-6 h-px w-16" style={{ backgroundColor: coffee.accentColor }} />
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-ink-muted">{coffee.origin}</p>
          <p className="mt-2 text-center text-[11px] uppercase tracking-[0.18em] text-ink-muted">{coffee.roast}</p>
        </div>
      </div>
    </div>
  );

  if (prefersReducedMotion) return content;

  return (
    <motion.div whileHover={{ scale: 1.035 }} transition={{ duration: 0.6, ease: "easeOut" }}>
      {content}
    </motion.div>
  );
}

function SpecRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="grid gap-2 border-b border-border py-4 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-6">
      <p className="text-sm uppercase tracking-[0.15em] text-ink-muted">{label}</p>
      <p className="text-base leading-[1.75] text-ink-primary">{value}</p>
    </div>
  );
}

function accentTint(accentColor: string): CSSProperties {
  return {
    background: `linear-gradient(to bottom, color-mix(in oklab, ${accentColor} 6%, transparent), transparent 55%)`,
  };
}
