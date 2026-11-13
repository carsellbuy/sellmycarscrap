import type { Metadata } from "next";
import { ArabicLeadForm } from "@/components/ArabicLeadForm";

export const metadata: Metadata = {
  title: "شراء سيارات سكراب في دبي | أعلى سعر كاش فوري",
  description: "نشتري سيارات سكراب، متضررة، أو غير قابلة للتشغيل. احصل على تقييم مجاني وكاش فوري اليوم في دبي، الشارقة، وعجمان.",
  keywords: "شراء سيارات سكراب، سكراب سيارات دبي، بيع سيارة سكراب، سكراب الشارقة",
};

export default function ArabicLandingPage() {
  return (
    <div dir="rtl" lang="ar" className="font-sans bg-gray-50 text-gray-900">
      
      {/* 🏠 Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            شراء سيارات سكراب بأعلى سعر، كاش فوري
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            هل تبحث عن بيع سيارة سكراب في دبي أو الإمارات؟ سكراب، متضررة، أو غير قابلة للتشغيل؟ لا مشكلة، نصلك اليوم ونقدم عرضاً فورياً.
          </p>
          <a href="#lead-form" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 shadow-lg">
            احصل على عرض مجاني الآن
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-yellow-400 text-slate-900 py-4 font-bold text-sm md:text-base">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 px-4">
          <span>✅ تقييم مجاني</span>
          <span>✅ سحب مجاني</span>
          <span>✅ كاش فوري</span>
          <span>✅ نخدم دبي، الشارقة، عجمان</span>
        </div>
      </div>

      {/* 📋 Form Section */}
      <section id="lead-form" className="py-16 px-4 max-w-3xl mx-auto scroll-mt-24">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
            احصل على أعلى سعر لسيارتك الآن
          </h2>
          <ArabicLeadForm />
        </div>
      </section>

      {/* ⚙️ Process Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            كيف نشتري سيارتك في 3 خطوات بسيطة
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3">أخبرنا عن سيارتك</h3>
              <p className="text-gray-600">شارك معنا تفاصيل سيارتك عبر الواتساب أو النموذج، الموديل، الحالة، وموقعك.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">احصل على عرض فوري</h3>
              <p className="text-gray-600">نقدم لك سعراً عادلاً خلال 30 دقيقة بدون أي التزام.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3">نصلك ونستلم بالكاش</h3>
              <p className="text-gray-600">نحضر إليك، ننجز الأوراق ونسلمك الكاش في نفس اليوم.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚗 Car Types & 💵 Price Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Car Types */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800">نشتري جميع أنواع السيارات</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
              <table className="w-full text-right">
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50"><td className="p-4 font-bold w-1/3">سيارات السكراب</td><td className="p-4 text-gray-600">أي سيارة قديمة أو متقادمة</td></tr>
                  <tr><td className="p-4 font-bold">السيارات المتضررة</td><td className="p-4 text-gray-600">حوادث خفيفة أو شديدة</td></tr>
                  <tr className="bg-gray-50"><td className="p-4 font-bold">سيارات لا تعمل</td><td className="p-4 text-gray-600">محرك معطل أو ميكانيكا تالفة</td></tr>
                  <tr><td className="p-4 font-bold">منتهية الرخصة</td><td className="p-4 text-gray-600">بدون ملكية أو منتهية</td></tr>
                  <tr className="bg-gray-50"><td className="p-4 font-bold">جميع الماركات</td><td className="p-4 text-gray-600">تويوتا، نيسان، هوندا، كيا، وغيرها</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Price Section */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-slate-800">كم تساوي سيارتك؟</h2>
            <p className="text-gray-600 mb-4">السعر يعتمد على الحالة والنوع، إليك نطاقات تقريبية:</p>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
              <table className="w-full text-right">
                <thead className="bg-slate-800 text-white">
                  <tr><th className="p-4">نوع السيارة</th><th className="p-4">نطاق السعر</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-4">سيارة سكراب صغيرة</td><td className="p-4 font-bold text-green-600">AED 500 إلى 1,500</td></tr>
                  <tr className="bg-gray-50"><td className="p-4">سيارة سكراب متوسطة</td><td className="p-4 font-bold text-green-600">AED 1,500 إلى 4,000</td></tr>
                  <tr><td className="p-4">سيارة متضررة بحادث</td><td className="p-4 font-bold text-green-600">AED 2,000 إلى 8,000</td></tr>
                  <tr className="bg-gray-50"><td className="p-4">SUV / كبيرة الحجم</td><td className="p-4 font-bold text-green-600">AED 3,000 إلى 12,000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500 font-medium">⚡ السعر النهائي يُحدد بعد المعاينة، تواصل معنا للحصول على أعلى عرض.</p>
          </div>

        </div>
      </section>

      {/* ⭐ Testimonials Section */}
      <section className="bg-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">ماذا يقول عملاؤنا</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="text-yellow-400 mb-4 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4">«بعت سيارتي المتضررة وحصلت على الكاش في نفس اليوم. خدمة سريعة وسعر ممتاز!»</p>
              <p className="font-bold text-slate-900">أحمد خ.، دبي</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="text-yellow-400 mb-4 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4">«كانت سيارتي منذ سنوات في الجراج. اتصلت بهم وجاؤوا وأخذوها وأعطوني الكاش فوراً.»</p>
              <p className="font-bold text-slate-900">محمد ر.، الشارقة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="text-yellow-400 mb-4 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4">«أفضل سعر حصلت عليه مقارنة بثلاثة مشترين آخرين. أنصح الجميع.»</p>
              <p className="font-bold text-slate-900">عبدالله س.، عجمان</p>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">الأسئلة الشائعة</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-slate-900">هل تشترون السيارات بدون ملكية؟</h3>
            <p className="text-gray-600">نعم، نتعامل مع السيارات التي فُقدت وثائقها أو منتهية الملكية. تواصل معنا لمعرفة التفاصيل.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-slate-900">هل خدمة السحب مجانية؟</h3>
            <p className="text-gray-600">نعم، نصل إليك ونسحب السيارة مجاناً في دبي والشارقة وعجمان.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-slate-900">كم من الوقت يستغرق الدفع؟</h3>
            <p className="text-gray-600">الدفع يتم نقداً في نفس اللحظة عند استلام السيارة.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-slate-900">هل تشترون السيارات المتضررة بالحوادث؟</h3>
            <p className="text-gray-600">نعم، نشتري السيارات المتضررة بجميع درجات الضرر، حتى الخسارة الكلية.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-slate-900">ما هي المناطق التي تخدمونها؟</h3>
            <p className="text-gray-600">نغطي دبي، الشارقة، عجمان، وأبوظبي. تواصل معنا للتأكد من منطقتك.</p>
          </div>
        </div>
      </section>

      {/* 📞 Final CTA Section */}
      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">جاهز للبيع؟ تواصل معنا الآن</h2>
          <p className="text-gray-300 mb-8 text-lg">فريقنا متاح 7 أيام في الأسبوع، رد سريع عبر واتساب</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/971564990530" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center gap-2 transition">
              💬 واتساب الآن
            </a>
            <a href="tel:+971564990530" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center gap-2 transition">
              📞 اتصل بنا
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}