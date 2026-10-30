import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ResearchSection from '@/components/ResearchSection';

const ResearchTab = () => (
  <Sheet>
    <SheetTrigger asChild>
      <button
        aria-label="Open research overview"
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 40,
          writingMode: 'vertical-rl',
          padding: '14px 8px',
          fontSize: '13px',
          letterSpacing: '0.08em',
          color: 'var(--site-text-muted)',
          background: 'var(--site-bg)',
          border: '1px solid var(--site-border)',
          borderRight: 'none',
          borderRadius: '8px 0 0 8px',
          cursor: 'pointer',
        }}
      >
        Research
      </button>
    </SheetTrigger>
    <SheetContent
      side="right"
      className="overflow-y-auto"
      style={{ background: 'var(--site-bg)', borderColor: 'var(--site-border)', color: 'var(--site-text)' }}
    >
      <SheetHeader className="mb-5 text-left">
        <SheetTitle style={{ fontSize: '24px', fontWeight: 400, color: 'var(--site-text)' }}>Research</SheetTitle>
        <SheetDescription style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>
          Generative AI and economic decision-making
        </SheetDescription>
      </SheetHeader>
      <ResearchSection />
    </SheetContent>
  </Sheet>
);

export default ResearchTab;
