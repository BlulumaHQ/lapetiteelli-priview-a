import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import logoImage from "@/assets/logo-la-petite-elli.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const siteMeta = {
  title: "la petite.elli — Quiet coffee for slow living",
  description: "A quiet ritual of coffee, art, and everyday living.",
  lineUrl: "https://line.me/",
  instagramUrl: "https://instagram.com/lapetiteelli",
  facebookUrl: "#",
  tiktokUrl: "#",
  xiaohongshuUrl: "#",
  email: "hello@lapetiteelli.com",
};

const navItems = [
  { label: "Home", to: "/" as const },
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
      alt="la petite.elli wordmark"
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
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border bg-background/70 text-ink-primary lg:hidden"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>

          <Link to="/" className="justify-self-center text-center">
            <span className="font-serif text-[1.7rem] font-light tracking-[0.02em] text-ink-primary">la petite.elli</span>
          </Link>

          <div className="flex items-center justify-end">
            <Button variant="editorialPrimary" size="editorial" className="hidden lg:inline-flex" asChild>
              <Link to="/collection">Explore Flavors</Link>
            </Button>
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
                  <CloseIcon />
                </button>
                <span className="font-serif text-[1.45rem] font-light text-ink-primary">la petite.elli</span>
                <div className="h-10 w-10" aria-hidden="true" />
              </div>

              <nav className="mt-16 flex flex-1 flex-col justify-center gap-8">
                {navItems.map((item) => (
                  <Link key={item.to} to={item.to} className="font-serif text-5xl font-light text-ink-primary">
                    {item.label}
                  </Link>
                ))}
                <Button variant="editorialPrimary" size="editorial" className="mt-6 w-full sm:w-auto" asChild>
                  <Link to="/collection">Explore Flavors</Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function NavLink({ to, label }: { to: "/" | "/about" | "/journal"; label: string }) {
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

function SiteFooter() {
  return (
    <footer className="bg-surface-strong text-ink-body">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-5">
            <Logo size="md" />
            <p className="max-w-[420px] text-sm leading-7 text-ink-body">
              A quiet coffee ritual, shaped by art and design.
            </p>
          </div>

          <a href={`mailto:${siteMeta.email}`} className="justify-self-start text-sm leading-7 text-ink-primary md:justify-self-end">
            {siteMeta.email}
          </a>
        </div>

        <div className="mt-10 grid gap-5 border-t border-border pt-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="hidden md:block" />
          <p className="text-center text-sm text-ink-muted">© 2026 la petite.elli. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 md:justify-self-end">
            <SocialIconLink href={siteMeta.instagramUrl} label="Instagram">
              <InstagramIcon />
            </SocialIconLink>
            <SocialIconLink href={siteMeta.facebookUrl} label="Facebook Page">
              <FacebookIcon />
            </SocialIconLink>
            <SocialIconLink href={siteMeta.tiktokUrl} label="TikTok">
              <TikTokIcon />
            </SocialIconLink>
            <SocialIconLink href={siteMeta.xiaohongshuUrl} label="Xiaohongshu (RED)">
              <RedIcon />
            </SocialIconLink>
            <SocialIconLink href={siteMeta.lineUrl} label="LINE">
              <LineIcon />
            </SocialIconLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center text-ink-muted transition-colors duration-300 hover:text-ink-primary"
    >
      {children}
    </a>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M13.3 20v-7h2.4l.4-2.7h-2.8V8.6c0-.8.3-1.4 1.5-1.4H16V4.8c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3v2.3H9v2.7h2.1v7h2.2Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M14.8 4c.3 1.8 1.3 3 3.1 3.4v2.3c-1.3 0-2.3-.4-3.1-1v5.4a4.7 4.7 0 1 1-4.7-4.7c.3 0 .6 0 .9.1V12a2.6 2.6 0 1 0 1.7 2.4V4h2.1Z" />
    </svg>
  );
}

function RedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="4" />
      <path d="M8 10.5h3.4c1.5 0 2.4.8 2.4 2s-.9 2-2.4 2H8v-4Zm0 0 4.8 4" />
      <path d="M16.8 8.3h.1" />
      <path d="M18.3 8.3h.1" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
      <path d="M12 4.5c-4.7 0-8.5 2.9-8.5 6.5 0 3.2 3 5.8 7 6.4l-.7 2.6 3-2.4h.2c4.7 0 8.5-2.9 8.5-6.6 0-3.6-3.8-6.5-8.5-6.5Z" />
      <path d="M8.2 13.2V9.4" />
      <path d="M10.8 13.2h-2.6" />
      <path d="M12.2 13.2V9.4l2.6 3.8V9.4" />
      <path d="M17.2 9.4h-2.4v3.8h2.4" />
      <path d="M17.2 11.3h-2.1" />
    </svg>
  );
}
