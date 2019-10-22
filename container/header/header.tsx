import React from 'react'
import Link from 'next/link'
import './header.scss'

export interface linkModel {
    key: string;
    href: string;
    label:string;
}

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: '', label: 'About' },
  { href: '', label: 'Contact us' }


].map((link:linkModel) => {
   link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Header = () => (
  <nav className="navBar">
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>

)

export default Header
