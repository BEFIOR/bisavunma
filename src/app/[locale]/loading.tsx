export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Main Loading Spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-slate-600 rounded-full animate-spin border-t-blue-500"></div>
          {/* Inner ring */}
          <div
            className="absolute top-2 left-2 w-16 h-16 border-4 border-slate-500 rounded-full animate-spin border-t-red-500"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-poppins-semibold text-white">
            Yükleniyor
          </h2>
          <p className="text-slate-400 font-inter-regular">
            Sistem hazırlanıyor...
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
