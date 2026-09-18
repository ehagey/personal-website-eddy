import { useState } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PublicationsSection from '@/components/PublicationsSection';
import InTheNewsSection from '@/components/InTheNewsSection';
import InvitedTalksSection from '@/components/InvitedTalksSection';
import WritingSection from '@/components/WritingSection';
import TeachingAssistanceSection from '@/components/TeachingAssistanceSection';
import ContactSection from '@/components/ContactSection';
import AwardsSection from '@/components/AwardsSection';
import RevealSection from '@/components/RevealSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const sections = [
  { value: 'publications', tabLabel: 'Publications', title: 'Publications and Academic Work', Content: PublicationsSection },
  { value: 'in-the-news', tabLabel: 'In the News', title: 'In the News', Content: InTheNewsSection },
  { value: 'invited-talks', tabLabel: 'Invited Talks', title: 'Invited Talks', Content: InvitedTalksSection },
  { value: 'teaching-assistance', tabLabel: 'Teaching', title: 'Teaching Assistance', Content: TeachingAssistanceSection },
  { value: 'writing', tabLabel: 'Writing', title: 'Writing', Content: WritingSection },
  { value: 'awards', tabLabel: 'Awards', title: 'Awards and Honors', Content: AwardsSection },
  { value: 'contact', tabLabel: 'Contact', title: 'Contact', Content: ContactSection },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('publications');

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RevealSection>
          <AboutSection />
        </RevealSection>

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '5px 20px 20px 20px' }}>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList
              className="bg-transparent p-0 h-auto justify-start rounded-none w-full overflow-x-auto"
              style={{ borderBottom: '1px solid var(--site-border)' }}
            >
              {sections.map(({ value, tabLabel }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  onMouseDown={(e) => {
                    if (value === activeTab) {
                      e.preventDefault();
                      setActiveTab('');
                    }
                  }}
                  className="bg-transparent shadow-none rounded-none px-0 py-2 mr-5 last:mr-0 whitespace-nowrap border-b-2 border-transparent text-[var(--site-text-faint)] hover:text-[var(--site-text-muted)] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-[var(--site-text)] data-[state=active]:text-[var(--site-text)]"
                  style={{ fontSize: '14px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  {tabLabel}
                  {value === activeTab && <X size={12} />}
                </TabsTrigger>
              ))}
            </TabsList>

            {sections.map(({ value, title, Content }) => (
              <TabsContent key={value} value={value} className="mt-5 focus-visible:ring-0 focus-visible:ring-offset-0">
                <RevealSection>
                  <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--site-text)', marginBottom: '15px' }}>
                    {title}
                  </h2>
                  <Content />
                </RevealSection>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px 20px 20px' }}>
          <p style={{ fontSize: '11px', color: 'var(--site-text-faint)', textAlign: 'left' }}>
            Last updated: September 17, 2026
          </p>
        </div>
      </main>
    </>
  );
};

export default Index;
