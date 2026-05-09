# ? PORT AYARLAMA - TAMAMLANDI

## ?? Ne Yapýldý?

Projenizi **3000 dýþýnda farklý portlarda** çalýþtýrabilir hale getirdim.

---

## ?? Hemen Baþlamak Ýçin

### Windows (PowerShell)
```powershell
# 3001 portunda aç
.\start.ps1 3001
```

### macOS / Linux (Bash)
```bash
# 3001 portunda aç
./start.sh 3001
```

### npm ile (Hýzlý)
```bash
npm run dev:3001
```

---

## ?? Kullanýlabilir Portlar

| Port | Komut |
|------|-------|
| **3001** | `npm run dev:3001` |
| **3002** | `npm run dev:3002` |
| **3003** | `npm run dev:3003` |
| **8080** | `npm run dev:8080` |
| **Özel** | `PORT=5000 npm run dev` |

---

## ?? Oluþturulan Dosyalar

? `.env.local` - Environment configuration  
? `start.ps1` - PowerShell baþlangýç script'i  
? `start.sh` - Bash baþlangýç script'i (updated)  
? `PORT_GUIDE.md` - Detaylý kýlavuz  
? `package.json` - Port komutlarý eklendi  

---

## ?? Tarayýcýda Açýlacak Adres

Seçtiðiniz porta göre:

- **Port 3001:** http://localhost:3001
- **Port 3002:** http://localhost:3002
- **Port 8080:** http://localhost:8080

---

## ?? Örnek Senaryo

### Scenario: 3002 portunda açmak istiyorum

#### Seçenek 1: Script ile
```powershell
.\start.ps1 3002
```

#### Seçenek 2: NPM ile
```bash
npm run dev:3002
```

#### Seçenek 3: Environment ile
```bash
PORT=3002 npm run dev
```

---

## ?? .env.local Dosyasý

Açýlan dosya þu þekildedir:
```env
PORT=3001
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

Farklý port için, PORT'u deðiþtirebilirsiniz.

---

## ? Ýlave Özellikler

- ? Otomatik .env.local oluþturma
- ? Renkli terminal output
- ? Port çakýþmasý çözümü bilgisi
- ? Windows ve Linux uyumluluðu
- ? Production port seçenekleri

---

## ?? Daha Fazla Yardým

Detaylý kýlavuz için: **PORT_GUIDE.md** dosyasýný açýn

---

**Hazýr mýsýnýz?** Yukarýdaki komutlardan birini çalýþtýrýn! ??

Baþarýyla yapýldý ?
