import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Instagram, Menu, MessageCircle, ShoppingBag, X } from "lucide-react";
import * as React from "react";

import logoImage from "@/assets/logo-la-petite-elli.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const siteMeta = {
  title: "la petite.elli — Boutique Lifestyle Collections",
  description:
    "An editorial boutique world of coffee, objects, art, and everyday rituals shaped with quiet luxury.",
  lineUrl: "https://line.me/",
  instagramUrl: "https://instagram.com/lapetiteelli",
  facebookUrl: "#",
  tiktokUrl: "#",
  xiaohongshuUrl: "#",
  fatherArtUrl: "https://johnlinart.ca/Art",
  blulumaUrl: "https://bluluma.com/",
};

const navItems = [
  { label: "Shop", to: "/shop" as const },
  { label: "Collection", to: "/collection" as const },
  { label: "About", to: "/about" as const },
  { label: "Journal", to: "/journal" as const },
];

export function SEO({
  title = siteMeta.title,
  description = siteMeta.description,
}: {
  title?: string;
  description?: string;
}) {
  const canonical = typeof window !== "undefined" ? window.location.href : undefined;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </>
  );
}

export function Logo({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "w-[120px]",
    md: "w-[148px]",
    lg: "w-[190px]",
  };

  return (
    <img
      src={logoImage}
      alt="La Petite Elli Boutique wordmark"
      className={cn("h-auto object-contain", sizeClasses[size], className)}
      width={640}
      height={640}
      loading="eager"
    />
  );
}

export function EditorialReveal({
  children,
  className,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.22,
          },
        },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow-label">{children}</p>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-ink-body">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b border-transparent transition-colors duration-500",
          isScrolled ? "border-border bg-background/88 backdrop-blur-sm" : "bg-transparent",
        )}
      >
        <div className="container-editorial grid h-20 grid-cols-[auto_1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} label={item.label} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border bg-background/70 text-ink-primary lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="justify-self-center text-center">
            <span className="font-serif text-[1.7rem] font-light tracking-[0.02em] text-ink-primary">
              la petite.elli
            </span>
          </Link>

          <div className="flex items-center justify-end gap-2 lg:gap-3">
            <Link
              to="/shop"
              className="hidden items-center gap-2 border border-border bg-background/70 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-ink-primary lg:inline-flex"
            >
              <ShoppingBag className="h-4 w-4" />
              Selection
            </Link>
            <a
              href={siteMeta.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 border border-border bg-background/70 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-ink-primary md:inline-flex"
              aria-label="Open LINE"
            >
              <MessageCircle className="h-4 w-4" />
              LINE
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center border border-border bg-background/70 text-ink-primary"
              aria-label="Open site menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="container-editorial flex min-h-screen flex-col py-8">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center border border-border text-ink-primary"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
                <span className="font-serif text-[1.45rem] font-light text-ink-primary">la petite.elli</span>
                <a
                  href={siteMeta.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center border border-border text-ink-primary"
                  aria-label="Open LINE"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>

              <nav className="mt-16 flex flex-1 flex-col justify-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="font-serif text-5xl font-light text-ink-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link to="/order" className="font-serif text-3xl font-light text-ink-body">
                  Ordering
                </Link>
                <a
                  href={siteMeta.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink-primary"
                >
                  Join LINE <ArrowRight className="h-4 w-4" />
                </a>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function NavLink({ to, label }: { to: "/shop" | "/collection" | "/about" | "/journal"; label: string }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-ink-primary opacity-100" }}
      className="text-[11px] uppercase tracking-[0.16em] text-ink-primary/68 hover:text-ink-primary"
    >
      {label}
    </Link>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  const external = !to.startsWith("/") && !to.startsWith("mailto:");

  return (
    <a href={to} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="editorial-link text-sm text-ink-body">
      {children}
    </a>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-surface-strong text-ink-body">
      <div className="container-editorial py-20 md:py-24">
        <div className="grid gap-14 border-t border-border pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-7">
            <div className="space-y-3">
              <p className="editorial-kicker">Newsletter</p>
              <h2 className="font-serif text-4xl font-light leading-tight text-ink-primary md:text-5xl">
                Notes on coffee, objects, art, and the atmosphere around them.
              </h2>
            </div>
            <p className="max-w-[620px] text-base leading-[1.8] text-ink-body">
              A quiet letter from Vancouver with new releases, journal entries, studio updates, and early access to future boutique collections.
            </p>
            <NewsletterSignup />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <FooterColumn
              title="Navigate"
              links={[
                { label: "Shop", to: "/shop" },
                { label: "Collections", to: "/collection" },
                { label: "About", to: "/about" },
                { label: "Journal", to: "/journal" },
              ]}
            />
            <FooterColumn
              title="Connect"
              links={[
                { label: "Order via LINE", to: "/order" },
                { label: "Instagram", to: siteMeta.instagramUrl },
                { label: "Facebook Page", to: siteMeta.facebookUrl },
                { label: "TikTok", to: siteMeta.tiktokUrl },
                { label: "小紅書", to: siteMeta.xiaohongshuUrl },
                { label: "LINE", to: siteMeta.lineUrl },
                { label: "Elli's father art", to: siteMeta.fatherArtUrl },
                { label: "Bluluma", to: siteMeta.blulumaUrl },
                { label: "hello@lapetiteelli.com", to: "mailto:hello@lapetiteelli.com" },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p>© 2026 la petite.elli · Vancouver</p>
            <p>
              Web Design by{" "}
              <a href={siteMeta.blulumaUrl} target="_blank" rel="noreferrer" className="editorial-link text-ink-primary">
                Bluluma
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href={siteMeta.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink-primary">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href={siteMeta.lineUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink-primary">
              <MessageCircle className="h-4 w-4" /> LINE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterSignup() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextEmail = email.trim();
    const href = `mailto:hello@lapetiteelli.com?subject=${encodeURIComponent("Newsletter Sign Up")}&body=${encodeURIComponent(`Please add this email to the la petite.elli newsletter list:\n\n${nextEmail || "[your email]"}`)}`;
    window.location.href = href;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="h-12 min-w-0 flex-1 border border-border bg-background px-4 text-sm text-ink-primary outline-none placeholder:text-ink-muted focus:border-ink-primary"
      />
      <Button variant="editorialPrimary" size="editorial" type="submit">
        Join Newsletter <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; to: string }>;
}) {
  return (
    <div className="space-y-5">
      <p className="eyebrow-label text-ink-primary">{title}</p>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <FooterLink key={link.label} to={link.to}>
            {link.label}
          </FooterLink>
        ))}
      </div>
    </div>
  );
}

export function OrderButton({ children = "Order via LINE", className }: { children?: React.ReactNode; className?: string }) {
  return (
    <Button variant="editorialGhost" size="editorial" className={className} asChild>
      <a href={siteMeta.lineUrl} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Button>
  );
}

export function LineNote() {
  return <span>{/* TODO: replace with actual LINE group URL */}</span>;
}
