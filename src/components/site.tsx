import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Instagram, Menu, MessageCircle, X } from "lucide-react";
import * as React from "react";

import logoImage from "@/assets/logo-la-petite-elli.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const siteMeta = {
  title: "La Petite Elli — Boutique Coffee Collection · Vancouver",
  description:
    "Eight small-batch specialty coffees, crafted for every moment of your day. From Vancouver, since 2009.",
  lineUrl: "https://line.me/",
};

const navItems = [
  { label: "Collection", to: "/collection" as const },
  { label: "About", to: "/about" as const },
  { label: "Order", to: "/order" as const },
  { label: "Wellness", to: "/wellness" as const },
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
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
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
            staggerChildren: 0.1,
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
          transition={{ duration: 0.8, ease: "easeOut" }}
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
    <div className="min-h-screen bg-cream-base text-ink-body">
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
          "sticky top-0 z-40 border-b border-transparent transition-colors duration-300",
          isScrolled ? "bg-cream-soft/95 backdrop-blur-sm border-accent-line" : "bg-transparent",
        )}
      >
        <div className="container-editorial flex h-20 items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.slice(0, 2).map((item) => (
              <NavLink key={item.to} to={item.to} label={item.label} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center border border-accent-line text-ink-primary lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="justify-self-center">
            <Logo size="md" />
          </Link>

          <div className="hidden items-center justify-end gap-8 lg:flex">
            <NavLink to="/order" label="Order" />
            <Button variant="editorialGhost" size="editorial" asChild>
              <a href={siteMeta.lineUrl} target="_blank" rel="noreferrer">
                Order via LINE <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <a
            href={siteMeta.lineUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center border border-accent-line text-ink-primary lg:hidden"
            aria-label="Open LINE"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-cream-base"
          >
            <div className="container-editorial flex min-h-screen flex-col py-8">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center border border-accent-line text-ink-primary"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
                <Logo size="sm" />
                <a
                  href={siteMeta.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center border border-accent-line text-ink-primary"
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

function NavLink({ to, label }: { to: "/collection" | "/about" | "/order" | "/wellness"; label: string }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-ink-primary opacity-100" }}
      className="text-sm uppercase tracking-[0.1em] text-ink-primary/70 hover:text-ink-primary"
    >
      {label}
    </Link>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  if (to.startsWith("/")) {
    return (
      <Link to={to} className="editorial-link text-sm text-ink-body">
        {children}
      </Link>
    );
  }

  return (
    <a href={to} target="_blank" rel="noreferrer" className="editorial-link text-sm text-ink-body">
      {children}
    </a>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-cream-deep text-ink-body">
      <div className="container-editorial py-20">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-6">
            <Logo size="md" />
            <p className="font-serif text-3xl font-light leading-tight text-ink-primary">
              From Sunrise to Midnight
              <br />
              Crafted for Every Moment.
            </p>
            <p className="text-sm uppercase tracking-[0.14em] text-ink-muted">EST. 2009 · Vancouver, BC</p>
          </div>

          <FooterColumn
            title="Collection"
            links={[
              { label: "Morning Series", to: "/collection" },
              { label: "Daily Series", to: "/collection" },
              { label: "Evening Series", to: "/collection" },
              { label: "Signature Set (coming soon)", to: "/wellness" },
            ]}
          />
          <FooterColumn
            title="Explore"
            links={[
              { label: "About", to: "/about" },
              { label: "Order via LINE", to: "/order" },
              { label: "FAQ", to: "/order" },
            ]}
          />
          <FooterColumn
            title="Connect"
            links={[
              { label: "LINE Order Group", to: siteMeta.lineUrl },
              { label: "Instagram @lapetiteelli", to: "https://instagram.com/lapetiteelli" },
              { label: "Email hello@lapetiteelli.com", to: "mailto:hello@lapetiteelli.com" },
            ]}
          />
        </div>

        <div className="mt-16 border-t border-accent-line pt-6 text-center text-sm text-ink-muted">
          © 2026 La Petite Elli · Small batch coffee, made with care in Vancouver.
        </div>
      </div>
    </footer>
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
