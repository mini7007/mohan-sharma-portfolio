import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { AppLink } from '../components/common/AppLink';
import { Eyebrow, Heading, Lead } from '../components/common/Text';

export function NotFoundPage() {
  return (
    <main id="main-content">
      <Section>
        <Container>
          <Eyebrow>404</Eyebrow>
          <Heading>Page not found.</Heading>
          <Lead>The requested page does not exist.</Lead>
          <p><AppLink to="/">Return home</AppLink></p>
        </Container>
      </Section>
    </main>
  );
}
