import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Packages from '@/components/Packages';

export default function PackagesPage(){
  return (
    <main>
      <Header/>

      <section className="packages-page-heading">
        <span className="packages-page-eyebrow">OUR PACKAGES</span>
        <div className="packages-title-art">
          <span className="packages-deco packages-cloud-left">☁</span>
          <span className="packages-deco packages-star-left">★</span>
          <span className="packages-deco packages-heart-left">♥</span>
          <h1>باقاتنا</h1>
          <span className="packages-deco packages-heart-right">♥</span>
          <span className="packages-deco packages-star-right">★</span>
          <span className="packages-deco packages-cloud-right">☁</span>
        </div>
      </section>

      <div className="page-show-desktop-detail packages-page-content">
        <Packages/>
      </div>

      <Footer/>
    </main>
  );
}
