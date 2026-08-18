import { motion } from 'framer-motion';
import styled from 'styled-components';
import { profile } from '../../data/profile';
import { ButtonLink } from '../common/Button';
import { Container } from '../common/Container';
import { Eyebrow, Heading, Lead } from '../common/Text';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function Hero() {
  const reduceMotion = usePrefersReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

  return (
    <HeroSection id="home" initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
      <HeroContainer>
        <HeroCopy>
          <Eyebrow>{profile.role}</Eyebrow>
          <Heading>{profile.name}</Heading>
          <Lead>{profile.heroStatement}</Lead>
          <Actions>
            <ButtonLink to="/#work" $variant="primary">View Work</ButtonLink>
            <ButtonLink to="/#contact" $variant="secondary">Contact Me</ButtonLink>
          </Actions>
        </HeroCopy>
        <SignalPanel aria-label="Technology focus areas">
          <PanelTop>
            <span>Foundation</span>
            <strong>React → API → Data</strong>
          </PanelTop>
          <TechList>
            {profile.strengths.map((item) => <li key={item}>{item}</li>)}
          </TechList>
          <Pulse $paused={reduceMotion} />
        </SignalPanel>
      </HeroContainer>
    </HeroSection>
  );
}

const HeroSection = styled(motion.section)`
  min-height: calc(100svh - 4.75rem);
  display: grid;
  align-items: center;
  padding-block: clamp(4rem, 8vw, 8rem);
`;

const HeroContainer = styled(Container)`
  display: grid;
  gap: clamp(2rem, 6vw, 5rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
    align-items: center;
  }
`;

const HeroCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xl};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

const SignalPanel = styled.aside`
  position: relative;
  min-height: 360px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background:
    radial-gradient(circle at 35% 20%, rgba(117, 167, 255, 0.16), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.02));
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
  padding: clamp(1.25rem, 3vw, 2rem);
`;

const PanelTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;

  strong { color: ${({ theme }) => theme.colors.text}; }
`;

const TechList = styled.ul`
  position: absolute;
  inset: auto 1.25rem 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: rgba(11, 13, 16, 0.62);
    color: ${({ theme }) => theme.colors.text};
    padding: 0.65rem 0.8rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.78rem;
  }
`;

const Pulse = styled.div<{ $paused: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(52vw, 280px);
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(215, 168, 93, 0.45);
  border-radius: 50%;

  &::before, &::after {
    content: '';
    position: absolute;
    inset: 18%;
    border: 1px solid rgba(246, 241, 232, 0.16);
    border-radius: inherit;
    animation: ${({ $paused }) => ($paused ? 'none' : 'breathe 4.8s ease-in-out infinite')};
  }

  &::after { inset: 34%; animation-delay: 800ms; }

  @keyframes breathe {
    0%, 100% { transform: scale(0.96); opacity: 0.55; }
    50% { transform: scale(1.06); opacity: 1; }
  }
`;
