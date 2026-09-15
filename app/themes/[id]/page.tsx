import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { themes } from '@/data/content';

export default async function ThemeDetails({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const selected=themes.find(t=>t.id===id);
  if(!selected) notFound();
  const ordered=[selected,...themes.filter(t=>t.id!==id)];
  return <main><Header/><section className="inner-hero"><span>THEME DETAILS</span><h1>{selected.name}</h1><p>الثيم الذي اخترتيه يظهر أولاً، وباقي الثيمات موجودة أسفل الصفحة للمقارنة بسهولة.</p></section><section className="theme-detail-list">{ordered.map((t,index)=><article className={`theme-detail ${index===0?'selected-theme':''}`} key={t.id}><div className="theme-detail-photo"><Image src={t.image} alt={t.name} width={900} height={620}/></div><div><span className="theme-number">{index===0?'اختيارك':'ثيم آخر'}</span><h2>{t.name}</h2><p>تفاصيل وصور الثيم الحقيقية ستضاف هنا من معرض المصورة، مع توضيح حالة التوفر.</p><span className="availability">متاح للحجز</span></div></article>)}</section><div className="center-cta"><Link className="primary-btn" href="/packages">اختيار الباقة المناسبة</Link></div><Footer/></main>
}
