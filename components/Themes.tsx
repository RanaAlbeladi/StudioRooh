import Image from 'next/image';
import Link from 'next/link';
import { themes } from '@/data/content';

export default function Themes() {
  return (
    <section id="themes" className="desktop-detail themes-section">

      <div className="themes-heading">
        <span className="theme-decoration cloud cloud-left">☁</span>
        <span className="theme-decoration cloud cloud-right">☁</span>

        <span className="theme-decoration star star-one">★</span>
        <span className="theme-decoration star star-two">★</span>
        <span className="theme-decoration star star-three">★</span>

        <span className="theme-decoration heart heart-one">♥</span>
        <span className="theme-decoration heart heart-two">♥</span>
        <span className="theme-decoration heart heart-three">♥</span>

        <span className="themes-eyebrow">OUR THEMES</span>
        <h1>ثيماتنا</h1>
      </div>

      <div className="themes-page-grid">
        {themes.map((theme) => (
          <Link
            href={`/themes/${theme.id}`}
            className="theme-clickable-card"
            key={theme.id}
          >
            <div className="theme-image-wrapper">
              <Image
                src={theme.image}
                alt={theme.name}
                width={700}
                height={500}
              />
            </div>

            <div className="theme-card-content">
              <h3>{theme.name}</h3>

              <p>
                ثيم تصوير أطفال بتفاصيل ناعمة ولمسات مميزة.
              </p>

              <span className="theme-details-link">
                مشاهدة التفاصيل ←
              </span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
