import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { navigationItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import { Container } from '../common/Container';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer>
        <Brand href="/" aria-label="Mohan Sharma home">MS</Brand>
        <DesktopLinks aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </DesktopLinks>
        <Availability>{profile.availability}</Availability>
        <MenuButton type="button" aria-expanded={isOpen} aria-controls="mobile-menu" onClick={() => setIsOpen((value) => !value)}>
          <span>{isOpen ? 'Close' : 'Menu'}</span>
        </MenuButton>
      </NavContainer>
      <MobilePanel id="mobile-menu" $isOpen={isOpen} aria-hidden={!isOpen}>
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>
        ))}
      </MobilePanel>
    </Nav>
  );
}

const Nav = styled.header<{ $isScrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${({ theme, $isScrolled }) => ($isScrolled ? theme.colors.border : 'transparent')};
  background: ${({ $isScrolled }) => ($isScrolled ? 'rgba(11, 13, 16, 0.82)' : 'transparent')};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(18px)' : 'none')};
  transition: background 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease;
`;

const NavContainer = styled(Container)`
  display: flex;
  min-height: 4.75rem;
  align-items: center;
  gap: 1rem;
`;

const Brand = styled.a`
  display: grid;
  width: 2.65rem;
  height: 2.65rem;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 800;
`;

const DesktopLinks = styled.nav`
  display: none;
  margin-inline: auto;
  gap: 0.2rem;

  a {
    border-radius: ${({ theme }) => theme.radii.pill};
    color: ${({ theme }) => theme.colors.textMuted};
    padding: 0.7rem 0.85rem;
    font-size: 0.9rem;
    transition: color 180ms ease, background 180ms ease;
  }

  a:hover { background: rgba(255, 255, 255, 0.045); color: ${({ theme }) => theme.colors.text}; }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { display: flex; }
`;

const Availability = styled.span`
  display: none;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;

  &::before {
    content: '';
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.success};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) { display: inline-flex; align-items: center; }
`;

const MenuButton = styled.button`
  margin-left: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.04);
  color: ${({ theme }) => theme.colors.text};
  padding: 0.75rem 1rem;
  font-weight: 800;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { display: none; }
`;

const MobilePanel = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'grid' : 'none')};
  width: min(100% - 2rem, 1240px);
  margin: 0 auto 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.nav};
  overflow: hidden;

  a { padding: 1rem; color: ${({ theme }) => theme.colors.text}; border-bottom: 1px solid ${({ theme }) => theme.colors.border}; }
  a:last-child { border-bottom: 0; }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { display: none; }
`;
