export function Footer() {
  return (
    <footer id="iletisim" className="relative py-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-foreground">
              ÖNCÜ
            </span>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
              Intelligence
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ÖNCÜ Intelligence. Tüm hakları saklıdır.
          </p>

          {/* Status indicator */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span>SYS_ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
