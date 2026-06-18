'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const locales = [
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'it', label: 'IT', name: 'Italiano' },
];

const gold = '#C8A46B';
const goldDark = '#A8843B';
const ivory = '#F5F0E8';
const beige = '#D8C6AE';
const walnut = '#2B1D16';
const wood = '#3A261C';
const muted = '#9A8672';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLocalePath = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    const localeList = ['de', 'en', 'fr', 'it'];
    if (localeList.includes(segments[0])) {
      segments[0] = newLocale;
      return '/' + segments.join('/');
    }
    return `/${newLocale}${pathname}`;
  };

  // Switch language without resetting scroll position. Preserve the current
  // query string (e.g. pickup params carried into the contact form).
  const switchLocale = (newLocale: string) => {
    const search = typeof window !== 'undefined' ? window.location.search : '';
    router.push(getLocalePath(newLocale) + search, { scroll: false });
  };

  const getHref = (path: string) => `/${locale}${path}`;

  const isActive = (path: string) => {
    const fullPath = getHref(path);
    return pathname === fullPath || (path === '/' && pathname === `/${locale}`);
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/bread', label: t('bread') },
    { href: '/for-homes', label: t('forHomes') },
    { href: '/for-businesses', label: t('forBusinesses') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <>
      <style>{`
        html, body {
          overflow-x: hidden;
          max-width: 100%;
        }

        #nav-desktop-links { display: flex; }
        #nav-right-side { display: flex; }
        #mobile-toggle { display: none !important; }

        @media (max-width: 768px) {
          #nav-desktop-links { display: none !important; }
          #nav-right-side { display: none !important; }
          #mobile-toggle { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(43,29,22,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(200,164,107,0.15)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        padding: scrolled ? '10px 0' : '18px 0',
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxSizing: 'border-box',
          width: '100%',
        }}>

          {/* Logo */}
          <Link href={getHref('/')} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: '48px',
              height: '48px',
              minWidth: '48px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `2px solid rgba(200,164,107,0.6)`,
              flexShrink: 0,
            }}>
              <img src="/images/logo.png" alt="Tabuny Schweiz" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontWeight: '600', fontSize: '18px', lineHeight: '1.1' }}>Tabuny</span>
              <span style={{ color: gold, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '300' }}>Schweiz</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div id="nav-desktop-links" style={{ alignItems: 'center', gap: '28px', flex: 1, justifyContent: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                style={{
                  color: isActive(link.href) ? gold : beige,
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  transition: 'color 0.3s',
                  borderBottom: isActive(link.href) ? `1px solid ${gold}` : '1px solid transparent',
                  paddingBottom: '2px',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side — hidden on mobile */}
          <div id="nav-right-side" style={{ alignItems: 'center', gap: '12px', flexShrink: 0 }}>

            {/* Language Switcher */}
            <div ref={langRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: beige,
                  background: 'transparent',
                  border: `1px solid rgba(200,164,107,0.25)`,
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '500',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {locale.toUpperCase()}
                <span style={{ fontSize: '10px', opacity: 0.7 }}>{langOpen ? '▲' : '▼'}</span>
              </button>
              {langOpen && (
                <div style={{
                  position: 'absolute',
                  right: 0,
                  top: '100%',
                  marginTop: '8px',
                  backgroundColor: wood,
                  border: `1px solid rgba(200,164,107,0.2)`,
                  minWidth: '150px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  zIndex: 100,
                }}>
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { switchLocale(l.code); setLangOpen(false); }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '10px 16px',
                        fontSize: '13px',
                        color: locale === l.code ? gold : beige,
                        background: locale === l.code ? 'rgba(200,164,107,0.08)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ fontWeight: '700', minWidth: '24px' }}>{l.label}</span>
                      <span style={{ fontSize: '12px', color: muted }}>{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href={getHref('/for-businesses')}
              style={{
                background: `linear-gradient(135deg, ${gold}, ${goldDark})`,
                color: walnut,
                fontWeight: '700',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                textDecoration: 'none',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
            >
              {t('businessInquiry')}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 998,
            backgroundColor: 'rgba(43,29,22,0.95)',
            backdropFilter: 'blur(8px)',
          }}
        />
      )}

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        width: '300px',
        backgroundColor: '#1A110D',
        borderLeft: `1px solid rgba(200,164,107,0.1)`,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        padding: '80px 32px 40px',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s ease',
        boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getHref(link.href)}
              onClick={() => setMobileOpen(false)}
              style={{
                color: isActive(link.href) ? gold : ivory,
                textDecoration: 'none',
                fontSize: '22px',
                fontFamily: '"Playfair Display", serif',
                padding: '12px 0',
                borderBottom: `1px solid rgba(200,164,107,0.1)`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Language switcher in drawer */}
        <div style={{ marginTop: '28px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => { switchLocale(l.code); setMobileOpen(false); }}
              style={{
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                color: locale === l.code ? walnut : beige,
                background: locale === l.code ? gold : 'transparent',
                border: `1px solid rgba(200,164,107,0.3)`,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link
            href={getHref('/for-businesses')}
            onClick={() => setMobileOpen(false)}
            style={{
              background: `linear-gradient(135deg, ${gold}, ${goldDark})`,
              color: walnut,
              fontWeight: '700',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '14px 24px',
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center',
            }}
          >
            {t('businessInquiry')}
          </Link>
        </div>

        <div style={{ marginTop: 'auto', color: muted, fontSize: '12px', letterSpacing: '0.1em', lineHeight: '2' }}>
          <div>info@tabuny.ch</div>
          <div>+41 76 398 55 55</div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        id="mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          position: 'fixed',
          top: '14px',
          right: '16px',
          zIndex: 1001,
          background: 'rgba(43,29,22,0.8)',
          border: `1px solid rgba(200,164,107,0.3)`,
          color: ivory,
          width: '42px',
          height: '42px',
          cursor: 'pointer',
          fontSize: '18px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {mobileOpen ? '✕' : '☰'}
      </button>
    </>
  );
}