import Image from 'next/image';
import Link from 'next/link';
import { themes } from '@/data/content';
import SectionTitle from './SectionTitle';

export default function Themes(){
  return (
    <section id="themes" className="desktop-detail section-block">
      <SectionTitle eyebrow="OUR THEMES" title="ثيماتنا" subtitle="كل ثيم مصمم بعناية ليمنح طفلك تجربة تصوير فريدة ومميزة" />
      <div className="theme-grid">
        {themes.map((t) => (
          <Link className="theme-card home-theme-card-link" href={`/themes/${t.id}`} key={t.id}>
            <Image src={t.image} alt={t.name} width={600} height={420}/>
            <h3>{t.name}</h3>
            <span className="home-theme-cta">عرض الثيم ←</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
