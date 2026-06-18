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

// Pricing
const CLASSIC_PRICE = 5.95;
const OFFER_PRICE = 5.50;
const OFFER_MIN = 5; // the bulk offer starts at 5 packs

const fmt = (n: number) => `CHF ${n.toFixed(2)}`;

export default function PickupRequest() {
  const t = useTranslations('pickup');
  const tProd = useTranslations('products');
  const tCollect = useTranslations('collect');
  const locale = useLocale();
  const router = useRouter();

  const [classic, setClassic] = useState(0);
  const [offer, setOffer] = useState(0);
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const classicTotal = classic * CLASSIC_PRICE;
  const offerTotal = offer * OFFER_PRICE;
  const grandTotal = classicTotal + offerTotal;
  const totalPacks = classic + offer;

  const incOffer = () => setOffer((o) => (o === 0 ? OFFER_MIN : o + 1));
  const decOffer = () => setOffer((o) => (o <= OFFER_MIN ? 0 : o - 1));

  const handleContinue = () => {
    const lines: string[] = [t('summaryHeading')];
    if (classic > 0) {
      lines.push(`- ${tProd('product1Name')}: ${classic} × ${t('packUnit')} (${fmt(CLASSIC_PRICE)}/Pkg.) = ${fmt(classicTotal)}`);
    }
    if (offer > 0) {
      lines.push(`- ${t('offerName')}: ${offer} × ${t('packUnit')} (${fmt(OFFER_PRICE)}/Pkg.) = ${fmt(offerTotal)}`);
    }
    lines.push(`${t('totalLabel')}: ${fmt(grandTotal)}`);
    if (city) lines.push(`${t('cityLabel')}: ${city}`);
    if (date) lines.push(`${t('dateLabel')}: ${date}`);
    const summary = lines.join('\n');

    const params = new URLSearchParams();
    params.set('subject', 'pickup');
    params.set('message', summary);
    if (city) params.set('pickupCity', city);
    if (date) params.set('pickupDate', date);

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

  const stepperBtn = {
    width: '34px',
    height: '34px',
    border: `1px solid rgba(200,164,107,0.35)`,
    background: 'transparent',
    color: gold,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(22px, 2.4vw, 30px)', color: '#8B6420', fontWeight: 800 }}>{t('title')}</h3>
        <p style={{ color: darkMuted, fontSize: '14px', lineHeight: '1.7', maxWidth: '520px', margin: '10px auto 0' }}>{t('desc')}</p>
      </div>

      <div style={{ backgroundColor: wood, border: `1px solid rgba(200,164,107,0.18)`, padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>

        {/* CLASSIC ROW */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '16px 20px', background: 'rgba(200,164,107,0.06)', border: `1px solid rgba(200,164,107,0.15)`, marginBottom: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontSize: '17px', fontWeight: 700 }}>{tProd('product1Name')}</div>
            <div style={{ color: muted, fontSize: '12px', marginTop: '2px' }}>{t('packUnit')} &middot; {fmt(CLASSIC_PRICE)}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: gold, fontSize: '13px', fontWeight: 700, minWidth: '78px', textAlign: 'right' }}>{classic > 0 ? fmt(classicTotal) : ''}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button type="button" aria-label="decrease" onClick={() => setClassic((q) => Math.max(0, q - 1))} style={stepperBtn}><Minus size={15} /></button>
              <span style={{ color: ivory, fontWeight: 800, fontSize: '17px', minWidth: '28px', textAlign: 'center' }}>{classic}</span>
              <button type="button" aria-label="increase" onClick={() => setClassic((q) => q + 1)} style={stepperBtn}><Plus size={15} /></button>
            </div>
          </div>
        </div>

        {/* SPECIAL OFFER ROW */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '16px 20px', background: 'rgba(200,164,107,0.1)', border: `1px solid rgba(200,164,107,0.3)`, marginBottom: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontSize: '17px', fontWeight: 700 }}>{t('offerName')}</div>
            <div style={{ color: gold, fontSize: '12px', marginTop: '2px', fontWeight: 600 }}>{t('offerText')}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: gold, fontSize: '13px', fontWeight: 700, minWidth: '78px', textAlign: 'right' }}>{offer > 0 ? fmt(offerTotal) : ''}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button type="button" aria-label="decrease" onClick={decOffer} style={stepperBtn}><Minus size={15} /></button>
              <span style={{ color: ivory, fontWeight: 800, fontSize: '17px', minWidth: '28px', textAlign: 'center' }}>{offer}</span>
              <button type="button" aria-label="increase" onClick={incOffer} style={stepperBtn}><Plus size={15} /></button>
            </div>
          </div>
        </div>
        <p style={{ color: muted, fontSize: '11px', marginBottom: '28px', paddingLeft: '4px' }}>{t('offerHint')}</p>

        {/* LIVE TOTAL */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'rgba(200,164,107,0.12)', border: `1px solid rgba(200,164,107,0.35)`, marginBottom: '28px' }}>
          <span style={{ color: beige, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>{t('totalLabel')}</span>
          <span style={{ color: gold, fontSize: '22px', fontWeight: 800, fontFamily: '"Playfair Display", serif' }}>{fmt(grandTotal)}</span>
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
        input.pickup-card-input { color-scheme: dark; }
      `}</style>
    </div>
  );
}