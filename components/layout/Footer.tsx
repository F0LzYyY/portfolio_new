import { siteConfig } from '@/lib/data'

const navLinks = [
  { label: 'Работы', href: '#projects' },
  { label: 'Процесс', href: '#process' },
  { label: 'О себе', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bone border-t border-bone">
      <div className="container-wide py-12 md:py-16">
        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-10 md:pb-12 border-b border-bone">
          {/* Brand */}
          <div>
            <p className="font-playfair font-medium text-xl text-carbon mb-2">Шкарин</p>
            <p className="text-slate text-sm font-inter leading-relaxed">
              Веб-разработчик для бизнеса.<br />
              {siteConfig.location}
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-slate text-sm font-inter hover:text-carbon transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contacts */}
          <div className="md:text-right">
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline block text-carbon font-inter font-medium text-sm mb-2 hover:text-amber transition-colors"
            >
              Telegram →
            </a>
            <p className="font-mono text-sm text-slate">{siteConfig.email}</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-6">
          <p className="font-mono text-caption text-mist">
            © {year} Илья Шкарин
          </p>
          <p className="font-mono text-caption text-mist">
            Сделано без Tilda. С любовью к коду.
          </p>
        </div>
      </div>
    </footer>
  )
}
