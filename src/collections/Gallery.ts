import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'عنوان نمونه کار (مثلاً: اصلاح فرم لب با ژل)',
      required: true,
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      label: 'مربوط به کدام خدمت است؟',
    },
    {
      name: 'isBeforeAfter',
      type: 'checkbox',
      label: 'آیا حالت قبل و بعد دارد؟',
      defaultValue: true,
    },
    {
      name: 'beforeImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر قبل از درمان',
    },
    {
      name: 'afterImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر اصلی / بعد از درمان',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'توضیحات تکمیلی (تعداد جلسات، نوع مواد و...)',
    },
  ],
}
