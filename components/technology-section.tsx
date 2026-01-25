import { Cpu, Database, Radio, Radar } from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    name: "AI/ML Algoritmaları",
    description: "Derin öğrenme ve bilgisayarlı görü sistemleri",
  },
  {
    icon: Database,
    name: "Büyük Veri İşleme",
    description: "Dağıtık hesaplama altyapısı",
  },
  {
    icon: Radio,
    name: "Güvenli İletişim",
    description: "Şifreli veri aktarım protokolleri",
  },
  {
    icon: Radar,
    name: "Sensör Füzyonu",
    description: "Çoklu kaynak veri entegrasyonu",
  },
]

export function TechnologySection() {
  return (
    <section id="teknoloji" className="relative py-24 lg:py-32 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-border bg-secondary/50">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Teknoloji
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
              Geleceğin teknolojileri ile{" "}
              <span className="text-primary">bugünün çözümleri</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Son teknoloji araştırma ve geliştirme kapasitemiz ile savunma ve uzay sektörlerinin en zorlu problemlerine yenilikçi çözümler üretiyoruz.
            </p>

            {/* Technology Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-start gap-4 p-4 border border-border/30 bg-card/30 hover:border-primary/30 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <tech.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {tech.name}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element - Technical Diagram */}
          <div className="relative hidden lg:block">
            <div className="aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Outer ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="#14B8A6"
                  strokeWidth="1"
                  opacity="0.2"
                  strokeDasharray="8 4"
                />
                {/* Middle ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="#14B8A6"
                  strokeWidth="1"
                  opacity="0.3"
                />
                {/* Inner ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="#14B8A6"
                  strokeWidth="1"
                  opacity="0.4"
                />
                {/* Center ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="60"
                  fill="none"
                  stroke="#14B8A6"
                  strokeWidth="2"
                  opacity="0.6"
                />
                {/* Core */}
                <circle
                  cx="200"
                  cy="200"
                  r="20"
                  fill="#14B8A6"
                  opacity="0.3"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="8"
                  fill="#14B8A6"
                  opacity="0.8"
                />

                {/* Connection lines */}
                <line x1="200" y1="200" x2="200" y2="20" stroke="#14B8A6" strokeWidth="0.5" opacity="0.4" />
                <line x1="200" y1="200" x2="380" y2="200" stroke="#14B8A6" strokeWidth="0.5" opacity="0.4" />
                <line x1="200" y1="200" x2="200" y2="380" stroke="#14B8A6" strokeWidth="0.5" opacity="0.4" />
                <line x1="200" y1="200" x2="20" y2="200" stroke="#14B8A6" strokeWidth="0.5" opacity="0.4" />

                {/* Diagonal lines */}
                <line x1="200" y1="200" x2="327" y2="73" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3" />
                <line x1="200" y1="200" x2="327" y2="327" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3" />
                <line x1="200" y1="200" x2="73" y2="327" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3" />
                <line x1="200" y1="200" x2="73" y2="73" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3" />

                {/* Nodes */}
                <circle cx="200" cy="60" r="6" fill="#14B8A6" opacity="0.8" />
                <circle cx="340" cy="200" r="6" fill="#14B8A6" opacity="0.8" />
                <circle cx="200" cy="340" r="6" fill="#14B8A6" opacity="0.8" />
                <circle cx="60" cy="200" r="6" fill="#14B8A6" opacity="0.8" />

                {/* Diagonal nodes */}
                <circle cx="300" cy="100" r="4" fill="#14B8A6" opacity="0.6" />
                <circle cx="300" cy="300" r="4" fill="#14B8A6" opacity="0.6" />
                <circle cx="100" cy="300" r="4" fill="#14B8A6" opacity="0.6" />
                <circle cx="100" cy="100" r="4" fill="#14B8A6" opacity="0.6" />

                {/* Data points on rings */}
                <circle cx="260" cy="80" r="3" fill="#14B8A6" opacity="0.5" />
                <circle cx="320" cy="140" r="3" fill="#14B8A6" opacity="0.5" />
                <circle cx="140" cy="260" r="3" fill="#14B8A6" opacity="0.5" />
                <circle cx="80" cy="140" r="3" fill="#14B8A6" opacity="0.5" />
              </svg>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-primary/20" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
