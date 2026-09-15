'use client';

import Link from 'next/link';
import { Instagram, Menu, MessageCircle, Music2 } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    {href:'/', label:'الرئيسية'},
    {href:'/themes', label:'الثيمات'},
    {href:'/packages', label:'الباقات'},
    {href:'/booking', label:'الحجز'},
    {href:'/#contact', label:'تواصل معنا'}
  ];
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">♡</span>
        <div><small>STUDIO ROOH KIDS</small><strong>استديو روح</strong></div>
      </Link>
      <nav className="desktop-nav">{links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
      <div className="socials"><Instagram size={20}/><Music2 size={20}/><MessageCircle size={20}/></div>
      <button className="menu-btn" aria-label="فتح القائمة" onClick={() => setOpen(!open)}><Menu/></button>
      {open && <div className="mobile-menu">{links.map(l=><Link key={l.href} onClick={()=>setOpen(false)} href={l.href}>{l.label}</Link>)}</div>}
    </header>
  );
}
