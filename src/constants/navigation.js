export const NOBAT_URL = 'https://nobat.it/doctor' // آدرس پروفایل دکتر

export const NAV_LINKS = [
  { name: 'صفحه اصلی', href: '/' },
  { name: 'خدمات درمانی و زیبایی', href: '/services' }, //👈 تغییر کرد به /services (بدون #)
  { name: 'گالری', href: '#gallery' },
  { name: 'مطالب آموزشی', href: '#articles' },
  { name: 'تماس با ما', href: '#contact' },
]

export const FOOTER_QUICK_LINKS = [
  { name: 'خدمات زیبایی و درمانی', href: '/services', isExternal: false }, //👈 اینم تغییر بده
  { name: 'گالری', href: '#gallery', isExternal: false },
  { name: 'مقالات و آموزش‌ها', href: '#articles', isExternal: false },
  { name: 'ثبت نوبت اینترنتی', href: NOBAT_URL, isExternal: true },
]
