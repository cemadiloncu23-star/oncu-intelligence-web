import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Topographic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="topo-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/15" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-pattern)" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      {/* Globe/Earth Data Visualization */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 hidden lg:block">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="150" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3" />
          <circle cx="200" cy="200" r="90" fill="none" stroke="#14B8A6" strokeWidth="0.5" opacity="0.2" />
          <ellipse cx="200" cy="200" rx="150" ry="60" fill="none" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3" />
          <ellipse cx="200" cy="200" rx="150" ry="60" fill="none" stroke="#14B8A6" strokeWidth="0.5" opacity="0.2" transform="rotate(60 200 200)" />
          <ellipse cx="200" cy="200" rx="150" ry="60" fill="none" stroke="#14B8A6" strokeWidth="0.5" opacity="0.2" transform="rotate(120 200 200)" />
          {/* Orbit paths */}
          <ellipse cx="200" cy="200" rx="180" ry="40" fill="none" stroke="#14B8A6" strokeWidth="0.5" opacity="0.4" strokeDasharray="4 4" transform="rotate(-20 200 200)" />
          <circle cx="350" cy="160" r="4" fill="#14B8A6" opacity="0.8" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-primary/30 bg-primary/5">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary uppercase tracking-wider">
              Operasyonel Durum: Aktif
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance">
            Stratejik veri ve ileri teknoloji çözümleri ile{" "}
            <span className="text-primary">geleceği şekillendiriyoruz.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Savunma sanayi ve uzay teknolojilerinde yeni nesil mühendislik.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="#teknoloji"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
            >
              Teknolojimizi Keşfet
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
