
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PublicationsSection from '@/components/PublicationsSection';
import InTheNewsSection from '@/components/InTheNewsSection';
import WritingSection from '@/components/WritingSection';
import TeachingAssistanceSection from '@/components/TeachingAssistanceSection';
import ContactSection from '@/components/ContactSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const sections = [
  { value: 'publications', title: 'Publications and Academic Work', Content: PublicationsSection },
  { value: 'in-the-news', title: 'In the News', Content: InTheNewsSection },
  { value: 'writing', title: 'Writing', Content: WritingSection },
  { value: 'teaching-assistance', title: 'Teaching Assistance', Content: TeachingAssistanceSection },
  { value: 'contact', title: 'Contact', Content: ContactSection },
];

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '5px 20px 20px 20px' }}>
          <Accordion type="multiple">
            {sections.map(({ value, title, Content }) => (
              <AccordionItem key={value} value={value} id={value} className="border-[var(--site-border)]">
                <AccordionTrigger
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--site-text)',
                  }}
                >
                  {title}
                </AccordionTrigger>
                <AccordionContent>
                  <Content />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </>
  );
};

export default Index;
