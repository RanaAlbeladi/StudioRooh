import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { themes } from '@/data/content';

export default function ThemesPage(){
  return <main><Header/><section className="inner-hero"><span>OUR THEMES</span><h1>ثيماتنا</h1><p>اختاري الثيم الأقرب لكم، واضغطي عليه لمشاهدة تفاصيله وصوره.</p></section><section className="section-block inner-section"><SectionTitle eyebrow="CHOOSE YOUR FAVORITE" title="كل الثيمات" subtitle="سيتم استبدال الصور والأسماء الحالية بثيمات الاستديو الحقيقية"/><div className="theme-grid theme-grid-page">{themes.map(t=><article className="theme-card" key={t.id}><Image src={t.image} alt={t.name} width={700} height={520}/><div className="theme-card-body"><h3>{t.name}</h3><p>ثيم تصوير أطفال بتفاصيل ناعمة ولمسات مميزة.</p><Link href={`/themes/${t.id}`}>مشاهدة التفاصيل ←</Link></div></article>)}</div></section><Footer/></main>
}
