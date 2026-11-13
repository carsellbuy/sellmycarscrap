"use client";

import React, { useState } from 'react';
import { WHATSAPP_NUMBER, normalizeUAEMobile, pushLeadEvent } from '@/lib/lead';

const inputClass =
  'w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500';

export function ArabicLeadForm() {
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const car = String(data.get('car') || '').trim();
    const condition = String(data.get('condition') || '');
    const emirate = String(data.get('emirate') || '');
    const phone = normalizeUAEMobile(String(data.get('phone') || ''));

    if (!phone) {
      setError('يرجى إدخال رقم جوال إماراتي صحيح (مثال: 0501234567)');
      return;
    }
    setError('');

    pushLeadEvent({ leadType: 'WhatsApp Quote (AR)', carMake: car, carModel: '', extra: { car_condition: condition, emirate } });

    const message = [
      'مرحباً، أريد عرض سعر لسيارتي.',
      `الاسم: ${name}`,
      `الهاتف: +971${phone}`,
      `السيارة: ${car}`,
      `الحالة: ${condition}`,
      `الإمارة: ${emirate}`,
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ar-name" className="block text-gray-700 mb-2 font-medium">الاسم الكريم</label>
        <input id="ar-name" name="name" type="text" required className={inputClass} placeholder="اسمك" />
      </div>
      <div>
        <label htmlFor="ar-phone" className="block text-gray-700 mb-2 font-medium">رقم الهاتف (واتساب)</label>
        <input id="ar-phone" name="phone" type="tel" dir="ltr" required className={`${inputClass} text-right`} placeholder="05x xxx xxxx" />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <div>
        <label htmlFor="ar-car" className="block text-gray-700 mb-2 font-medium">نوع السيارة والموديل</label>
        <input id="ar-car" name="car" type="text" required className={inputClass} placeholder="مثال: تويوتا كامري 2010" />
      </div>
      <div>
        <label htmlFor="ar-condition" className="block text-gray-700 mb-2 font-medium">حالة السيارة</label>
        <select id="ar-condition" name="condition" className={inputClass}>
          <option>سكراب</option>
          <option>متضررة</option>
          <option>لا تعمل</option>
          <option>أخرى</option>
        </select>
      </div>
      <div>
        <label htmlFor="ar-emirate" className="block text-gray-700 mb-2 font-medium">الإمارة</label>
        <select id="ar-emirate" name="emirate" className={inputClass}>
          <option>دبي</option>
          <option>الشارقة</option>
          <option>عجمان</option>
          <option>أبوظبي</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg mt-4 transition duration-300">
        أرسل طلبك (رد خلال دقائق)
      </button>
      <p className="text-center text-sm text-gray-500 mt-2">سنتواصل معك عبر واتساب خلال 30 دقيقة</p>
    </form>
  );
}
