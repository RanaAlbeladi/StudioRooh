import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';
import Themes from '@/components/Themes';
import Packages from '@/components/Packages';
import { Instagram, MessageCircle, Music2 } from 'lucide-react';
import { studioSettings } from '@/data/content';

export default function Home(){
  return <main id="home"><Header/><section className="hero"><div className="hero-copy"><span className="scribble">Little Moments, Big Memories ♡</span><h1>استديو روح</h1><h2>نصنع لكم ذكريات تبقى للأبد</h2><p>جلسات تصوير أطفال بتفاصيل مميزة وثيمات فريدة ولحظات مليئة بالحب</p><span className="mini-pill">كل صورة .. حكاية ♡</span></div><div className="hero-art"><div className="photo-placeholder"><span>صورة رئيسية<br/>من تصوير الاستديو</span></div><span className="doodle d1">☁</span><span className="doodle d2">☆</span><span className="doodle d3">♡</span></div></section><ActionCards/><Themes/><Packages/><footer id="contact"><div className="brand footer-brand"><span className="brand-mark">♡</span><div><small>STUDIO ROOH KIDS</small><strong>استديو روح</strong></div></div><div><p>تواصلوا معنا لإرسال الموقع بعد تأكيد الحجز</p><strong>{studioSettings.phone}</strong></div><div className="footer-social"><Instagram/><Music2/><MessageCircle/></div><small>جميع الحقوق محفوظة © استديو روح</small></footer></main>
}
