import type { Metadata } from 'next'
import { Playfair_Display, Inter, DM_Mono } from 'next/font/google'
import CustomCursor from '@/components/ui/CustomCursor'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Илья Шкарин — Веб-разработчик для бизнеса',
  description: 'Создаю сайты для малого и среднего бизнеса, которые продают: лендинги, корпоративные сайты, интернет-магазины с интеграцией CRM.',
  keywords: 'веб-разработчик, сайты для бизнеса, лендинг, интернет-магазин, Next.js, React',
  authors: [{ name: 'Илья Шкарин' }],
  openGraph: {
    title: 'Илья Шкарин — Веб-разработчик для бизнеса',
    description: 'Сайты, которые работают на вас 24/7 — не просто красивые страницы.',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable} ${dmMono.variable}`}>
      <body className="bg-ivory text-carbon antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
