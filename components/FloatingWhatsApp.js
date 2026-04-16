import { socialLinks, whatsappNumber } from '../lib/data';

export default function FloatingWhatsApp() {
  return (
    <a
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 z-40 text-2xl"
      title="Contáctanos por WhatsApp"
    >
      💬
    </a>
  );
}
