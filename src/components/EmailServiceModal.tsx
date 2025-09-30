"use client";

import { X, Mail, ExternalLink } from "lucide-react";
import { useEffect } from "react";

interface EmailServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGmail: () => void;
  onSelectOutlook: () => void;
  gmailUrl: string;
  outlookUrl: string;
}

export default function EmailServiceModal({
  isOpen,
  onClose,
  onSelectGmail,
  onSelectOutlook,
  gmailUrl,
  outlookUrl,
}: EmailServiceModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleGmailClick = () => {
    onSelectGmail();
    window.open(gmailUrl, "_blank");
    onClose();
  };

  const handleOutlookClick = () => {
    onSelectOutlook();
    window.open(outlookUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl max-w-md w-full mx-4 animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-900/20 rounded-lg">
              <Mail className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              E-posta Servisi Seçin
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-6">
            Mesajınızı göndermek için hangi e-posta servisini kullanmak
            istiyorsunuz?
          </p>

          <div className="space-y-3">
            {/* Gmail Button */}
            <button
              onClick={handleGmailClick}
              className="w-full flex items-center justify-between p-4 bg-red-900/20 hover:bg-red-900/30 border border-red-800 rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.636l-6.545-4.906v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v9.273L12 8.09l6.545 5.004V3.82h3.819c.904 0 1.636.732 1.636 1.636z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-medium text-white">Gmail</div>
                  <div className="text-sm text-gray-400">
                    Google Mail ile gönder
                  </div>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>

            {/* Outlook Button */}
            <button
              onClick={handleOutlookClick}
              className="w-full flex items-center justify-between p-4 bg-blue-900/20 hover:bg-blue-900/30 border border-blue-800 rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.5 8.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM2 4v16h20V4H2zm18 14H4V6h16v12z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-medium text-white">Outlook</div>
                  <div className="text-sm text-gray-400">
                    Microsoft Outlook ile gönder
                  </div>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 text-gray-400 hover:text-white transition-colors"
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  );
}
