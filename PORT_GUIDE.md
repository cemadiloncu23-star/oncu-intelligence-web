# ?? PORT AYARLAMA KILAVUZU

## Hýzlý Baþlangýç

### Windows (PowerShell)

#### 3001 portunda açmak:
```powershell
.\start.ps1 3001
```

#### 3002 portunda açmak:
```powershell
.\start.ps1 3002
```

#### 8080 portunda açmak:
```powershell
.\start.ps1 8080
```

#### Varsayýlan (3001):
```powershell
.\start.ps1
```

---

### macOS / Linux (Bash)

#### 3001 portunda açmak:
```bash
chmod +x start.sh
./start.sh 3001
```

#### 3002 portunda açmak:
```bash
./start.sh 3002
```

#### 8080 portunda açmak:
```bash
./start.sh 8080
```

---

## NPM Komutlarý (Doðrudan)

### Development Server

```bash
# Varsayýlan port (3000)
npm run dev

# 3001 portu
npm run dev:3001

# 3002 portu
npm run dev:3002

# 3003 portu
npm run dev:3003

# 8080 portu
npm run dev:8080

# Özel port (örn: 5000)
PORT=5000 npm run dev
```

### Production Build

```bash
# Build oluþtur
npm run build

# Varsayýlan port'ta baþlat (3000)
npm start

# 3001 portunda baþlat
npm run start:3001

# 3002 portunda baþlat
npm run start:3002

# 8080 portunda baþlat
npm run start:8080
```

---

## Environment Variables (.env.local)

`.env.local` dosyasýný düzenleyerek port'u kalýcý olarak ayarlayabilirsiniz:

```env
PORT=3001
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### Farklý Port Konfigürasyonlarý

#### 3002 için:
```env
PORT=3002
NEXT_PUBLIC_SITE_URL=http://localhost:3002
```

#### 8080 için:
```env
PORT=8080
NEXT_PUBLIC_SITE_URL=http://localhost:8080
```

---

## Tarayýcýda Açýk Olacak Adresler

| Port | URL |
|------|-----|
| 3000 | http://localhost:3000 |
| 3001 | http://localhost:3001 |
| 3002 | http://localhost:3002 |
| 3003 | http://localhost:3003 |
| 8080 | http://localhost:8080 |
| 5000 | http://localhost:5000 |

---

## Port Çakýþma Çözümü

Eðer bir port zaten kullanýmda ise:

### Windows
```powershell
# Port'u kullanan süreci bul
netstat -ano | findstr :3001

# Process ID'yi (PID) not al ve kapat
taskkill /PID <PID> /F
```

### macOS / Linux
```bash
# Port'u kullanan süreci bul
lsof -i :3001

# Süreci kapat
kill -9 <PID>
```

---

## Diðer Seçenekler

### Docker ile çalýþtýrmak (Optional)

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:3001"]
```

```bash
# Build
docker build -t oncu-intelligence .

# Run
docker run -p 3001:3001 oncu-intelligence
```

---

## Sýk Sorulan Sorular

### Soru: 3001 portu zaten kullanýmda. Ne yapmalý?
**Cevap:** 
```powershell
.\start.ps1 3002
```
veya baþka bir port numara girin.

### Soru: Environment variables nasýl deðiþtirilir?
**Cevap:** `.env.local` dosyasýný düzenleyin ve PORT ve NEXT_PUBLIC_SITE_URL deðerlerini güncelleyin.

### Soru: Production'da port nasýl ayarlanýr?
**Cevap:** 
```bash
npm run build
PORT=3001 npm start
```

### Soru: Her açýlýþta port deðiþmek istemiyorum
**Cevap:** `.env.local` dosyasýný ayarlayýn, otomatik olarak kullanýlacak.

---

## ?? Hýzlý Referans

```bash
# En hýzlý yol (3001 portu)
.\start.ps1

# Veya npm ile
npm run dev:3001

# Tarayýcý: http://localhost:3001
```

---

**Son güncelleme:** 2025-01-13  
**Desteklenen Portlar:** 3000, 3001, 3002, 3003, 8080, custom
