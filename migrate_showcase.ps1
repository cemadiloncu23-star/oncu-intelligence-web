$ErrorActionPreference = "Stop"

$source = "$PSScriptRoot"
$destParent = "C:\Users\ASUS\Desktop\SolarMind"
$dest = "$destParent\user-panel"
$backup = "$destParent\user-panel_backup"

Write-Host "=== Vitrin Taşıma İşlemi Başlıyor ===" -ForegroundColor Cyan

# 1. Backup
if (Test-Path $dest) {
    if (Test-Path $backup) {
        Write-Warning "Yedek klasörü ($backup) zaten var. Eskisini silip yenisini oluşturuyorum..."
        Remove-Item -Path $backup -Recurse -Force
    }
    Write-Host "Mevcut panel yedekleniyor..."
    Rename-Item -Path $dest -NewName "user-panel_backup"
    Write-Host "Yedekleme tamamlandı: $backup" -ForegroundColor Green
} else {
    Write-Host "Eski panel bulunamadı, yedekleme atlandı."
}

# 2. Copy
Write-Host "Dosyalar kopyalanıyor..."
# Robocopy arguments: /E (recursive), /XD (exclude dirs), /R:0 (no retries), /W:0 (no wait)
# We exclude heavy/system folders
$robocopyArgs = @($source, $dest, "/E", "/XD", "node_modules", ".next", ".git", ".vs", ".gemini", "brain", "/R:0", "/W:0")
& robocopy @robocopyArgs | Out-Null

# Robocopy exit codes: 0-7 are success, >=8 are failures
if ($LASTEXITCODE -ge 8) {
    Write-Error "Dosya kopyalama sırasında hata oluştu. Çıkış kodu: $LASTEXITCODE"
    exit 1
}
Write-Host "Kopyalama tamamlandı." -ForegroundColor Green

# 3. Install
Write-Host "Yeni klasöre geçiliyor ve bağımlılıklar yükleniyor..."
Set-Location $dest

if (Get-Command "pnpm" -ErrorAction SilentlyContinue) {
    pnpm install
} elseif (Get-Command "npm" -ErrorAction SilentlyContinue) {
    npm install
} else {
    Write-Warning "pnpm veya npm bulunamadı. Lütfen klasöre gidip bağımlılıkları manuel yükleyin."
}

Write-Host "=== İŞLEM BAŞARIYLA TAMAMLANDI ===" -ForegroundColor Cyan
Write-Host "Yeni panel yolu: $dest"
Read-Host "Çıkmak için Enter'a basın"
