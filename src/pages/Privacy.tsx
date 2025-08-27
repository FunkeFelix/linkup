import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-max section-padding">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
              <p className="text-muted-foreground leading-relaxed">
                LinkUp App<br />
                E-Mail: support@linkup-app.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Datenverarbeitung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir verarbeiten personenbezogene Daten nur im erforderlichen Umfang zur Bereitstellung unserer Services. 
                Die Datenverarbeitung erfolgt auf Grundlage der DSGVO und mit Ihrer Einwilligung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Welche Daten sammeln wir?</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Profildaten (Name, E-Mail, Profilbild)</li>
                <li>Event-Teilnahmedaten</li>
                <li>Chat-Nachrichten (verschlüsselt)</li>
                <li>Geräteinformationen für technische Optimierung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Datensicherheit</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ihre Daten werden mit modernster Verschlüsselung geschützt und auf sicheren Firebase-Servern gespeichert. 
                Chat-Nachrichten sind Ende-zu-Ende verschlüsselt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Sperrung Ihrer Daten. 
                Kontaktieren Sie uns unter: support@linkup-app.de
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-card rounded-2xl border">
            <h3 className="text-xl font-semibold mb-4">English Version</h3>
            
            <section className="space-y-4">
              <h4 className="font-semibold">Data Controller</h4>
              <p className="text-muted-foreground">
                LinkUp App - Email: support@linkup-app.de
              </p>
              
              <h4 className="font-semibold">Data We Collect</h4>
              <p className="text-muted-foreground">
                We only process personal data necessary for our services: profile data, event participation, encrypted chat messages, and device information for technical optimization.
              </p>
              
              <h4 className="font-semibold">Data Security</h4>
              <p className="text-muted-foreground">
                Your data is protected with state-of-the-art encryption and stored on secure Firebase servers. Chat messages are end-to-end encrypted.
              </p>
              
              <h4 className="font-semibold">Your Rights</h4>
              <p className="text-muted-foreground">
                You have the right to access, correct, delete, or restrict your data at any time. Contact us at: support@linkup-app.de
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;