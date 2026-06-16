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

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('about');

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

        .about-hero-content { padding: 160px 64px 100px; }
        .about-section-pad { padding: 120px 64px; }
        .about-section-pad-sm { padding: 100px 64px; }
        .about-section-pad-xs { padding: 80px 64px; }
        .about-story-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 80px;
          align-items: center;
        }
        .about-story-image { min-height: 560px; position: relative; }
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .about-global-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0;
        }
        .about-global-item { padding: 20px 40px; }
        .about-global-divider { border-right: 1px solid rgba(200,164,107,0.15); }
        .about-global-divider-last { border-right: none; }

        @media (max-width: 768px) {
          .about-hero-content { padding: 120px 24px 72px; }
          .about-section-pad { padding: 64px 24px; }
          .about-section-pad-sm { padding: 56px 24px; }
          .about-section-pad-xs { padding: 48px 24px; }
          .about-story-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-story-image { min-height: 280px; }
          .about-values-grid { grid-template-columns: 1fr; }
          .about-global-item { padding: 16px 20px; width: 33%; }
          .about-global-divider { border-right: none; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/bread-dough.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, rgba(43,29,22,0.95) 0%, rgba(43,29,22,0.7) 60%, rgba(43,29,22,0.3) 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(43,29,22,0.8) 0%, transparent 60%)` }} />

        <div className="about-hero-content" style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
              {t('sectionLabel')}
              <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
            </div>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(48px, 6vw, 88px)', color: ivory, fontWeight: '900', lineHeight: '1.0', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              {t('heroTitle')}
            </h1>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, ${gold}, ${goldDark})`, marginBottom: '24px' }} />
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '22px', color: gold, fontStyle: 'italic', fontWeight: '500', marginBottom: '12px' }}>
              {t('heroSubtitle')}
            </p>
            <p style={{ color: beige, fontSize: '16px', fontWeight: '400', lineHeight: '1.8', maxWidth: '520px' }}>
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY SECTION — LIGHT ── */}
      <section className="about-section-pad" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="about-story-grid">

            <div>
              <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '700' }}>{t('sectionLabel')}</div>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 4vw, 56px)', color: darkText, fontWeight: '900', lineHeight: '1.05', marginBottom: '12px' }}>
                {t('title')}
              </h2>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '28px', color: goldLuxury, fontStyle: 'italic', fontWeight: '600', marginBottom: '32px' }}>
                {t('subtitle')}
              </h3>
              <p style={{ color: darkMuted, lineHeight: '1.9', fontWeight: '500', marginBottom: '24px', fontSize: '15px' }}>
                {t('storyText1')}
              </p>
              <p style={{ color: darkMuted, lineHeight: '1.9', fontWeight: '500', marginBottom: '40px', fontSize: '15px' }}>
                {t('storyText2')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {(['checkItem1', 'checkItem2', 'checkItem3', 'checkItem4'] as const).map((key, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: `linear-gradient(135deg, ${gold}, ${goldDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={13} color={walnut} strokeWidth={3} />
                    </div>
                    <span style={{ color: darkText, fontSize: '15px', fontWeight: '600' }}>{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-story-image">
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/bread-dough.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', border: `2px solid rgba(168,132,59,0.4)` }} />
              <div style={{ position: 'absolute', top: '24px', left: '-24px', backgroundColor: walnut, border: `2px solid rgba(200,164,107,0.5)`, padding: '24px 28px' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', color: gold, fontSize: '40px', fontWeight: '900', lineHeight: '1' }}>CH</div>
                <div style={{ color: beige, fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: '6px', fontWeight: '600' }}>{t('value6Title')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LARGE IMAGE BREAK ── */}
      <section style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/product-gastro.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(43,29,22,0.65)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
          <div style={{ width: '48px', height: '2px', backgroundColor: gold }} />
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(28px, 4vw, 56px)', color: ivory, fontStyle: 'italic', textAlign: 'center', padding: '0 32px', textShadow: '0 2px 40px rgba(0,0,0,0.9)', fontWeight: '600' }}>
            &ldquo;{t('quoteBreak')}&rdquo;
          </p>
          <div style={{ width: '48px', height: '2px', backgroundColor: gold }} />
        </div>
      </section>

      {/* ── VALUES — DARK ── */}
      <section className="about-section-pad" style={{ backgroundColor: darkWood, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '600' }}>{t('valuesLabel')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 4vw, 56px)', color: ivory, fontWeight: '800' }}>
              {t('valuesTitle')}
            </h2>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '22px', color: gold, fontStyle: 'italic', marginTop: '10px', fontWeight: '500' }}>
              {t('valuesSubtitle')}
            </p>
            <div style={{ width: '56px', height: '2px', background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <div className="about-values-grid">
            {([
              { num: '01', titleKey: 'value1Title', descKey: 'value1Desc', icon: '🌾' },
              { num: '02', titleKey: 'value2Title', descKey: 'value2Desc', icon: '⏳' },
              { num: '03', titleKey: 'value3Title', descKey: 'value3Desc', icon: '🌱' },
              { num: '04', titleKey: 'value4Title', descKey: 'value4Desc', icon: '🔥' },
              { num: '05', titleKey: 'value5Title', descKey: 'value5Desc', icon: '🤝' },
              { num: '06', titleKey: 'value6Title', descKey: 'value6Desc', icon: '🇨🇭' },
            ] as const).map((item, i) => (
              <div key={i} style={{ backgroundColor: wood, border: `1px solid rgba(200,164,107,0.15)`, padding: '36px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ color: `rgba(200,164,107,0.35)`, fontFamily: '"Playfair Display", serif', fontSize: '36px', fontWeight: '900', lineHeight: '1' }}>{item.num}</div>
                  <div style={{ fontSize: '28px' }}>{item.icon}</div>
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontWeight: '700', fontSize: '18px', marginBottom: '12px', lineHeight: '1.3' }}>{t(item.titleKey)}</h3>
                <p style={{ color: muted, fontSize: '14px', lineHeight: '1.7', fontWeight: '400' }}>{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMISE — LIGHT ── */}
      <section className="about-section-pad-sm" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '700' }}>{t('promiseLabel')}</div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', color: darkText, fontWeight: '900', lineHeight: '1.15', marginBottom: '24px' }}>
            {t('promise')}
          </h2>
          <div style={{ width: '56px', height: '3px', background: goldDark, margin: '0 auto 32px', borderRadius: '2px' }} />
          <p style={{ color: darkMuted, fontSize: '17px', lineHeight: '1.9', fontWeight: '500', marginBottom: '16px' }}>
            {t('promiseText')}
          </p>
          <p style={{ color: darkMuted, fontSize: '15px', lineHeight: '1.9', fontWeight: '400', marginBottom: '48px' }}>
            {t('promiseText2')}
          </p>
          <Link href={getHref('/contact')} style={{ background: `linear-gradient(135deg, ${gold}, ${goldDark})`, color: walnut, fontWeight: '800', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 48px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: `0 4px 20px rgba(168,132,59,0.3)` }}>
            {t('contactCta')} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── GLOBAL PRESENCE — DARK ── */}
      <section className="about-section-pad-xs" style={{ backgroundColor: walnut, borderTop: `1px solid rgba(200,164,107,0.2)` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '600' }}>{t('globalTitle')}</div>
          </div>
          <div className="about-global-grid">
            {[
              { country: '🇨🇭', name: 'Schweiz', status: '★' },
              { country: '🇩🇪', name: 'Deutschland', status: '✓' },
              { country: '🇫🇷', name: 'Frankreich', status: '✓' },
              { country: '🇱🇺', name: 'Luxemburg', status: '✓' },
              { country: '🇳🇱', name: 'Niederlande', status: '✓' },
              { country: '🇦🇹', name: 'Österreich', status: '✓' },
            ].map((item, i, arr) => (
              <div
                key={i}
                className={`about-global-item ${i < arr.length - 1 ? 'about-global-divider' : 'about-global-divider-last'}`}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.country}</div>
                <div style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>{item.name}</div>
                <div style={{ color: gold, fontSize: '14px', fontWeight: '600' }}>{item.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}