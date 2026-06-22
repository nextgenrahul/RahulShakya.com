import ContactHero from "@/features/contact/components/ContactHero";
import ContactForm from "@/features/contact/components/ContactForm";
import ContactChannels from "@/features/contact/components/ContactChannels";
import ContactSLA from "@/features/contact/components/ContactSLA";

export const metadata = {
  title: "Contact & Intake Brief // Rahul Shakya Archive",
  description: "Initialize system infrastructure blueprints, cloud scaling deployment requests, and project consultations.",
};

export default function ContactPage() {
  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen selection:bg-[#0071e3]/10 antialiased pt-24">
      {/* 1. True White Headline Stage */}
      <ContactHero />
      
      {/* 2. Layered Scope Interaction Form Block */}
      <ContactForm />
      
      {/* 3. Operational Communications Channels Grid */}
      <ContactChannels />
      
      {/* 4. Infrastructure SLA Commitment Panel */}
      <ContactSLA />
    </div>
  );
}