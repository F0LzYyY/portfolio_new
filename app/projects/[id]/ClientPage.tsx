'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const ease = [0.16, 1, 0.3, 1] as const

const validIds = ['chistopro', 'botanika', 'ulibka', 'svoya-vypechka', 'forma']

// ─────────────────────────────────────────────────────────────────────────────
// 01 — ЧИСТОПРО · Детейлинг
// Источник структуры: avtor-kzn.ru
// Разделы: Hero → Услуги по категориям → Почему мы → Этапы работы → Форма
// ─────────────────────────────────────────────────────────────────────────────
function ChistoproSite() {
  const [activeTab, setActiveTab] = useState(0)
  const categories = [
    {
      label: 'Полировка',
      items: [
        { title: 'Абразивная полировка', desc: 'Устранение царапин, потёртостей и голограмм', price: 'от 6 000 ₽' },
        { title: 'Защитная полировка', desc: 'Нанесение защитного слоя воска или полимера', price: 'от 4 000 ₽' },
        { title: 'Полная машинная полировка', desc: 'Полный цикл: абразив + финиш + защита', price: 'от 12 000 ₽' },
      ]
    },
    {
      label: 'Оклейка',
      items: [
        { title: 'Антигравийная плёнка', desc: 'Бронирование уязвимых зон кузова', price: 'от 8 000 ₽' },
        { title: 'Виниловая оклейка', desc: 'Изменение цвета без покраски', price: 'от 25 000 ₽' },
        { title: 'Хромированные элементы', desc: 'Оклейка зеркал, ручек, молдингов', price: 'от 3 000 ₽' },
      ]
    },
    {
      label: 'Химчистка',
      items: [
        { title: 'Химчистка салона', desc: 'Глубокая чистка всех поверхностей и обивки', price: 'от 5 000 ₽' },
        { title: 'Химчистка кузова', desc: 'Удаление дорожной химии, битума, смолы', price: 'от 3 000 ₽' },
        { title: 'Озонирование', desc: 'Устранение запахов и дезинфекция', price: 'от 1 500 ₽' },
      ]
    },
    {
      label: 'Защита',
      items: [
        { title: 'Нанокерамика', desc: 'Защитное покрытие на 2–5 лет', price: 'от 18 000 ₽' },
        { title: 'Антидождь', desc: 'Гидрофобное покрытие стёкол', price: 'от 1 500 ₽' },
        { title: 'Жидкое стекло', desc: 'Доступная защита кузова на сезон', price: 'от 5 000 ₽' },
      ]
    },
  ]
  const steps = ['Запись онлайн', 'Диагностика', 'Согласование', 'Выполнение', 'Сдача']

  return (
    <div style={{ background: '#0C0D10', fontFamily: 'var(--font-inter)' }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(12,13,16,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(217,79,43,0.15)' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', color: '#D94F2B', fontSize: '15px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>ЧистоПро</span>
        <div className="hidden md:flex gap-8">
          {[['Услуги','#services'],['Почему мы','#why'],['Этапы','#steps'],['Контакты','#contact']].map(([l,h]) => (
            <a key={l} href={h} className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-100" style={{ color: 'rgba(238,233,226,0.35)' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-colors hover:bg-red-600 hover:border-red-600" style={{ color: '#D94F2B', borderColor: '#D94F2B' }}>Записаться</a>
          <Link href="/" className="font-mono text-[10px] uppercase tracking-widest opacity-25 hover:opacity-60" style={{ color: '#EEE9E2' }}>← Назад</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 pt-36 px-6 md:px-16 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, transparent, #D94F2B, transparent)' }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none" style={{ fontSize: '38vw', fontFamily: 'var(--font-inter)', fontWeight: 900, color: 'rgba(217,79,43,0.04)', lineHeight: 1 }}>А</div>
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }} className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-8" style={{ color: '#D94F2B' }}>Детейлинг-центр · Иннополис</p>
          <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(44px,7.5vw,112px)', lineHeight: 0.92, letterSpacing: '-0.04em', color: '#EEE9E2', textTransform: 'uppercase' }}>
            Профессиональный<br /><span style={{ color: '#D94F2B' }}>детейлинг</span><br />вашего авто.
          </h1>
          <p className="mt-6 mb-10 max-w-lg" style={{ color: 'rgba(238,233,226,0.45)', fontSize: '17px', lineHeight: 1.7, fontWeight: 300 }}>
            Полировка, оклейка, нанокерамика, химчистка. Все виды работ с гарантией результата.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="font-mono text-sm uppercase tracking-widest px-8 py-4 transition-colors" style={{ background: '#D94F2B', color: '#EEE9E2' }}>Записаться онлайн →</a>
            <a href="#services" className="font-mono text-sm uppercase tracking-widest px-8 py-4 border transition-colors hover:border-white" style={{ color: 'rgba(238,233,226,0.45)', borderColor: 'rgba(238,233,226,0.15)' }}>Смотреть услуги</a>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 mt-12">
            {[['5+ лет','на рынке'],['1 200+','выполненных работ'],['97%','довольных клиентов']].map(([v,l]) => (
              <div key={l}>
                <p style={{ fontFamily: 'var(--font-dm-mono)', color: '#D94F2B', fontSize: '22px', fontWeight: 500 }}>{v}</p>
                <p style={{ color: 'rgba(238,233,226,0.35)', fontSize: '12px' }}>{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* УСЛУГИ ПО КАТЕГОРИЯМ */}
      <section id="services" style={{ background: '#0E0F13', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10 pb-6 border-b" style={{ borderColor: 'rgba(217,79,43,0.15)' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,48px)', color: '#EEE9E2', textTransform: 'uppercase', letterSpacing: '-0.03em' }}>Услуги</h2>
          </div>
          {/* Tabs */}
          <div className="flex gap-1 mb-8 overflow-x-auto pb-2">
            {categories.map((c, i) => (
              <button key={c.label} onClick={() => setActiveTab(i)}
                className="font-mono text-xs uppercase tracking-widest px-5 py-2.5 whitespace-nowrap transition-colors"
                style={{ background: activeTab === i ? '#D94F2B' : 'transparent', color: activeTab === i ? '#EEE9E2' : 'rgba(238,233,226,0.35)', border: `1px solid ${activeTab === i ? '#D94F2B' : 'rgba(238,233,226,0.1)'}` }}>
                {c.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories[activeTab].items.map((item) => (
                <div key={item.title} className="p-6" style={{ background: '#141519', border: '1px solid rgba(217,79,43,0.12)' }}>
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '17px', color: '#EEE9E2', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(238,233,226,0.4)', marginBottom: '16px', lineHeight: 1.6 }}>{item.desc}</p>
                  <p style={{ fontFamily: 'var(--font-dm-mono)', color: '#D94F2B', fontSize: '14px' }}>{item.price}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ПОЧЕМУ МЫ */}
      <section id="why" style={{ background: '#0C0D10', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-12" style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,48px)', color: '#EEE9E2', textTransform: 'uppercase', letterSpacing: '-0.03em' }}>Почему нас выбирают</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(217,79,43,0.12)' }}>
            {[
              { n: '01', title: 'Немецкая химия', text: 'Работаем только с Koch Chemie, Meguiar\'s и Gyeon. Никакой дешёвой экономии на материалах.' },
              { n: '02', title: 'Гарантия результата', text: 'Если работа не устроила — переделаем бесплатно. Без лишних слов и споров.' },
              { n: '03', title: 'Онлайн-запись', text: 'Записывайтесь в удобное время без звонков. Подтверждение в Telegram за 2 минуты.' },
              { n: '04', title: 'Опыт 5+ лет', text: 'Более 1 200 выполненных работ. Берёмся за любую сложность.' },
            ].map(item => (
              <div key={item.n} className="p-8" style={{ background: '#0E0F13' }}>
                <p style={{ fontFamily: 'var(--font-dm-mono)', color: '#D94F2B', fontSize: '11px', marginBottom: '12px' }}>{item.n}</p>
                <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '20px', color: '#EEE9E2', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(238,233,226,0.4)', lineHeight: 1.65 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭТАПЫ */}
      <section id="steps" style={{ background: '#D94F2B', padding: '80px 0' }}>
        <div className="container-wide">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,48px)', color: '#0C0D10', textTransform: 'uppercase', letterSpacing: '-0.03em' }}>Как мы работаем</h2>
          <div className="flex flex-wrap gap-0">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-medium flex-shrink-0"
                    style={{ background: '#0C0D10', color: '#D94F2B' }}>{i + 1}</div>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '15px', color: '#0C0D10', whiteSpace: 'nowrap' }}>{s}</span>
                </div>
                {i < steps.length - 1 && <div className="w-8 h-px mx-2" style={{ background: 'rgba(12,13,16,0.3)' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <section id="contact" style={{ background: '#0C0D10', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-3" style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(36px,4vw,60px)', color: '#EEE9E2', textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.95 }}>Записаться<br />онлайн.</h2>
            <p className="mb-8" style={{ color: 'rgba(238,233,226,0.35)', fontSize: '15px' }}>Ответим в течение 15 минут и подберём удобное время.</p>
            {[['Адрес','Иннополис, ул. Университетская, 7'],['Телефон','+7 (999) 000-00-00'],['Режим','Пн–Вс: 9:00–21:00']].map(([l,v]) => (
              <div key={l} className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(238,233,226,0.06)' }}>
                <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(217,79,43,0.7)', marginBottom: '2px' }}>{l}</p>
                <p style={{ fontSize: '14px', color: '#EEE9E2' }}>{v}</p>
              </div>
            ))}
          </div>
          <form className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Имя','Телефон'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-4 font-inter text-sm outline-none" style={{ background: '#141519', border: '1px solid rgba(217,79,43,0.2)', color: '#EEE9E2' }} />
            ))}
            <select className="w-full px-4 py-4 font-inter text-sm outline-none appearance-none" style={{ background: '#141519', border: '1px solid rgba(217,79,43,0.2)', color: 'rgba(238,233,226,0.4)' }}>
              <option value="">Выберите услугу</option>
              {categories.map(c => c.items.map(i => <option key={i.title}>{i.title}</option>))}
            </select>
            <textarea placeholder="Комментарий" rows={3} className="w-full px-4 py-4 font-inter text-sm outline-none resize-none" style={{ background: '#141519', border: '1px solid rgba(217,79,43,0.2)', color: '#EEE9E2' }} />
            <button className="w-full py-4 font-inter font-bold text-sm uppercase tracking-widest" style={{ background: '#D94F2B', color: '#EEE9E2' }}>Отправить заявку</button>
          </form>
        </div>
      </section>
      <footer className="py-5 flex justify-between items-center px-6 md:px-16" style={{ background: '#0A0B0D', borderTop: '1px solid rgba(238,233,226,0.05)' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(238,233,226,0.25)' }}>© 2024 ЧистоПро</span>
        <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(238,233,226,0.25)' }} className="hover:opacity-70">Сайт разработан Ильёй Шкариным →</Link>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 02 — БОТАНИКА · Цветы
// Источник структуры: tatarbuket.ru
// Разделы: Hero → Каталог с фильтром → Доставка → Акция → Контакты
// ─────────────────────────────────────────────────────────────────────────────
function BotanikaSite() {
  const [filter, setFilter] = useState('Все')
  const filters = ['Все', 'Розы', 'Полевые', 'Экзотика', 'Композиции']
  const catalog = [
    { name: 'Сезонный авторский', tag: 'Полевые', price: 'от 2 500 ₽', hot: true },
    { name: 'Монобукет роз', tag: 'Розы', price: 'от 3 200 ₽', hot: false },
    { name: 'Тропический mix', tag: 'Экзотика', price: 'от 4 800 ₽', hot: false },
    { name: 'Шляпная коробка', tag: 'Композиции', price: 'от 5 500 ₽', hot: true },
    { name: 'Нежные пионы', tag: 'Полевые', price: 'от 3 800 ₽', hot: false },
    { name: 'Английские розы', tag: 'Розы', price: 'от 4 200 ₽', hot: false },
    { name: 'Орхидеи в вазе', tag: 'Экзотика', price: 'от 6 000 ₽', hot: false },
    { name: 'Коробка с макарун', tag: 'Композиции', price: 'от 7 500 ₽', hot: true },
  ]
  const shown = filter === 'Все' ? catalog : catalog.filter(c => c.tag === filter)

  return (
    <div style={{ background: '#F3F0EB', fontFamily: 'var(--font-inter)' }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(243,240,235,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(11,20,16,0.07)' }}>
        <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500, fontSize: '20px', color: '#0B1410', letterSpacing: '-0.02em' }}>Ботаника</span>
        <div className="hidden md:flex gap-8">
          {[['Каталог','#catalog'],['Доставка','#delivery'],['Акции','#promo'],['Контакты','#contact']].map(([l,h]) => (
            <a key={l} href={h} className="font-inter text-sm transition-opacity hover:opacity-100" style={{ color: 'rgba(11,20,16,0.4)' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+79990000000" className="font-inter font-medium text-sm" style={{ color: '#0B1410' }}>+7 (999) 000-00-00</a>
          <a href="#catalog" className="font-inter font-medium text-sm px-5 py-2 rounded-full" style={{ background: '#7DBF6E', color: '#0B1410' }}>Заказать</a>
          <Link href="/" className="font-inter text-xs opacity-25 hover:opacity-60" style={{ color: '#0B1410' }}>← Назад</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-16" style={{ background: '#0B1410' }}>
        <div className="container-wide py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8" style={{ background: 'rgba(125,191,110,0.12)', border: '1px solid rgba(125,191,110,0.25)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="font-mono text-xs" style={{ color: '#7DBF6E' }}>Доставка сегодня до 22:00</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(48px,6.5vw,90px)', color: '#EBE8E2', lineHeight: 1.02, letterSpacing: '-0.03em' }}>
              Свежие цветы<br />с доставкой<br /><span style={{ color: '#7DBF6E' }}>за 1 час.</span>
            </h1>
            <p className="mt-6 mb-10 max-w-md" style={{ fontWeight: 300, fontSize: '17px', color: 'rgba(235,232,226,0.5)', lineHeight: 1.7 }}>
              Авторские букеты из свежих цветов. Бесплатная доставка от 2 500 ₽. Оплата картой онлайн.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog" className="font-inter font-medium text-sm px-7 py-3.5 rounded-full" style={{ background: '#7DBF6E', color: '#0B1410' }}>Смотреть каталог</a>
              <a href="#contact" className="font-inter font-light text-sm px-7 py-3.5 rounded-full border" style={{ borderColor: 'rgba(235,232,226,0.2)', color: 'rgba(235,232,226,0.65)' }}>Связаться</a>
            </div>
          </motion.div>
          {/* Decorative */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center h-[480px]">
            <motion.svg viewBox="0 0 360 360" fill="none" className="w-80 h-80"
              animate={{ rotate: [0, 3, -3, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>
              <circle cx="180" cy="180" r="170" stroke="#7DBF6E" strokeOpacity="0.08" strokeWidth="1" />
              <circle cx="180" cy="180" r="130" stroke="#7DBF6E" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 10" />
              <ellipse cx="180" cy="100" rx="45" ry="90" stroke="#7DBF6E" strokeOpacity="0.5" strokeWidth="1" fill="#7DBF6E" fillOpacity="0.04" transform="rotate(-25 180 100)" />
              <ellipse cx="240" cy="175" rx="45" ry="90" stroke="#7DBF6E" strokeOpacity="0.35" strokeWidth="1" fill="none" transform="rotate(30 240 175)" />
              <ellipse cx="120" cy="185" rx="45" ry="90" stroke="#7DBF6E" strokeOpacity="0.35" strokeWidth="1" fill="none" transform="rotate(-90 120 185)" />
              <ellipse cx="180" cy="270" rx="45" ry="90" stroke="#7DBF6E" strokeOpacity="0.2" strokeWidth="0.8" fill="none" transform="rotate(155 180 270)" />
              <path d="M180 80 Q190 180 180 340" stroke="#7DBF6E" strokeOpacity="0.35" strokeWidth="1" fill="none" />
              <circle cx="180" cy="180" r="16" stroke="#7DBF6E" strokeWidth="1.5" strokeOpacity="0.6" fill="#7DBF6E" fillOpacity="0.08" />
              <circle cx="180" cy="180" r="4" fill="#7DBF6E" fillOpacity="0.9" />
            </motion.svg>
          </motion.div>
        </div>
      </section>

      {/* КАТАЛОГ */}
      <section id="catalog" style={{ background: '#F3F0EB', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(30px,3.5vw,48px)', color: '#0B1410', letterSpacing: '-0.02em' }}>Каталог букетов</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  className="font-inter text-sm px-4 py-1.5 rounded-full transition-colors"
                  style={{ background: filter === f ? '#0B1410' : 'transparent', color: filter === f ? '#EBE8E2' : '#0B1410', border: `1px solid ${filter === f ? '#0B1410' : 'rgba(11,20,16,0.15)'}` }}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatePresence>
              {shown.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-sm overflow-hidden group cursor-pointer" style={{ background: '#fff', border: '1px solid rgba(11,20,16,0.07)' }}>
                  <div className="relative" style={{ aspectRatio: '3/4', background: ['#E8F0E5','#F0E8E5','#E5E8F0','#F0EDE5','#E5F0EB','#F0E5EA','#EAE5F0','#F0EAE5'][i % 8] }}>
                    {item.hot && (
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-full font-inter text-xs font-medium" style={{ background: '#7DBF6E', color: '#0B1410' }}>Хит</div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span style={{ fontSize: '48px' }}>💐</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-inter font-medium text-sm mb-1" style={{ color: '#0B1410' }}>{item.name}</p>
                    <p className="font-inter text-xs mb-2" style={{ color: 'rgba(11,20,16,0.4)' }}>{item.tag}</p>
                    <div className="flex items-center justify-between">
                      <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: '#7DBF6E' }}>{item.price}</p>
                      <button className="font-inter text-xs px-3 py-1 rounded-full transition-colors" style={{ background: '#0B1410', color: '#EBE8E2' }}>В корзину</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ДОСТАВКА */}
      <section id="delivery" style={{ background: '#0B1410', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-8" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(32px,4vw,56px)', color: '#EBE8E2', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Доставим<br />за 1 час.
            </h2>
            <div className="space-y-5">
              {[
                ['Бесплатно', 'При заказе от 2 500 ₽ по всему Иннополису'],
                ['90 минут', 'Среднее время доставки в рабочие часы'],
                ['Фото до доставки', 'Пришлём фото готового букета перед отправкой'],
                ['Открытка в подарок', 'Бесплатно к любому заказу. Напишите текст в комментарии'],
              ].map(([t,v]) => (
                <div key={t} className="flex gap-4 pb-5" style={{ borderBottom: '1px solid rgba(235,232,226,0.07)' }}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#7DBF6E' }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '15px', color: '#EBE8E2', marginBottom: '3px' }}>{t}</p>
                    <p style={{ fontSize: '13px', color: 'rgba(235,232,226,0.4)' }}>{v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-sm p-8" style={{ background: '#111A12', border: '1px solid rgba(125,191,110,0.1)' }}>
            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: '#7DBF6E' }}>Акция</p>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '32px', color: '#EBE8E2', marginBottom: '12px' }}>−15% по подписке</h3>
            <p style={{ fontSize: '14px', color: 'rgba(235,232,226,0.45)', lineHeight: 1.65, marginBottom: '24px' }}>
              Оформите подписку на еженедельные букеты и получайте скидку 15% на каждый заказ. Отменить можно в любой момент.
            </p>
            <a href="#contact" className="inline-block font-inter font-medium text-sm px-6 py-3 rounded-full" style={{ background: '#7DBF6E', color: '#0B1410' }}>Оформить подписку</a>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contact" style={{ background: '#F3F0EB', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-8" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(36px,4vw,56px)', color: '#0B1410', letterSpacing: '-0.03em', lineHeight: 1.05 }}>Заказать<br />букет.</h2>
            {[['Адрес','Иннополис, ул. Спортивная, 14'],['Телефон','+7 (999) 000-00-00'],['Часы','Пн–Вс: 8:00–22:00'],['WhatsApp / Telegram','@botanika_inn']].map(([l,v]) => (
              <div key={l} className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(11,20,16,0.08)' }}>
                <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#7DBF6E', marginBottom: '2px' }}>{l}</p>
                <p style={{ fontSize: '14px', color: '#0B1410' }}>{v}</p>
              </div>
            ))}
          </div>
          <form className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Ваше имя','Телефон'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-4 font-inter text-sm outline-none rounded-sm"
                style={{ background: '#fff', border: '1px solid rgba(11,20,16,0.1)', color: '#0B1410' }} />
            ))}
            <textarea placeholder="Пожелания: повод, цвета, бюджет" rows={3} className="w-full px-4 py-4 font-inter text-sm outline-none resize-none rounded-sm"
              style={{ background: '#fff', border: '1px solid rgba(11,20,16,0.1)', color: '#0B1410' }} />
            <button className="w-full py-4 font-inter font-medium text-sm rounded-full" style={{ background: '#0B1410', color: '#EBE8E2' }}>Заказать букет</button>
          </form>
        </div>
      </section>
      <footer className="py-5 flex justify-between items-center px-6 md:px-16" style={{ background: '#0B1410', borderTop: '1px solid rgba(235,232,226,0.05)' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(235,232,226,0.25)' }}>© 2024 Ботаника</span>
        <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(235,232,226,0.25)' }} className="hover:opacity-70">Сайт разработан Ильёй Шкариным →</Link>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 03 — КЛИНИКА УЛЫБКИ · Стоматология
// Источник структуры: linadentkazan.ru
// Разделы: Hero → О клинике → Услуги → Врачи → До/После → Акция → Отзывы → Контакты
// ─────────────────────────────────────────────────────────────────────────────
function UlibkaSite() {
  const [beforeAfter, setBeforeAfter] = useState(0)
  const doctors = [
    { name: 'Врач-терапевт', spec: 'Лечение, реставрация, эстетика', exp: '10 лет', initial: 'Т' },
    { name: 'Хирург-имплантолог', spec: 'Имплантация, костная пластика', exp: '14 лет', initial: 'И' },
    { name: 'Ортодонт', spec: 'Брекеты, элайнеры Invisalign', exp: '8 лет', initial: 'О' },
    { name: 'Пародонтолог', spec: 'Лечение дёсен, чистка', exp: '12 лет', initial: 'П' },
  ]

  return (
    <div style={{ background: '#090F1A', fontFamily: 'var(--font-inter)' }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(9,15,26,0.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(63,175,200,0.12)' }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#3FAFC8' }}>
            <span className="font-inter font-bold text-xs text-white">К</span>
          </div>
          <span className="font-inter font-semibold" style={{ color: '#E8EFF4', fontSize: '16px' }}>Клиника Улыбки</span>
        </div>
        <div className="hidden md:flex gap-8">
          {[['О нас','#about'],['Услуги','#services'],['Врачи','#doctors'],['До/После','#ba'],['Акции','#promo'],['Отзывы','#reviews'],['Контакты','#contact']].map(([l,h]) => (
            <a key={l} href={h} className="font-inter text-xs uppercase tracking-wider transition-opacity hover:opacity-100" style={{ color: 'rgba(232,239,244,0.35)' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="font-inter font-medium text-sm px-5 py-2 rounded-sm" style={{ background: '#3FAFC8', color: '#fff' }}>Записаться</a>
          <Link href="/" className="font-mono text-[10px] uppercase tracking-widest opacity-25 hover:opacity-60" style={{ color: '#E8EFF4' }}>← Назад</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #090F1A 0%, #0D1828 100%)' }}>
        <div className="container-wide pt-24 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ background: 'rgba(63,175,200,0.1)', border: '1px solid rgba(63,175,200,0.2)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs" style={{ color: '#3FAFC8' }}>Запись открыта · Иннополис</span>
            </div>
            <h1 className="max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(40px,5.5vw,80px)', color: '#E8EFF4', lineHeight: 1.06, letterSpacing: '-0.04em' }}>
              Всё для здоровья<br />ваших зубов.
            </h1>
            <p className="max-w-xl mx-auto mt-5 mb-10" style={{ fontWeight: 300, fontSize: '17px', color: 'rgba(232,239,244,0.5)', lineHeight: 1.65 }}>
              Частная стоматологическая клиника. Безболезненное лечение, имплантация, ортодонтия. Прозрачные цены.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <a href="#contact" className="font-inter font-semibold text-sm px-8 py-4 rounded-sm" style={{ background: '#3FAFC8', color: '#fff' }}>Записаться на приём</a>
              <a href="#services" className="font-inter font-medium text-sm px-8 py-4 rounded-sm border" style={{ borderColor: 'rgba(232,239,244,0.15)', color: 'rgba(232,239,244,0.6)' }}>Цены и услуги</a>
            </div>
            <div className="flex justify-center flex-wrap gap-6 md:gap-12 mt-12">
              {[['15+ лет','работы клиники'],['4 000+','пациентов'],['12','лет гарантия']].map(([v,l]) => (
                <div key={l} className="text-center">
                  <p style={{ fontFamily: 'var(--font-dm-mono)', color: '#3FAFC8', fontSize: '24px', fontWeight: 500 }}>{v}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(232,239,244,0.35)' }}>{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* О КЛИНИКЕ */}
      <section id="about" style={{ background: '#EFF4F7', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: '#3FAFC8' }}>О клинике</p>
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(28px,3vw,44px)', color: '#090F1A', letterSpacing: '-0.03em' }}>Безболезненная стоматология для всей семьи</h2>
            <p className="mb-4" style={{ fontSize: '15px', color: 'rgba(9,15,26,0.55)', lineHeight: 1.7 }}>Клиника Улыбки — это современное оборудование, опытные врачи и честные цены. Мы не назначаем лишних процедур и всегда показываем смету до начала лечения.</p>
            <p style={{ fontSize: '15px', color: 'rgba(9,15,26,0.55)', lineHeight: 1.7 }}>Работаем с детьми от 3 лет. Удобная онлайн-запись, напоминания по SMS.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['Digital X-Ray','Точная диагностика без вреда'],['Микроскоп Leica','Лечение под 20× увеличением'],['3D-сканер','Протезирование без слепков'],['Система Zoom 4','Отбеливание за 1 визит']].map(([t,v]) => (
              <div key={t} className="p-5 rounded-sm" style={{ background: '#fff', border: '1px solid rgba(9,15,26,0.07)', boxShadow: '0 2px 16px rgba(9,15,26,0.04)' }}>
                <p className="font-inter font-semibold text-sm mb-1" style={{ color: '#090F1A' }}>{t}</p>
                <p className="font-inter text-xs" style={{ color: 'rgba(9,15,26,0.4)', lineHeight: 1.5 }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" style={{ background: '#090F1A', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,48px)', color: '#E8EFF4', letterSpacing: '-0.03em' }}>Услуги и цены</h2>
          <div className="rounded-sm overflow-hidden" style={{ border: '1px solid rgba(63,175,200,0.12)' }}>
            <div className="hidden md:grid grid-cols-3 px-6 py-3" style={{ background: 'rgba(63,175,200,0.06)', borderBottom: '1px solid rgba(63,175,200,0.1)' }}>
              {['Услуга','Длительность','Стоимость'].map(h => (
                <span key={h} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(232,239,244,0.3)' }}>{h}</span>
              ))}
            </div>
            {[
              ['Консультация врача', 'Бесплатно', '—'],
              ['Лечение кариеса', '60 мин', 'от 2 500 ₽'],
              ['Профессиональная чистка', '90 мин', 'от 3 500 ₽'],
              ['Отбеливание Zoom 4', '120 мин', 'от 15 000 ₽'],
              ['Имплантация', 'Несколько визитов', 'от 45 000 ₽'],
              ['Ортодонтия / элайнеры', 'Курс лечения', 'от 60 000 ₽'],
              ['Виниры', '2 визита', 'от 8 000 ₽/шт'],
            ].map(([s, d, p], i) => (
              <div key={s} className="grid grid-cols-1 md:grid-cols-3 px-6 py-4 items-center gap-1 md:gap-0"
                style={{ borderBottom: i < 6 ? '1px solid rgba(232,239,244,0.05)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(63,175,200,0.03)' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '14px', color: '#E8EFF4' }}>{s}</span>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'rgba(232,239,244,0.35)' }}>{d}</span>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: '#3FAFC8', fontWeight: 500 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ВРАЧИ */}
      <section id="doctors" style={{ background: '#EFF4F7', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,48px)', color: '#090F1A', letterSpacing: '-0.03em' }}>Наши врачи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {doctors.map((d, i) => (
              <motion.div key={d.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-sm" style={{ background: '#fff', border: '1px solid rgba(9,15,26,0.07)', boxShadow: '0 2px 16px rgba(9,15,26,0.04)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(63,175,200,0.1)' }}>
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#3FAFC8', fontWeight: 700 }}>{d.initial}</span>
                </div>
                <h3 className="font-inter font-semibold text-sm mb-1" style={{ color: '#090F1A' }}>{d.name}</h3>
                <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: '#3FAFC8', marginBottom: '6px' }}>{d.exp} опыта</p>
                <p className="font-inter text-xs" style={{ color: 'rgba(9,15,26,0.45)', lineHeight: 1.5 }}>{d.spec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ДО / ПОСЛЕ */}
      <section id="ba" style={{ background: '#090F1A', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,48px)', color: '#E8EFF4', letterSpacing: '-0.03em' }}>До и после лечения</h2>
          <div className="flex gap-2 mb-8">
            {['Отбеливание','Виниры','Имплантация'].map((t, i) => (
              <button key={t} onClick={() => setBeforeAfter(i)}
                className="font-inter text-sm px-5 py-2 rounded-sm transition-colors"
                style={{ background: beforeAfter === i ? '#3FAFC8' : 'rgba(63,175,200,0.08)', color: beforeAfter === i ? '#fff' : 'rgba(232,239,244,0.5)', border: `1px solid ${beforeAfter === i ? '#3FAFC8' : 'rgba(63,175,200,0.12)'}` }}>
                {t}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['До','После'].map((label, j) => (
              <div key={label} className="rounded-sm overflow-hidden" style={{ aspectRatio: '4/3', background: j === 0 ? 'rgba(63,175,200,0.05)' : 'rgba(63,175,200,0.12)', border: '1px solid rgba(63,175,200,0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: j === 0 ? 'rgba(232,239,244,0.25)' : '#3FAFC8' }}>{label}</span>
                <span style={{ fontSize: '40px' }}>🦷</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* АКЦИЯ */}
      <section id="promo" style={{ background: '#3FAFC8', padding: '80px 0' }}>
        <div className="container-wide flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(9,15,26,0.5)' }}>Акция месяца</p>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(28px,4vw,56px)', color: '#090F1A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Бесплатная<br />консультация
            </h2>
            <p className="mt-3" style={{ fontSize: '16px', color: 'rgba(9,15,26,0.55)' }}>Запишитесь на консультацию — она бесплатна.<br />Врач составит план лечения и смету.</p>
          </div>
          <a href="#contact" className="font-inter font-semibold text-sm px-8 py-4 rounded-sm whitespace-nowrap" style={{ background: '#090F1A', color: '#E8EFF4' }}>Записаться бесплатно</a>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" style={{ background: '#EFF4F7', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,48px)', color: '#090F1A', letterSpacing: '-0.03em' }}>Отзывы пациентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: 'Анна М.', text: 'Наконец-то нашла клинику, где не страшно. Врач всё объяснил, сделал обезболивание — укол я вообще не почувствовала. Очень довольна!' },
              { name: 'Дмитрий К.', text: 'Поставили имплант. Всё прошло гладко, заживление быстрое. Смета совпала с реальной суммой — никаких доплат.' },
              { name: 'Светлана Р.', text: 'Делала отбеливание Zoom 4. Результат потрясающий — на 8 тонов светлее. Буду рекомендовать всем знакомым!' },
            ].map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-sm" style={{ background: '#fff', border: '1px solid rgba(9,15,26,0.07)', borderLeft: `3px solid #3FAFC8` }}>
                <div className="flex gap-1 mb-3">{'★★★★★'.split('').map((s, si) => <span key={si} style={{ color: '#3FAFC8', fontSize: '14px' }}>{s}</span>)}</div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '16px', color: '#090F1A', lineHeight: 1.6, marginBottom: '16px' }}>«{r.text}»</p>
                <p className="font-inter font-medium text-sm" style={{ color: '#090F1A' }}>{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contact" style={{ background: '#090F1A', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-8" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(36px,4vw,56px)', color: '#E8EFF4', letterSpacing: '-0.03em', lineHeight: 1.05 }}>Записаться<br />на приём.</h2>
            {[['Адрес','Иннополис, ул. Технологическая, 3'],['Телефон','+7 (999) 000-00-00'],['Часы приёма','Пн–Пт: 9–20, Сб: 10–18']].map(([l,v]) => (
              <div key={l} className="flex gap-4 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(232,239,244,0.06)' }}>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3FAFC8', minWidth: '80px', paddingTop: '1px' }}>{l}</span>
                <span className="font-inter text-sm" style={{ color: '#E8EFF4' }}>{v}</span>
              </div>
            ))}
          </div>
          <form className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Ваше имя','Телефон'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-4 font-inter text-sm outline-none rounded-sm"
                style={{ background: '#0F1828', border: '1px solid rgba(63,175,200,0.15)', color: '#E8EFF4' }} />
            ))}
            <select className="w-full px-4 py-4 font-inter text-sm outline-none rounded-sm appearance-none" style={{ background: '#0F1828', border: '1px solid rgba(63,175,200,0.15)', color: 'rgba(232,239,244,0.4)' }}>
              <option value="">Выберите врача</option>
              {doctors.map(d => <option key={d.name}>{d.name}</option>)}
            </select>
            <button className="w-full py-4 font-inter font-semibold text-sm rounded-sm" style={{ background: '#3FAFC8', color: '#fff' }}>Записаться онлайн</button>
          </form>
        </div>
      </section>
      <footer className="py-5 flex justify-between items-center px-6 md:px-16" style={{ background: '#060C15', borderTop: '1px solid rgba(232,239,244,0.05)' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(232,239,244,0.25)' }}>© 2024 Клиника Улыбки</span>
        <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(232,239,244,0.25)' }} className="hover:opacity-70">Сайт разработан Ильёй Шкариным →</Link>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 04 — СВОЯ ВЫПЕЧКА · Пекарня
// Источник структуры: аналог пекарни (bakery)
// Разделы: Hero → Меню с вкладками → О нас → Доставка → Отзывы → Контакты
// ─────────────────────────────────────────────────────────────────────────────
function VypechkaSite() {
  const [menuTab, setMenuTab] = useState('Хлеб')
  const menuData: Record<string, { name: string; desc: string; price: string; emoji: string }[]> = {
    'Хлеб': [
      { name: 'Пшеничный на закваске', desc: 'Ферментация 24 часа, хрустящая корочка', price: '180 ₽', emoji: '🍞' },
      { name: 'Ржаной с семечками', desc: 'Плотный, ароматный, из цельнозерновой муки', price: '200 ₽', emoji: '🍞' },
      { name: 'Чиабатта', desc: 'Воздушный итальянский хлеб с хрустящей корочкой', price: '160 ₽', emoji: '🥖' },
    ],
    'Выпечка': [
      { name: 'Круассан классический', desc: 'Французское слоёное тесто, масляный вкус', price: '120 ₽', emoji: '🥐' },
      { name: 'Круассан с шоколадом', desc: 'Тёмный шоколад Callebaut внутри', price: '140 ₽', emoji: '🥐' },
      { name: 'Эклер', desc: 'С заварным кремом и шоколадной глазурью', price: '110 ₽', emoji: '🍮' },
    ],
    'Торты': [
      { name: 'Медовик', desc: 'Классический, с нежным сметанным кремом', price: 'от 1 800 ₽', emoji: '🎂' },
      { name: 'Наполеон', desc: 'Слоёный, со сливочным заварным кремом', price: 'от 2 200 ₽', emoji: '🎂' },
      { name: 'Бенто-торт', desc: 'Маленький торт на 1–2 персоны с декором', price: 'от 900 ₽', emoji: '🎂' },
    ],
    'Кофе': [
      { name: 'Эспрессо', desc: 'Двойной шот на зерне Иннополис Роастери', price: '100 ₽', emoji: '☕' },
      { name: 'Капучино', desc: '150 мл молока, нежная пенка', price: '150 ₽', emoji: '☕' },
      { name: 'Флэт уайт', desc: 'Крепкий с бархатным молоком', price: '160 ₽', emoji: '☕' },
    ],
  }

  return (
    <div style={{ background: '#17100A', fontFamily: 'var(--font-inter)' }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(23,16,10,0.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(212,148,58,0.12)' }}>
        <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500, fontStyle: 'italic', fontSize: '20px', color: '#F0E8DC', letterSpacing: '-0.01em' }}>Своя выпечка</span>
        <div className="hidden md:flex gap-8">
          {[['Меню','#menu'],['О нас','#about'],['Доставка','#delivery'],['Отзывы','#reviews'],['Контакты','#contact']].map(([l,h]) => (
            <a key={l} href={h} className="font-inter font-light text-sm transition-opacity hover:opacity-100" style={{ color: 'rgba(240,232,220,0.35)' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#menu" className="font-inter font-medium text-sm px-5 py-2 rounded-full" style={{ background: '#D4943A', color: '#17100A' }}>Смотреть меню</a>
          <Link href="/" className="font-mono text-[10px] uppercase tracking-widest opacity-25 hover:opacity-60" style={{ color: '#F0E8DC' }}>← Назад</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,148,58,0.08) 0%, transparent 65%)' }} />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }} className="max-w-2xl">
          <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: 'rgba(212,148,58,0.1)', border: '1px solid rgba(212,148,58,0.2)' }}>
            <span style={{ fontSize: '60px' }}>🍞</span>
          </motion.div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'rgba(212,148,58,0.7)' }}>Пекарня · Иннополис · С 7:00 до 21:00</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(48px,6.5vw,88px)', color: '#F0E8DC', lineHeight: 1.02, letterSpacing: '-0.03em' }}>
            Из печи —<br /><span style={{ color: '#D4943A' }}>прямо к вам.</span>
          </h1>
          <p className="max-w-md mx-auto mt-5 mb-10" style={{ fontWeight: 300, fontSize: '17px', color: 'rgba(240,232,220,0.45)', lineHeight: 1.7 }}>
            Свежая выпечка на закваске, авторские торты и хороший кофе. Каждый день.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a href="#menu" className="font-inter font-medium text-sm px-7 py-3.5 rounded-full" style={{ background: '#D4943A', color: '#17100A' }}>Смотреть меню</a>
            <a href="#contact" className="font-inter font-light text-sm px-7 py-3.5 rounded-full border" style={{ borderColor: 'rgba(240,232,220,0.2)', color: 'rgba(240,232,220,0.6)' }}>Сделать предзаказ</a>
          </div>
        </motion.div>
      </section>

      {/* МЕНЮ */}
      <section id="menu" style={{ background: '#F7F1E8', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(30px,3.5vw,48px)', color: '#17100A', letterSpacing: '-0.02em' }}>Меню</h2>
            <div className="flex gap-2 flex-wrap">
              {Object.keys(menuData).map(t => (
                <button key={t} onClick={() => setMenuTab(t)}
                  className="font-inter text-sm px-5 py-2 rounded-full transition-colors"
                  style={{ background: menuTab === t ? '#17100A' : 'transparent', color: menuTab === t ? '#F0E8DC' : '#17100A', border: `1px solid ${menuTab === t ? '#17100A' : 'rgba(23,16,10,0.15)'}` }}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={menuTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {menuData[menuTab].map(item => (
                <div key={item.name} className="rounded-xl p-6 flex flex-col" style={{ background: '#fff', boxShadow: '0 2px 20px rgba(23,16,10,0.06)', border: '1px solid rgba(23,16,10,0.06)' }}>
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500, fontSize: '20px', color: '#17100A', marginBottom: '6px' }}>{item.name}</h3>
                  <p style={{ fontWeight: 300, fontSize: '13px', color: 'rgba(23,16,10,0.5)', lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                  <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid rgba(23,16,10,0.06)' }}>
                    <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '14px', color: '#D4943A', fontWeight: 500 }}>{item.price}</span>
                    <button className="font-inter text-xs px-4 py-1.5 rounded-full" style={{ background: 'rgba(212,148,58,0.1)', color: '#D4943A' }}>Заказать</button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* О НАС */}
      <section id="about" style={{ background: '#211508', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(212,148,58,0.7)' }}>О пекарне</p>
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(28px,3.5vw,48px)', color: '#F0E8DC', letterSpacing: '-0.02em' }}>Мы печём с душой,<br />а не на потоке.</h2>
            <p style={{ fontWeight: 300, fontSize: '15px', color: 'rgba(240,232,220,0.45)', lineHeight: 1.75, marginBottom: '16px' }}>Своя выпечка — небольшая ремесленная пекарня в Иннополисе. Мы готовим хлеб на натуральной закваске, авторские торты и свежую выпечку каждый день.</p>
            <p style={{ fontWeight: 300, fontSize: '15px', color: 'rgba(240,232,220,0.45)', lineHeight: 1.75 }}>Никаких консервантов, маргарина и улучшителей. Только настоящие ингредиенты и живое тесто.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['Каждый день','Печём с 5 утра'],['Без консервантов','Только натуральное'],['Предзаказ до 20:00','Для тортов и пирогов'],['Доставка','За 90 минут']].map(([t,v]) => (
              <div key={t} className="p-5 rounded-xl" style={{ background: 'rgba(212,148,58,0.06)', border: '1px solid rgba(212,148,58,0.12)' }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '14px', color: '#D4943A', marginBottom: '4px' }}>{t}</p>
                <p style={{ fontWeight: 300, fontSize: '12px', color: 'rgba(240,232,220,0.4)' }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" style={{ background: '#F7F1E8', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(28px,3.5vw,48px)', color: '#17100A', letterSpacing: '-0.02em' }}>Нас любят</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: 'Мария', text: 'Беру хлеб на закваске каждую неделю. Вкус — как в детстве у бабушки. Больше не покупаю в магазине!' },
              { name: 'Алексей', text: 'Заказали торт на день рождения. Всё сделали красиво и точно в срок. Медовик просто тает во рту.' },
              { name: 'Екатерина', text: 'Круассаны — лучшие в городе. Приезжаю специально с утра, пока не разобрали. Спасибо за такую вкусноту!' },
            ].map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl" style={{ background: '#fff', boxShadow: '0 2px 16px rgba(23,16,10,0.06)', borderLeft: '3px solid #D4943A' }}>
                <div className="flex gap-1 mb-3">{'★★★★★'.split('').map((s, si) => <span key={si} style={{ color: '#D4943A', fontSize: '14px' }}>{s}</span>)}</div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '16px', color: '#17100A', lineHeight: 1.6, marginBottom: '12px' }}>«{r.text}»</p>
                <p className="font-inter font-medium text-sm" style={{ color: '#17100A' }}>{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contact" style={{ background: '#17100A', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-8" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(36px,4vw,60px)', color: '#F0E8DC', letterSpacing: '-0.03em', lineHeight: 1.05 }}>Сделаем<br />предзаказ?</h2>
            {[['Адрес','Иннополис, ул. Центральная, 2'],['Телефон','+7 (999) 000-00-00'],['Часы','Пн–Вс: 7:00–21:00'],['Предзаказ','До 20:00 на следующий день']].map(([l,v]) => (
              <div key={l} className="flex gap-4 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(240,232,220,0.07)' }}>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#D4943A', minWidth: '80px', paddingTop: '1px' }}>{l}</span>
                <span className="font-inter font-light text-sm" style={{ color: '#F0E8DC' }}>{v}</span>
              </div>
            ))}
          </div>
          <form className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Ваше имя','Телефон'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-4 font-inter text-sm outline-none rounded-xl"
                style={{ background: '#221408', border: '1px solid rgba(212,148,58,0.15)', color: '#F0E8DC' }} />
            ))}
            <textarea placeholder="Что хотите заказать?" rows={3} className="w-full px-4 py-4 font-inter text-sm outline-none resize-none rounded-xl"
              style={{ background: '#221408', border: '1px solid rgba(212,148,58,0.15)', color: '#F0E8DC' }} />
            <button className="w-full py-4 font-inter font-medium text-sm rounded-full" style={{ background: '#D4943A', color: '#17100A' }}>Оформить предзаказ</button>
          </form>
        </div>
      </section>
      <footer className="py-5 flex justify-between items-center px-6 md:px-16" style={{ background: '#120C06', borderTop: '1px solid rgba(240,232,220,0.05)' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(240,232,220,0.25)' }}>© 2024 Своя выпечка</span>
        <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(240,232,220,0.25)' }} className="hover:opacity-70">Сайт разработан Ильёй Шкариным →</Link>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 05 — ФОРМА · Барбершоп
// Источник структуры: cartelkzn.ru
// Разделы: Hero → Прайс → Мастера → Акция → Онлайн-запись → Контакты
// ─────────────────────────────────────────────────────────────────────────────
function FormaSite() {
  const [selectedMaster, setSelectedMaster] = useState<string | null>(null)
  const masters = [
    { name: 'Артём', spec: 'Фейды, текстура', exp: '6 лет', bio: 'Чемпион регионального барбер-батла 2023. Специализация — скинфейды и современные текстурные стрижки.' },
    { name: 'Максим', spec: 'Классика, борода', exp: '5 лет', bio: 'Обучался в Москве и Дубае. Идеально работает с бородой и классическими стрижками любой длины.' },
    { name: 'Денис', spec: 'Дети, сложные случаи', exp: '4 года', bio: 'Самый терпеливый мастер команды. Специализируется на детских стрижках и нестандартных запросах.' },
  ]
  const prices = [
    { service: 'Мужская стрижка', time: '45 мин', price: 'от 900 ₽' },
    { service: 'Стрижка + борода', time: '70 мин', price: 'от 1 400 ₽' },
    { service: 'Оформление бороды', time: '30 мин', price: 'от 700 ₽' },
    { service: 'Классическое бритьё', time: '40 мин', price: 'от 1 200 ₽' },
    { service: 'Тонирование', time: '20 мин', price: 'от 600 ₽' },
    { service: 'Детская стрижка', time: '30 мин', price: 'от 700 ₽' },
  ]

  return (
    <div style={{ background: '#0A0A0F', fontFamily: 'var(--font-inter)' }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(240,236,230,0.07)' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontWeight: 500, fontSize: '16px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F0ECE6' }}>Форма</span>
        <div className="hidden md:flex gap-8">
          {[['Прайс','#prices'],['Мастера','#masters'],['Акция','#promo'],['Запись','#booking'],['Контакты','#contact']].map(([l,h]) => (
            <a key={l} href={h} className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-100" style={{ color: 'rgba(240,236,230,0.3)' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#booking" className="font-mono text-xs uppercase tracking-widest px-5 py-2.5 border-b-2" style={{ color: '#C8922A', borderColor: '#C8922A' }}>Записаться</a>
          <Link href="/" className="font-mono text-[10px] uppercase tracking-widest opacity-20 hover:opacity-50" style={{ color: '#F0ECE6' }}>← Назад</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-16 overflow-hidden">
        <div className="absolute left-14 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, #C8922A40, transparent)' }} />
        <div className="absolute right-0 bottom-0 select-none pointer-events-none" style={{ fontFamily: 'var(--font-playfair)', fontSize: '42vw', color: 'rgba(200,146,42,0.03)', lineHeight: 1, fontStyle: 'italic' }}>F</div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease }} className="pl-0 md:pl-24 max-w-4xl">
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '48px' }}>
            Барбершоп · Иннополис · 10:00–21:00
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 'clamp(60px,10vw,144px)', lineHeight: 0.9, letterSpacing: '-0.04em', color: '#F0ECE6' }}>
            Форма<br /><span style={{ fontStyle: 'italic', color: '#C8922A' }}>имеет</span><br />значение.
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 mt-12 md:mt-16">
            <a href="#booking" className="font-mono text-xs uppercase tracking-widest px-8 py-4 border-b-2" style={{ color: '#F0ECE6', borderColor: '#C8922A' }}>Записаться к мастеру</a>
            <a href="#prices" className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-100" style={{ color: 'rgba(240,236,230,0.3)' }}>Смотреть прайс →</a>
          </div>
        </motion.div>
      </section>

      {/* ПРАЙС */}
      <section id="prices" style={{ background: '#0A0A0F', padding: 'var(--section-spacing) 0', borderTop: '1px solid rgba(240,236,230,0.07)' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: '#C8922A' }}>Прайс-лист</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 'clamp(30px,3.5vw,48px)', color: '#F0ECE6', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Честные цены.<br />Без сюрпризов.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {prices.map((p, i) => (
              <motion.div key={p.service} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-wrap md:flex-nowrap items-center py-5 gap-1 md:gap-0" style={{ borderBottom: '1px solid rgba(240,236,230,0.07)' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '16px', color: '#F0ECE6', flex: 1, minWidth: '140px' }}>{p.service}</span>
                <span className="hidden md:inline" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(240,236,230,0.25)', marginRight: '24px' }}>{p.time}</span>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '14px', color: '#C8922A', minWidth: '90px', textAlign: 'right' }}>{p.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* МАСТЕРА */}
      <section id="masters" style={{ background: '#111115', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <p className="font-mono text-xs uppercase tracking-widest mb-10" style={{ color: '#C8922A' }}>Мастера</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(240,236,230,0.06)' }}>
            {masters.map((m, i) => (
              <motion.button key={m.name} onClick={() => setSelectedMaster(selectedMaster === m.name ? null : m.name)}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 text-left transition-colors" style={{ background: selectedMaster === m.name ? '#1A1A1F' : '#111115' }}>
                <div className="w-16 h-16 rounded-sm mb-6 flex items-center justify-center"
                  style={{ background: 'rgba(200,146,42,0.08)', border: '1px solid rgba(200,146,42,0.2)' }}>
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontStyle: 'italic', color: '#C8922A', fontWeight: 700 }}>{m.name[0]}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '28px', color: '#F0ECE6', letterSpacing: '-0.02em', marginBottom: '6px' }}>{m.name}</h3>
                <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C8922A', marginBottom: '8px' }}>{m.exp} · {m.spec}</p>
                <AnimatePresence>
                  {selectedMaster === m.name && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '13px', color: 'rgba(240,236,230,0.45)', lineHeight: 1.6 }}>
                      {m.bio}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* АКЦИЯ */}
      <section id="promo" style={{ background: '#C8922A', padding: '80px 0' }}>
        <div className="container-wide flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(10,10,15,0.45)' }}>Специальное предложение</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(32px,4vw,56px)', color: '#0A0A0F', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Первый визит<br />−20%
            </h2>
            <p className="mt-3" style={{ fontSize: '15px', color: 'rgba(10,10,15,0.5)' }}>Скидка 20% для новых клиентов на любую услугу.<br />Действует при онлайн-записи на этой неделе.</p>
          </div>
          <a href="#booking" className="font-inter font-semibold text-sm px-8 py-4 whitespace-nowrap" style={{ background: '#0A0A0F', color: '#F0ECE6' }}>Записаться со скидкой</a>
        </div>
      </section>

      {/* ОНЛАЙН-ЗАПИСЬ */}
      <section id="booking" style={{ background: '#F0EDE8', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(40px,5vw,68px)', color: '#0A0A0F', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              Онлайн-<br />запись.
            </h2>
            <p className="mb-8" style={{ fontSize: '15px', color: 'rgba(10,10,15,0.45)', lineHeight: 1.65 }}>Выберите мастера и удобное время. Подтверждение придёт в WhatsApp за 2 часа до визита.</p>
            {[['Адрес','Иннополис, ул. Молодёжная, 5'],['Телефон','+7 (999) 000-00-00'],['Часы','Пн–Вс: 10:00–21:00']].map(([l,v]) => (
              <div key={l} className="flex gap-5 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(10,10,15,0.08)' }}>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#C8922A', minWidth: '70px', paddingTop: '1px' }}>{l}</span>
                <span style={{ fontSize: '14px', color: '#0A0A0F' }}>{v}</span>
              </div>
            ))}
          </div>
          <form id="contact" className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Ваше имя','Телефон'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-4 text-sm outline-none"
                style={{ fontFamily: 'var(--font-inter)', background: '#fff', border: '1px solid rgba(10,10,15,0.1)', color: '#0A0A0F' }} />
            ))}
            <select className="w-full px-4 py-4 text-sm outline-none appearance-none"
              style={{ fontFamily: 'var(--font-inter)', background: '#fff', border: '1px solid rgba(10,10,15,0.1)', color: 'rgba(10,10,15,0.45)' }}>
              <option value="">Выберите мастера</option>
              {masters.map(m => <option key={m.name}>{m.name} — {m.spec}</option>)}
            </select>
            <select className="w-full px-4 py-4 text-sm outline-none appearance-none"
              style={{ fontFamily: 'var(--font-inter)', background: '#fff', border: '1px solid rgba(10,10,15,0.1)', color: 'rgba(10,10,15,0.45)' }}>
              <option value="">Выберите услугу</option>
              {prices.map(p => <option key={p.service}>{p.service} — {p.price}</option>)}
            </select>
            <button className="w-full py-4 font-inter font-semibold text-sm tracking-wide" style={{ background: '#0A0A0F', color: '#F0ECE6' }}>Записаться онлайн</button>
          </form>
        </div>
      </section>
      <footer className="py-5 flex justify-between items-center px-6 md:px-16" style={{ background: '#0A0A0F', borderTop: '1px solid rgba(240,236,230,0.06)' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(240,236,230,0.25)' }}>© 2024 Форма · Барбершоп</span>
        <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(240,236,230,0.25)' }} className="hover:opacity-70">Сайт разработан Ильёй Шкариным →</Link>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ROUTER
// ─────────────────────────────────────────────────────────────────────────────
export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string

  useEffect(() => {
    if (!validIds.includes(id)) {
      router.push('/')
    }
  }, [id, router])

  switch (id) {
    case 'chistopro':      return <ChistoproSite />
    case 'botanika':       return <BotanikaSite />
    case 'ulibka':         return <UlibkaSite />
    case 'svoya-vypechka': return <VypechkaSite />
    case 'forma':          return <FormaSite />
    default:               return null
  }
}

