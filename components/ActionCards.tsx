import Link from 'next/link';
import { CalendarDays, Gift, Camera } from 'lucide-react';

const items = [
  {title:'استكشف الثيمات',text:'مجموعة من الثيمات المصممة خصيصاً لأطفالكم',href:'/themes',className:'action-blue',Icon:Camera,cta:'عرض جميع الثيمات'},
  {title:'اختر الباقة المناسبة',text:'استعرض تفاصيل الباقات واختر ما يناسب جلستكم',href:'/packages',className:'action-lilac',Icon:Gift,cta:'عرض الباقات'},
  {title:'احجز موعدك',text:'اختر اليوم والوقت المناسب وأكمل الحجز بخطوات سهلة',href:'/booking',className:'action-yellow',Icon:CalendarDays,cta:'ابدأ الحجز'}
];

export default function ActionCards(){
  return <section className="action-grid" id="how">{items.map(({title,text,href,className,Icon,cta})=><Link key={title} className={`action-card ${className}`} href={href}><div className="icon-circle"><Icon/></div><h3>{title}</h3><p>{text}</p><span>{cta} ←</span></Link>)}</section>
}
