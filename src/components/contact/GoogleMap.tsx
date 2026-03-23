export default function GoogleMap() {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904!2d106.8272!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnNDYuOSJTIDEwNsKwNDknMzcuOSJF!5e0!3m2!1sen!2sid!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi KopiKala Coffee"
        className="grayscale hover:grayscale-0 transition-all duration-500"
      />
      
      {/* Overlay with address */}
      <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-stone-800 rounded-xl p-4 shadow-lg">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-stone-800 dark:text-white">KopiKala Coffee</h4>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Jl. Kopi Nikmat No. 123, Jakarta Selatan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
