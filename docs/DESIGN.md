# KutGöz tasarım sistemi — "Pafta"

**Fikir:** KutGöz bir harita paftası ile bir saha mühendisinin ölçüm defterinin birleşimidir.
Harita Genel Komutanlığı paftasının titizliği, bir ölçüm cihazının sadeliği. Ekrandaki her çizginin
bir işi, her sayının bir birimi, tarihi ve kaynağı vardır. Etki süslemeden değil, ölçümün kendisinden gelir.

> Bir seçim KutGöz'ü bir SaaS açılış sayfasına, kripto paneline ya da "yapay zeka" bilim kurgusuna
> benzetiyorsa yanlış seçimdir. Doğru soru: "Bir GES saha mühendisi bunu sahada çıktı alıp
> klasörüne koyar mıydı?"

Ad: *Kut* (Eski Türkçe: gökten gelen talih, güç) + *Göz*. Gökten bakan, ölçen göz.

---

## 1. Kesin kurallar

- **Tek imza rengi: Kut kehribarı** (`--kg-kut`). Yalnızca birincil eylem, "şu an seçili" ve
  "ölçüm güncel" için. Az kullanıldığı için göründüğünde okunur. Başka vurgu rengi yoktur.
- **Durum renkleri yalnızca durum içindir** (uygun / dikkat / kritik / bilgi). Süs olarak kullanılmaz.
- **Süs amaçlı gradyan, buzlu cam, renkli gölge, neon parıltı yok.** Derinlik ince çizgiler
  (hairline) ve değer kontrastıyla verilir.
- **Köşe yarıçapı en fazla 3px.** Yuvarlak "baloncuk" kart yok. Tam yuvarlak yalnızca durum noktası.
- **Emoji yok.** İkonlar 16px, 1.5 çizgi kalınlığında, ikincil metin renginde; renkli daire içinde ikon yok.
- **Uydurma sayı yok.** Bilinmeyen değer `—` olarak gösterilir. Her sayı birimiyle; mümkünse tarih ve kaynağıyla.
- **Dönen çark (spinner) yok.** İlerleme bir ölçüm okuması gibi gösterilir:
  `KATALOG ✓ · BULUT KONTROLÜ ✓ · KESİM … 2,1 sn` + ince ilerleme çizgisi.
- **Boş laf yok.** "Yapay zeka destekli", "içgörüleri açığa çıkarın", "devrim niteliğinde" yazılmaz.

## 2. Renk (tokenlar: `src/styles/kutgoz-kurumsal.css`)

Bileşenlerde ham hex yazılmaz; yalnızca tokenlar.

| token | değer | kullanım |
|---|---|---|
| `--kg-bg` | `#0A0F17` | sayfa (gece lacivert-siyahı) |
| `--kg-surface` | `#0F1621` | pafta (panel) |
| `--kg-elevated` | `#151E2B` | üzerine gelme, seçili satır |
| `--kg-line` | `rgb(230 236 243 / .10)` | ince çizgi (varsayılan) |
| `--kg-line-strong` | `rgb(230 236 243 / .20)` | güçlü çizgi, çerçeve |
| `--kg-text` | `#E6ECF3` | birincil metin |
| `--kg-text-2` | `rgb(230 236 243 / .68)` | ikincil metin |
| `--kg-muted` | `rgb(230 236 243 / .50)` | etiket, dipnot (AA kontrast) |
| `--kg-kut` | `#E9A23B` | **imza rengi** (Kut kehribarı) |
| `--kg-kut-soft` | `rgb(233 162 59 / .14)` | imza dolgusu (seçili zemin) |
| `--kg-ok` | `#5FBF8A` | durum: uygun |
| `--kg-warn` | `#D9B84A` | durum: dikkat / veri uyarısı |
| `--kg-crit` | `#E5686C` | durum: kritik |
| `--kg-info` | `#7FA7D9` | durum: bilgi / su |

Uydu katmanları kendi bilimsel renk skalalarını kullanır (NDVI kırmızı–sarı–yeşil, NDWI kırmızı–mavi);
arayüz rengi bunlarla yarışmaz.

## 3. Tipografi

- **Gövde / başlık:** IBM Plex Sans (Türkçe karakterler tam). Gövde 14px/1.5, ikincil 13px.
  Başlık ağırlığı 600, harf aralığı `-0.01em`; sayfa başlığı 22px, bölüm başlığı 15px.
- **Veri:** IBM Plex Mono. Koordinat, tarih, sayı, birim. Rakamlar `tabular-nums`.
- **Etiket:** IBM Plex Mono 10.5px, BÜYÜK HARF, harf aralığı `+0.08em`, `--kg-muted`.
- Bir ekranda en fazla iki ağırlık (400 + 600).

## 4. Yerleşim: "Pafta"

- Her içerik bloğu bir **pafta**dır: `--kg-surface` zemin, 1px `--kg-line` çerçeve, 3px köşe.
- **Pafta başlığı:** solda bölüm numarası ve adı (`01 / UYDU GÖRÜNTÜSÜ`, mono etiket),
  sağda pafta künyesi (koordinat · tarih · kaynak, mono). Altında ince çizgi.
- **Görüntü paftası:** her uydu görüntüsünde **ölçek çubuğu**, **kuzey oku**, kenarlarda
  koordinat çentikleri ve altında künye: sahne tarihi, saha üstü açıklık yüzdesi, kaynak.
  Bu KutGöz'ün imzasıdır: görüntü bir resim değil, ölçülebilir bir paftadır.
- **Değer okuması:** büyük mono değer + birim + altında ne olduğu tek satır. Kart içinde kart yok.
- 8px ızgara; bloklar arası 24px; paftalar arası 16px.

## 5. Hareket

- Süreler: 120ms (üzerine gelme), 200ms (küçük), 320ms (panel). Eğri: `cubic-bezier(.2,0,0,1)`.
- Zıplama, yay etkisi, paralaks yok. Sayılar ilk görünüşte 600ms'de sayarak gelir.
- `prefers-reduced-motion` açıksa geçişler kesilir.

## 6. Dil (ses)

Türkçe, kısa, bildirme kipinde, önce ölçüm. İkinci tekil değil, kurumsal "siz" yok; doğrudan.

- Doğru: "Saha üstü %100 açık. Sahne: 20.11.2026, Sentinel-2C."
- Doğru: "NDVI 0,42 — seyrek bitki örtüsü. Panel aralarında ot biçimi planlanmalı."
- Yanlış: "Harika! ✅ Analiziniz hazır, yapay zeka içgörülerimizi keşfedin."
- Belirsizlik açıkça dipnotta yazılır: "Saha karesinin %22'si bulutlu; değerler temkinli okunmalı."

## 7. Bileşen kontrol listesi (birleştirmeden önce)

- [ ] Ham hex, ham px font boyutu yok (token kullanılmış)
- [ ] Kehribar yalnızca birincil eylem / seçili / güncel için
- [ ] Her sayı birimli; bilinmeyen `—`
- [ ] Görüntüde ölçek, kuzey, tarih, kaynak var
- [ ] Emoji, gradyan, gölge, spinner yok
- [ ] Klavyeyle kullanılabilir; odak halkası görünür (`--kg-kut`, 2px)
