'use client';

import { useMemo, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, CreditCard, CalendarDays, ShieldCheck, Sparkles } from 'lucide-react';
import { packages, themes } from '@/data/content';

const steps = [
  { n: 1, title: 'الباقة', icon: Sparkles },
  { n: 2, title: 'الثيمات والموعد', icon: CalendarDays },
  { n: 3, title: 'بيانات الحجز', icon: ShieldCheck },
  { n: 4, title: 'الدفع', icon: CreditCard },
];

export default function BookingFlow(){
  const [step,setStep]=useState(1);
  const [packageId,setPackageId]=useState(packages[0]?.id ?? '');
  const [selectedThemes,setSelectedThemes]=useState<string[]>([]);
  const [date,setDate]=useState('');
  const [time,setTime]=useState('');
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [childName,setChildName]=useState('');
  const [childAge,setChildAge]=useState('');
  const [gender,setGender]=useState('');
  const [notes,setNotes]=useState('');
  const [termsOpen,setTermsOpen]=useState(false);
  const [termsAccepted,setTermsAccepted]=useState(false);

  const selectedPackage=useMemo(()=>packages.find(p=>p.id===packageId) ?? packages[0],[packageId]);
  const maxThemes=selectedPackage?.themesCount ?? 1;

  function choosePackage(id:string){ setPackageId(id); setSelectedThemes([]); }
  function toggleTheme(id:string){
    setSelectedThemes(current=>current.includes(id) ? current.filter(x=>x!==id) : current.length<maxThemes ? [...current,id] : current);
  }
  function next(){
    if(step===3 && !termsAccepted){ setTermsOpen(true); return; }
    setStep(s=>Math.min(4,s+1));
  }
  function previous(){ setStep(s=>Math.max(1,s-1)); }

  return <section className="booking-flow" dir="rtl">
    <div className="booking-progress" aria-label="مراحل الحجز">
      {steps.map(item=>{
        const Icon=item.icon; const active=item.n===step; const done=item.n<step;
        return <div className={`booking-progress-item ${active?'active':''} ${done?'done':''}`} key={item.n}>
          <div className="booking-step-circle">{done?<Check size={20}/>:item.n}</div>
          <Icon className="booking-step-icon" size={20}/>
          <strong>{item.title}</strong>
        </div>;
      })}
    </div>

    <div className="booking-stage">
      {step===1 && <div className="booking-stage-content">
        <div className="booking-stage-heading"><span>الخطوة 1</span><h2>اختاري الباقة المناسبة</h2><p>اختاري الباقة التي تناسب جلستكم، ومنها يتحدد عدد الثيمات المتاحة لك.</p></div>
        <div className="booking-package-options">{packages.map(p=><button type="button" className={`booking-choice-card ${packageId===p.id?'selected':''}`} onClick={()=>choosePackage(p.id)} key={p.id}>
          <span className="choice-check">{packageId===p.id&&<Check size={16}/>}</span><h3>{p.name}</h3><div className="booking-choice-price"><b>{p.price}</b> ريال</div><p>{p.themesCount} ثيمات · {p.editedPhotos} صور معدلة</p><small>العربون {p.deposit} ريال</small>
        </button>)}</div>
      </div>}

      {step===2 && <div className="booking-stage-content">
        <div className="booking-stage-heading"><span>الخطوة 2</span><h2>اختاري الثيمات والموعد</h2><p>يمكنك اختيار حتى {maxThemes} ثيمات حسب باقتك، ثم تحديد الموعد المناسب.</p></div>
        <div className="booking-theme-options">{themes.map(t=><button type="button" className={`booking-theme-choice ${selectedThemes.includes(t.id)?'selected':''}`} onClick={()=>toggleTheme(t.id)} key={t.id}>
          <span className="choice-check">{selectedThemes.includes(t.id)&&<Check size={15}/>}</span><strong>{t.name}</strong><small>{t.description}</small>
        </button>)}</div>
        <div className="booking-date-row"><label>التاريخ<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label><label>الوقت<select value={time} onChange={e=>setTime(e.target.value)}><option value="">اختاري الوقت</option><option>10:00 صباحاً</option><option>12:00 ظهراً</option><option>4:00 مساءً</option><option>6:00 مساءً</option></select></label></div>
        <p className="booking-placeholder-note">المواعيد الحالية تجريبية، وسيتم ربطها لاحقاً بتوفر الاستديو الحقيقي.</p>
      </div>}

      {step===3 && <div className="booking-stage-content">
        <div className="booking-stage-heading"><span>الخطوة 3</span><h2>بيانات الحجز</h2><p>أدخلي بياناتك وبيانات الطفل، وبعدها ستظهر لك شروط الحجز للموافقة عليها.</p></div>
        <div className="booking-form-grid">
          <label>الاسم<input value={name} onChange={e=>setName(e.target.value)} placeholder="اسم العميل"/></label>
          <label>رقم الجوال السعودي<input value={phone} onChange={e=>setPhone(e.target.value)} inputMode="tel" placeholder="05xxxxxxxx"/></label>
          <label>اسم الطفل<input value={childName} onChange={e=>setChildName(e.target.value)} placeholder="اسم الطفل"/></label>
          <label>عمر الطفل<input value={childAge} onChange={e=>setChildAge(e.target.value)} placeholder="العمر"/></label>
          <label>الجنس<select value={gender} onChange={e=>setGender(e.target.value)}><option value="">اختاري</option><option>بنت</option><option>ولد</option></select></label>
          <label className="booking-notes">ملاحظات<textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="أي تفاصيل إضافية تحبين نعرفها قبل الجلسة"/></label>
        </div>
      </div>}

      {step===4 && <div className="booking-stage-content booking-payment-stage">
        <div className="booking-stage-heading"><span>الخطوة 4</span><h2>دفع العربون وتأكيد الحجز</h2><p>بعد إتمام الدفع بنجاح يتم تثبيت الموعد لك.</p></div>
        <div className="payment-summary"><span>العربون المطلوب</span><strong>{selectedPackage?.deposit ?? 100} ريال</strong></div>
        <div className="payment-methods"><button type="button">Apple Pay</button><button type="button">مدى</button><button type="button">Visa</button></div>
        <p className="booking-placeholder-note">سيتم ربط خيارات الدفع ببوابة الدفع الفعلية في مرحلة الربط الخلفي.</p>
      </div>}

      <div className="booking-nav-actions">
        {step>1?<button type="button" className="booking-back" onClick={previous}><ChevronRight size={18}/> السابق</button>:<span/>}
        {step<4&&<button type="button" className="booking-next" onClick={next}>{step===3?'عرض الشروط والمتابعة':'التالي'} <ChevronLeft size={18}/></button>}
      </div>
    </div>

    {termsOpen&&<div className="terms-overlay" role="dialog" aria-modal="true" aria-labelledby="terms-title">
      <div className="terms-modal">
        <div className="terms-modal-art"><span>★</span><span>♥</span><span>☁</span></div>
        <span className="terms-eyebrow">BOOKING TERMS</span><h2 id="terms-title">شروط الحجز</h2>
        <div className="terms-scroll">
          <p>• يتم تأكيد الموعد بعد دفع العربون بنجاح.</p>
          <p>• العربون غير مسترد في حال إلغاء الحجز.</p>
          <p>• يمكن إعادة جدولة الموعد حسب المواعيد المتاحة، وتطبق رسوم إعادة الجدولة المحددة.</p>
          <p>• المبلغ المتبقي يُدفع يوم الجلسة نقداً أو عبر جهاز الشبكة.</p>
          <p>• يرجى الالتزام بوقت الجلسة والتواصل مع الاستديو عند وجود أي تغيير.</p>
          <p>• بعد تأكيد الحجز، يرجى التواصل مع الاستديو لإرسال الموقع.</p>
        </div>
        <label className="terms-agree"><input type="checkbox" checked={termsAccepted} onChange={e=>setTermsAccepted(e.target.checked)}/><span>قرأت شروط الحجز وأوافق عليها</span></label>
        <div className="terms-actions"><button type="button" className="terms-cancel" onClick={()=>setTermsOpen(false)}>رجوع</button><button type="button" className="terms-confirm" disabled={!termsAccepted} onClick={()=>{setTermsOpen(false);setStep(4)}}>موافق والمتابعة للدفع</button></div>
      </div>
    </div>}
  </section>;
}
