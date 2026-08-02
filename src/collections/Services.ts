import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'عنوان خدمت (مثلا: بوتاکس)',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'اسلاگ انگلیسی (برای آدرس آدرس بار)',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'توضیح کوتاه',
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
    },
  ],
}
