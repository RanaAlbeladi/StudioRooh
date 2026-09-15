import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { themes } from '@/data/content';

export default async function ThemeDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const selected = themes.find((t) => t.id === id);
  if (!selected) notFound();

  const ordered = [selected, ...themes.filter((t) => t.id !== id)];

  return (
    <main>
      <Header />

      <section className="theme-details-heading">
        <span className="theme-details-eyebrow">THEME DETAILS</span>
        <div className="theme-details-title-art">
          <span className="theme-details-deco td-cloud-left">☁</span>
          <span className="theme-details-deco td-star-left">★</span>
          <span className="theme-details-deco td-heart-left">♥</span>
          <h1>تفاصيل الثيمات</h1>
          <span className="theme-details-deco td-heart-right">♥</span>
          <span className="theme-details-deco td-star-right">★</span>
          <span className="theme-details-deco td-cloud-right">☁</span>
        </div>
      </section>

      <section className="theme-detail-list">
        {ordered.map((theme, index) => {
          const gallery = theme.gallery?.length ? theme.gallery : [theme.image];
          return (
            <article className={`theme-detail ${index === 0 ? 'selected-theme' : ''}`} key={theme.id}>
              <div className="theme-detail-gallery" aria-label={`صور ${theme.name}`}>
                {gallery.map((image, imageIndex) => (
                  <div className="theme-detail-slide" key={`${theme.id}-${imageIndex}`}>
                    <Image
                      src={image}
                      alt={`${theme.name} - صورة ${imageIndex + 1}`}
                      width={900}
                      height={620}
                    />
                  </div>
                ))}
              </div>

              <div className="theme-detail-content">
                <span className="theme-number">{index === 0 ? 'اختيارك' : 'ثيم آخر'}</span>
                <h2>{theme.name}</h2>
                <p className="theme-description">{theme.description}</p>

                <div className="theme-components">
                  <h3>مكونات الثيم</h3>
                  <div className="theme-components-list">
                    {theme.components.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <span className="availability">متاح للحجز</span>
              </div>
            </article>
          );
        })}
      </section>

      <div className="center-cta">
        <Link className="primary-btn" href="/packages">اختيار الباقة المناسبة</Link>
      </div>

      <Footer />
    </main>
  );
}
