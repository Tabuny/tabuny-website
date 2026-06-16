import GastroInquiryCard from '@/components/sections/GastroInquiryCard';
import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';


export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'it' },
  ];
}

export default async function ForBusinessesPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('forBusinesses');
  const tProd = await getTranslations('products');

  const getHref = (path: string) => `/${locale}${path}`;

  const gold = '#C8A46B';
  const goldDark = '#A8843B';
  const goldDeep = '#7A5C1E';
  const goldLuxury = '#8B6420';
  const ivory = '#F5F0E8';
  const walnut = '#2B1D16';
  const wood = '#3A261C';
  const darkWood = '#1A110D';
  const beige = '#D8C6AE';
  const muted = '#9A8672';
  const cream = '#F0E8DC';
  const darkText = '#1A0A04';
  const darkMuted = '#3D2410';

  return (
    <div style={{ backgroundColor: walnut }}>

      <style>{`
        :root { color-scheme: light only; }

        .fb-hero { padding: 160px 64px 100px; }
        .fb-section-pad { padding: 100px 64px; }
        .fb-section-pad-sm { padding: 72px 64px; }
        .fb-features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .fb-split { display: grid; grid-template-columns: 1fr 1fr; min-height: 560px; }
        .fb-split-image { position: relative; overflow: hidden; }
        .fb-split-content { padding: 80px 64px; display: flex; flex-direction: column; justify-content: center; }

        @media (max-width: 768px) {
          .fb-hero { padding: 120px 24px 72px; }
          .fb-section-pad { padding: 64px 24px; }
          .fb-section-pad-sm { padding: 48px 24px; }
          .fb-features-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .fb-split { grid-template-columns: 1fr; }
          .fb-split-image { min-height: 300px; }
          .fb-split-content { padding: 48px 24px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/for-businesses.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,17,13,0.97) 0%, rgba(26,17,13,0.8) 55%, rgba(26,17,13,0.2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,17,13,0.8) 0%, transparent 60%)' }} />

        <div className="fb-hero" style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
              FOR BUSINESSES
              <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
            </div>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(42px, 5vw, 76px)', color: ivory, fontWeight: '900', lineHeight: '1.05', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              {t('hero')}
            </h1>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, ${gold}, ${goldDark})`, marginBottom: '24px' }} />
            <p style={{ color: beige, fontSize: '18px', lineHeight: '1.8', fontWeight: '400', marginBottom: '44px' }}>
              {t('heroDesc')}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#inquiry" style={{
                background: `linear-gradient(135deg, ${gold}, ${goldDark})`,
                color: walnut,
                fontWeight: '800',
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '18px 48px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: `0 4px 24px rgba(200,164,107,0.4)`,
              }}>
                {t('sendInquiry')} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES — LIGHT ── */}
      <section className="fb-section-pad" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '700' }}>FOR BUSINESSES</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', color: goldLuxury, fontWeight: '800' }}>
              {t('hero')}
            </h2>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, transparent, ${goldDark}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <div className="fb-features-grid">
            {[
              { icon: '🏆', label: t('feature1') },
              { icon: '🚚', label: t('feature2') },
              { icon: '📦', label: t('feature3') },
              { icon: '🇨🇭', label: t('feature4') },
            ].map((f, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '40px 24px',
                border: `1px solid rgba(139,100,32,0.2)`,
                background: 'rgba(255,255,255,0.9)',
                boxShadow: '0 2px 20px rgba(43,29,22,0.07)',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', color: darkText, fontWeight: '800', fontSize: '16px', lineHeight: '1.4' }}>{f.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT IMAGE + BENEFITS — DARK ── */}
      <section style={{ borderTop: `4px solid ${goldDark}` }}>
        <div className="fb-split">
          <div className="fb-split-image">
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/product-gastro.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,17,13,0.3)' }} />
          </div>
          <div className="fb-split-content" style={{ backgroundColor: darkWood }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '600' }}>— FOR BUSINESSES</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 3vw, 44px)', color: ivory, fontWeight: '800', marginBottom: '32px', lineHeight: '1.2' }}>
              {t('heroDesc')}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {[t('feature1'), t('feature2'), t('feature3'), t('feature4')].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: `linear-gradient(135deg, ${gold}, ${goldDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={13} color={walnut} strokeWidth={3} />
                  </div>
                  <span style={{ color: beige, fontSize: '15px', fontWeight: '500' }}>{f}</span>
                </div>
              ))}
            </div>
            <a href="#inquiry" style={{
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
              alignSelf: 'flex-start',
              boxShadow: `0 4px 20px rgba(168,132,59,0.3)`,
            }}>
              {t('sendInquiry')} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURED GASTRO PRODUCT — LIGHT ── */}
      <section className="fb-section-pad" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '700' }}>{t('gastroLabel')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', color: goldLuxury, fontWeight: '800' }}>{tProd('product3Name')}</h2>
            <p style={{ color: darkMuted, fontSize: '16px', lineHeight: '1.8', maxWidth: '640px', margin: '14px auto 0' }}>{t('gastroIntro')}</p>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, transparent, ${goldDark}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <GastroInquiryCard />
        </div>
      </section>

      {/* ── INQUIRY — DARK ── */}
      <section id="inquiry" className="fb-section-pad" style={{ backgroundColor: darkWood, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '600' }}>{t('inquiryTitle')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 3vw, 44px)', color: ivory, fontWeight: '800' }}>
              {t('inquiryTitle')}
            </h2>
            <p style={{ color: muted, fontSize: '15px', marginTop: '12px' }}>{t('inquiryDesc')}</p>
            <div style={{ width: '56px', height: '2px', background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <div style={{ backgroundColor: wood, border: `1px solid rgba(200,164,107,0.15)`, padding: '48px' }}>
            <p style={{ color: beige, fontSize: '15px', lineHeight: '1.8', marginBottom: '32px', textAlign: 'center' }}>
              {t('inquiryDesc')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <Link href={getHref('/contact')} style={{
                background: `linear-gradient(135deg, ${gold}, ${goldDark})`,
                color: walnut,
                fontWeight: '800',
                fontSize: '13px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '18px 56px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: `0 4px 24px rgba(168,132,59,0.35)`,
              }}>
                {t('sendInquiry')} <ArrowRight size={16} />
              </Link>
              <div style={{ display: 'flex', gap: '32px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="mailto:info@tabuny.ch" style={{ color: muted, fontSize: '13px', textDecoration: 'none', letterSpacing: '0.05em' }}>
                  info@tabuny.ch
                </a>
                <a href="tel:+41763985555" style={{ color: muted, fontSize: '13px', textDecoration: 'none', letterSpacing: '0.05em' }}>
                  +41 76 398 55 55
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR — LIGHT ── */}
      <section className="fb-section-pad-sm" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0' }}>
          {[
            { num: '100%', label: t('feature1') },
            { num: '24h', label: t('inquiryDesc') },
            { num: 'CH', label: t('feature4') },
            { num: '★★★★★', label: t('feature2') },
          ].map((item, i, arr) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '24px 48px',
              borderRight: i < arr.length - 1 ? `1px solid rgba(139,100,32,0.2)` : 'none',
            }}>
              <div style={{ fontFamily: '"Playfair Display", serif', color: goldLuxury, fontSize: '28px', fontWeight: '900', marginBottom: '6px' }}>{item.num}</div>
              <div style={{ color: darkMuted, fontSize: '12px', letterSpacing: '0.08em', fontWeight: '600', maxWidth: '160px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}