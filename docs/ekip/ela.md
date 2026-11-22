# Ela Hanım — çalışma günlüğü

## 2026-11-22 (UTC)
- Toplantı maddesi: yok (backend `ekip/yonetim` dalında docs/ekip/toplanti/ bulunamadı); sıradaki işi kendim seçtim (erişilebilirlik).
- Yapılan: İletişim ve Bülten formlarında klavye odak göstergesi zayıftı (focus:ring-white/10, border-zinc-500). `focus-visible` ile mavi (#60A5FA kenar + mavi halka) yapıldı. Bülten placeholder'ı (zinc-600, kontrast ~3:1) zinc-400'e, bülten etiketi ve iletişim yardım metni zinc-500 → zinc-400 ve 11px → 12px yapıldı.
- Doğrulama: `npm install --legacy-peer-deps` + `npx next build` başarılı (font importu yalnızca yerel doğrulama için geçici kaldırıldı, commit'te yok). Ekran görüntüsü alınmadı.
- Sonraki adım: kurumsal/oncu landing bileşenlerinde buton/link odak halkaları; mobilde navbar menüsü klavye/aria kontrolü.
- Toplantıya öneri: Tüm sitede ortak bir `focus-visible` yardımcı sınıfı (globals.css) tanımlayıp form ve CTA'larda tek kaynaktan kullanalım.
- Cem Bey'e soru: yok.
