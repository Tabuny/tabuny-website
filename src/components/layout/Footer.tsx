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
            <a href="#" style={{width: '36px', height: '36px', border: '1px solid rgba(200,164,107,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9A8672', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold'}}>
              in
            </a>
            <a href="#" style={{width: '36px', height: '36px', border: '1px solid rgba(200,164,107,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9A8672', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold'}}>
              f
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