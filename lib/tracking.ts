// lib/tracking.ts

export const trackButtonClick = (buttonName: string) => {
  // নিশ্চিত করা যে কোডটি শুধু ক্লায়েন্ট সাইডে রান করছে
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'custom_button_click', // GTM Event Name
      button_name: buttonName,      // কোন বাটন থেকে ক্লিক আসছে
      page_path: window.location.pathname
    });
  }
};