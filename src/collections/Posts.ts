import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'عنوان مقاله',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'اسلاگ انگلیسی (URL)',
      required: true,
      unique: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'دسته‌بندی',
      options: [
        { label: 'آموزش پوستی', value: 'education' },
        { label: 'اخبار و مقالات', value: 'news' },
        { label: 'مراقبت‌های زیبایی', value: 'care' },
      ],
      defaultValue: 'education',
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'متن کامل مقاله',
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر کاور مقاله',
    },
  ],
}
