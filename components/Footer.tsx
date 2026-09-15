import { Instagram, MessageCircle, Music2 } from 'lucide-react';
import { studioSettings } from '@/data/content';

export default function Footer(){
  return <footer id="contact" className="site-footer">
    <div className="brand footer-brand"><span className="brand-mark">♡</span><div><small>STUDIO ROOH KIDS</small><strong>استديو روح</strong></div></div>
    <div className="footer-contact"><span>للتواصل والاستفسارات</span><strong>{studioSettings.phone}</strong></div>
    <div className="footer-social"><Instagram/><Music2/><MessageCircle/></div>
    <small>جميع الحقوق محفوظة © استديو روح</small>
  </footer>
}
