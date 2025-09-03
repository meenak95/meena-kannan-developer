export const createPageUrl = (pageName: string): string => {
  const pageMap: Record<string, string> = {
    'Home': '/',
    'About': '/about',
    'Projects': '/projects',
    'Contact': '/contact'
  }
  
  return pageMap[pageName] || '/'
}

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}
