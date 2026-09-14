export type PackageItem = {
  id: string;
  name: string;
  price: number;
  deposit: number;
  themesCount: number;
  editedPhotos: number;
  sessionText: string;
  accent: 'blue' | 'pink';
};

export const packages: PackageItem[] = [
  {
    id: 'smile',
    name: 'باقة البسمة التوفيرية',
    price: 385,
    deposit: 100,
    themesCount: 3,
    editedPhotos: 10,
    sessionText: 'تستمر الجلسة حتى يتم تصوير 3 ثيمات كاملة',
    accent: 'blue'
  },
  {
    id: 'stars',
    name: 'باقة النجوم الفاخرة',
    price: 580,
    deposit: 100,
    themesCount: 4,
    editedPhotos: 25,
    sessionText: 'تستمر الجلسة حتى يتم تصوير 4 ثيمات كاملة',
    accent: 'pink'
  }
];

export const studioSettings = {
  rescheduleFee: 50,
  phone: '0568747122',
  instagram: 'rooh.kids.studio',
  bookingNotice: 'بعد تأكيد الحجز، فضلاً تواصلوا معنا على الرقم لإرسال موقع الاستديو.'
};

// سنستبدل هذه العناصر بأسماء وصور الثيمات الحقيقية فور تزويدنا بها.
export const themes = [
  { id: 'theme-1', name: 'الثيم الأول', image: '/theme-placeholder-1.svg' },
  { id: 'theme-2', name: 'الثيم الثاني', image: '/theme-placeholder-2.svg' },
  { id: 'theme-3', name: 'الثيم الثالث', image: '/theme-placeholder-3.svg' },
  { id: 'theme-4', name: 'الثيم الرابع', image: '/theme-placeholder-4.svg' }
];
