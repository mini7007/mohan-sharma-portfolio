import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Eyebrow, Lead } from '../common/Text';
import { profile } from '../../data/profile';

export function About() {
  return (
    <Section id="about" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
      <AboutGrid>
        <Copy>
          <Eyebrow>About</Eyebrow>
          <Title>{profile.name} builds across the interface, API, and data layer.</Title>
          <Lead>
            I am a Full Stack Developer with approximately 3 years of professional IT experience, focused on React.js, JavaScript / TypeScript, REST APIs, Node.js, PHP / Laravel, database integration, and performance-minded UI development.
          </Lead>
          <Note>
            The goal is simple: ship interfaces that feel considered, connect cleanly to backend systems, and stay maintainable after launch.
          </Note>
        </Copy>
        <DeveloperCard whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
          <CardLabel>Developer profile</CardLabel>
          <CardName>Mohan Sharma</CardName>
          <CardRole>Full Stack Developer</CardRole>
          <StackList>
            <span>React.js</span><span>TypeScript</span><span>REST APIs</span><span>Laravel</span><span>Node.js</span><span>Databases</span>
          </StackList>
          <CardFooter>[CONTENT NEEDED: portrait or verified profile photo]</CardFooter>
        </DeveloperCard>
      </AboutGrid>
    </Section>
  );
}

const AboutGrid = styled(Container)`
  display: grid;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: 1fr 0.72fr; }
`;
const Copy = styled.div`display: grid; gap: 1.35rem;`;
const Title = styled.h2`max-width: 850px; margin: 0; font-size: clamp(2.2rem, 6vw, 5.6rem); line-height: .92; letter-spacing: -.06em;`;
const Note = styled.p`max-width: 620px; margin: 0; color: ${({ theme }) => theme.colors.text}; font-size: 1.05rem; line-height: 1.7;`;
const DeveloperCard = styled(motion.aside)`border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.lg}; background: linear-gradient(160deg, rgba(255,255,255,.075), rgba(255,255,255,.025)); padding: clamp(1.25rem,3vw,2rem); box-shadow: ${({ theme }) => theme.shadows.card};`;
const CardLabel = styled.p`margin: 0 0 4rem; color: ${({ theme }) => theme.colors.accent}; font-family: ${({ theme }) => theme.fonts.mono}; font-size: .78rem; text-transform: uppercase; letter-spacing: .14em;`;
const CardName = styled.h3`margin: 0; font-size: clamp(2rem,4vw,3.4rem); letter-spacing: -.05em;`;
const CardRole = styled.p`margin: .35rem 0 1.5rem; color: ${({ theme }) => theme.colors.textMuted};`;
const StackList = styled.div`display: flex; flex-wrap: wrap; gap: .6rem; span { border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.pill}; padding: .55rem .7rem; font-family: ${({ theme }) => theme.fonts.mono}; font-size: .76rem; }`;
const CardFooter = styled.p`margin: 2rem 0 0; color: ${({ theme }) => theme.colors.textSubtle}; font-size: .88rem;`;
