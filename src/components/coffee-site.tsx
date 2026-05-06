import { Button } from "@/components/ui/button";
import { EditorialReveal, HeroReveal, SEO, SectionLabel } from "@/components/site";
import aboutGalleryOne from "@/assets/about-gallery-1.jpg";
import aboutGalleryTwo from "@/assets/about-gallery-2.jpg";
import heroBags01 from "@/assets/hero-bags-01.webp";
import heroBags02 from "@/assets/hero-bags-02.webp";
import dailyStrip from "@/assets/daily-strip.jpg";
import eveningStrip from "@/assets/evening-strip.jpg";
import lifestyleSteamWindow from "@/assets/lifestyle-steam-window.webp";
import lifestyleBeansJar from "@/assets/lifestyle-beans-jar.webp";
import lifestyleCakeCup from "@/assets/lifestyle-cake-cup.webp";
import lifestyleCupMagazine from "@/assets/lifestyle-cup-magazine.webp";
import editorialBarista from "@/assets/editorial-barista.webp";
import editorialShelf from "@/assets/editorial-shelf.webp";
import editorialTable from "@/assets/editorial-table.webp";
import editorialKitchen from "@/assets/editorial-kitchen.webp";
import editorialMachine from "@/assets/editorial-machine.webp";
import bagBreakfast from "@/assets/bag-breakfast.webp";
import bagDailyRitual from "@/assets/bag-daily-ritual.webp";
import bagGoldenHour from "@/assets/bag-golden-hour.webp";
import bagHappyHour from "@/assets/bag-happy-hour.webp";
import bagMandhelingNoir from "@/assets/bag-mandheling-noir.webp";
import bagMidnight from "@/assets/bag-midnight.webp";
import bagSunrise from "@/assets/bag-sunrise.webp";
import bagYirgacheffe from "@/assets/bag-yirgacheffe-bloom.webp";
import morningStrip from "@/assets/morning-strip.jpg";
import philosophyBeans from "@/assets/philosophy-beans.jpg";
import { coffees, getCoffeeBySlug } from "@/data/coffees";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

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

const coffeeLabelImages: Record<string, string> = {
  breakfast: bagBreakfast,
  sunrise: bagSunrise,
  "golden-hour": bagGoldenHour,
  "yirgacheffe-bloom": bagYirgacheffe,
  "daily-ritual": bagDailyRitual,
  "happy-hour": bagHappyHour,
  midnight: bagMidnight,
  "mandheling-noir": bagMandhelingNoir,
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

function getCoffeeIntro(coffee: Coffee) {
  const intros: Record<string, string> = {
    breakfast: "Bright and lively with cocoa, fruit, and toasted nut complexity.",
    sunrise: "Rich chocolate with malt sweetness, cinnamon spice, and orange peel.",
    "golden-hour": "Smooth chocolate, nutty warmth, and gentle sweetness.",
    "yirgacheffe-bloom": "Bright citrus acidity with floral complexity and notes of berry.",
    "daily-ritual": "Milk chocolate, caramel, and soft fruit notes.",
    "happy-hour": "Dark chocolate, cedar wood, brown sugar, and dried fruit.",
    midnight: "Smoky spice, dark chocolate, and dark berry complexity.",
    "mandheling-noir": "Dark chocolate, earthy wood, smoke, and winey black cherry.",
  };

  return intros[coffee.slug] ?? coffee.flavorProfile;
}

function HeroSlideshow({ slides }: { slides: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <div className="absolute inset-0">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="La petite.elli coffee collection"
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </div>
  );
}

export function HomePage() {
  const featuredProducts = coffees.slice(0, 8);

  return (
    <>
      <SEO
        title="la petite.elli — Calm editorial coffee collection"
        description="A quiet ritual of coffee, art, and everyday living. Explore eight small-batch coffee flavors crafted for everyday rituals."
      />

      <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
        <HeroSlideshow slides={[heroBags01, heroBags02]} />
        <div className="cinematic-overlay absolute inset-0" />

        <div className="container-editorial relative z-10 w-full pb-20 pt-24 md:pb-24 md:pt-28">
          <HeroReveal className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.55fr)] lg:items-start">
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

          <div className="-mx-3 grid grid-cols-2 gap-x-3 gap-y-8 sm:mx-0 sm:gap-x-6 sm:gap-y-10 xl:grid-cols-4">
            {featuredProducts.map((coffee, index) => (
              <EditorialReveal key={coffee.slug} delay={index * 0.05}>
                <ProductCard coffee={coffee} />
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Everyday Living */}
      <section className="section-space bg-cream-soft">
        <div className="container-editorial grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <EditorialReveal>
            <figure className="space-y-3">
              <img
                src={lifestyleSteamWindow}
                alt="A warm cup of coffee resting on stacked Kinfolk volumes by a quiet window."
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="text-xs uppercase tracking-[0.16em] text-ink-muted">
                Morning light, Volume VII
              </figcaption>
            </figure>
          </EditorialReveal>
          <div className="flex flex-col justify-between gap-10">
            <EditorialReveal className="space-y-5">
              <SectionLabel>Curated Everyday Living</SectionLabel>
              <h2 className="font-serif text-4xl font-light leading-[1.05] text-ink-primary md:text-5xl">
                A boutique of quiet objects for the slow hours.
              </h2>
              <p className="text-base leading-[1.85] text-ink-body md:text-[17px]">
                la petite.elli is a small lifestyle house gathering coffee, tea, brewing tools, and home objects chosen for one feeling — the warmth of an unhurried morning. Each piece is selected for the way it ages in your hands, not for the way it photographs.
              </p>
              <p className="text-base leading-[1.85] text-ink-body md:text-[17px]">
                We are building a calmer cabinet of everyday things, one season at a time.
              </p>
            </EditorialReveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <EditorialReveal delay={0.05}>
                <figure className="space-y-2">
                  <img src={lifestyleBeansJar} alt="A glazed brown stoneware mug atop two Kinfolk magazines." className="aspect-[3/4] w-full object-cover" loading="lazy" />
                  <figcaption className="text-xs uppercase tracking-[0.16em] text-ink-muted">A vessel that wears in</figcaption>
                </figure>
              </EditorialReveal>
              <EditorialReveal delay={0.1}>
                <figure className="space-y-2">
                  <img src={lifestyleCakeCup} alt="Olive cake and dark coffee on a linen runner with dried branches." className="aspect-[3/4] w-full object-cover" loading="lazy" />
                  <figcaption className="text-xs uppercase tracking-[0.16em] text-ink-muted">An afternoon paused</figcaption>
                </figure>
              </EditorialReveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Collections */}
      <section className="section-space bg-background">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[560px] space-y-4">
              <SectionLabel>The Collections</SectionLabel>
              <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
                A house in five chapters.
              </h2>
            </div>
            <p className="max-w-[420px] text-sm leading-7 text-ink-muted">
              Coffee began the story. Tea, tools, and quiet objects for the home are arriving in their own season.
            </p>
          </EditorialReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <CollectionCard image={editorialMachine} eyebrow="Now Pouring" title="Coffee" caption="Eight small-batch flavors." to="/collection" />
            <CollectionCard image={lifestyleCupMagazine} eyebrow="Soon" title="Tea" caption="A quieter afternoon ritual." />
            <CollectionCard image={lifestyleBeansJar} eyebrow="Soon" title="Home Objects" caption="Vessels for slower meals." />
            <CollectionCard image={lifestyleSteamWindow} eyebrow="Soon" title="Brewing Tools" caption="The simple instruments of pour." />
            <CollectionCard image={lifestyleCakeCup} eyebrow="Seasonal" title="Seasonal Living" caption="Curated pieces, twice a year." />
          </div>
        </div>
      </section>

      {/* Stories & Rituals */}
      <section className="section-space bg-surface-strong">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[560px] space-y-4">
              <SectionLabel>Stories &amp; Rituals</SectionLabel>
              <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
                Notes from a slower kitchen.
              </h2>
            </div>
            <Button variant="editorialGhost" size="editorial" asChild>
              <Link to="/journal">
                Read the Journal <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </EditorialReveal>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
            <EditorialReveal>
              <article className="space-y-5">
                <img src={editorialBarista} alt="A barista handing a wrapped coffee bag to a customer in a sunlit boutique." className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <p className="text-xs uppercase tracking-[0.16em] text-ink-muted">Featured · Issue No. 04</p>
                <h3 className="font-serif text-3xl font-light leading-tight text-ink-primary md:text-4xl">
                  The Quiet Ritual of Morning Coffee
                </h3>
                <p className="max-w-[560px] text-base leading-[1.85] text-ink-body">
                  Why the first ten minutes after waking, spent with warm cup in hand, set the temperature of an entire day — a short essay on attention.
                </p>
              </article>
            </EditorialReveal>
            <div className="flex flex-col gap-10">
              <EditorialReveal delay={0.05}>
                <article className="space-y-3">
                  <img src={editorialKitchen} alt="Two single-origin coffee bags on a sunlit kitchen counter." className="aspect-[4/5] w-full object-cover" loading="lazy" />
                  <p className="text-xs uppercase tracking-[0.16em] text-ink-muted">Living</p>
                  <h3 className="font-serif text-2xl font-light text-ink-primary">Why warm lighting changes a home.</h3>
                </article>
              </EditorialReveal>
              <EditorialReveal delay={0.1}>
                <article className="space-y-3">
                  <img src={editorialShelf} alt="A row of coffee bags lined up on a wooden shelf in soft afternoon light." className="aspect-[4/5] w-full object-cover" loading="lazy" />
                  <p className="text-xs uppercase tracking-[0.16em] text-ink-muted">Objects</p>
                  <h3 className="font-serif text-2xl font-light text-ink-primary">The pieces we keep for years.</h3>
                </article>
              </EditorialReveal>
            </div>
          </div>
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

          <div className="-mx-3 grid grid-cols-2 gap-x-3 gap-y-8 sm:mx-0 sm:gap-x-6 sm:gap-y-10 xl:grid-cols-4">
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
            <CoffeePackage coffee={coffee} large labelImage={coffeeLabelImages[coffee.slug]} />
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
      <SEO title="About — la petite.elli" description="A boutique lifestyle brand inspired by warmth, ritual, and intentional everyday moments." />

      <section className="relative overflow-hidden bg-background">
        <img src={editorialTable} alt="Four coffee bags arranged on a wooden table beside a framed painting in soft afternoon light." className="h-[68vh] w-full object-cover md:h-[78vh]" loading="eager" />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-editorial pb-14 md:pb-20">
            <div className="max-w-[720px] space-y-5 text-primary-foreground">
              <SectionLabel>About</SectionLabel>
              <h1 className="font-serif text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
                Objects for Slower Living.
              </h1>
              <p className="max-w-[520px] font-serif text-xl font-light italic leading-[1.4] text-primary-foreground/90 md:text-2xl">
                A boutique lifestyle brand inspired by warmth, ritual, and intentional everyday moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="section-space bg-cream-soft">
        <div className="container-editorial grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <EditorialReveal className="space-y-4">
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-[1.05] text-ink-primary md:text-5xl">
              We are not selling things. We are gathering atmosphere.
            </h2>
          </EditorialReveal>
          <EditorialReveal className="space-y-6 text-base leading-[1.9] text-ink-body md:text-[17px]">
            <p>
              la petite.elli is a quiet house of curated objects — a place where coffee, tea, brewing instruments, and home pieces are chosen for the warmth they bring to an ordinary Tuesday afternoon.
            </p>
            <p>
              Nothing here is loud. Each piece is selected slowly, with the patience of a long meal: tactile materials, restrained shapes, and the kind of design that disappears into your routine until one morning you realize you cannot imagine the cabinet without it.
            </p>
            <p>
              Our work is calmness. Our currency is attention. Our hope is that, in a faster world, our small corner stays soft.
            </p>
          </EditorialReveal>
        </div>
      </section>

      {/* The Future */}
      <section className="section-space bg-background">
        <div className="container-editorial space-y-12">
          <EditorialReveal className="max-w-[720px] space-y-4">
            <SectionLabel>The Future of the House</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
              A boutique that grows in seasons, not collections.
            </h2>
            <p className="text-base leading-[1.85] text-ink-body md:text-[17px]">
              Coffee is the first chapter. In time, the shelves will fill — gently, never all at once.
            </p>
          </EditorialReveal>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Coffee", note: "Now pouring" },
              { label: "Tea", note: "Spring" },
              { label: "Brewing Tools", note: "Autumn" },
              { label: "Home Decor", note: "Winter" },
              { label: "Lifestyle Accessories", note: "Soon" },
              { label: "Seasonal Curated", note: "Twice a year" },
            ].map((item, i) => (
              <EditorialReveal key={item.label} delay={i * 0.04}>
                <div className="space-y-2 border-t border-border pt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">{item.note}</p>
                  <p className="font-serif text-2xl font-light text-ink-primary">{item.label}</p>
                </div>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Story */}
      <section className="section-space bg-surface-strong">
        <div className="container-editorial grid gap-5 md:grid-cols-6">
          <EditorialReveal className="md:col-span-4">
            <img src={editorialMachine} alt="A single Breakfast blend coffee bag beside an espresso machine in a warm sunlit kitchen." className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </EditorialReveal>
          <EditorialReveal className="md:col-span-2" delay={0.05}>
            <img src={editorialBarista} alt="A barista in a linen apron passes a wrapped coffee bag across a wooden counter." className="aspect-[3/4] w-full object-cover" loading="lazy" />
          </EditorialReveal>
          <EditorialReveal className="md:col-span-2" delay={0.1}>
            <img src={lifestyleCupMagazine} alt="An overhead view of black coffee on linen beside an open Kinfolk magazine." className="aspect-[3/4] w-full object-cover" loading="lazy" />
          </EditorialReveal>
          <EditorialReveal className="md:col-span-4" delay={0.15}>
            <img src={lifestyleSteamWindow} alt="A glazed mug of coffee resting on stacked Kinfolk volumes by a quiet window." className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </EditorialReveal>
        </div>
      </section>
    </>
  );
}

const journalEditorial = [
  {
    eyebrow: "Featured · No. 04",
    title: "The Quiet Ritual of Morning Coffee",
    excerpt: "A short essay on the first ten unhurried minutes of the day, and how a warm cup quietly sets the temperature of everything that follows.",
    image: editorialBarista,
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    eyebrow: "Living",
    title: "Why Warm Lighting Changes a Home",
    excerpt: "On 2700K bulbs, late paper lanterns, and the quiet rearrangement of an entire room with one switch.",
    image: editorialKitchen,
    span: "lg:col-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    eyebrow: "Routine",
    title: "Building a Slower Everyday",
    excerpt: "Three small subtractions — and the surprising amount of room they leave behind for what actually matters.",
    image: lifestyleCakeCup,
    span: "lg:col-span-3",
    aspect: "aspect-[4/5]",
  },
  {
    eyebrow: "Objects",
    title: "The Pieces We Keep for Years",
    excerpt: "A linen napkin, a chipped mug, a wooden spoon worn smooth at the handle — a love letter to the things that quietly stay.",
    image: lifestyleBeansJar,
    span: "lg:col-span-3",
    aspect: "aspect-[4/5]",
  },
  {
    eyebrow: "Atmosphere",
    title: "The Calm of an Unhurried Kitchen",
    excerpt: "Why some rooms ask you to whisper, and how to design a kitchen that exhales when you walk in.",
    image: editorialMachine,
    span: "lg:col-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    eyebrow: "Letter",
    title: "Notes from the Studio, Spring",
    excerpt: "A short letter on the new season, the colour of morning light at 7:14, and what is quietly arriving on the shelves.",
    image: null,
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
] as const;

export function JournalPage() {
  return (
    <>
      <SEO title="Journal — la petite.elli" description="Stories, rituals, and quiet moments from a boutique lifestyle house." />

      <section className="relative overflow-hidden bg-background">
        <img src={editorialKitchen} alt="Two coffee bags resting on a sunlit kitchen counter beside flowers and an open book." className="h-[60vh] w-full object-cover md:h-[72vh]" loading="eager" />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-editorial pb-12 md:pb-16">
            <div className="max-w-[720px] space-y-4 text-primary-foreground">
              <SectionLabel>Journal</SectionLabel>
              <h1 className="font-serif text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
                Stories, Rituals &amp; Quiet Moments.
              </h1>
              <p className="max-w-[480px] text-sm uppercase tracking-[0.16em] text-primary-foreground/80">
                A small editorial archive from the boutique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured story */}
      <section className="section-space bg-background">
        <div className="container-editorial">
          <EditorialReveal className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
            <img src={editorialShelf} alt="A row of la petite.elli coffee bags on a wooden boutique shelf in late afternoon light." className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">Editor's Letter · Issue No. 03</p>
              <h2 className="font-serif text-4xl font-light leading-[1.05] text-ink-primary md:text-5xl">
                A Boutique That Pours Quietly.
              </h2>
              <p className="text-base leading-[1.85] text-ink-body md:text-[17px]">
                Notes on opening a shelf, choosing eight blends instead of forty, and the slow patience of a small house. We did not want to make noise; we wanted to make a corner of the day softer.
              </p>
            </div>
          </EditorialReveal>
        </div>
      </section>

      {/* Editorial grid */}
      <section className="section-space bg-cream-soft">
        <div className="container-editorial grid gap-8 lg:grid-cols-6">
          {journalEditorial.map((entry, i) => (
            <EditorialReveal key={entry.title} delay={i * 0.04} className={cn("space-y-4", entry.span)}>
              {entry.image ? (
                <img src={entry.image} alt={entry.title} className={cn("w-full object-cover", entry.aspect)} loading="lazy" />
              ) : (
                <div className={cn("flex w-full items-center justify-center bg-surface-strong p-8 text-center", entry.aspect)}>
                  <p className="font-serif text-2xl font-light italic text-ink-primary">"The room exhaled."</p>
                </div>
              )}
              <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">{entry.eyebrow}</p>
              <h3 className="font-serif text-2xl font-light leading-tight text-ink-primary md:text-3xl">{entry.title}</h3>
              <p className="text-sm leading-7 text-ink-body">{entry.excerpt}</p>
            </EditorialReveal>
          ))}
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
    <div className="space-y-4 sm:space-y-5">
      <Link to="/collection/$slug" params={{ slug: coffee.slug }} className="group block">
        <div className="bg-surface p-2.5 shadow-soft transition-transform duration-700 group-hover:-translate-y-1 sm:p-4 md:p-5">
          <CoffeePackage coffee={coffee} compact labelImage={coffeeLabelImages[coffee.slug] ?? getCoffeeImage(index)} />
        </div>
      </Link>
      <div className="space-y-2.5 px-0.5">
        <h3 className="min-h-[3.2rem] font-serif text-[1.9rem] font-light leading-[0.98] text-ink-primary md:min-h-[3.75rem] md:text-3xl">
          {coffee.nameEn}
        </h3>
        <p className="text-[12px] leading-5 text-ink-muted sm:text-sm sm:leading-6">{getCoffeeSummary(coffee)}</p>
        <p className="text-[13px] leading-5 text-ink-body sm:text-sm sm:leading-6">{getCoffeeIntro(coffee)}</p>
        <p className="text-sm uppercase tracking-[0.14em] text-ink-primary">{getCoffeePrice(coffee.slug)}</p>
      </div>
      <Button variant="editorialGhost" size="editorial" className="w-full" type="button">
        Select
      </Button>
    </div>
  );
}

function CoffeePackage({ coffee, large, compact, labelImage }: { coffee: Coffee; large?: boolean; compact?: boolean; labelImage?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const content = (
    <div className={cn("mx-auto w-full", compact ? "max-w-none" : "max-w-[320px]", large && "max-w-[460px]")}>
      <img
        src={labelImage ?? getCoffeeImage(0)}
        alt={`${coffee.nameEn} coffee bag`}
        className="h-auto w-full object-contain"
        loading="lazy"
      />
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
