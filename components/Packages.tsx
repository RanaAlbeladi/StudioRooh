import { Camera, Layers3, Clock3 } from 'lucide-react';
import { packages } from '@/data/content';
import SectionTitle from './SectionTitle';

export default function Packages(){
  return <section id="packages" className="desktop-detail section-block"><SectionTitle eyebrow="OUR PACKAGES" title="باقاتنا"><div className="package-grid">{packages.map(p=><article className={`package-card ${p.accent}`} key={p.id}><div className="package-top"><div><h3>{p.name}</h3><p className="deposit">العربون: {p.deposit} ريال</p></div><div className="price"><strong>{p.price}</strong><span>ريال</span></div></div><div className="package-features"><span><Camera/> {p.editedPhotos} صور معدلة</span><span><Layers3/> {p.themesCount} ثيمات</span><span><Clock3/> {p.sessionText}</span></div><a href={`/booking?package=${p.id}`}>اختيار هذه الباقة</a></article>)}</div></section>
}
