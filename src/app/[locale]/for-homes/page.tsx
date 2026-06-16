import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Check, Flame, Snowflake, MapPin, Star, Mail, Phone } from 'lucide-react';
import PickupRequest from '@/components/sections/PickupRequest';

export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'it' },
  ];
}

export default async function ForHomesPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('forHomes');
  const tProd = await getTranslations('products');
  const tFresh = await getTranslations('freshness');
  const tCollect = await getTranslations('collect');

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

        .fh-hero { padding: 160px 64px 100px; }
        .fh-section-pad { padding: 100px 64px; }
        .fh-section-pad-sm { padding: 72px 64px; }
        .fh-benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .fh-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .fh-products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .fh-collect-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .fh-split { display: grid; grid-template-columns: 1fr 1fr; gap: 0; min-height: 500px; }
        .fh-split-image { min-height: 500px; }

        @media (max-width: 768px) {
          .fh-hero { padding: 120px 24px 72px; }
          .fh-section-pad { padding: 64px 24px; }
          .fh-section-pad-sm { padding: 48px 24px; }
          .fh-benefits-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .fh-steps-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .fh-products-grid { grid-template-columns: 1fr; }
          .fh-collect-grid { grid-template-columns: 1fr; }
          .fh-split { grid-template-columns: 1fr; }
          .fh-split-image { min-height: 300px; order: 1; }
          .fh-split-content { order: 2; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/for-homes.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(43,29,22,0.95) 0%, rgba(43,29,22,0.75) 55%, rgba(43,29,22,0.2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,29,22,0.8) 0%, transparent 60%)' }} />

        <div className="fh-hero" style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
              {t('label')}
              <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
            </div>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(42px, 5vw, 76px)', color: ivory, fontWeight: '900', lineHeight: '1.05', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              {t('hero')}
            </h1>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, ${gold}, ${goldDark})`, marginBottom: '24px' }} />
            <p style={{ color: beige, fontSize: '18px', lineHeight: '1.8', fontWeight: '400', marginBottom: '44px' }}>
              {t('heroDesc')}
            </p>
            <Link href={getHref('/contact')} style={{
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
              {t('cta')} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENEFITS — LIGHT ── */}
      <section className="fh-section-pad" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '700' }}>{t('label')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', color: goldLuxury, fontWeight: '800' }}>
              {t('hero')}
            </h2>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, transparent, ${goldDark}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <div className="fh-benefits-grid">
            {[
              { icon: '🌾', label: t('benefit1') },
              { icon: '🌿', label: t('benefit2') },
              { icon: '❄️', label: t('benefit3') },
              { icon: '📍', label: t('benefit4') },
            ].map((b, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '40px 24px',
                border: `1px solid rgba(139,100,32,0.2)`,
                background: 'rgba(255,255,255,0.9)',
                boxShadow: '0 2px 20px rgba(43,29,22,0.07)',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{b.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', color: darkText, fontWeight: '800', fontSize: '16px', lineHeight: '1.4' }}>{b.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — DARK ── */}
      <section className="fh-section-pad" style={{ backgroundColor: darkWood, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '600' }}>{tFresh('label')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', color: ivory, fontWeight: '800' }}>
              {tFresh('title')}
            </h2>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', color: gold, fontSize: '20px', fontStyle: 'italic', marginTop: '10px' }}>
              {tFresh('description')}
            </p>
            <div style={{ width: '56px', height: '2px', background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <div className="fh-steps-grid">
            {[
              { num: '01', icon: <Flame size={28} color={gold} strokeWidth={1.5} />, label: tFresh('step1') },
              { num: '02', icon: <Snowflake size={28} color={gold} strokeWidth={1.5} />, label: tFresh('step2') },
              { num: '03', icon: <MapPin size={28} color={gold} strokeWidth={1.5} />, label: t('stepCollect') },
              { num: '04', icon: <Star size={28} color={gold} strokeWidth={1.5} />, label: tFresh('step4') },
            ].map((step, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '40px 24px',
                backgroundColor: wood,
                border: `1px solid rgba(200,164,107,0.15)`,
                position: 'relative',
              }}>
                <div style={{ color: 'rgba(200,164,107,0.2)', fontFamily: '"Playfair Display", serif', fontSize: '48px', fontWeight: '900', lineHeight: '1', marginBottom: '16px' }}>{step.num}</div>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{step.icon}</div>
                <p style={{ color: beige, fontSize: '14px', fontWeight: '600', lineHeight: '1.5' }}>{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECT POINTS — LIGHT ── */}
      <section className="fh-section-pad" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '700' }}>{tCollect('label')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', color: goldLuxury, fontWeight: '800' }}>{tCollect('title')}</h2>
            <p style={{ color: darkMuted, fontSize: '16px', lineHeight: '1.8', maxWidth: '640px', margin: '16px auto 0' }}>{tCollect('desc')}</p>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, transparent, ${goldDark}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <div className="fh-collect-grid">
            {[tCollect('city1'), tCollect('city2')].map((city, i) => (
              <div key={i} style={{
                backgroundColor: 'white',
                border: `1px solid rgba(139,100,32,0.2)`,
                padding: '40px 36px',
                boxShadow: '0 4px 24px rgba(43,29,22,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `linear-gradient(135deg, ${gold}, ${goldDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} color={walnut} strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', color: darkText, fontSize: '24px', fontWeight: '800' }}>{city}</h3>
                  <p style={{ color: darkMuted, fontSize: '14px', marginTop: '4px' }}>{tCollect('cityNote')}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: darkMuted, fontSize: '15px', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 36px' }}>{tCollect('arrangeNote')}</p>
            <PickupRequest />
            <div style={{ display: 'flex', gap: '28px', marginTop: '36px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="mailto:info@tabuny.ch" style={{ color: goldDeep, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                <Mail size={16} /> info@tabuny.ch
              </a>
              <a href="tel:+41763985555" style={{ color: goldDeep, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                <Phone size={16} /> +41 76 398 55 55
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS — LIGHT ── */}
      <section className="fh-section-pad" style={{ backgroundColor: walnut, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '700' }}>{tProd('label')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', color: ivory, fontWeight: '800' }}>{tProd('title')}</h2>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <div className="fh-products-grid">
            {[
              { img: '/images/product-classic.jpg', name: tProd('product1Name'), desc: tProd('product1Desc'), weight: tProd('product1Weight') },
              { img: '/images/product-specialty.jpg', name: tProd('product2Name'), desc: tProd('product2Desc'), weight: tProd('product2Weight') },
            ].map((product, i) => (
              <div key={i} style={{ backgroundColor: wood, border: `1px solid rgba(200,164,107,0.18)`, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,17,13,0.7), transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', border: `1px solid rgba(200,164,107,0.6)`, padding: '4px 12px', fontSize: '10px', color: ivory, letterSpacing: '0.15em', background: 'rgba(26,17,13,0.85)', fontWeight: '600' }}>
                    {product.weight}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>{product.name}</h3>
                  <p style={{ color: beige, fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>{product.desc}</p>
                  <Link href={getHref('/bread')} style={{ color: gold, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '700', borderBottom: `1px solid rgba(200,164,107,0.4)`, paddingBottom: '2px' }}>
                    {tProd('learnMore')} <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}

            {/* Collect + contact CTA card */}
            <div style={{
              backgroundColor: darkWood,
              border: `1px solid rgba(200,164,107,0.3)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 32px',
              textAlign: 'center',
              gap: '20px',
            }}>
              <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} />
              <h3 style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontSize: '24px', fontWeight: '800' }}>
                {tCollect('title')}
              </h3>
              <p style={{ color: muted, fontSize: '14px', lineHeight: '1.7' }}>
                {tCollect('cardDesc')}
              </p>
              <Link href={getHref('/contact')} style={{
                background: `linear-gradient(135deg, ${gold}, ${goldDark})`,
                color: walnut,
                fontWeight: '800',
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                {t('cta')} <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE + TEXT SPLIT — DARK ── */}
      <section style={{ borderTop: `4px solid ${goldDark}` }}>
        <div className="fh-split">
          <div className="fh-split-image" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/hero-family.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(43,29,22,0.3)' }} />
          </div>
          <div className="fh-split-content" style={{ backgroundColor: darkWood, padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '600' }}>— {t('label')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 3vw, 44px)', color: ivory, fontWeight: '800', marginBottom: '24px', lineHeight: '1.2' }}>
              {t('hero')}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {[t('benefit1'), t('benefit2'), t('benefit3'), t('benefit4')].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: `linear-gradient(135deg, ${gold}, ${goldDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={13} color={walnut} strokeWidth={3} />
                  </div>
                  <span style={{ color: beige, fontSize: '15px', fontWeight: '500' }}>{b}</span>
                </div>
              ))}
            </div>
            <Link href={getHref('/contact')} style={{
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
              {t('cta')} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — LIGHT ── */}
      <section className="fh-section-pad-sm" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}`, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 3vw, 44px)', color: darkText, fontWeight: '900', marginBottom: '16px' }}>
            {tCollect('finalTitle')}
          </h2>
          <p style={{ color: darkMuted, fontSize: '16px', lineHeight: '1.8', marginBottom: '36px' }}>
            {tCollect('finalDesc')}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={getHref('/contact')} style={{
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
              {tCollect('arrangeCta')} <ArrowRight size={14} />
            </Link>
            <Link href={getHref('/bread')} style={{
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
              {tProd('learnMore')} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}