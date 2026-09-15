'use client';

import Link from 'next/link';
import { Instagram, Menu, MessageCircle, Music2 } from 'lucide-react';
import { useState } from 'react';

const socialLinks = {
  instagram: 'https://www.instagram.com/rooh.kids.studio/',
  tiktok: 'https://www.tiktok.com/@rooh.kids.studio',
  whatsapp: 'https://wa.me/966568747122'
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    {href:'/', label:'الرئيسية'},
    {href:'/themes', label:'الثيمات'},
    {href:'/packages', label:'الباقات'}
  ];
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">♡</span>
        <div><small>STUDIO ROOH KIDS</small><strong>استديو روح</strong></div>
      </Link>
      <nav className="desktop-nav">{links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
      <div className="socials" aria-label="حسابات استديو روح">
        <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20}/></a>
        <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><Music2 size={20}/></a>
        <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={20}/></a>
      </div>
      <button className="menu-btn" aria-label="فتح القائمة" onClick={() => setOpen(!open)}><Menu/></button>
      {open && <div className="mobile-menu">
        {links.map(l=><Link key={l.href} onClick={()=>setOpen(false)} href={l.href}>{l.label}</Link>)}
        <div className="mobile-socials">
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
          <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><Music2/></a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
        </div>
      </div>}
    </header>
  );
}
