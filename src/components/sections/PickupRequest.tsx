'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const gold = '#C8A46B';
const goldDark = '#A8843B';
const ivory = '#F5F0E8';
const walnut = '#2B1D16';
const wood = '#3A261C';
const beige = '#D8C6AE';
const muted = '#9A8672';
const darkMuted = '#3D2410';

export default function PickupRequest() {
  const t = useTranslations('pickup');
  const tProd = useTranslations('products');
  const tCollect = useTranslations('collect');
  const locale = useLocale();
  const router = useRouter();

  const products = [
    { id: 'classic', name: tProd('product1Name') },
    { id: 'specialty', name: tProd('product2Name') },
  ];

  const [qty, setQty] = useState<Record<string, number>>({ classic: 0, specialty: 0 });
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const setProductQty = (id: string, value: number) => {
    setQty((prev) => ({ ...prev, [id]: Math.max(0, value) }));
  };

  const totalPacks = Object.values(qty).reduce((a, b) => a + b, 0);

  const handleContinue = () => {
    // Build a human-readable summary for the message box
    const lines: string[] = [];
    lines.push(t('summaryHeading'));
    products.forEach((p) => {
      if (qty[p.id] > 0) {
        lines.push(`- ${p.name}: ${qty[p.id]} × ${t('packUnit')}`);
      }
    });
    if (city) lines.push(`${t('cityLabel')}: ${city}`);
    if (date) lines.push(`${t('dateLabel')}: ${date}`);
    const summary = lines.join('\n');

    const params = new URLSearchParams();
    params.set('subject', 'pickup');
    params.set('message', summary);
    if (city) params.set('pickupCity', city);
    if (date) params.set('pickupDate', date);
    params.set('classic', String(qty.classic));
    params.set('specialty', String(qty.specialty));

    router.push(`/${locale}/contact?${params.toString()}`);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: `1px solid rgba(200,164,107,0.25)`,
    color: ivory,
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box' as const,
  };

  const labelStyle = {
    display: 'block',
    color: beige,
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    fontWeight: 700,
    marginBottom: '8px',
  };

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(22px, 2.4vw, 30px)', color: '#8B6420', fontWeight: 800 }}>{t('title')}</h3>
        <p style={{ color: darkMuted, fontSize: '14px', lineHeight: '1.7', maxWidth: '520px', margin: '10px auto 0' }}>{t('desc')}</p>
      </div>

      <div style={{ backgroundColor: wood, border: `1px solid rgba(200,164,107,0.18)`, padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>

        {/* Product quantity steppers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
          {products.map((p) => (
            <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '16px 20px', background: 'rgba(200,164,107,0.06)', border: `1px solid rgba(200,164,107,0.15)` }}>
              <div>
                <div style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontSize: '17px', fontWeight: 700 }}>{p.name}</div>
                <div style={{ color: muted, fontSize: '12px', marginTop: '2px' }}>{t('packUnit')}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  type="button"
                  aria-label="decrease"
                  onClick={() => setProductQty(p.id, qty[p.id] - 1)}
                  style={{ width: '34px', height: '34px', border: `1px solid rgba(200,164,107,0.35)`, background: 'transparent', color: gold, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Minus size={15} />
                </button>
                <span style={{ color: ivory, fontWeight: 800, fontSize: '17px', minWidth: '28px', textAlign: 'center' }}>{qty[p.id]}</span>
                <button
                  type="button"
                  aria-label="increase"
                  onClick={() => setProductQty(p.id, qty[p.id] + 1)}
                  style={{ width: '34px', height: '34px', border: `1px solid rgba(200,164,107,0.35)`, background: 'transparent', color: gold, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* City + Date */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }} className="pickup-fields-grid">
          <div>
            <label style={labelStyle}>{t('cityLabel')}</label>
            <select className="pickup-card-input" value={city} onChange={(e) => setCity(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
              <option value="">{t('cityPlaceholder')}</option>
              <option value={tCollect('city1')}>{tCollect('city1')}</option>
              <option value={tCollect('city2')}>{tCollect('city2')}</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>{t('dateLabel')}</label>
            <input className="pickup-card-input" type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} />
          </div>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          disabled={totalPacks === 0}
          style={{
            width: '100%',
            background: totalPacks === 0 ? 'rgba(200,164,107,0.4)' : `linear-gradient(135deg, ${gold}, ${goldDark})`,
            color: walnut,
            fontWeight: 800,
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '16px 40px',
            border: 'none',
            cursor: totalPacks === 0 ? 'not-allowed' : 'pointer',
            fontFamily: 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: totalPacks === 0 ? 'none' : `0 4px 20px rgba(168,132,59,0.3)`,
          }}
        >
          {t('continue')} <ArrowRight size={14} />
        </button>

        <p style={{ color: muted, fontSize: '12px', lineHeight: '1.7', textAlign: 'center', marginTop: '16px' }}>{t('note')}</p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .pickup-fields-grid { grid-template-columns: 1fr !important; }
        }
        .pickup-card-input:focus { border-color: rgba(200,164,107,0.7) !important; }
        .pickup-card-input::placeholder { color: rgba(154,134,114,0.7); }
        .pickup-card-input option { background-color: #2B1D16; color: #F5F0E8; }
        .pickup-card-input[type="date"] { color-scheme: dark; }
      `}</style>
    </div>
  );
}