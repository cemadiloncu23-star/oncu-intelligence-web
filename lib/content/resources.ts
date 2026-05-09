export type ResourceItem = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

/** Yalnızca geçerli site içi bağlantılar — blog/vaka placeholder yok. */
export const resources: ResourceItem[] = [
  {
    title: "İletişim ve bilgi talebi",
    description: "Teknik sorular, demo veya iş birliği için doğrudan yazın.",
    href: "/iletisim",
    tag: "İletişim",
  },
  {
    title: "Paketler ve kapsam özeti",
    description: "Ücretlendirme ve teslimat süreçleri görüşmeye göre şekillenir.",
    href: "/paketler",
    tag: "Ticari",
  },
  {
    title: "Teknik güven özeti",
    description: "Barındırma, şifreleme ve günlük konularında bilgilendirme notları.",
    href: "/guven",
    tag: "Güvenlik",
  },
];
