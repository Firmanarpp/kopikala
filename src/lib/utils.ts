export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateWhatsAppLink(
  name: string,
  date: string,
  time: string,
  guests: number
): string {
  const phoneNumber = '6281717444053'; // Nomor WhatsApp KopiKala
  const message = encodeURIComponent(
    `Halo KopiKala, saya ingin reservasi untuk ${name}, tanggal ${date}, jam ${time}, jumlah orang ${guests}.`
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
