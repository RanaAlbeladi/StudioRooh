import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { themes } from '@/data/content';

export default function ThemesPage() {
  return (
    <main>
      <Header />

      <section className="themes-page">

        <div className="themes-page-heading">
          <span className="themes-page-eyebrow">OUR THEMES</span>

          <div className="themes-title-art">
            <span className="themes-deco themes-page-cloud-left">☁</span>
            <span className="themes-deco themes-page-star-left">★</span>
            <span className="themes-deco themes-page-heart-left">♥</span>

            <h1>ثيماتنا</h1>

            <span className="themes-deco themes-page-heart-right">♥</span>
            <span className="themes-deco themes-page-star-right">★</span>
            <span className="themes-deco themes-page-cloud-right">☁</span>
          </div>
        </div>

        <div className="themes-page-grid">
          {themes.map((theme) => (
            <Link
              href={`/themes/${theme.id}`}
              className="themes-page-card"
              key={theme.id}
            >
              <div className="themes-page-image">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  width={700}
                  height={520}
                />
              </div>

              <div className="themes-page-card-body">
                <h2>{theme.name}</h2>

                <p>
                  ثيم تصوير أطفال بتفاصيل ناعمة ولمسات مميزة.
                </p>

                <span>مشاهدة التفاصيل ←</span>
              </div>
            </Link>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}
