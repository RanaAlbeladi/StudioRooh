import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Packages from '@/components/Packages';

export default function PackagesPage(){
  return <main><Header/><section className="inner-hero"><span>OUR PACKAGES</span><h1>باقاتنا</h1><p>تفاصيل واضحة وأسعار واضحة، ثم تنتقلين للحجز واختيار الثيمات والموعد.</p></section><div className="page-show-desktop-detail"><Packages/></div><section className="booking-help"><h2>كيف أكمل الحجز؟</h2><p>بعد اختيار الباقة، تنتقلين لصفحة الحجز لاختيار الثيمات المتاحة ثم الموعد وإدخال البيانات ودفع العربون.</p></section><Footer/></main>
}
