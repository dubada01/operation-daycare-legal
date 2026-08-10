import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Operation Daycare home">
        <span className="brand-mark" aria-hidden="true">OD</span>
        <span>Operation Daycare</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/support">Support</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getUTCFullYear()} Duba Tech Studio</p>
      <div>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <a href="mailto:dubatechstudio@gmail.com">dubatechstudio@gmail.com</a>
      </div>
    </footer>
  );
}

export function PolicyPage({
  eyebrow,
  title,
  introduction,
  children,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell">
      <Header />
      <main className="policy-main">
        <article className="policy-document">
          <header className="policy-heading">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{introduction}</p>
            <p className="effective-date">Effective August 9, 2026</p>
          </header>
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
