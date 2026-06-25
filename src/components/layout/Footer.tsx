'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();

  const getHref = (path: string) => {
    return `/${locale}${path}`;
  };

  const socialBox = {
    width: '36px',
    height: '36px',
    border: '1px solid rgba(200,164,107,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#C8A46B',
    textDecoration: 'none',
  };

  return (
    <footer style={{backgroundColor: '#1A110D', borderTop: '1px solid rgba(200,164,107,0.1)'}}>
      <div style={{maxWidth: '1440px', margin: '0 auto', padding: '80px 48px'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px'}}>

          {/* Brand */}
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px'}}>
              <div style={{width: '56px', height: '56px', borderRadius: '50%', border: '2px solid rgba(200,164,107,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2B1D16'}}>
                <span style={{fontFamily: 'Playfair Display, serif', color: '#C8A46B', fontWeight: 'bold', fontSize: '14px', textAlign: 'center', lineHeight: '1.2'}}>T<br/>CH</span>
              </div>
              <div>
                <div style={{fontFamily: 'Playfair Display, serif', color: '#F5F0E8', fontWeight: '600', fontSize: '20px'}}>Tabuny</div>
                <div style={{color: '#C8A46B', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase'}}>Schweiz</div>
              </div>
            </div>
            <p style={{color: '#9A8672', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px'}}>{t('tagline')}</p>
            <div style={{display: 'flex', gap: '12px'}}>
              {/* Instagram */}
              <a href="https://www.instagram.com/tabunych" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialBox}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@tabunych4" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={socialBox}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61591255284900" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={socialBox}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{color: '#C8A46B', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '500'}}>Navigation</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {[
                { href: '/', label: nav('home') },
                { href: '/about', label: nav('about') },
                { href: '/bread', label: nav('bread') },
                { href: '/for-homes', label: nav('forHomes') },
                { href: '/for-businesses', label: nav('forBusinesses') },
                { href: '/contact', label: nav('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={getHref(link.href)} style={{color: '#9A8672', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s'}}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{color: '#C8A46B', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '500'}}>Kontakt</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <li style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
                <MapPin size={14} style={{color: '#C8A46B', marginTop: '2px', flexShrink: 0}} />
                <span style={{color: '#9A8672', fontSize: '14px', lineHeight: '1.6'}}>{t('address')}</span>
              </li>
              <li style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                <Phone size={14} style={{color: '#C8A46B', flexShrink: 0}} />
                <a href={`tel:${t('phone')}`} style={{color: '#9A8672', fontSize: '14px', textDecoration: 'none'}}>{t('phone')}</a>
              </li>
              <li style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                <Mail size={14} style={{color: '#C8A46B', flexShrink: 0}} />
                <a href={`mailto:${t('email')}`} style={{color: '#9A8672', fontSize: '14px', textDecoration: 'none'}}>{t('email')}</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{color: '#C8A46B', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '500'}}>Business</h4>
            <p style={{color: '#9A8672', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px'}}>Restaurant, Hotel oder Einzelhandel? Werden Sie Partner.</p>
            <Link
              href={getHref('/for-businesses')}
              style={{background: 'linear-gradient(135deg, #C8A46B, #A8843B)', color: '#2B1D16', fontWeight: '600', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '12px 24px', textDecoration: 'none', display: 'inline-block'}}
            >
              {nav('businessInquiry')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{borderTop: '1px solid rgba(200,164,107,0.1)'}}>
        <div style={{maxWidth: '1440px', margin: '0 auto', padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'}}>
          <p style={{color: '#9A8672', fontSize: '12px', letterSpacing: '0.05em'}}>
            © {new Date().getFullYear()} Tabuny Schweiz. {t('rights')}
          </p>
          <div style={{display: 'flex', gap: '24px'}}>
            <Link href={getHref('/privacy')} style={{color: '#9A8672', fontSize: '12px', textDecoration: 'none'}}>Datenschutz</Link>
            <Link href={getHref('/impressum')} style={{color: '#9A8672', fontSize: '12px', textDecoration: 'none'}}>Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}