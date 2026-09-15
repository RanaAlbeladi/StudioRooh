import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingFlow from '@/components/BookingFlow';

export default function BookingPage(){
  return <main>
    <Header/>
    <section className="booking-title-section">
      <span className="booking-title-eyebrow">BOOKING</span>
      <div className="booking-title-art">
        <span className="booking-title-deco booking-cloud-left">☁</span>
        <span className="booking-title-deco booking-star-left">★</span>
        <span className="booking-title-deco booking-heart-left">♥</span>
        <h1>احجزي جلستك</h1>
        <span className="booking-title-deco booking-heart-right">♥</span>
        <span className="booking-title-deco booking-star-right">★</span>
        <span className="booking-title-deco booking-cloud-right">☁</span>
      </div>
    </section>
    <BookingFlow/>
    <Footer/>
  </main>;
}
