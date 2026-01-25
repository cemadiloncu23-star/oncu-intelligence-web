import { Plane, Satellite, Shield } from "lucide-react"

const solutions = [
  {
    icon: Plane,
    title: "İHA Sistemleri",
    description:
      "Otonom uçuş yetenekleri, gelişmiş sensör füzyonu ve gerçek zamanlı veri aktarımı ile kritik görevler için tasarlanmış insansız hava araçları.",
    capabilities: [
      "Otonom navigasyon",
      "Çoklu sensör entegrasyonu",
      "Güvenli iletişim protokolleri",
    ],
  },
  {
    icon: Satellite,
    title: "Uydu Veri Analitiği",
    description:
      "Çok bantlı uydu görüntüleri üzerinde yapay zeka destekli analiz ile arazi, deniz ve atmosferik verilerin işlenmesi.",
    capabilities: [
      "Hiperspektral görüntü analizi",
      "Değişim tespiti algoritmaları",
      "Coğrafi istihbarat raporlama",
    ],
  },
  {
    icon: Shield,
    title: "Stratejik İstihbarat",
    description:
      "Çoklu kaynaklardan gelen verilerin birleştirilmesi, tehdit analizi ve karar destek sistemleri ile stratejik farkındalık.",
    capabilities: [
      "Veri füzyonu platformu",
      "Tehdit modellemesi",
      "Senaryo simülasyonları",
    ],
  },
]

export function SolutionsSection() {
  return (
    <section id="cozumler" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-border bg-secondary/50">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Çözümler
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Kritik görevler için{" "}
            <span className="text-primary">mühendislik çözümleri</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Savunma ve uzay sektörlerinin ihtiyaçlarına yönelik özelleştirilmiş teknoloji çözümleri sunuyoruz.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative p-6 lg:p-8 border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-primary/30 bg-primary/10">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Capabilities */}
                <ul className="space-y-2">
                  {solution.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 bg-primary" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
