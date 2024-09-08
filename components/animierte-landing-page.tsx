'use client'

import { JSX, SVGProps, useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation, useScroll } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from 'next/image'

export function AnimierteLandingPage() {
  const controls = useAnimation()
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 100) {
        controls.start('visible')
      } else {
        controls.start('hidden')
      }
    }

    return scrollY.onChange(handleScroll)
  }, [controls, scrollY])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const websites = [
    { name: "Mein Blog", description: "Ein persönlicher Blog über Technologie und Reisen", url: "https://meinblog.de" },
    { name: "Online Shop", description: "Verkauf von handgefertigten Produkten", url: "https://meinshop.de" },
    { name: "Fotogalerie", description: "Sammlung meiner besten Fotografien", url: "https://meinefotogalerie.de" },
    { name: "Rezepte Sammlung", description: "Meine Lieblingsrezepte zum Nachkochen", url: "https://meinerezepte.de" },
  ]

  const vorteile = [
    "Professioneller Auftritt im Internet",
    "Erhöhte Sichtbarkeit für potenzielle Kunden",
    "24/7 Erreichbarkeit und Informationsbereitstellung",
    "Verbessertes Markenimage und Glaubwürdigkeit",
    "Effektive Kundengewinnung und -bindung",
    "Messbarer Erfolg durch Analysetools"
  ]

  const bewertungen = [
    { name: "Max Mustermann", text: "Fantastischer Service! Meine neue Website hat mein Geschäft komplett transformiert." },
    { name: "Anna Schmidt", text: "Sehr professionelles Team. Die Website übertraf all meine Erwartungen." },
    { name: "Lukas Weber", text: "Großartige Erfahrung von Anfang bis Ende. Kann ich nur weiterempfehlen!" }
  ]

  const faqItems = [
    { frage: "Wie lange dauert die Erstellung einer Website?", antwort: "Die Dauer variiert je nach Komplexität, typischerweise 2-8 Wochen." },
    { frage: "Kann ich meine Website später selbst aktualisieren?", antwort: "Ja, wir bieten ein benutzerfreundliches CMS für einfache Aktualisierungen." },
    { frage: "Sind Ihre Websites für mobile Geräte optimiert?", antwort: "Absolut! Alle unsere Websites sind vollständig responsive." },
    { frage: "Bieten Sie auch Hosting und Domain-Registrierung an?", antwort: "Ja, wir bieten Komplettlösungen inklusive Hosting und Domain-Management." }
  ]

  const stats = [
    { value: "500+", label: "Zufriedene Kunden" },
    { value: "1000+", label: "Abgeschlossene Projekte" },
    { value: "10+", label: "Jahre Erfahrung" },
    { value: "24/7", label: "Support" },
  ]

  const services = [
    { title: "Webdesign", description: "Maßgeschneiderte Designs, die Ihre Marke perfekt repräsentieren." },
    { title: "Entwicklung", description: "Robuste und skalierbare Webanwendungen mit modernsten Technologien." },
    { title: "SEO-Optimierung", description: "Verbessern Sie Ihre Online-Sichtbarkeit und erreichen Sie mehr Kunden." },
    { title: "E-Commerce", description: "Leistungsstarke Online-Shops für Ihr wachsendes Geschäft." },
  ]

  const processSteps = [
    { number: "01", title: "Beratung", description: "Wir besprechen Ihre Ziele und Anforderungen." },
    { number: "02", title: "Konzeption", description: "Wir erstellen ein maßgeschneidertes Konzept für Ihr Projekt." },
    { number: "03", title: "Design", description: "Unser Designteam entwickelt das perfekte Look & Feel." },
    { number: "04", title: "Entwicklung", description: "Wir setzen Ihr Projekt mit modernsten Technologien um." },
    { number: "05", title: "Testing", description: "Gründliche Tests garantieren höchste Qualität." },
    { number: "06", title: "Launch", description: "Ihr Projekt geht live und wir stehen Ihnen weiterhin zur Seite." },
  ]

  const projects = [
    { id: 1, title: "Project 1", image: "/path-to-project1-mockup.jpg", url: "https://project1.com" },
    { id: 2, title: "Project 2", image: "/path-to-project2-mockup.jpg", url: "https://project2.com" },
    { id: 3, title: "Project 3", image: "/path-to-project3-mockup.jpg", url: "https://project3.com" },
    { id: 4, title: "Project 4", image: "/path-to-project4-mockup.jpg", url: "https://project4.com" },
  ]

  return (
    <div className="flex flex-col min-h-screen py-3">
      <motion.header
        className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-white z-50"
        initial={{ y: -100 }}
        animate={controls}
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 }
        }}
        transition={{ duration: 0.3 }}
      >
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">WebsiteAnbieter</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#ueber-uns">
            Über uns
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#vorteile">
            Vorteile
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#preise">
            Preise
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#kontakt">
            Kontakt
          </Link>
        </nav>
      </motion.header>
      <main className="flex-1">
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-2" variants={fadeInUp}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Ihre perfekte Website beginnt hier
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Professionelle, maßgeschneiderte Websites für Ihren Erfolg im digitalen Zeitalter.
                </p>
              </motion.div>
              <motion.div className="space-x-4" variants={fadeInUp}>
                <Button variant="secondary" size="lg">Jetzt Angebot anfordern</Button>
                <Button variant="outline" size="lg">Unsere Arbeiten ansehen</Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="w-full py-12 bg-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="text-3xl font-bold text-purple-600">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="w-full py-12 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
              variants={fadeInUp}
            >
              Unsere Dienstleistungen
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="ueber-uns"
          className="w-full py-12 md:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="px-1 md:px-16 ">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeInUp}
            >
              Über WebsiteAnbieter
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center mb-12"
              variants={fadeInUp}
            >
              Seit über 10 Jahren gestalten wir erstklassige Websites für Unternehmen jeder Größe. 
              Unser erfahrenes Team aus Designern und Entwicklern arbeitet eng mit Ihnen zusammen, 
              um Ihre Vision in eine beeindruckende Online-Präsenz zu verwandeln.
            </motion.p>
            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={staggerChildren}>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <BrushIcon className="h-12 w-12 mb-4 text-purple-500" />
                    <h3 className="text-lg font-bold mb-2">Kreatives Design</h3>
                    <p className="text-sm text-gray-500">Einzigartige, auf Ihre Marke abgestimmte Designs</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <CodeIcon className="h-12 w-12 mb-4 text-purple-500" />
                    <h3 className="text-lg font-bold mb-2">Moderne Technologie</h3>
                    <p className="text-sm text-gray-500">Nutzung neuester Webtechnologien für optimale Performance</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <UserIcon className="h-12 w-12 mb-4 text-purple-500" />
                    <h3 className="text-lg font-bold mb-2">Kundenorientiert</h3>
                    <p className="text-sm text-gray-500">Ihr Erfolg steht im Mittelpunkt unserer Arbeit</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="vorteile"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeInUp}
            >
              Warum Sie eine professionelle Website brauchen
            </motion.h2>
            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={staggerChildren}>
              {vorteile.map((vorteil, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      {getVorteilIcon(index)}
                      <p className="text-sm">{vorteil}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="arbeiten"
          className="w-full py-12 md:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeInUp}
            >
              Unsere Arbeiten
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerChildren}
            >
              {projects.map((project) => (
                <motion.div key={project.id} className="relative group" variants={fadeInUp}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      layout="responsive"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-lg font-semibold bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
                      >
                        Projekt ansehen
                      </a>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="  px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeInUp}
            >
              Das sagen unsere Kunden
            </motion.h2>
            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={staggerChildren}>
              {bewertungen.map((bewertung, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-sm mb-2">"{bewertung.text}"</p>
                      <p className="text-sm font-bold">- {bewertung.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="preise"
          className="w-full py-12 md:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="  px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeInUp}
            >
              Unsere Preise
            </motion.h2>
            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={staggerChildren}>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Basis Paket</h3>
                    <p className="text-3xl font-bold mb-4">€999</p>
                    <ul className="space-y-2 mb-4">
                      <li>Responsive Design</li>
                      <li>5 Seiten</li>
                      <li>Kontaktformular</li>
                      <li>SEO Grundoptimierung</li>
                    </ul>
                    <Button className="w-full">Jetzt buchen</Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Business Paket</h3>
                    <p className="text-3xl font-bold mb-4">€1999</p>
                    <ul className="space-y-2 mb-4">
                      <li>Alles aus dem Basis Paket</li>
                      <li>10 Seiten</li>
                      <li>Content Management System</li>
                      <li>E-Mail Marketing Integration</li>
                    </ul>
                    <Button className="w-full">Jetzt buchen</Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Premium Paket</h3>
                    <p className="text-3xl font-bold mb-4">€3999</p>
                    <ul className="space-y-2 mb-4">
                      <li>Alles aus dem Business Paket</li>
                      <li>Unbegrenzte Seiten</li>
                      <li>E-Commerce Funktionalität</li>
                      <li>Individuelle Funktionen</li>
                    </ul>
                    <Button className="w-full">Jetzt buchen</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          className="w-full py-12 md:py-24 bg-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
              variants={fadeInUp}
            >
              Unser Prozess
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{step.number}</div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="  px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeInUp}
            >
              Häufig gestellte Fragen
            </motion.h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{item.frage}</AccordionTrigger>
                    <AccordionContent>{item.antwort}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.section>

        <motion.section
          id="kontakt"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-pink-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="  px-4 md:px-6">
            <motion.div className="flex flex-col items-center space-y-4 text-center" variants={staggerChildren}>
              <motion.div className="space-y-2" variants={fadeInUp}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Bereit für Ihre eigene Website?
                </h2>
                <p className="mx-auto max-w-[600px] text-white md:text-xl">
                  Lassen Sie uns gemeinsam Ihre Ideen zum Leben erwecken. Kontaktieren Sie uns noch heute für ein kostenloses Beratungsgespräch.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button size="lg" variant="secondary">Jetzt Kontakt aufnehmen</Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <motion.footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 WebsiteAnbieter. Alle Rechte vorbehalten.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Datenschutz
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Impressum
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            AGB
          </Link>
        </nav>
      </motion.footer>
    </div>
  )
}

function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function BrushIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function getVorteilIcon(index: number) {
  switch (index) {
    case 0:
      return <GlobeIcon className="h-6 w-6 flex-shrink-0 text-purple-500" />
    case 1:
      return <SearchIcon className="h-6 w-6 flex-shrink-0 text-purple-500" />
    case 2:
      return <ClockIcon className="h-6 w-6 flex-shrink-0 text-purple-500" />
    case 3:
      return <BadgeCheckIcon className="h-6 w-6 flex-shrink-0 text-purple-500" />
    case 4:
      return <UsersIcon className="h-6 w-6 flex-shrink-0 text-purple-500" />
    case 5:
      return <ChartBarIcon className="h-6 w-6 flex-shrink-0 text-purple-500" />
    default:
      return <CheckIcon className="h-6 w-6 flex-shrink-0 text-purple-500" />
  }
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function BadgeCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ChartBarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  )
}