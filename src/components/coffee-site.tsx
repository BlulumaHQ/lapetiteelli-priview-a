import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { EditorialReveal, HeroReveal, OrderButton, SEO, SectionLabel, siteMeta } from "@/components/site";
import aboutGalleryOne from "@/assets/about-gallery-1.jpg";
import aboutGalleryTwo from "@/assets/about-gallery-2.jpg";
import dailyStrip from "@/assets/daily-strip.jpg";
import eveningStrip from "@/assets/evening-strip.jpg";
import heroPourOver from "@/assets/hero-pour-over.jpg";
import morningStrip from "@/assets/morning-strip.jpg";
import philosophyBeans from "@/assets/philosophy-beans.jpg";
import { coffeeSeries, coffees, getCoffeeBySlug } from "@/data/coffees";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Flame,
  Leaf,
  Sprout,
  Users,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";


const collectionStories = [
  {
    title: "MORNING COLLECTION",
    label: "☀ MORNING COLLECTION",
    heading: "Bright. Awakening. Begin Right.",
    description:
      "Four coffees crafted for the day's first quiet hours — when the light is soft, the mind is open, and a single cup can set the tone for everything that follows.",
    items: ["Breakfast", "Sunrise", "Golden Hour", "Yirgacheffe Bloom"],
    image: morningStrip,
    bgClass: "bg-[#f8f1e2]",
    dark: false,
  },
  {
    title: "DAILY COLLECTION",
    label: "🌿 DAILY COLLECTION",
    heading: "Smooth. Comforting. Effortless.",
    description:
      "Two coffees built for the everyday — the cups you reach for without thinking, the ones that quietly become part of the rhythm of your week.",
    items: ["Daily Ritual", "Happy Hour"],
    image: dailyStrip,
    bgClass: "bg-[#e8decf]",
    dark: false,
  },
  {
    title: "EVENING COLLECTION",
    label: "🌙 EVENING COLLECTION",
    heading: "Bold. Deep. Reflective.",
    description:
      "Two coffees for the slow hours — when the day has done its work and what remains is depth, warmth, and the quiet pleasure of a cup that lingers.",
    items: ["Midnight", "Mandheling Noir"],
    image: eveningStrip,
    bgClass: "bg-coffee-mandheling text-cream-soft",
    dark: true,
  },
];

const aboutGallery = [
  {
    image: philosophyBeans,
    alt: "coffee beans hands roaster",
    caption: "Each origin is handled slowly, from green bean to first crack.",
  },
  {
    image: aboutGalleryOne,
    alt: "small batch coffee roasting table ceramic cups",
    caption: "Our workspace is quiet, tactile, and always centered on the cup.",
  },
  {
    image: aboutGalleryTwo,
    alt: "hands sealing specialty coffee bag in roastery",
    caption: "Every release is packed by hand for the community that gathers around it.",
  },
  {
    image: dailyStrip,
    alt: "coffee cup open notebook afternoon light",
    caption: "The goal is not spectacle — only a better daily ritual.",
  },
];

const craftPoints = [
  {
    icon: Flame,
    title: "Small Batch Roasted",
    body: "Every bag is hand-roasted in Vancouver in batches no larger than 5 kilograms.",
  },
  {
    icon: Leaf,
    title: "Specialty Grade Beans",
    body: "Sourced from renowned single origins through importers we know by name.",
  },
  {
    icon: Clock3,
    title: "Made for Ritual",
    body: "Built for slow mornings, considered evenings, and the quiet hours in between.",
  },
];

const valuePoints = [
  {
    icon: Sprout,
    title: "Sourced with Honesty",
    body: "Direct relationships with importers we trust. Transparent origins on every bag.",
  },
  {
    icon: Flame,
    title: "Roasted by Hand",
    body: "Five-kilogram batches. Watched, smelled, listened to from start to finish.",
  },
  {
    icon: Users,
    title: "Shared with Community",
    body: "Released through our LINE order group. Slow, considered, never mass-produced.",
  },
];

export function HomePage() {
  return (
    <>
      <SEO />
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-cream-base md:min-h-[92vh]">
        <div className="absolute inset-0">
          <img
            src={heroPourOver}
            alt="pour over coffee ceramic top view natural light"
            className="h-full w-full object-cover opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-cream-base/70" />
        </div>
        <div className="container-editorial relative z-10 flex w-full justify-center py-24 text-center">
          <HeroReveal className="flex max-w-[900px] flex-col items-center gap-6 md:gap-8">
            <SectionLabel>EST. 2009 — VANCOUVER</SectionLabel>
            <h1 className="font-serif text-6xl font-light leading-[1.05] tracking-tight text-ink-primary md:text-8xl">
              From Sunrise to Midnight,
              <br />
              Crafted for Every Moment.
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-ink-body md:text-xl">
              <span className="font-serif text-[1.15em] font-light italic">
                Eight small-batch coffees. One curated journey through the rhythm of your day.
              </span>
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Button variant="editorialPrimary" size="editorial" asChild>
                <Link to="/collection">
                  Explore the Collection <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <OrderButton>
                Order via LINE <ArrowRight className="h-4 w-4" />
              </OrderButton>
            </div>
            <div className="mt-10 flex flex-col items-center gap-3 text-ink-muted">
              <div className="h-12 w-px bg-accent-line" />
              <span className="text-xs uppercase tracking-[0.18em]">Scroll</span>
            </div>
          </HeroReveal>
        </div>
      </section>

      <section className="bg-cream-base py-24 md:py-32">
        <div className="container-editorial grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-16">
          <EditorialReveal>
            <div className="overflow-hidden bg-cream-soft">
              <img
                src={philosophyBeans}
                alt="coffee beans hands roaster"
                className="h-full w-full object-cover"
                width={1080}
                height={1350}
                loading="lazy"
              />
            </div>
          </EditorialReveal>
          <EditorialReveal className="flex flex-col justify-center gap-6">
            <SectionLabel>01 — OUR PHILOSOPHY</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              Coffee is a rhythm, not a routine.
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-ink-body md:text-[17px]">
              <p>
                At La Petite Elli, every bean tells the time. We source from renowned origins —
                Yirgacheffe&apos;s misty highlands, Sumatra&apos;s volcanic earth, Guatemala&apos;s cloud forests — and
                roast in small batches so each cup carries the weight of where it came from.
              </p>
              <p>
                The Moments Collection is our love letter to the day: eight coffees designed to meet
                you exactly where you are, from the first quiet light of morning to the last reflective
                hour of night.
              </p>
            </div>
            <Link to="/about" className="editorial-link text-sm uppercase tracking-[0.14em] text-ink-primary">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </EditorialReveal>
        </div>
      </section>

      <section className="bg-cream-soft py-24 md:py-32">
        <div className="container-editorial space-y-16">
          <EditorialReveal className="mx-auto max-w-[720px] text-center">
            <SectionLabel>02 — THE MOMENTS COLLECTION</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              Eight Coffees. One Day, Beautifully Brewed.
            </h2>
            <p className="mt-5 font-serif text-2xl font-light italic text-ink-body">
              Each blend and single origin is crafted for a specific moment — a mood, a light, a
              tempo. Find the one that meets you where you are.
            </p>
          </EditorialReveal>

          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
            {coffees.map((coffee, index) => (
              <EditorialReveal key={coffee.slug} delay={index * 0.03}>
                <ProductCard coffee={coffee} />
              </EditorialReveal>
            ))}
          </div>

          <div className="text-center">
            <Link to="/collection" className="editorial-link text-sm uppercase tracking-[0.14em] text-ink-primary">
              View all coffees <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        {collectionStories.map((story, index) => (
          <div key={story.title} className={cn("py-20", story.bgClass)}>
            <div
              className={cn(
                "container-editorial grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                index === 1 ? "" : "",
              )}
            >
              {index === 1 ? (
                <>
                  <EditorialReveal>
                    <img
                      src={story.image}
                      alt={story.title.toLowerCase()}
                      className="aspect-[4/3] w-full object-cover"
                      width={1024}
                      height={1024}
                      loading="lazy"
                    />
                  </EditorialReveal>
                  <EditorialReveal className="space-y-5">
                    <SectionLabel>{story.label}</SectionLabel>
                    <h3 className={cn("font-serif text-3xl font-light md:text-4xl", story.dark ? "text-cream-soft" : "text-ink-primary")}>
                      {story.heading}
                    </h3>
                    <p className={cn("max-w-xl text-base leading-[1.75] md:text-[17px]", story.dark ? "text-cream-soft/80" : "text-ink-body")}>
                      {story.description}
                    </p>
                    <div className={cn("flex flex-wrap gap-x-4 gap-y-2 text-sm", story.dark ? "text-cream-soft" : "text-ink-primary")}>
                      {story.items.map((item) => (
                        <span key={item} className="editorial-link">
                          {item}
                        </span>
                      ))}
                    </div>
                  </EditorialReveal>
                </>
              ) : (
                <>
                  <EditorialReveal className="space-y-5">
                    <SectionLabel>{story.label}</SectionLabel>
                    <h3 className={cn("font-serif text-3xl font-light md:text-4xl", story.dark ? "text-cream-soft" : "text-ink-primary")}>
                      {story.heading}
                    </h3>
                    <p className={cn("max-w-xl text-base leading-[1.75] md:text-[17px]", story.dark ? "text-cream-soft/80" : "text-ink-body")}>
                      {story.description}
                    </p>
                    <div className={cn("flex flex-wrap gap-x-4 gap-y-2 text-sm", story.dark ? "text-cream-soft" : "text-ink-primary")}>
                      {story.items.map((item) => (
                        <span key={item} className="editorial-link">
                          {item}
                        </span>
                      ))}
                    </div>
                  </EditorialReveal>
                  <EditorialReveal>
                    <img
                      src={story.image}
                      alt={story.title.toLowerCase()}
                      className="aspect-[4/3] w-full object-cover"
                      width={1024}
                      height={1024}
                      loading="lazy"
                    />
                  </EditorialReveal>
                </>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-cream-base py-24 md:py-32">
        <div className="container-editorial space-y-16">
          <EditorialReveal className="mx-auto max-w-[780px] text-center">
            <SectionLabel>03 — OUR CRAFT</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              Small in scale. Considered in everything.
            </h2>
          </EditorialReveal>
          <div className="mx-auto grid max-w-[1080px] gap-10 md:grid-cols-3">
            {craftPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <EditorialReveal key={point.title} delay={index * 0.05}>
                  <div className="space-y-4 border-t border-accent-line pt-6">
                    <Icon className="h-5 w-5 text-ink-primary" />
                    <h3 className="font-serif text-3xl font-normal text-ink-primary">{point.title}</h3>
                    <p className="max-w-sm text-base leading-[1.75] text-ink-body">{point.body}</p>
                  </div>
                </EditorialReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-24 md:py-40">
        <EditorialReveal className="container-editorial text-center">
          <SectionLabel>JOIN THE COMMUNITY</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-ink-primary md:text-5xl">
            Ready to find your moment?
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-base leading-[1.75] text-ink-body md:text-[17px]">
            <span className="font-serif text-[1.1em] font-light italic">
              Our coffees are roasted in small batches and shared through our LINE community group.
              Join to receive batch announcements, brewing notes, and first access to new releases.
            </span>
          </p>
          <OrderButton className="mt-8">
            Join the LINE Order Group <ArrowRight className="h-4 w-4" />
          </OrderButton>
          <p className="mt-5 text-sm text-ink-muted">Free to join. No spam. Order only when you want to.</p>
        </EditorialReveal>
      </section>
    </>
  );
}

export function CollectionPage() {
  return (
    <>
      <SEO
        title="Collection — La Petite Elli"
        description="Explore all eight coffees in The Moments Collection, from bright morning cups to deep evening roasts."
      />
      <section className="bg-cream-base py-24 md:py-32 lg:py-40">
        <EditorialReveal className="container-editorial text-center">
          <div className="mx-auto max-w-[800px]">
            <SectionLabel>THE MOMENTS COLLECTION</SectionLabel>
            <h1 className="mt-4 font-serif text-6xl font-light leading-[1.05] tracking-tight text-ink-primary md:text-8xl">
              A curated journey through the rhythm of the day.
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] font-serif text-2xl font-light italic text-ink-body">
              Eight coffees. Three series. One ongoing love letter to the moments that make a day.
            </p>
          </div>
        </EditorialReveal>
      </section>

      <section className="bg-cream-base pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="mb-16 flex flex-wrap justify-center gap-5 border-b border-accent-line pb-6 text-sm uppercase tracking-[0.15em] text-ink-primary">
            {coffeeSeries.map((series, index) => (
              <span
                key={series}
                className={cn(
                  "border-b-2 px-1 pb-3",
                  index === 0 ? "border-accent-burgundy opacity-100" : "border-transparent opacity-50",
                )}
              >
                {series}
              </span>
            ))}
          </div>

          <div className="space-y-24 md:space-y-32">
            {coffees.map((coffee, index) => (
              <EditorialReveal key={coffee.slug}>
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
      <section className="bg-cream-base py-32">
        <div className="container-editorial text-center">
          <SectionLabel>NOT FOUND</SectionLabel>
          <h1 className="mt-4 font-serif text-5xl font-light text-ink-primary">Coffee not found.</h1>
          <div className="mt-8">
            <Button variant="editorialPrimary" size="editorial" asChild>
              <Link to="/collection">Back to Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const related = coffees.filter((item) => item.series === coffee.series && item.slug !== coffee.slug).slice(0, 3);
  const accentStyle = { "--coffee-accent": coffee.accentColor } as CSSProperties;

  return (
    <>
      <SEO
        title={`${coffee.nameEn} — La Petite Elli`}
        description={`${coffee.tagline} ${coffee.flavorProfile}`}
      />
      <section className="bg-cream-base py-20 md:py-28" style={accentTint(coffee.accentColor)}>
        <div className="container-editorial grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(440px,0.9fr)] lg:gap-20">
          <EditorialReveal className="space-y-6">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-ink-muted">
              <span className="inline-block h-3 w-3" style={{ backgroundColor: coffee.accentColor }} />
              {coffee.series.toUpperCase()} COLLECTION · {coffee.type.toUpperCase()}
            </div>
            <h1 className="font-serif text-6xl font-light leading-[1.05] tracking-tight text-ink-primary md:text-8xl">
              {coffee.nameEn}
            </h1>
            <p className="font-serif text-3xl font-light italic text-ink-body md:text-4xl">{coffee.nameZh}</p>
            <p className="text-sm uppercase tracking-[0.15em] text-ink-muted">
              {coffee.origin} · {coffee.roast} · {coffee.weight}
            </p>
            <p className="max-w-[520px] font-serif text-3xl font-light italic leading-tight text-ink-primary md:text-4xl">
              “{coffee.tagline}”
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <OrderButton>{"Order via LINE"}</OrderButton>
              <Button variant="editorialPrimary" size="editorial" asChild>
                <Link to="/collection">
                  <ArrowLeft className="h-4 w-4" /> Back to Collection
                </Link>
              </Button>
            </div>
          </EditorialReveal>
          <EditorialReveal>
            <div className="flex flex-col items-center gap-5">
              <CoffeePackage coffee={coffee} large />
              <p className="text-sm text-ink-muted">Photographed in our Vancouver roastery</p>
            </div>
          </EditorialReveal>
        </div>
      </section>

      <section className="bg-cream-soft py-24">
        <div className="container-editorial mx-auto max-w-[1080px] grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <EditorialReveal className="space-y-6" style={accentStyle}>
            <SectionLabel>FLAVOR PROFILE</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {coffee.flavorTags.map((tag) => (
                <span
                  key={tag}
                  className="border px-4 py-2 text-sm uppercase tracking-[0.12em] text-ink-primary"
                  style={{ borderColor: coffee.accentColor }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="space-y-3 text-sm leading-7 text-ink-muted">
              <p>
                <span className="text-ink-primary">Aroma</span> — {coffee.aroma}
              </p>
              <p>
                <span className="text-ink-primary">Body</span> — {coffee.body}
              </p>
              <p>
                <span className="text-ink-primary">Finish</span> — {coffee.finish}
              </p>
            </div>
          </EditorialReveal>
          <EditorialReveal>
            <p className="font-serif text-3xl font-light italic leading-[1.45] text-ink-primary md:text-4xl">
              {coffee.flavorProfile}
            </p>
          </EditorialReveal>
        </div>
      </section>

      <section className="bg-cream-base py-16">
        <EditorialReveal className="container-editorial">
          <div className="mx-auto max-w-[720px] border border-accent-line bg-cream-soft p-8 md:p-12">
            <SpecRow label="Origin" value={coffee.origin} />
            <SpecRow label="Roast Level" value={coffee.roast.replace(" Roast", "")} />
            <SpecRow label="Body & Acidity" value={coffee.body} />
            <SpecRow label="Finish" value={coffee.finish} />
          </div>
        </EditorialReveal>
      </section>

      <section className="bg-cream-base py-24">
        <EditorialReveal className="container-editorial mx-auto max-w-[680px]">
          <SectionLabel>THE MOMENT</SectionLabel>
          <h3 className="mt-4 font-serif text-3xl font-light italic text-ink-primary md:text-4xl">
            {coffee.storyTitle}
          </h3>
          <div className="mt-6 space-y-5 text-base leading-[1.9] text-ink-body md:text-[17px]">
            {coffee.story.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </EditorialReveal>
      </section>

      <section className="bg-cream-base py-16">
        <EditorialReveal className="container-editorial mx-auto max-w-[600px] text-center">
          <SectionLabel>BEST ENJOYED</SectionLabel>
          <p className="mt-4 font-serif text-3xl font-light italic leading-tight text-ink-primary md:text-4xl">
            {coffee.bestEnjoyed}
          </p>
        </EditorialReveal>
      </section>

      <section className="bg-cream-deep py-24 md:py-32">
        <div className="container-editorial space-y-12 text-center">
          <EditorialReveal>
            <OrderButton>
              Order via LINE <ArrowRight className="h-4 w-4" />
            </OrderButton>
          </EditorialReveal>
          <EditorialReveal>
            <Link to="/collection" className="editorial-link text-sm uppercase tracking-[0.14em] text-ink-primary">
              Continue exploring the {coffee.series} Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </EditorialReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <EditorialReveal key={item.slug}>
                <Link to="/collection/$slug" params={{ slug: item.slug }} className="block text-left">
                  <div className="border border-accent-line bg-cream-soft p-6">
                    <div className="mb-4 h-1 w-16" style={{ backgroundColor: item.accentColor }} />
                    <p className="font-serif text-2xl font-light text-ink-primary">{item.nameEn}</p>
                    <p className="mt-1 font-serif text-lg italic text-ink-body">{item.nameZh}</p>
                  </div>
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
      <SEO
        title="About — La Petite Elli"
        description="Learn about La Petite Elli, a small Vancouver roaster quietly devoted to honest sourcing and slow coffee rituals since 2009."
      />
      <section className="bg-cream-base py-24 md:py-32">
        <EditorialReveal className="container-editorial text-center">
          <div className="mx-auto max-w-[800px]">
            <SectionLabel>EST. 2009 — VANCOUVER</SectionLabel>
            <h1 className="mt-4 font-serif text-6xl font-light leading-[1.05] tracking-tight text-ink-primary md:text-8xl">
              A small Vancouver roaster, quietly devoted to the craft.
            </h1>
          </div>
        </EditorialReveal>
      </section>

      <section className="bg-cream-base py-20">
        <EditorialReveal className="container-editorial mx-auto max-w-[680px]">
          <div className="space-y-5 text-base leading-[1.9] text-ink-body md:text-[17px]">
            <p className="font-serif text-[1.12em] font-light italic text-ink-primary first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-none">
              La Petite Elli began in 2009 with a simple, stubborn idea: that good coffee deserves to
              be made slowly, sourced honestly, and shared without pretense.
            </p>
            <p>
              What started as a small-batch home roasting practice grew — one bean origin at a time,
              one curious customer at a time — into a quiet boutique brand serving Vancouver&apos;s coffee
              community. We never set out to build something big. We set out to build something true.
            </p>
            <p>
              Today, every bag of La Petite Elli coffee is roasted by hand in small batches, packaged
              with care, and offered through our community order group. We work directly with importers
              who know their farmers. We roast each origin to its own ideal profile, never to a
              one-size-fits-all curve. And we believe that the best coffee experiences happen not in
              cafés, but at home — in your favorite mug, in your own quiet moment.
            </p>
            <p>
              The Moments Collection is the most complete expression of that belief: eight coffees,
              eight times of day, one ongoing love letter to the rhythm of living well.
            </p>
            <p>We&apos;re glad you&apos;re here.</p>
          </div>
        </EditorialReveal>
      </section>

      <section className="bg-cream-soft py-24">
        <div className="container-editorial grid gap-10 md:grid-cols-3">
          {valuePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <EditorialReveal key={point.title} delay={index * 0.05}>
                <div className="space-y-4 border-t border-accent-line pt-6">
                  <Icon className="h-5 w-5 text-ink-primary" />
                  <h3 className="font-serif text-3xl font-normal text-ink-primary">{point.title}</h3>
                  <p className="text-base leading-[1.75] text-ink-body">{point.body}</p>
                </div>
              </EditorialReveal>
            );
          })}
        </div>
      </section>

      <section className="bg-cream-base py-24">
        <div className="container-editorial grid gap-6 md:grid-cols-2 xl:grid-cols-[1.15fr_0.85fr_0.85fr]">
          {aboutGallery.map((item, index) => (
            <EditorialReveal key={item.caption} delay={index * 0.04}>
              <figure className="space-y-3">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/5] w-full object-cover"
                  width={1080}
                  height={1350}
                  loading="lazy"
                />
                <figcaption className="text-sm text-ink-muted">{item.caption}</figcaption>
              </figure>
            </EditorialReveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function OrderPage() {
  return (
    <>
      <SEO
        title="Order via LINE — La Petite Elli"
        description="Join the La Petite Elli LINE community to access releases, place orders, and arrange pickup or delivery in Vancouver."
      />
      <section className="bg-cream-base py-24 md:py-32">
        <EditorialReveal className="container-editorial text-center">
          <div className="mx-auto max-w-[700px]">
            <SectionLabel>HOW TO ORDER</SectionLabel>
            <h1 className="mt-4 font-serif text-6xl font-light leading-[1.05] tracking-tight text-ink-primary md:text-8xl">
              Order through our LINE community.
            </h1>
            <p className="mt-6 font-serif text-2xl font-light italic text-ink-body">
              We release coffee in small batches, share them with our LINE group first, and ship or
              arrange pickup directly. Joining is free, and you only order when you want to.
            </p>
          </div>
        </EditorialReveal>
      </section>

      <section className="bg-cream-soft py-24">
        <div className="container-editorial grid gap-8 lg:grid-cols-3">
          {[
            ["01", "Join the LINE Group", "Scan the QR code below or tap the button to join our Vancouver community order channel."],
            ["02", "Place Your Order", "Browse current batches and message your order directly. We confirm availability within 24 hours."],
            ["03", "Pay & Receive", "Confirm your order with e-transfer. Local pickup or delivery is arranged within the group."],
          ].map(([step, title, body], index) => (
            <EditorialReveal key={step} delay={index * 0.05}>
              <div className="h-full border border-accent-line bg-cream-base p-8 md:p-12">
                <p className="font-serif text-5xl font-light text-ink-primary">{step}</p>
                <h3 className="mt-6 font-serif text-3xl font-normal text-ink-primary">{title}</h3>
                <p className="mt-4 text-base leading-[1.75] text-ink-body">{body}</p>
              </div>
            </EditorialReveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-base py-24">
        <EditorialReveal className="container-editorial text-center">
          <SectionLabel>JOIN HERE</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-ink-primary md:text-5xl">Scan to join.</h2>
          <div className="mx-auto mt-10 flex h-[280px] w-[280px] items-center justify-center border border-accent-line bg-cream-soft p-6">
            <div className="grid h-full w-full grid-cols-5 gap-2">
              {Array.from({ length: 25 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "aspect-square",
                    [0, 1, 4, 5, 6, 8, 12, 13, 15, 18, 20, 21, 23, 24].includes(index)
                      ? "bg-ink-primary"
                      : "bg-transparent border border-accent-line/40",
                  )}
                />
              ))}
            </div>
          </div>
          <OrderButton className="mt-8">
            Or open LINE directly <ArrowRight className="h-4 w-4" />
          </OrderButton>
        </EditorialReveal>
      </section>

      <section className="bg-cream-base py-24">
        <div className="container-editorial mx-auto max-w-[720px]">
          <Accordion type="single" collapsible className="border-t border-accent-line">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`} className="border-b border-accent-line">
                <AccordionTrigger className="py-6 text-left font-serif text-2xl font-light text-ink-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-[1.75] text-ink-body">
                  {faq.a}
                </AccordionContent>
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
      <SEO
        title="Wellness — Coming Soon — La Petite Elli"
        description="The La Petite Elli wellness collection is coming soon in a dedicated space of its own."
      />
      <section className="flex min-h-[70vh] items-center bg-cream-base py-24">
        <EditorialReveal className="container-editorial text-center">
          <SectionLabel>COMING SOON</SectionLabel>
          <h1 className="mt-4 font-serif text-6xl font-light leading-[1.05] tracking-tight text-ink-primary md:text-8xl">
            A wellness collection, in its own moment.
          </h1>
          <p className="mx-auto mt-6 max-w-[760px] font-serif text-2xl font-light italic text-ink-body">
            Our organic herbal wellness line — including reishi and turkey tail tea — will live in its
            own dedicated space. We&apos;re crafting it with the same care, but its story deserves its own
            page. Stay tuned.
          </p>
          <div className="mt-10">
            <Button variant="editorialPrimary" size="editorial" asChild>
              <Link to="/collection">
                <ArrowLeft className="h-4 w-4" /> Back to Coffee Collection
              </Link>
            </Button>
          </div>
        </EditorialReveal>
      </section>
    </>
  );
}

function EditorialProductRow({
  coffee,
  reverse,
}: {
  coffee: (typeof coffees)[number];
  reverse?: boolean;
}) {
  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", reverse && "lg:[&>*:first-child]:order-2")}>
      <div className="relative">
        <div
          className="absolute left-4 top-4 h-full w-full"
          style={{ backgroundColor: coffee.accentColor, opacity: 0.12 }}
        />
        <div className="relative bg-cream-soft p-6 md:p-10">
          <CoffeePackage coffee={coffee} />
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.14em] text-ink-muted">
          <span className="h-px w-12" style={{ backgroundColor: coffee.accentColor }} />
          {coffee.series.toUpperCase()} · {coffee.type.toUpperCase()}
        </div>
        <h2 className="font-serif text-4xl font-light text-ink-primary md:text-5xl">{coffee.nameEn}</h2>
        <p className="font-serif text-2xl font-light italic text-ink-body">{coffee.nameZh}</p>
        <p className="text-sm uppercase tracking-[0.14em] text-ink-muted">
          {coffee.origin} · {coffee.roast}
        </p>
        <div className="flex flex-wrap gap-3">
          {coffee.flavorTags.map((tag) => (
            <span key={tag} className="border border-accent-line px-3 py-2 text-xs uppercase tracking-[0.14em] text-ink-body">
              {tag}
            </span>
          ))}
        </div>
        <p className="font-serif text-2xl font-light italic text-ink-primary">“{coffee.tagline}”</p>
        <p className="max-w-[540px] text-base leading-[1.75] text-ink-body">{coffee.flavorProfile}</p>
        <Link to="/collection/$slug" params={{ slug: coffee.slug }} className="editorial-link text-sm uppercase tracking-[0.14em] text-ink-primary">
          View detail <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function ProductCard({ coffee }: { coffee: (typeof coffees)[number] }) {
  return (
    <Link to="/collection/$slug" params={{ slug: coffee.slug }} className="group block">
      <div className="space-y-5">
        <div className="h-1 w-full" style={{ backgroundColor: coffee.accentColor }} />
        <div className="overflow-hidden bg-cream-base p-6">
          <CoffeePackage coffee={coffee} />
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            {coffee.series} · {coffee.type}
          </p>
          <h3 className="font-serif text-3xl font-normal text-ink-primary">{coffee.nameEn}</h3>
          <p className="font-serif text-xl italic text-ink-body">{coffee.nameZh}</p>
          <p className="text-sm text-ink-muted">{coffee.flavorTags.join(" · ")}</p>
        </div>
      </div>
    </Link>
  );
}

function CoffeePackage({
  coffee,
  large,
}: {
  coffee: (typeof coffees)[number];
  large?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const content = (
    <div className={cn("mx-auto w-full max-w-[280px]", large && "max-w-[360px]")}>
      <div className="border border-accent-line bg-[#ede4d2] p-4 md:p-5">
        <div className="h-4 border-b border-[#d8ccbb]" />
        <div className="bg-cream-soft px-5 py-8 md:px-7 md:py-10">
          <div className="mx-auto mb-6 h-14 w-14 rounded-full border border-accent-line bg-cream-base" />
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

  if (prefersReducedMotion) {
    return content;
  }

  return (
    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.7, ease: "easeOut" }}>
      {content}
    </motion.div>
  );
}

function SpecRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="grid gap-2 border-b border-accent-line py-4 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-6">
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

export type Coffee = (typeof coffees)[number];
