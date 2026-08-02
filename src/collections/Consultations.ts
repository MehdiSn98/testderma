import type { CollectionConfig } from 'payload'

export const Consultations: CollectionConfig = {
  slug: 'consultations',
  admin: {
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      label: 'نام و نام خانوادگی بیمار',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'شماره تماس',
      required: true,
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      label: 'خدمت مورد نظر',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'پیام یا شرح مشکل پوستی',
    },
    {
      name: 'status',
      type: 'select',
      label: 'وضعیت پیگیری',
      options: [
        { label: 'جدید (در انتظار تماس)', value: 'pending' },
        { label: 'تماس گرفته شد', value: 'contacted' },
        { label: 'بایگانی / کنسلی', value: 'archived' },
      ],
      defaultValue: 'pending',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
