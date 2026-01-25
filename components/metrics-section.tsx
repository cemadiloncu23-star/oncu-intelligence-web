const metrics = [
  {
    label: "Görüntü İşleme Hassasiyeti",
    value: "99.7",
    unit: "%",
    description: "Çok bantlı uydu görüntü analizi",
  },
  {
    label: "Operasyonel İrtifa",
    value: "45,000",
    unit: "ft",
    description: "Maksimum uçuş yüksekliği kapasitesi",
  },
  {
    label: "Veri İşleme Kapasitesi",
    value: "2.4",
    unit: "PB/gün",
    description: "Gerçek zamanlı analiz throughput",
  },
]

export function MetricsSection() {
  return (
    <section id="vizyon" className="relative py-20 border-y border-border/30">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center md:text-left group"
            >
              {/* Value */}
              <div className="flex items-baseline justify-center md:justify-start gap-1">
                <span className="text-4xl lg:text-5xl font-bold font-mono text-primary tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xl lg:text-2xl font-mono text-primary/70">
                  {metric.unit}
                </span>
              </div>
              
              {/* Label */}
              <h3 className="mt-3 text-sm font-semibold text-foreground uppercase tracking-wider">
                {metric.label}
              </h3>
              
              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground">
                {metric.description}
              </p>
              
              {/* Decorative line */}
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary/50 to-transparent mx-auto md:mx-0 group-hover:w-24 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
