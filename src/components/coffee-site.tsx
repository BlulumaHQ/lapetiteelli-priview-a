import { Button } from "@/components/ui/button";
import { EditorialReveal, HeroReveal, SEO, SectionLabel } from "@/components/site";
import aboutGalleryOne from "@/assets/about-gallery-1.jpg";
import aboutGalleryTwo from "@/assets/about-gallery-2.jpg";
import dailyStrip from "@/assets/daily-strip.jpg";
import heroEditorialCalmStillLife from "@/assets/hero-editorial-calm-still-life.mp4.asset.json";
import morningStrip from "@/assets/morning-strip.jpg";
import philosophyBeans from "@/assets/philosophy-beans.jpg";
import { coffees, getCoffeeBySlug } from "@/data/coffees";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

const heroVideo = heroEditorialCalmStillLife.url;
const productPrice = "$28";
const lineClampTwo: CSSProperties = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
};
const lineClampOne: CSSProperties = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  overflow: "hidden",
};

type Coffee = (typeof coffees)[number];

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

const aboutParagraphs = [
  "La petite.elli began as a quiet expression of everyday rituals — a cup of coffee, a moment of stillness, a slower way of living.",
  "Each blend is created in small batches, not just to be consumed, but to be experienced — something to return to, again and again.",
  "The packaging carries original artwork by the founder’s father, bringing an emotional and visual layer into each product.",
  "The website is designed with the same intention — calm, minimal, and quietly refined.",
  "Together, coffee, art, and design form a single experience.",
] as const;

export function HomePage() {
  return (
    <>
      <SEO
        title="la petite.elli — Quiet coffee for slow living"
        description="A quiet ritual of coffee, art, and everyday living."
      />

      <section className="relative flex min-h-screen items-end overflow-hidden bg-background">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="cinematic-overlay absolute inset-0" />

        <div className="container-editorial relative z-10 w-full pb-16 pt-32 md:pb-24 md:pt-40">
          <HeroReveal className="max-w-[720px] text-primary-foreground">
            <div className="space-y-6">
              <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-[0.01em] md:text-[7rem] lg:text-[8rem]">
                la petite.elli
              </h1>
              <p className="max-w-[560px] font-serif text-2xl font-light italic leading-[1.35] text-primary-foreground/88 md:text-3xl">
                A quiet ritual of coffee, art, and everyday living.
              </p>
              <p className="max-w-[580px] text-sm leading-7 text-primary-foreground/78 md:text-base md:leading-8">
                8 small-batch flavors, thoughtfully crafted and shared.
              </p>
              <Button variant="editorialPrimary" size="editorial" className="w-full sm:w-auto" asChild>
                <Link to="/collection">
                  Explore Flavors <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </HeroReveal>
        </div>
      </section>

      <ProductSection />
      <AboutSection />
      <EditorialSection />
    </>
  );
}

export function ShopPage() {
  return <CollectionPage />;
}

export function CollectionPage() {
  return (
    <>
      <SEO title="Our Flavors — la petite.elli" description="A small collection of eight blends, each with its own mood and moment." />
      <ProductSection showSectionLabel={false} />
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
          <h1 className="mt-4 font-serif text-5xl font-light text-ink-primary">This flavor is no longer available.</h1>
          <div className="mt-8">
            <Button variant="editorialPrimary" size="editorial" asChild>
              <Link to="/collection">Explore Flavors</Link>
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
      <SEO title={`${coffee.nameEn} — la petite.elli`} description={coffee.flavorProfile} />
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
            <p className="text-lg text-ink-primary">{productPrice}</p>
            <p className="max-w-[520px] font-serif text-3xl font-light italic leading-tight text-ink-primary md:text-4xl">“{coffee.tagline}”</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="editorialPrimary" size="editorial" asChild>
                <Link to="/order">
                  Select <ArrowRight className="h-4 w-4" />
                </Link>
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
      <AboutSection standalone />
    </>
  );
}

export function JournalPage() {
  return (
    <>
      <SEO title="Journal — la petite.elli" description="Stories on coffee, objects, art, and everyday living." />
      <section className="section-space bg-background">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="max-w-[760px] space-y-4">
            <h1 className="font-serif text-5xl font-light leading-tight text-ink-primary md:text-7xl">Notes on a slower life</h1>
            <p className="max-w-[620px] text-base leading-[1.85] text-ink-body md:text-[17px]">
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
  return (
    <>
      <SEO title="Select — la petite.elli" description="Purchase links will be added here soon." />
      <section className="section-space bg-background">
        <EditorialReveal className="container-editorial mx-auto max-w-[760px] space-y-6 text-center">
          <h1 className="font-serif text-5xl font-light leading-tight text-ink-primary md:text-7xl">Select</h1>
          <p className="text-base leading-[1.85] text-ink-body md:text-[17px]">Purchase links will be added here soon.</p>
          <Button variant="editorialPrimary" size="editorial" asChild>
            <Link to="/collection">Explore Flavors</Link>
          </Button>
        </EditorialReveal>
      </section>
    </>
  );
}

export function WellnessPage() {
  return (
    <>
      <SEO title="la petite.elli" description="A quiet ritual of coffee, art, and everyday living." />
      <section className="section-space flex min-h-[70vh] items-center bg-background">
        <EditorialReveal className="container-editorial max-w-[760px] space-y-6">
          <h1 className="font-serif text-5xl font-light leading-tight text-ink-primary md:text-7xl">la petite.elli</h1>
          <p className="max-w-[560px] text-base leading-[1.85] text-ink-body md:text-[17px]">
            A quiet ritual of coffee, art, and everyday living.
          </p>
          <Button variant="editorialPrimary" size="editorial" asChild>
            <Link to="/collection">Explore Flavors</Link>
          </Button>
        </EditorialReveal>
      </section>
    </>
  );
}

function ProductSection({ showSectionLabel = true }: { showSectionLabel?: boolean }) {
  return (
    <section className="section-space bg-background">
      <div className="container-editorial space-y-12">
        <EditorialReveal className="max-w-[780px] space-y-4">
          {showSectionLabel ? <SectionLabel>Flavors</SectionLabel> : null}
          <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">Our Flavors</h2>
          <p className="max-w-[620px] text-base leading-[1.85] text-ink-body md:text-[17px]">
            A small collection of eight blends, each with its own mood and moment.
          </p>
        </EditorialReveal>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {coffees.map((coffee, index) => (
            <EditorialReveal key={coffee.slug} delay={index * 0.04}>
              <ProductCard coffee={coffee} />
            </EditorialReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={cn("section-space bg-surface", standalone && "bg-background")}>
      <div className="container-editorial grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <EditorialReveal className="space-y-4">
          <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
            A story shaped by coffee, art, and design.
          </h2>
          <div className="space-y-5 text-base leading-[1.9] text-ink-body md:text-[17px]">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </EditorialReveal>

        <EditorialReveal>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[philosophyBeans, aboutGalleryOne, aboutGalleryTwo].map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt="la petite.elli editorial still life"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </EditorialReveal>
      </div>
    </section>
  );
}

function EditorialSection() {
  return (
    <section className="section-space bg-background">
      <div className="container-editorial grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
        <EditorialReveal className="space-y-5">
          <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">Notes on a slower life</h2>
          <p className="max-w-[500px] text-base leading-[1.85] text-ink-body md:text-[17px]">
            Stories on coffee, objects, art, and everyday living.
          </p>
          <Button variant="editorialGhost" size="editorial" className="w-full sm:w-auto" asChild>
            <Link to="/journal">
              Read Journal <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </EditorialReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {journalEntries.map((entry, index) => (
            <EditorialReveal key={entry.title} delay={index * 0.04}>
              <article className="space-y-4">
                <img src={entry.image} alt={entry.title} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                <div className="border-t border-border pt-4">
                  <h3 className="font-serif text-3xl font-light text-ink-primary">{entry.title}</h3>
                </div>
              </article>
            </EditorialReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ coffee }: { coffee: Coffee }) {
  return (
    <article className="group space-y-5">
      <Link to="/collection/$slug" params={{ slug: coffee.slug }} className="block space-y-5">
        <div className="h-px w-full" style={{ backgroundColor: coffee.accentColor }} />
        <div className="overflow-hidden bg-surface p-6 shadow-soft transition-transform duration-700 group-hover:-translate-y-1">
          <CoffeePackage coffee={coffee} />
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-3xl font-light leading-tight text-ink-primary" style={lineClampTwo}>
            {coffee.nameEn}
          </h3>
          <p className="text-sm leading-7 text-ink-muted" style={lineClampOne}>
            {coffee.flavorProfile}
          </p>
          <p className="text-sm text-ink-primary">{productPrice}</p>
        </div>
      </Link>

      <Button variant="editorialPrimary" size="editorial" className="w-full" asChild>
        <Link to="/order">
          Select <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </article>
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
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 1.1, ease: "easeOut" }}>
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
