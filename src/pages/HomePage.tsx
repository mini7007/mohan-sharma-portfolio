import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Experience } from '../components/experience/Experience';
import { Services } from '../components/services/Services';
import { TechStack } from '../components/techStack/TechStack';
import { Section } from '../components/common/Section';
import { Container } from '../components/common/Container';
import { Eyebrow, Lead } from '../components/common/Text';

export function HomePage() {
  return (
    <>
      <Hero />
      <main id="main-content">
        <About />
        <Experience />
        <PlaceholderSection id="work" label="Selected Work" title="Case-study cards are planned for the next build phase." />
        <Services />
        <TechStack />
        <PlaceholderSection id="engineering" label="Engineering" title="Engineering philosophy cards will follow after foundation work." />
        <PlaceholderSection id="contact" label="Contact" title="Contact details are marked as content needed until provided." />
      </main>
    </>
  );
}

function PlaceholderSection({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <Section id={id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
      <Container>
        <Eyebrow>{label}</Eyebrow>
        <Lead>{title} [CONTENT NEEDED]</Lead>
      </Container>
    </Section>
  );
}
