"use client";

import Footer from "@/components/Footer";

export default function AnketPage() {
  return (
    <div className="w-full h-full mt-24 bg-black">
      <style jsx global>{`
        .google-form-container {
          background: #000;
          border-radius: 8px;
          overflow: hidden;
        }

        .google-form-container iframe {
          filter: invert(1) hue-rotate(180deg) contrast(1.1);
          border: none;
        }

        /* Form elemanlarını daha iyi görünür yap */
        .google-form-container iframe * {
          color-scheme: dark;
        }

        /* Resimleri ve videoları normale çevir */
        .google-form-container iframe img,
        .google-form-container iframe video,
        .google-form-container iframe svg {
          filter: invert(1) hue-rotate(180deg);
        }

        /* Butonları daha belirgin yap */
        .google-form-container iframe button,
        .google-form-container iframe input[type="submit"] {
          filter: invert(1) hue-rotate(180deg) brightness(1.2);
        }
      `}</style>
      <div className="google-form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdlGhmhrI_vK8EtJ6XTPaXet1mj_yhOqgD39iM1dNBKsCClQw/viewform?embedded=true"
          width="100%"
          height="8987"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          allowFullScreen
          allow="autoplay"
        >
          Yükleniyor…
        </iframe>
      </div>
      <Footer />
    </div>
  );
}
