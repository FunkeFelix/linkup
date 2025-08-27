import { QrCode, Users, MessageCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: QrCode,
      title: "Scan QR Code",
      description: "Scanne den QR-Code am Event-Eingang mit der LinkUp App",
      color: "from-primary to-primary-light"
    },
    {
      number: "02", 
      icon: Users,
      title: "Join Event",
      description: "Werde automatisch zum Event hinzugefügt und sieh andere Teilnehmer",
      color: "from-secondary to-secondary-light"
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Connect & Chat",
      description: "Connecte mit interessanten Menschen und starte Gespräche",
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            So einfach geht's
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In nur drei einfachen Schritten zu wertvollen neuen Connections
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="text-center space-y-4 max-w-xs">
                      {/* Step Circle */}
                      <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto group hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold text-foreground">{step.number}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="flex-1 flex justify-center mx-8">
                        <ArrowRight className="w-8 h-8 text-muted-foreground animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs font-bold text-foreground">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-card rounded-2xl border shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Ready to start networking?</h3>
            <p className="text-muted-foreground mb-4">
              Lade LinkUp herunter und entdecke Events in deiner Nähe
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-dark transition-colors">
                iOS App herunterladen
              </button>
              <button className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary-dark transition-colors">
                Android App herunterladen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;