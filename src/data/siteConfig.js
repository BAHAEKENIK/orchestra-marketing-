export const siteConfig = {
  // REPLACE WITH YOUR ACTUAL WHATSAPP NUMBER (no +, no spaces)
  whatsappNumber: "212658131230", 
  whatsappMessage: "Bonjour Orchestra, je souhaite discuter d'un projet marketing.",
  location: "Basé à Tanger, Maroc · Collaborations partout"
};

export const getWhatsAppUrl = () => {
  const encodedMessage = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
};