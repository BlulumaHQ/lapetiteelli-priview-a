import { Button } from "@/components/ui/button";
import { EditorialReveal, HeroReveal, SEO, SectionLabel } from "@/components/site";
import aboutGalleryOne from "@/assets/about-gallery-1.jpg";
import aboutGalleryTwo from "@/assets/about-gallery-2.jpg";
import dailyStrip from "@/assets/daily-strip.jpg";
import eveningStrip from "@/assets/evening-strip.jpg";
import heroPourOver from "@/assets/hero-pour-over.jpg";
import heroPourLoop from "@/assets/hero-pour-loop.mp4.asset.json";
import morningStrip from "@/assets/morning-strip.jpg";
import philosophyBeans from "@/assets/philosophy-beans.jpg";
import { coffees, getCoffeeBySlug } from "@/data/coffees";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

const heroVideo = heroPourLoop.url;

type Coffee = (typeof coffees)[number];

const productImages = [
  morningStrip,
  dailyStrip,
  eveningStrip,
  aboutGalleryOne,
  aboutGalleryTwo,
  philosophyBeans,
  morningStrip,
  dailyStrip,
] as const;

const coffeePrices: Record<string, string> = {
  breakfast: "$24",
  sunrise: "$24",
  "golden-hour": "$25",
  "yirgacheffe-bloom": "$27",
  "daily-ritual": "$24",
  "happy-hour": "$25",
  midnight: "$26",
  "mandheling-noir": "$27",
};

const journalEntries = [
  {
    title: "Roots of Slow Coffee",
    image: dailyStrip,
  },
  {
    title: "On Founder Heritage",
    image: aboutGalleryTwo,
  },
  {
    title: "Packaging as Keepsake",
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

function getCoffeeImage(index: number) {
  return productImages[index % productImages.length];
}

function getCoffeePrice(slug: string) {
  return coffeePrices[slug] ?? "$24";
}

function getCoffeeSummary(coffee: Coffee) {
  return coffee.flavorTags.slice(0, 2).join(" · ");
}

export function HomePage() {
  const featuredProducts = coffees.slice(0, 8);

  return (
    <>
      <SEO
        title="la petite.elli — Calm editorial coffee collection"
        description="A quiet ritual of coffee, art, and everyday living. Explore eight small-batch coffee flavors crafted for everyday rituals."
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
              <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-[0.01em] md:text-[7rem] lg:text-[8rem]">
                la petite.elli
              </h1>
              <p className="max-w-[520px] font-serif text-2xl font-light italic leading-[1.35] text-primary-foreground/88 md:text-3xl">
                A quiet ritual of coffee, art, and everyday living.
              </p>
              <p className="max-w-[520px] text-sm uppercase tracking-[0.16em] text-primary-foreground/76">
                8 small-batch coffee flavors, crafted for everyday rituals.
              </p>
              <div className="pt-3">
                <Button variant="editorialPrimary" size="editorial" asChild>
                  <Link to="/collection">
                    Explore Flavors <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </HeroReveal>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="max-w-[720px] space-y-4">
            <div className="space-y-4">
              <SectionLabel>Flavors</SectionLabel>
              <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
                Our Flavors
              </h2>
              <p className="max-w-[620px] text-base leading-[1.8] text-ink-body">
                A small collection of eight blends, each with its own mood and moment.
              </p>
            </div>
          </EditorialReveal>

          <div className="grid gap-x-6 gap-y-10 grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((coffee, index) => (
              <EditorialReveal key={coffee.slug} delay={index * 0.05}>
                <ProductCard coffee={coffee} />
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-strong">
        <div className="container-editorial grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-18">
          <EditorialReveal className="space-y-6">
            <SectionLabel>About</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              A story shaped by coffee, art, and design.
            </h2>
            <div className="space-y-5 text-base leading-[1.9] text-ink-body md:text-[17px]">
              <p>
                La petite.elli began as a quiet expression of everyday rituals — a cup of coffee, a moment of stillness, a slower way of living.
              </p>
              <p>
                Each blend is created in small batches, not just to be consumed, but to be experienced — something to return to, again and again.
              </p>
              <p>
                The packaging carries original artwork by the founder’s father, adding a subtle emotional layer to each product.
              </p>
              <p>
                The website reflects the same intention — calm, minimal, and quietly refined.
              </p>
              <p>Together, coffee, art, and design form a single experience.</p>
            </div>
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
            <SectionLabel>Journal</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              Notes on a slower life
            </h2>
            <p className="max-w-[520px] text-base leading-[1.8] text-ink-body">
              Stories on coffee, objects, art, and everyday living.
            </p>
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
                  <div className="border-t border-border pt-4">
                    <h3 className="font-serif text-3xl font-light text-ink-primary">{entry.title}</h3>
                  </div>
                </article>
              </EditorialReveal>
            ))}
          </div>
          <EditorialReveal>
            <Button variant="editorialGhost" size="editorial" asChild>
              <Link to="/journal">
                Read Journal <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </EditorialReveal>
        </div>
      </section>
    </>
  );
}

export function ShopPage() {
  return <CollectionPage />;
}

export function CollectionPage() {
  return (
    <>
      <SEO
        title="Flavors — la petite.elli"
        description="Explore eight small-batch coffee flavors crafted for everyday rituals in a calm editorial setting."
      />
      <section className="section-space bg-background">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="max-w-[720px] space-y-4">
            <SectionLabel>Flavors</SectionLabel>
            <h1 className="font-serif text-5xl font-light leading-tight text-ink-primary md:text-7xl">Our Flavors</h1>
            <p className="max-w-[620px] text-base leading-[1.8] text-ink-body">
              A small collection of eight blends, each with its own mood and moment.
            </p>
          </EditorialReveal>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 xl:grid-cols-4">
            {coffees.map((coffee, index) => (
              <EditorialReveal key={coffee.slug} delay={index * 0.03}>
                <ProductCard coffee={coffee} index={index} />
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
            <p className="max-w-[520px] font-serif text-3xl font-light italic leading-tight text-ink-primary md:text-4xl">{coffee.flavorProfile}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="editorialPrimary" size="editorial" type="button">
                Select
              </Button>
              <Button variant="editorialGhost" size="editorial" asChild>
                <Link to="/collection">
                  <ArrowLeft className="h-4 w-4" /> Explore Flavors
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
      <SEO title="About — la petite.elli" description="A story shaped by coffee, art, and design." />
      <section className="section-space bg-background">
        <EditorialReveal className="container-editorial max-w-[900px] space-y-5">
          <SectionLabel>About</SectionLabel>
          <h1 className="font-serif text-6xl font-light leading-[1.02] tracking-tight text-ink-primary md:text-8xl">
            A story shaped by coffee, art, and design.
          </h1>
        </EditorialReveal>
      </section>

      <section className="bg-background pb-12">
        <EditorialReveal className="container-editorial mx-auto max-w-[760px] space-y-5 text-base leading-[1.9] text-ink-body md:text-[17px]">
          <p>
            La petite.elli began as a quiet expression of everyday rituals — a cup of coffee, a moment of stillness, a slower way of living.
          </p>
          <p>
            Each blend is created in small batches, not just to be consumed, but to be experienced — something to return to, again and again.
          </p>
          <p>
            The packaging carries original artwork by the founder’s father, adding a subtle emotional layer to each product.
          </p>
          <p>
            The website reflects the same intention — calm, minimal, and quietly refined.
          </p>
          <p>Together, coffee, art, and design form a single experience.</p>
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

      </section>
    </>
  );
}

export function JournalPage() {
  return (
    <>
      <SEO title="Journal — la petite.elli" description="Stories on coffee, objects, art, and everyday living." />
      <section className="section-space bg-background">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="max-w-[820px] space-y-4">
            <SectionLabel>Journal</SectionLabel>
            <h1 className="font-serif text-6xl font-light leading-[1.02] tracking-tight text-ink-primary md:text-8xl">
              Notes on a slower life
            </h1>
            <p className="max-w-[560px] text-base leading-[1.8] text-ink-body">
              Stories on coffee, objects, art, and everyday living.
            </p>
          </EditorialReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {journalEntries.map((entry, index) => (
              <EditorialReveal key={entry.title} delay={index * 0.04}>
                <article className="space-y-4">
                  <img src={entry.image} alt={entry.title} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                  <div className="border-t border-border pt-4">
                    <h2 className="font-serif text-3xl font-light text-ink-primary">{entry.title}</h2>
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

export function OrderPage() {
  return <CollectionPage />;
}

export function WellnessPage() {
  return <HomePage />;
}

function ProductCard({ coffee, index = 0 }: { coffee: Coffee; index?: number }) {
  return (
    <div className="space-y-4">
      <Link to="/collection/$slug" params={{ slug: coffee.slug }} className="group block">
        <div className="overflow-hidden bg-surface shadow-soft transition-transform duration-700 group-hover:-translate-y-1">
          <img
            src={getCoffeeImage(index)}
            alt={coffee.nameEn}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="space-y-2">
        <h3 className="line-clamp-2 min-h-[3.75rem] font-serif text-2xl font-light leading-tight text-ink-primary md:text-3xl">
          {coffee.nameEn}
        </h3>
        <p className="truncate text-sm text-ink-body">{getCoffeeSummary(coffee)}</p>
        <p className="text-sm uppercase tracking-[0.14em] text-ink-primary">{getCoffeePrice(coffee.slug)}</p>
      </div>
      <Button variant="editorialGhost" size="editorial" className="w-full" type="button">
        Select
      </Button>
    </div>
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
