import { DocsThemeConfig } from 'nextra-theme-docs'
import React from 'react'
import { Logo } from './components/icons'

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/zaytri/slime2-docs',
  useNextSeoProps() {
    return { titleTemplate: '%s ~ slime2 docs' }
  },
  head: (
    <>
      <link rel='shortcut icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/manifest.json' />
    </>
  ),
  darkMode: true,
  logo: (
    <div className='flex items-center gap-3'>
      <Logo size={40} />
      <p>slime2 docs</p>
    </div>
  ),
  editLink: { component: () => null },
  feedback: {
    useLink: () => 'https://forums.slime2.stream/forums/help.13/',
    content: () => 'Have questions? Ask in the forums 🔗',
  },
  toc: {
    headingComponent: ({ children }) => {
      return children.endsWith('{:js}') || children.endsWith('{:ts}')
        ? children.slice(0, -5)
        : children
    },
    backToTop: true,
  },
  primaryHue: 90,
  primarySaturation: 70,
  navigation: true,
  footer: { text: 'slime2 docs' },
}

export default config
