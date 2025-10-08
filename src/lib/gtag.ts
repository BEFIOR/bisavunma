// Google Analytics ve Google Ads için utility fonksiyonları

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Google Analytics event tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Google Ads conversion tracking
export const trackConversion = (conversionId: string, conversionLabel: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value,
      currency: currency || 'TRY',
    });
  }
};

// Sayfa görüntüleme tracking
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// Custom event tracking
export const trackCustomEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Form submission tracking
export const trackFormSubmission = (formName: string, formType: string) => {
  trackEvent('form_submit', 'engagement', `${formName}_${formType}`);
};

// Button click tracking
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'engagement', `${buttonName}_${location}`);
};

// Contact form tracking
export const trackContactForm = (formType: 'contact' | 'newsletter' | 'quote') => {
  trackEvent('form_submit', 'contact', formType);
};

// Product page view tracking
export const trackProductView = (productName: string, category: string) => {
  trackEvent('view_item', 'ecommerce', productName);
  trackCustomEvent('product_view', {
    product_name: productName,
    product_category: category,
  });
};
