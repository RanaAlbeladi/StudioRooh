import Image from 'next/image';
import { themes } from '@/data/content';
import SectionTitle from './SectionTitle';

export default function Themes(){
  return <section id="themes" className="desktop-detail section-block"><SectionTitle eyebrow="OUR THEMES" title="ثيماتنا" subtitle="كل ثيم مصمم بعناية ليمنح طفلك تجربة تصوير فريدة ومميزة"/><div className="theme-grid">{themes.map(t=><article className="theme-card" key={t.id}><Image src={t.image} alt={t.name} width={600} height={420}/><h3>{t.name}</h3><a href={`/themes/${t.id}`}>عرض الثيم</a></article>)}</div></section>
}
