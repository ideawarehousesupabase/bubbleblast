import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Menu, X, ChevronRight, MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import ctaBookImg from "@/assets/cta-book.jpg";
import ctaWorkImg from "@/assets/cta-work.jpg";
import svcBasicWash from "@/assets/svc-basic-wash.jpg";
import svcMiniValet from "@/assets/svc-mini-valet.jpg";
import svcExteriorDetailing from "@/assets/svc-exterior-detailing.jpg";
import svcInteriorDetailing from "@/assets/svc-interior-detailing.jpg";
import svcFullDetail from "@/assets/svc-full-detail.jpg";
import svcPaintCorrection from "@/assets/svc-paint-correction.jpg";
import svcCeramicCoating from "@/assets/svc-ceramic-coating.jpg";
import svcPPF from "@/assets/svc-ppf.jpg";
import svcWheelCoating from "@/assets/svc-wheel-coating.jpg";
import svcGlassCoating from "@/assets/svc-glass-coating.jpg";
import svcInteriorProtection from "@/assets/svc-interior-protection.jpg";
import svcUndercoating from "@/assets/svc-undercoating.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+44 7938 944150";
const WHATSAPP = "https://wa.link/po5v8h";

const services = [
  { title: "Basic Wash", price: "From £10.00 – £15.00", img: svcBasicWash, desc: "Get your car looking fresh with our basic wash service. Includes wash & dry, wheel cleaning, tyre shine, and door shuts for a clean everyday finish." },
  { title: "Mini Valet", price: "From £20.00 – £25.00", img: svcMiniValet, desc: "Give your car a more thorough clean with our mini valet service. Includes wash & dry, wheels, tyre shine, door shuts, interior vacuum, and dashboard cleaning." },
  { title: "Exterior Detailing", price: "From £120.00+", img: svcExteriorDetailing, desc: "Restore your vehicle's exterior with our professional detailing service. Deep cleaning, paint decontamination, and protection for a glossy showroom finish." },
  { title: "Interior Detailing", price: "From £120.00+", img: svcInteriorDetailing, desc: "Refresh your car's interior with a complete deep clean. Removes dirt, dust, and stains while restoring a fresh, comfortable cabin." },
  { title: "Full Detail", price: "From £220.00 – £300.00", img: svcFullDetail, desc: "Experience complete vehicle rejuvenation with our full detail service. Combines interior and exterior detailing to leave your car looking its absolute best." },
  { title: "Paint Correction", price: "From £180.00 – £850.00", img: svcPaintCorrection, desc: "Remove swirl marks, scratches, and paint imperfections with our multi-stage paint correction service. Restore gloss, depth, and a like-new finish." },
  { title: "Ceramic Coating", price: "From £319.00 – £999.00+", img: svcCeramicCoating, desc: "Protect your vehicle with a long-lasting ceramic coating. Enhances shine while providing durable protection against dirt, water, UV rays, and everyday contaminants." },
  { title: "Paint Protection Film (PPF)", price: "From £80.00 – £7,000.00", img: svcPPF, desc: "Protect your vehicle's paintwork with premium paint protection film. Defends against stone chips, scratches, road debris, and everyday wear while maintaining a factory finish." },
  { title: "Wheel Ceramic Coating", price: "From £80.00 – £200.00+", img: svcWheelCoating, desc: "Keep your wheels cleaner for longer with our ceramic wheel coating. Protects against brake dust, road grime, and everyday contamination." },
  { title: "Glass Coating", price: "From £60.00 – £120.00", img: svcGlassCoating, desc: "Improve visibility and protect your glass with our professional glass coating. Repels water, dirt, and road contaminants for safer driving in all weather." },
  { title: "Interior Protection", price: "From £120.00 – £250.00", img: svcInteriorProtection, desc: "Protect your vehicle's interior surfaces with premium leather, fabric, and ceramic protection. Helps prevent wear, stains, and everyday damage." },
  { title: "Car Undercoating (Anti-Rust / Underseal)", price: "From £170.00 – £450.00", img: svcUndercoating, desc: "Shield your vehicle's undercarriage from rust, moisture, and road salt with our professional underbody protection treatment for long-term durability." },
];

const brands = ["RUPES", "SWISSVAX", "GTECHNIQ", "XPEL"];

function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return <img src="/favicon.ico?v=2" alt="Bubble Blast Detailing LTD logo" className={className} width={80} height={80} />;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Logo className="w-11 h-11" />
            <span className="font-display text-xl font-bold tracking-wide hidden sm:inline">Bubble<span className="text-gradient-gold">Blast</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href={WHATSAPP} className="hidden md:inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href={WHATSAPP} className="inline-flex items-center gap-2 text-primary font-semibold"><Phone className="w-4 h-4" />{PHONE}</a>
          </div>
        )}
      </header>

      <section id="top" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <img src={heroImg} alt="Luxury car being detailed with foam" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-6">Welcome to Bubble Blast Detailing Centre</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
              Precision <span className="text-gradient-gold italic">Detailing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-10">
              Immerse yourself in perfection with our refined car detailing services, meticulously tailored for mid to high-end vehicles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WHATSAPP} className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-[var(--shadow-gold)] hover:opacity-90 transition">
                <Phone className="w-5 h-5" /> {PHONE}
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-semibold hover:bg-secondary transition">
                Our Services <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">What We Offer</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">Our <span className="text-gradient-gold italic">Services</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <article key={s.title} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition shadow-[var(--shadow-elegant)]">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={s.img} alt={s.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-3 uppercase tracking-wide">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <p className="text-primary font-semibold">{s.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={aboutImg} alt="Detailer polishing a car" width={1000} height={1200} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">About <span className="text-gradient-gold italic">Bubble Blast</span></h2>
            <p className="text-lg text-muted-foreground mb-6">Passionate detailers. Uncompromising standards.</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Bubble Blast Detailing LTD, we treat every vehicle like it's our own. From daily drivers to prestige and performance cars, our team combines premium products, careful technique, and a keen eye for detail to deliver a finish that turns heads. Based in Birmingham — precision detailing done right.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <a href="https://instagram.com" aria-label="Instagram" className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition"><Instagram className="w-5 h-5" /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition"><Facebook className="w-5 h-5" /></a>
            </div>
            <a href={`tel:${PHONE.replace(/\s/g,'')}`} className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-[var(--shadow-gold)] hover:opacity-90 transition">
              <Phone className="w-5 h-5" /> Call Us: {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section aria-label="Brands we work with" className="border-y border-border bg-secondary/40 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-around gap-10 whitespace-nowrap">
          {brands.map((b, i) => (
            <span key={i} className="font-display text-xl md:text-2xl lg:text-3xl font-black tracking-widest text-muted-foreground/60 hover:text-primary transition">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Two-panel CTA (image 1) */}
      <section className="grid md:grid-cols-2">
        <a href={WHATSAPP} className="relative group min-h-[420px] flex items-end overflow-hidden">
          <img src={ctaBookImg} alt="Book your car detailing appointment" width={1024} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="relative p-10 md:p-14 max-w-lg">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Need Service For Your Car?</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">Effortlessly Book Your Appointment Online</h3>
            <span className="inline-flex items-center gap-2 bg-background/80 backdrop-blur px-5 py-3 rounded-full text-sm font-semibold border border-border">
              <Phone className="w-4 h-4 text-primary" /> {PHONE}
            </span>
          </div>
        </a>
        <a href={`tel:${PHONE.replace(/\s/g,'')}`} className="relative group min-h-[420px] flex items-end overflow-hidden">
          <img src={ctaWorkImg} alt="Meticulous car detailing work" width={1024} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="relative p-10 md:p-14 max-w-lg">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Want To See Our Work</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">Discover Our Meticulous Detailing Expertise</h3>
            <span className="inline-flex items-center gap-2 bg-background/80 backdrop-blur px-5 py-3 rounded-full text-sm font-semibold border border-border">
              <Phone className="w-4 h-4 text-primary" /> Call Us
            </span>
          </div>
        </a>
      </section>

      <footer id="contact" className="border-t border-border bg-secondary/40 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-3 mb-5">
              <Logo className="w-12 h-12" />
              <span className="font-display text-2xl font-bold">Bubble<span className="text-gradient-gold">Blast</span> Detailing LTD</span>
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Refined car detailing for mid to high-end vehicles. Bringing showroom shine to every drive.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition"><Instagram className="w-5 h-5" /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href={WHATSAPP} className="hover:text-primary transition">Book Now</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-foreground">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-primary mt-1 shrink-0" /><a href={`tel:${PHONE.replace(/\s/g,'')}`} className="hover:text-primary">{PHONE}</a></li>
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-primary mt-1 shrink-0" /><a href="mailto:info@bubbleblastdetailing.co.uk" className="hover:text-primary break-all">info@bubbleblastdetailing.co.uk</a></li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary mt-1 shrink-0" /><span>150-160 Spring Hill, Hockley, Birmingham, B18 7BS</span></li>
              <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-primary mt-1 shrink-0" /><span>Mon - Fri: 9.00AM to 5.00PM</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Bubble Blast Detailing LTD. All rights reserved.</p>
          <p>Crafted with care for car enthusiasts.</p>
        </div>
      </footer>
    </div>
  );
}
