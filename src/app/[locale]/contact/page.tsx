'use client';

import { useState, useMemo, useEffect, useRef, Suspense } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const gold = '#C8A46B';
const goldDark = '#A8843B';
const goldDeep = '#7A5C1E';
const ivory = '#F5F0E8';
const walnut = '#2B1D16';
const wood = '#3A261C';
const darkWood = '#1A110D';
const beige = '#D8C6AE';
const muted = '#9A8672';
const cream = '#F0E8DC';
const darkText = '#1A0A04';
const darkMuted = '#3D2410';

function ContactForm() {
  const t = useTranslations('contact');
  const tCollect = useTranslations('collect');
  const locale = useLocale();
  const searchParams = useSearchParams();

  // Build the initial form from URL params only (these exist on the server,
  // so they hydrate safely). localStorage is restored in the effect below.
  const initialForm = useMemo(() => {
    const subject = searchParams.get('subject');
    const message = searchParams.get('message');
    const pickupCity = searchParams.get('pickupCity');
    const pickupDate = searchParams.get('pickupDate');
    return {
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: subject || 'general',
      message: message || '',
      pickupCity: pickupCity || '',
      pickupDate: pickupDate || '',
    };
    // searchParams is stable for the life of the page render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);
  const hydrated = useRef(false);

  /* eslint-disable react-hooks/exhaustive-deps */
  // Restore a saved draft from localStorage once on mount. localStorage is an
  // external store the server render can't see, so syncing it in an effect is
  // the correct pattern here (not avoidable state duplication).
  useEffect(() => {
    hydrated.current = true;
    const hasParams = searchParams.get('subject') || searchParams.get('message')
      || searchParams.get('pickupCity') || searchParams.get('pickupDate');
    if (hasParams) return; // URL params win
    try {
      const saved = localStorage.getItem('tabuny-contact-form');
      if (saved) setForm((prev) => ({ ...prev, ...JSON.parse(saved) }));
    } catch {}
  }, []);

  // Persist on change, but only after mount so we don't overwrite the draft.
  useEffect(() => {
    if (!hydrated.current) return;
    try {
      localStorage.setItem('tabuny-contact-form', JSON.stringify(form));
    } catch {}
  }, [form]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const isPickup = form.subject === 'pickup';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', company: '', email: '', phone: '', subject: 'general', message: '', pickupCity: '', pickupDate: '' });
        try { localStorage.removeItem('tabuny-contact-form'); } catch {}
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: `1px solid rgba(200,164,107,0.25)`,
    color: ivory,
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    color: beige,
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    fontWeight: '600',
    marginBottom: '8px',
  };

  return (
    <div style={{ backgroundColor: walnut, minHeight: '100vh' }}>

      <style>{`
        :root { color-scheme: light only; }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 80px;
          align-items: start;
        }
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .contact-wrap {
          padding: 140px 64px 100px;
          max-width: 1440px;
          margin: 0 auto;
          box-sizing: border-box;
          width: 100%;
        }

        input:focus, textarea:focus, select:focus {
          border-color: rgba(200,164,107,0.7) !important;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(154,134,114,0.6);
        }
        select option {
          background-color: #2B1D16;
          color: #F5F0E8;
        }

        @media (max-width: 768px) {
          .contact-wrap {
            padding: 110px 24px 72px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .contact-form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── HERO STRIP ── */}
      <section style={{ position: 'relative', paddingTop: '120px', paddingBottom: '60px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/hero-family.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top', opacity: 0.15 }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, ${walnut} 0%, transparent 40%, ${walnut} 100%)` }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', padding: '0 64px', boxSizing: 'border-box' }}>
          <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
            {t('subtitle')}
            <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(42px, 5vw, 72px)', color: ivory, fontWeight: '900', lineHeight: '1.05', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            {t('title')}
          </h1>
          <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, ${gold}, ${goldDark})` }} />
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ paddingBottom: '120px' }}>
        <div className="contact-wrap">
          <div className="contact-grid">

            {/* ── LEFT: INFO ── */}
            <div>
              <p style={{ color: beige, fontSize: '16px', lineHeight: '1.85', marginBottom: '48px', fontWeight: '400' }}>
                {t('description')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '56px' }}>
                {[
                  { Icon: MapPin, value: 'Toggenburgstrasse 23\n9608 Ganterschwil' },
                  { Icon: Phone, value: '+41 76 398 55 55' },
                  { Icon: Mail, value: 'info@tabuny.ch' },
                ].map(({ Icon, value }, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '44px', height: '44px', border: `1px solid rgba(200,164,107,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'rgba(200,164,107,0.06)' }}>
                      <Icon size={18} color={gold} strokeWidth={1.5} />
                    </div>
                    <div style={{ color: beige, fontSize: '14px', lineHeight: '1.7', fontWeight: '400', whiteSpace: 'pre-line', paddingTop: '10px' }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative quote */}
              <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: '24px' }}>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '20px', color: gold, fontStyle: 'italic', fontWeight: '500', lineHeight: '1.6' }}>
                  &ldquo;Tradition, die man schmeckt.&rdquo;
                </p>
                <div style={{ color: muted, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '10px', fontWeight: '600' }}>
                  — TABUNY SCHWEIZ
                </div>
              </div>
            </div>

            {/* ── RIGHT: FORM ── */}
            <div style={{ backgroundColor: wood, border: `1px solid rgba(200,164,107,0.15)`, padding: '48px' }}>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: '64px', height: '64px', border: `2px solid ${gold}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <span style={{ fontSize: '28px' }}>✓</span>
                  </div>
                  <p style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>{t('success')}</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Name + Company */}
                  <div className="contact-form-grid">
                    <div>
                      <label style={labelStyle}>{t('name')}</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder={t('name')} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{t('company')}</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder={t('company')} style={inputStyle} />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="contact-form-grid">
                    <div>
                      <label style={labelStyle}>{t('email')}</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t('email')} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{t('phone')}</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder={t('phone')} style={inputStyle} />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={labelStyle}>{t('subject')}</label>
                    <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="general">{t('subjectOptions.general')}</option>
                      <option value="pickup">{t('subjectOptions.pickup')}</option>
                      <option value="order">{t('subjectOptions.order')}</option>
                      <option value="partnership">{t('subjectOptions.partnership')}</option>
                      <option value="feedback">{t('subjectOptions.feedback')}</option>
                      <option value="other">{t('subjectOptions.other')}</option>
                    </select>
                  </div>

                  {/* Pickup fields — only shown for pickup requests */}
                  {isPickup && (
                    <div className="contact-form-grid">
                      <div>
                        <label style={labelStyle}>{t('pickupCity')}</label>
                        <select name="pickupCity" value={form.pickupCity} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                          <option value="">{t('pickupCity')}</option>
                          <option value={tCollect('city1')}>{tCollect('city1')}</option>
                          <option value={tCollect('city2')}>{tCollect('city2')}</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>{t('pickupDate')}</label>
                        <input name="pickupDate" type="date" value={form.pickupDate} onChange={handleChange} style={inputStyle} />
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>{t('message')}</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t('message')}
                      rows={6}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#E07070', fontSize: '13px', fontWeight: '500' }}>{t('error')}</p>
                  )}

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      background: loading ? `rgba(200,164,107,0.5)` : `linear-gradient(135deg, ${gold}, ${goldDark})`,
                      color: walnut,
                      fontWeight: '800',
                      fontSize: '12px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '16px 40px',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      fontFamily: 'inherit',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                      justifyContent: 'center',
                      boxShadow: `0 4px 20px rgba(168,132,59,0.3)`,
                    }}
                  >
                    {loading ? '...' : <>{t('send')} <ArrowRight size={14} /></>}
                  </button>

                  {/* Disclaimer under the send button */}
                  <p style={{ color: muted, fontSize: '13px', lineHeight: '1.7', textAlign: 'center', marginTop: '4px' }}>
                    {t('disclaimer')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ backgroundColor: walnut, minHeight: '100vh' }} />}>
      <ContactForm />
    </Suspense>
  );
}