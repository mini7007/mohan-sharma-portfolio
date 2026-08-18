import styled from 'styled-components';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Eyebrow, Lead } from '../common/Text';
import { experienceItems } from '../../data/experience';

export function Experience() {
  return (
    <Section id="experience" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
      <Container>
        <Header>
          <Eyebrow>Experience</Eyebrow>
          <h2>A timeline built from verified information only.</h2>
          <Lead>Employment details that are not yet available remain clearly marked instead of being invented.</Lead>
        </Header>
        <Timeline>
          {experienceItems.map((item) => (
            <TimelineItem key={`${item.company}-${item.period}`}>
              <Marker />
              <ExperienceCard>
                <Meta>{item.period}</Meta>
                <h3>{item.role}</h3>
                <Company>{item.company}</Company>
                <Tech>{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</Tech>
                <ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
                <Impact>{item.impact}</Impact>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
}
const Header = styled.div`max-width: 760px; margin-bottom: 3rem; h2 { margin: 0 0 1rem; font-size: clamp(2rem, 5vw, 4.5rem); line-height: .96; letter-spacing: -.055em; }`;
const Timeline = styled.div`position: relative; display: grid; gap: 1rem; &::before { content: ''; position: absolute; left: .7rem; top: 0; bottom: 0; width: 1px; background: ${({ theme }) => theme.colors.border}; } @media (min-width: ${({ theme }) => theme.breakpoints.md}) { margin-left: 1rem; }`;
const TimelineItem = styled.article`position: relative; display: grid; grid-template-columns: 2rem 1fr; gap: 1rem;`;
const Marker = styled.div`width: 1rem; height: 1rem; margin-top: 1.5rem; border-radius: 50%; background: ${({ theme }) => theme.colors.accent}; box-shadow: 0 0 0 8px rgba(215,168,93,.1);`;
const ExperienceCard = styled.div`border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.lg}; background: ${({ theme }) => theme.colors.surface}; padding: clamp(1.25rem,3vw,2rem); h3 { margin: 0; font-size: clamp(1.6rem,3vw,2.6rem); letter-spacing: -.04em; } ul { margin: 1.25rem 0 0; padding-left: 1.1rem; color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.75; }`;
const Meta = styled.p`margin: 0 0 .75rem; color: ${({ theme }) => theme.colors.accent}; font-family: ${({ theme }) => theme.fonts.mono}; font-size: .78rem;`;
const Company = styled.p`margin: .3rem 0 1.25rem; color: ${({ theme }) => theme.colors.textMuted};`;
const Tech = styled.div`display: flex; flex-wrap: wrap; gap: .5rem; span { border-radius: ${({ theme }) => theme.radii.pill}; background: rgba(255,255,255,.045); padding: .45rem .65rem; color: ${({ theme }) => theme.colors.text}; font-size: .78rem; }`;
const Impact = styled.p`margin: 1.25rem 0 0; color: ${({ theme }) => theme.colors.textSubtle}; font-family: ${({ theme }) => theme.fonts.mono}; font-size: .82rem;`;
