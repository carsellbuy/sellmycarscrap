import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// আপনার প্রোজেক্ট আইডি এখানে বসাতে হবে
export const client = createClient({
  projectId: '5i96t9vg', // এটি আপনার আগের স্ক্রিনশট থেকে পেয়েছি, চেক করে দেখুন ঠিক আছে কিনা
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // ডাটা সাথে সাথে আপডেট পেতে false রাখা ভালো
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}