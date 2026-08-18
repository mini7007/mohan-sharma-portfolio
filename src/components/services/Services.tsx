import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Eyebrow } from '../common/Text';
import { services } from '../../data/services';

export function Services() {
  return (
    <Section id="services" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
      <Container>
        <Eyebrow>Services</Eyebrow>
        <Title>Focused engineering support for modern web products.</Title>
        <Grid>{services.map((service) => <Card key={service.number} whileHover={{ y: -6 }}><Number>{service.number}</Number><h3>{service.title}</h3><p>{service.description}</p><Tech>{service.technologies.map((tech) => <span key={tech}>{tech}</span>)}</Tech></Card>)}</Grid>
      </Container>
    </Section>
  );
}
const Title = styled.h2`max-width: 820px; margin: 0 0 3rem; font-size: clamp(2rem, 5vw, 4.8rem); line-height: .96; letter-spacing: -.055em;`;
const Grid = styled.div`display: grid; gap: 1rem; @media (min-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: repeat(2, minmax(0, 1fr)); }`;
const Card = styled(motion.article)`min-height: 320px; display: flex; flex-direction: column; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.lg}; background: linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.018)); padding: clamp(1.25rem,3vw,2rem); h3 { margin: auto 0 1rem; font-size: clamp(1.5rem,3vw,2.5rem); line-height: 1; letter-spacing: -.045em; } p { margin: 0 0 1.25rem; color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.65; }`;
const Number = styled.span`color: ${({ theme }) => theme.colors.accent}; font-family: ${({ theme }) => theme.fonts.mono};`;
const Tech = styled.div`display: flex; flex-wrap: wrap; gap: .5rem; span { color: ${({ theme }) => theme.colors.text}; font-family: ${({ theme }) => theme.fonts.mono}; font-size: .75rem; }`;
