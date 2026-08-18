import { useParams } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { AppLink } from '../components/common/AppLink';
import { Eyebrow, Heading, Lead } from '../components/common/Text';

export function CaseStudyPage() {
  const { slug } = useParams();

  return (
    <main id="main-content">
      <Section>
        <Container>
          <Eyebrow>Case Study</Eyebrow>
          <Heading>{slug ?? 'Work'}</Heading>
          <Lead>This case-study route is ready for verified project content. [CONTENT NEEDED]</Lead>
          <p><AppLink to="/#work">Back to selected work</AppLink></p>
        </Container>
      </Section>
    </main>
  );
}
