'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export default function BreadPage() {
  const t = useTranslations('products');
  const locale = useLocale();

  const getHref = (path: string) => `/${locale}${path}`;

  const gold = '#C8A46B';
  const goldDark = '#A8843B';
  const goldDeep = '#7A5C1E';
  const goldLuxury = '#8B6420';
  const ivory = '#F5F0E8';
  const walnut = '#2B1D16';
  const darkWood = '#1A110D';
  const beige = '#D8C6AE';
  const cream = '#F0E8DC';
  const darkText = '#1A0A04';
  const darkMuted = '#3D2410';

  const products = [
    {
      id: 'classic-tabuny',
      img: '/images/product-classic.jpg',
      name: t('product1Name'),
      desc: t('product1Desc'),
      weight: t('product1Weight'),
      prep: t('product1Prep'),
      ingredients: t('product1Ingredients'),
    },
    {
      id: 'specialty-tabuny',
      img: '/images/product-specialty.jpg',
      name: t('product2Name'),
      desc: t('product2Desc'),
      weight: t('product2Weight'),
      prep: t('product2Prep'),
      ingredients: t('product2Ingredients'),
    },
  ];

  return (
    <div style={{ backgroundColor: walnut }}>

      <style>{`
        :root { color-scheme: light only; }

        .bread-hero-content { padding: 160px 64px 100px; }
        .bread-section-pad { padding: 100px 64px; }
        .bread-section-pad-sm { padding: 80px 64px; }
        .bread-product-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        .bread-product-image { min-height: 400px; }
        .bread-product-content { padding: 52px 48px; }
        .bread-fresh-steps { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; margin-top: 40px; }
        .bread-cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .bread-hero-content { padding: 120px 24px 72px; }
          .bread-section-pad { padding: 64px 24px; }
          .bread-section-pad-sm { padding: 52px 24px; }
          .bread-product-grid { grid-template-columns: 1fr; }
          .bread-product-image { min-height: 260px; order: 1 !important; }
          .bread-product-content { padding: 32px 24px; order: 2 !important; }
          .bread-fresh-steps { gap: 28px; }
          .bread-cta-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/bread-closeup.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(43,29,22,0.95) 0%, rgba(43,29,22,0.7) 60%, rgba(43,29,22,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,29,22,0.8) 0%, transparent 60%)' }} />

        <div className="bread-hero-content" style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
              {t('pageLabel')}
              <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
            </div>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(48px, 6vw, 88px)', color: ivory, fontWeight: '900', lineHeight: '1.0', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              {t('heroTitle')}
            </h1>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, ${gold}, ${goldDark})`, marginBottom: '24px' }} />
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '24px', color: gold, fontStyle: 'italic', fontWeight: '500' }}>
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS — LIGHT ── */}
      <section className="bread-section-pad" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '700' }}>{t('label')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 4vw, 56px)', color: goldLuxury, fontWeight: '800' }}>{t('title')}</h2>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '22px', color: darkMuted, fontStyle: 'italic', marginTop: '10px', fontWeight: '500' }}>{t('subtitle')}</p>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, transparent, ${goldDark}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {products.map((product, i) => (
              <div key={product.id} style={{
                border: `1px solid rgba(139,100,32,0.2)`,
                overflow: 'hidden',
                boxShadow: '0 4px 32px rgba(43,29,22,0.12)',
                background: 'white',
              }}>
                <div className="bread-product-grid">
                  {/* Image */}
                  <div className="bread-product-image" style={{
                    order: i % 2 === 0 ? 1 : 2,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${product.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      border: `1px solid rgba(200,164,107,0.6)`,
                      padding: '6px 16px',
                      fontSize: '11px',
                      color: ivory,
                      letterSpacing: '0.15em',
                      background: 'rgba(26,17,13,0.85)',
                      fontWeight: '600',
                    }}>
                      {product.weight}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bread-product-content" style={{
                    order: i % 2 === 0 ? 2 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 'clamp(24px, 2.5vw, 36px)',
                      color: darkText,
                      fontWeight: '800',
                      marginBottom: '16px',
                      lineHeight: '1.2',
                    }}>
                      {product.name}
                    </h3>

                    <p style={{ color: darkMuted, fontSize: '15px', lineHeight: '1.8', fontWeight: '500', marginBottom: '32px' }}>
                      {product.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 16px', background: 'rgba(200,164,107,0.06)', border: `1px solid rgba(139,100,32,0.15)` }}>
                        <span style={{ color: goldDeep, fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: '100px', flexShrink: 0 }}>{t('preparation')}</span>
                        <span style={{ color: darkMuted, fontSize: '13px', lineHeight: '1.6' }}>{product.prep}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 16px', background: 'rgba(200,164,107,0.06)', border: `1px solid rgba(139,100,32,0.15)` }}>
                        <span style={{ color: goldDeep, fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: '100px', flexShrink: 0 }}>{t('ingredients')}</span>
                        <span style={{ color: darkMuted, fontSize: '13px', lineHeight: '1.6' }}>{product.ingredients}</span>
                      </div>
                    </div>

                    <Link href={getHref('/for-homes')} style={{
                      background: `linear-gradient(135deg, ${gold}, ${goldDark})`,
                      color: walnut,
                      fontWeight: '800',
                      fontSize: '12px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '16px 36px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      alignSelf: 'flex-start',
                      boxShadow: `0 4px 20px rgba(168,132,59,0.25)`,
                    }}>
                      {t('pickupCta')} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRESHNESS — DARK ── */}
      <section className="bread-section-pad-sm" style={{ backgroundColor: darkWood, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '600' }}>{t('freshGuarantee')}</div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 3vw, 44px)', color: ivory, fontWeight: '800', marginBottom: '20px' }}>
            {t('freshDesc')}
          </h2>
          <div className="bread-fresh-steps">
            {[
              { icon: '🔥', label: t('freshStep1') },
              { icon: '❄️', label: t('freshStep2') },
              { icon: '📍', label: t('freshStep3') },
              { icon: '✨', label: t('freshStep4') },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{step.icon}</div>
                <div style={{ color: beige, fontSize: '13px', fontWeight: '600', letterSpacing: '0.05em' }}>{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — LIGHT ── */}
      <section className="bread-section-pad-sm" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', color: darkText, fontWeight: '900', marginBottom: '16px' }}>
            {t('ctaTitle')}
          </h2>
          <p style={{ color: darkMuted, fontSize: '16px', lineHeight: '1.8', fontWeight: '500', marginBottom: '40px' }}>
            {t('ctaDesc')}
          </p>
          <div className="bread-cta-buttons">
            <Link href={getHref('/for-homes')} style={{
              background: `linear-gradient(135deg, ${gold}, ${goldDark})`,
              color: walnut,
              fontWeight: '800',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px 40px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: `0 4px 20px rgba(168,132,59,0.3)`,
            }}>
              {t('ctaHome')} <ArrowRight size={14} />
            </Link>
            <Link href={getHref('/for-businesses')} style={{
              background: 'transparent',
              color: darkText,
              border: `2px solid rgba(139,100,32,0.4)`,
              fontWeight: '700',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '14px 40px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              {t('ctaBusiness')} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}