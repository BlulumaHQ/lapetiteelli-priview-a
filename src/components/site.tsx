import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Facebook, Instagram, Menu, MessageCircle, Music2, ScanLine, X } from "lucide-react";
import * as React from "react";

import logoImage from "@/assets/logo-la-petite-elli-boutique.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const siteMeta = {
  title: "la petite.elli — Calm editorial coffee collection",
  description: "A calm editorial coffee brand website presenting eight small-batch flavors with quiet luxury and slow living aesthetics.",
  lineUrl: "https://line.me/",
  instagramUrl: "https://instagram.com/lapetiteelli",
  facebookUrl: "#",
  tiktokUrl: "#",
  xiaohongshuUrl: "#",
};

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Flavors", to: "/collection" as const },
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
            <Logo size="md" className="w-[220px] md:w-[280px]" />
          </Link>

          <div className="flex items-center justify-end gap-2 lg:gap-3">
            <Link
              to="/collection"
              className="hidden items-center border border-border bg-background/70 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-ink-primary md:inline-flex"
            >
              Explore Flavors
            </Link>
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
            transition={{ duration: 0.25, ease: "easeOut" }}
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
                <Logo size="sm" className="w-[180px]" />
                <div className="h-10 w-10" aria-hidden="true" />
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
                <Link to="/collection" className="font-serif text-3xl font-light text-ink-body">
                  Explore Flavors
                </Link>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function NavLink({ to, label }: { to: "/" | "/collection" | "/about" | "/journal"; label: string }) {
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
  const socialLinks = [
    { label: "Instagram", href: siteMeta.instagramUrl, icon: Instagram },
    { label: "Facebook", href: siteMeta.facebookUrl, icon: Facebook },
    { label: "TikTok", href: siteMeta.tiktokUrl, icon: Music2 },
    { label: "Xiaohongshu", href: siteMeta.xiaohongshuUrl, icon: ScanLine },
    { label: "LINE", href: siteMeta.lineUrl, icon: MessageCircle },
  ] as const;

  return (
    <footer className="bg-surface-strong text-ink-body">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.72fr)_220px] lg:items-start">
          <div className="space-y-5">
            <Logo size="sm" className="w-[180px] md:w-[220px]" />
            <p className="max-w-[420px] text-sm leading-7 text-ink-body">
              A quiet coffee ritual, shaped by art and design.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/collection">Flavors</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/journal">Journal</FooterLink>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div className="space-y-3">
              <p className="eyebrow-label text-ink-primary">Contact</p>
              <FooterLink to="mailto:hello@lapetiteelli.com">hello@lapetiteelli.com</FooterLink>
            </div>
            <div className="space-y-3">
              <p className="eyebrow-label text-ink-primary">Social</p>
              <div className="space-y-2">
                {socialLinks.map(({ label, href }) => (
                  <div key={label} className="text-sm text-ink-body">
                    <FooterLink to={href}>{label}</FooterLink>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="justify-self-start lg:justify-self-end">
            <div className="space-y-3 border border-border bg-background/55 p-4">
              <p className="eyebrow-label text-ink-primary">LINE</p>
              <div className="grid grid-cols-7 gap-1 bg-surface p-2">
                {Array.from({ length: 49 }).map((_, index) => {
                  const filled = [0, 1, 2, 5, 6, 7, 8, 12, 14, 16, 18, 19, 20, 22, 24, 26, 28, 30, 32, 33, 34, 36, 40, 41, 42, 46, 47, 48].includes(index);
                  return (
                    <span
                      key={index}
                      className={cn(
                        "block h-4 w-4",
                        filled ? "bg-ink-primary" : "bg-cream-base",
                      )}
                    />
                  );
                })}
              </div>
              <p className="text-xs leading-5 text-ink-muted">Scan for a quiet update on releases and rituals.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p className="text-center">© 2026 la petite.elli. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-ink-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
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
