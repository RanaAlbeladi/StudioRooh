'use client';

import { Instagram, Menu, MessageCircle, Music2 } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">♡</span>
        <div><small>STUDIO ROOH KIDS</small><strong>استديو روح</strong></div>
      </div>
      <nav className="desktop-nav">
        <a href="#home">الرئيسية</a><a href="#themes">الثيمات</a><a href="#packages">الباقات</a><a href="#how">طريقة الحجز</a><a href="#contact">تواصل معنا</a>
      </nav>
      <div className="socials"><Instagram size={20}/><Music2 size={20}/><MessageCircle size={20}/></div>
      <button className="menu-btn" aria-label="فتح القائمة" onClick={() => setOpen(!open)}><Menu/></button>
      {open && <div className="mobile-menu"><a onClick={()=>setOpen(false)} href="#home">الرئيسية</a><a onClick={()=>setOpen(false)} href="#themes">الثيمات</a><a onClick={()=>setOpen(false)} href="#packages">الباقات</a><a onClick={()=>setOpen(false)} href="#how">طريقة الحجز</a><a onClick={()=>setOpen(false)} href="#contact">تواصل معنا</a></div>}
    </header>
  );
}
