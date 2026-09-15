import { Instagram, MessageCircle, Music2 } from 'lucide-react';

export default function Footer(){
  return <footer id="contact" className="site-footer simple-footer">
    <div className="footer-social" aria-label="حسابات استديو روح">
      <a href="https://www.instagram.com/rooh.kids.studio/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
      <a href="https://www.tiktok.com/@rooh.kids.studio" target="_blank" rel="noreferrer" aria-label="TikTok"><Music2/></a>
      <a href="https://wa.me/966568747122" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
    </div>
  </footer>
}
