import ClientPage from './ClientPage'

// Required for static export with dynamic routes
export function generateStaticParams() {
  return [
    { id: 'chistopro' },
    { id: 'botanika' },
    { id: 'ulibka' },
    { id: 'svoya-vypechka' },
    { id: 'forma' },
  ]
}

export default function ProjectPage() {
  return <ClientPage />
}
