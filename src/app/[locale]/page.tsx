import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Wheat, Leaf, Flame, Heart, ArrowRight, ChevronDown } from 'lucide-react';

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations('hero');
  const tTrad = await getTranslations('tradition');
  const tAbout = await getTranslations('about');
  const tProd = await getTranslations('products');
  const tFresh = await getTranslations('freshness');
  const tSplit = await getTranslations('split');
  const tTrust = await getTranslations('trust');
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
    <div style={{ backgroundColor: walnut, overflowX: 'hidden', maxWidth: '100%' }}>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        :root { color-scheme: light only; }
        * { -webkit-tap-highlight-color: transparent; }

        html, body {
          overflow-x: hidden;
          max-width: 100%;
        }

        /* Hero */
        .hero-content {
          padding: 140px 64px 100px;
        }

        /* Section padding */
        .section-pad {
          padding: 100px 64px;
        }
        .section-pad-lg {
          padding: 120px 64px;
        }

        /* About image */
        .about-image {
          min-height: 560px;
        }

        /* Products grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        /* Split section: side by side on desktop */
        .split-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 640px;
        }
        .split-panel-content {
          padding: 52px;
        }

        /* Trust bar */
        .trust-bar {
          padding: 44px 64px;
        }
        .trust-item {
          padding: 16px 48px;
        }
        .trust-divider {
          border-right: 1px solid rgba(200,164,107,0.2);
        }
        .trust-divider-last {
          border-right: none;
        }

        /* Freshness grid */
        .freshness-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 80px;
          align-items: center;
        }
        .freshness-image {
          min-height: 480px;
        }

        /* Tradition pillars */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        /* About grid */
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 80px;
          align-items: center;
        }

        /* Steps grid */
        .steps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* Hero buttons */
        .hero-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-btn {
          padding: 16px 40px;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          /* Hero */
          .hero-content {
            padding: 120px 24px 80px;
          }

          /* General section padding */
          .section-pad {
            padding: 64px 24px;
          }
          .section-pad-lg {
            padding: 72px 24px;
          }

          /* Pillars: single column */
          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          /* About grid: stack */
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-image {
            min-height: 300px;
          }

          /* Products grid: single column */
          .products-grid {
            grid-template-columns: 1fr;
          }

          /* Freshness: stack */
          .freshness-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .freshness-image {
            min-height: 260px;
            position: relative !important;
          }

          /* Steps: single column */
          .steps-grid {
            grid-template-columns: 1fr;
          }

          /* Split: stack vertically */
          .split-section {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .split-panel {
            min-height: 420px;
          }
          .split-panel-content {
            padding: 32px 24px;
          }

          /* Trust bar: stack, no dividers */
          .trust-bar {
            padding: 40px 24px;
          }
          .trust-item {
            padding: 14px 16px;
            width: 100%;
          }
          .trust-divider {
            border-right: none;
            border-bottom: 1px solid rgba(200,164,107,0.2);
          }
          .trust-divider-last {
            border-bottom: none;
          }

          /* Hero buttons */
          .hero-buttons {
            flex-direction: column;
            gap: 12px;
          }
          .hero-btn {
            width: 100%;
            justify-content: center;
            padding: 16px 24px;
          }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/hero-family.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(105deg, rgba(43,29,22,0.88) 0%, rgba(43,29,22,0.65) 45%, rgba(43,29,22,0.25) 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(43,29,22,0.7) 0%, transparent 50%)` }} />

        <div className="hero-content" style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '580px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '28px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '1px', backgroundColor: gold, display: 'inline-block' }} />
              TABUNY SCHWEIZ
              <span style={{ width: '32px', height: '1px', backgroundColor: gold, display: 'inline-block' }} />
            </div>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(56px, 6vw, 92px)', color: ivory, fontWeight: '900', lineHeight: '1.0', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              TABUNY
            </h1>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(24px, 3vw, 38px)', color: ivory, fontWeight: '500', lineHeight: '1.3', marginBottom: '20px' }}>
              {t('title')}
            </h2>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, ${gold}, ${goldDark})`, marginBottom: '22px' }} />
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '24px', color: gold, fontStyle: 'italic', fontWeight: '500', marginBottom: '10px' }}>
              {t('subtitle')}
            </p>
            <p style={{ color: beige, fontSize: '16px', fontWeight: '400', marginBottom: '44px', lineHeight: '1.8' }}>
              {t('description')}
            </p>
            <div className="hero-buttons">
              <Link href={getHref('/for-homes')} className="hero-btn" style={{ background: `linear-gradient(135deg, ${gold}, ${goldDark})`, color: walnut, fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: `0 4px 24px rgba(200,164,107,0.35)`, boxSizing: 'border-box' }}>
                {t('ctaHome')} <ArrowRight size={14} />
              </Link>
              <Link href={getHref('/for-businesses')} className="hero-btn" style={{ background: 'transparent', color: ivory, border: `1px solid rgba(200,164,107,0.6)`, fontWeight: '500', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', boxSizing: 'border-box' }}>
                {t('ctaBusiness')} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: 0.6 }}>
          <div style={{ width: '1px', height: '48px', background: `linear-gradient(to bottom, transparent, ${gold})` }} />
          <ChevronDown size={14} color={gold} />
        </div>
      </section>

      {/* ── TRADITION PILLARS — LIGHT ── */}
      <section className="section-pad" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '700' }}>{tTrad('label')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 4vw, 58px)', color: goldLuxury, fontWeight: '800', letterSpacing: '-0.01em', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              {tTrad('title')}
            </h2>
            <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, transparent, ${goldDark}, transparent)`, margin: '20px auto 0' }} />
          </div>
          <div className="pillars-grid">
            {([
              { Icon: Wheat, title: tTrad('feature1Title'), desc: tTrad('feature1Desc') },
              { Icon: Leaf, title: tTrad('feature2Title'), desc: tTrad('feature2Desc') },
              { Icon: Flame, title: tTrad('feature3Title'), desc: tTrad('feature3Desc') },
              { Icon: Heart, title: tTrad('feature4Title'), desc: tTrad('feature4Desc') },
            ] as const).map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '40px 24px', border: `1px solid rgba(139,100,32,0.25)`, background: 'rgba(255,255,255,0.8)', boxShadow: '0 2px 20px rgba(43,29,22,0.08)' }}>
                <div style={{ width: '68px', height: '68px', border: `2px solid rgba(168,132,59,0.5)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px', background: `rgba(200,164,107,0.1)` }}>
                  <item.Icon size={26} color={goldDeep} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', color: darkText, fontWeight: '800', fontSize: '18px', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: darkMuted, fontSize: '14px', lineHeight: '1.7', fontWeight: '500' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BREAD CINEMATIC BREAK ── */}
      <section style={{ position: 'relative', height: '55vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/bread-closeup.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(43,29,22,0.55), rgba(43,29,22,0.65))` }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
          <div style={{ width: '48px', height: '2px', backgroundColor: gold }} />
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(28px, 4.5vw, 64px)', color: ivory, fontStyle: 'italic', textAlign: 'center', padding: '0 32px', textShadow: `0 2px 40px rgba(0,0,0,0.9)`, fontWeight: '600', letterSpacing: '0.02em' }}>
            &ldquo;Tradition, die man schmeckt.&rdquo;
          </p>
          <div style={{ width: '48px', height: '2px', backgroundColor: gold }} />
        </div>
      </section>

      {/* ── ABOUT — LIGHT ── */}
      <section className="section-pad-lg" style={{ backgroundColor: cream }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="about-grid">

            {/* Image */}
            <div className="about-image" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/bread-dough.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', border: `2px solid rgba(168,132,59,0.4)` }} />
              <div style={{ position: 'absolute', bottom: '-28px', right: '-28px', backgroundColor: walnut, border: `2px solid rgba(200,164,107,0.5)`, padding: '28px 32px' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', color: gold, fontSize: '48px', fontWeight: '900', lineHeight: '1' }}>CH</div>
                <div style={{ color: beige, fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: '8px', fontWeight: '600' }}>Swiss Quality</div>
              </div>
            </div>

            {/* Content */}
            <div style={{ paddingRight: '20px' }}>
              <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '700' }}>{tAbout('label')}</div>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(38px, 4vw, 62px)', color: darkText, fontWeight: '900', lineHeight: '1.05', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                {tAbout('title')}
              </h2>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(22px, 2.5vw, 30px)', color: goldLuxury, fontStyle: 'italic', fontWeight: '600', marginBottom: '28px' }}>
                {tAbout('subtitle')}
              </h3>
              <p style={{ color: darkMuted, lineHeight: '1.9', fontWeight: '500', marginBottom: '40px', fontSize: '15px' }}>
                {tAbout('description')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '44px' }}>
                {[
                  { title: tAbout('feature1Title'), desc: tAbout('feature1Desc') },
                  { title: tAbout('feature2Title'), desc: tAbout('feature2Desc') },
                  { title: tAbout('feature3Title'), desc: tAbout('feature3Desc') },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '18px 20px', border: `1px solid rgba(139,100,32,0.2)`, background: 'rgba(200,164,107,0.07)', boxShadow: '0 1px 8px rgba(43,29,22,0.06)' }}>
                    <div style={{ width: '4px', minHeight: '48px', background: `linear-gradient(to bottom, ${goldDark}, transparent)`, flexShrink: 0, marginTop: '2px', borderRadius: '2px' }} />
                    <div>
                      <h4 style={{ color: darkText, fontWeight: '800', fontSize: '14px', marginBottom: '5px' }}>{item.title}</h4>
                      <p style={{ color: darkMuted, fontSize: '13px', lineHeight: '1.7', fontWeight: '500' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href={getHref('/about')} style={{ background: `linear-gradient(135deg, ${gold}, ${goldDark})`, color: walnut, fontWeight: '800', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: `0 4px 20px rgba(168,132,59,0.3)` }}>
                {tAbout('cta')} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS — DARK ── */}
      <section className="section-pad-lg" style={{ backgroundColor: darkWood, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '600' }}>{tProd('label')}</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(38px, 4vw, 58px)', color: ivory, fontWeight: '800' }}>{tProd('title')}</h2>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '24px', color: gold, fontStyle: 'italic', marginTop: '10px', fontWeight: '500' }}>{tProd('subtitle')}</p>
            <div style={{ width: '56px', height: '2px', background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, margin: '20px auto 0' }} />
          </div>

          <div className="products-grid">
            {[
              { img: '/images/product-classic.jpg', name: tProd('product1Name'), desc: tProd('product1Desc'), weight: tProd('product1Weight'), href: '/bread' },
              { img: '/images/product-specialty.jpg', name: tProd('product2Name'), desc: tProd('product2Desc'), weight: tProd('product2Weight'), href: '/bread' },
              { img: '/images/product-gastro.jpg', name: tProd('product3Name'), desc: tProd('product3Desc'), weight: tProd('product3Weight'), href: '/for-businesses' },
            ].map((product, i) => (
              <div key={i} style={{ backgroundColor: wood, border: `1px solid rgba(200,164,107,0.2)`, overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(58,38,28,0.9), transparent 60%)` }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '20px', border: `1px solid rgba(200,164,107,0.6)`, padding: '5px 14px', fontSize: '10px', color: beige, letterSpacing: '0.15em', background: `rgba(26,17,13,0.85)`, fontWeight: '600' }}>
                    {product.weight}
                  </div>
                </div>
                <div style={{ padding: '28px 28px 32px' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '22px', color: ivory, fontWeight: '700', marginBottom: '10px' }}>{product.name}</h3>
                  <p style={{ color: muted, fontSize: '14px', lineHeight: '1.7', marginBottom: '22px', fontWeight: '400' }}>{product.desc}</p>
                  <Link href={getHref(product.href)} style={{ color: gold, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', borderBottom: `1px solid rgba(200,164,107,0.5)`, paddingBottom: '3px', fontWeight: '600' }}>
                    {tProd('learnMore')} <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRESHNESS — LIGHT ── */}
      <section className="section-pad" style={{ backgroundColor: cream, borderTop: `4px solid ${goldDark}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="freshness-grid">
            <div>
              <div style={{ color: goldDeep, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '700' }}>{tFresh('label')}</div>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(34px, 4vw, 54px)', color: darkText, fontWeight: '800', marginBottom: '20px' }}>{tFresh('title')}</h2>
              <div style={{ width: '56px', height: '3px', background: goldDark, marginBottom: '28px', borderRadius: '2px' }} />
              <p style={{ color: darkMuted, lineHeight: '1.9', fontWeight: '500', marginBottom: '52px', fontSize: '15px' }}>{tFresh('description')}</p>

              <div className="steps-grid">
                {[
                  { num: '01', label: tFresh('step1'), icon: '🔥' },
                  { num: '02', label: tFresh('step2'), icon: '❄️' },
                  { num: '03', label: tFresh('step3'), icon: '🚚' },
                  { num: '04', label: tFresh('step4'), icon: '✨' },
                ].map((step) => (
                  <div key={step.num} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '18px', border: `1px solid rgba(139,100,32,0.25)`, background: 'rgba(255,255,255,0.8)', boxShadow: '0 2px 12px rgba(43,29,22,0.07)' }}>
                    <div style={{ color: goldDark, fontFamily: '"Playfair Display", serif', fontSize: '22px', fontWeight: '800', lineHeight: '1', flexShrink: 0 }}>{step.num}</div>
                    <div>
                      <div style={{ fontSize: '20px', marginBottom: '5px' }}>{step.icon}</div>
                      <div style={{ color: darkText, fontSize: '13px', fontWeight: '700', lineHeight: '1.4' }}>{step.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="freshness-image" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/freshness-guarantee.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', border: `2px solid rgba(168,132,59,0.35)`, boxShadow: '0 20px 60px rgba(43,29,22,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOME / BUSINESS SPLIT — DARK ── */}
      <section className="split-section">
        <div className="split-panel" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/for-homes.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(43,29,22,0.97) 0%, rgba(43,29,22,0.5) 55%, rgba(43,29,22,0.15) 100%)` }} />
          <div className="split-panel-content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <div style={{ color: gold, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: '600' }}>— FOR HOMES</div>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 2.5vw, 44px)', color: ivory, fontWeight: '800', marginBottom: '16px' }}>{tSplit('homeTitle')}</h3>
            <p style={{ color: beige, fontSize: '15px', lineHeight: '1.75', marginBottom: '28px', maxWidth: '380px', fontWeight: '400' }}>{tSplit('homeDesc')}</p>
            <Link href={getHref('/for-homes')} style={{ background: `linear-gradient(135deg, ${gold}, ${goldDark})`, color: walnut, fontWeight: '800', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              {tSplit('homeCta')} <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div className="split-panel" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/for-businesses.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(26,17,13,0.98) 0%, rgba(26,17,13,0.6) 55%, rgba(26,17,13,0.15) 100%)` }} />
          <div className="split-panel-content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <div style={{ color: gold, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: '600' }}>— FOR BUSINESSES</div>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 2.5vw, 44px)', color: ivory, fontWeight: '800', marginBottom: '16px' }}>{tSplit('businessTitle')}</h3>
            <p style={{ color: beige, fontSize: '15px', lineHeight: '1.75', marginBottom: '28px', maxWidth: '380px', fontWeight: '400' }}>{tSplit('businessDesc')}</p>
            <Link href={getHref('/for-businesses')} style={{ background: 'transparent', color: ivory, border: `1px solid rgba(200,164,107,0.6)`, fontWeight: '500', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '13px 32px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              {tSplit('businessCta')} <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR — DARK ── */}
      <section className="trust-bar" style={{ backgroundColor: darkWood, borderTop: `1px solid rgba(200,164,107,0.2)` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {[
          { label: tTrust('item1Label'), sub: tTrust('item1Sub') },
          { label: tTrust('item2Label'), sub: tTrust('item2Sub') },
          { label: tTrust('item3Label'), sub: tTrust('item3Sub') },
          { label: tTrust('item4Label'), sub: tTrust('item4Sub') },
          { label: tTrust('item5Label'), sub: tTrust('item5Sub') },
        ].map((item, i, arr) => (
            <div
              key={i}
              className={`trust-item ${i < arr.length - 1 ? 'trust-divider' : 'trust-divider-last'}`}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontWeight: '700', fontSize: '14px', marginBottom: '4px' }}>{item.label}</div>
              <div style={{ color: muted, fontSize: '11px', letterSpacing: '0.08em', fontWeight: '500' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}