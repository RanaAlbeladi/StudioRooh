import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, CheckCircle2, CalendarDays, CreditCard, ShieldCheck } from 'lucide-react';
import { studioSettings } from '@/data/content';

export default function BookingPage(){
  return <main><Header/><section className="inner-hero booking-hero"><span>BOOKING</span><h1>احجزي جلستك</h1><p>الحجز سيكون بخطوات واضحة من اختيار الباقة والثيمات حتى تأكيد الموعد.</p></section><section className="booking-page"><div className="booking-location-notice"><MapPin size={32}/><div><strong>معلومة مهمة بخصوص موقع الاستديو</strong><p>بعد تأكيد الحجز ودفع العربون، فضلاً تواصلوا معنا على الرقم <b>{studioSettings.phone}</b> لإرسال موقع الاستديو.</p></div></div><div className="booking-steps"><article><span>1</span><CheckCircle2/><h3>اختيار الباقة</h3><p>حددي الباقة المناسبة وعدد الثيمات المسموح بها.</p></article><article><span>2</span><CalendarDays/><h3>الثيمات والموعد</h3><p>اختاري الثيمات ثم اليوم والوقت المتاح.</p></article><article><span>3</span><ShieldCheck/><h3>بيانات الحجز</h3><p>أدخلي بيانات العميل والطفل ووافقي على الشروط.</p></article><article><span>4</span><CreditCard/><h3>دفع العربون</h3><p>بعد الدفع يتم تأكيد الموعد وحجز الفترة لك.</p></article></div><div className="booking-coming"><h2>نظام الحجز الإلكتروني</h2><p>هذه هي صفحة الحجز التي سنوصلها في المرحلة القادمة بالتقويم الحقيقي، OTP، قاعدة البيانات والدفع الإلكتروني. التصميم والمسار جاهزان الآن.</p><Link className="primary-btn" href="/packages">ابدئي باختيار الباقة</Link></div></section><Footer/></main>
}
