import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'badge', 'order', 'slug'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'عنوان خدمت (مثلا: تزریق تخصصی بوتاکس و فیلر)',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'اسلاگ انگلیسی (مثلا: botox-filler)',
      required: true,
      unique: true,
      admin: {
        description: 'برای لینک‌دهی مستقیم و پرش صفحه استفاده می‌شود.',
      },
    },
    {
      name: 'badge',
      type: 'text',
      label: 'برچسب دسته (مثلا: زیبایی، لیزر، درمانی)',
      required: true,
      defaultValue: 'خدمات کلینیک',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'توضیح کوتاه (نمایش در کارت‌های اصلی و هیرو)',
      required: true,
    },
    {
      name: 'fullDetails',
      type: 'textarea',
      label: 'توضیحات کامل و تکمیلی (نمایش در صفحه اختصاصی خدمات)',
    },
    {
      name: 'aftercare',
      type: 'textarea',
      label: 'مراقبت‌های بعد از درمان (برای چت‌بات و بیمار)',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر اصلی خدمت',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'ترتیب نمایش (مثلا: 1، 2، 3)',
      defaultValue: 1,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
