import styled from 'styled-components';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Eyebrow, Lead } from '../common/Text';
import { techGroups } from '../../data/techStack';

export function TechStack() {
  return (
    <Section id="tech-stack" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
      <Container>
        <Header><Eyebrow>Tech Stack</Eyebrow><h2>Tools grouped by how they support the product.</h2><Lead>Primary technologies are emphasized without turning the section into a wall of logos.</Lead></Header>
        <Groups>{techGroups.map((group) => <Group key={group.label}><h3>{group.label}</h3><Primary>{group.primary.map((tech) => <button type="button" key={tech}>{tech}</button>)}</Primary><Supporting>{group.supporting.map((tech) => <span key={tech}>{tech}</span>)}</Supporting></Group>)}</Groups>
      </Container>
    </Section>
  );
}
const Header = styled.div`max-width: 780px; margin-bottom: 3rem; h2 { margin: 0 0 1rem; font-size: clamp(2rem,5vw,4.8rem); line-height: .96; letter-spacing: -.055em; }`;
const Groups = styled.div`display: grid; gap: 1rem;`;
const Group = styled.article`display: grid; gap: 1rem; align-items: center; border-top: 1px solid ${({ theme }) => theme.colors.border}; padding: 1.4rem 0; h3 { margin: 0; font-size: 1rem; color: ${({ theme }) => theme.colors.textMuted}; } @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: 180px 1fr 1fr; }`;
const Primary = styled.div`display: flex; flex-wrap: wrap; gap: .65rem; button { cursor: pointer; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.pill}; background: ${({ theme }) => theme.colors.text}; color: ${({ theme }) => theme.colors.background}; padding: .7rem .9rem; font-weight: 800; transition: transform 180ms ease; } button:hover { transform: translateY(-2px); } @media (prefers-reduced-motion: reduce) { button { transition: none; } button:hover { transform: none; } }`;
const Supporting = styled.div`display: flex; flex-wrap: wrap; gap: .6rem; color: ${({ theme }) => theme.colors.textMuted}; span { border-radius: ${({ theme }) => theme.radii.pill}; background: rgba(255,255,255,.04); padding: .55rem .75rem; }`;
