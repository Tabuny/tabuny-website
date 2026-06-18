'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Plus, Minus, Package, ArrowRight } from 'lucide-react';

const gold = '#C8A46B';
const goldDark = '#A8843B';
const ivory = '#F5F0E8';
const walnut = '#2B1D16';
const wood = '#3A261C';
const beige = '#D8C6AE';
const muted = '#9A8672';

export default function GastroInquiryCard() {
  const t = useTranslations('products');
  const tB = useTranslations('forBusinesses');
  const locale = useLocale();
  const router = useRouter();

  const [kartons, setKartons] = useState(1);

  const product = {
    img: '/images/product-gastro.jpg',
    name: t('product3Name'),
    desc: t('product3Desc'),
  };

  const handleInquire = () => {
    // Carry the B2B order into the contact form, same pattern as the pickup picker.
    const lines = [
      tB('emailHeading'),
      `${t('product3Name')}: ${kartons} ${tB('quantityLabel')}`,
      `${tB('packagingLabel')}: ${tB('kartonUnit')}`,
    ];
    const summary = lines.join('\n');

    const params = new URLSearchParams();
    params.set('subject', 'order');
    params.set('message', summary);
    params.set('kartons', String(kartons));

    router.push(`/${locale}/contact?${params.toString()}`);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0',
      border: `1px solid rgba(200,164,107,0.3)`,
      overflow: 'hidden',
      boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
      backgroundColor: wood,
    }} className="gastro-card">
      {/* Image */}
      <div style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }} className="gastro-card-image">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(58,38,28,0.4))' }} />
        <div style={{ position: 'absolute', top: '20px', left: '20px', background: `linear-gradient(135deg, ${gold}, ${goldDark})`, color: walnut, padding: '6px 16px', fontSize: '10px', letterSpacing: '0.15em', fontWeight: '800', textTransform: 'uppercase' }}>
          {tB('featuredLabel')}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="gastro-card-content">
        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(26px, 2.6vw, 38px)', color: ivory, fontWeight: '800', marginBottom: '14px', lineHeight: '1.2' }}>
          {product.name}
        </h3>
        <p style={{ color: beige, fontSize: '15px', lineHeight: '1.8', marginBottom: '24px' }}>
          {product.desc}
        </p>

        {/* Karton unit info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', background: 'rgba(200,164,107,0.08)', border: `1px solid rgba(200,164,107,0.2)`, marginBottom: '28px' }}>
          <Package size={18} color={gold} strokeWidth={2} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', marginBottom: '2px' }}>{tB('packagingLabel')}</div>
            <div style={{ color: ivory, fontSize: '14px', fontWeight: '500' }}>{tB('kartonUnit')}</div>
          </div>
        </div>

        {/* Karton quantity stepper */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '24px' }}>
          <span style={{ color: beige, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700' }}>{tB('quantityLabel')}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button type="button" aria-label="decrease" onClick={() => setKartons((k) => Math.max(1, k - 1))}
              style={{ width: '38px', height: '38px', border: `1px solid rgba(200,164,107,0.35)`, background: 'transparent', color: gold, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Minus size={16} />
            </button>
            <span style={{ color: ivory, fontWeight: '800', fontSize: '20px', minWidth: '36px', textAlign: 'center' }}>{kartons}</span>
            <button type="button" aria-label="increase" onClick={() => setKartons((k) => k + 1)}
              style={{ width: '38px', height: '38px', border: `1px solid rgba(200,164,107,0.35)`, background: 'transparent', color: gold, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Plus size={16} />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleInquire}
          style={{
            background: `linear-gradient(135deg, ${gold}, ${goldDark})`,
            color: walnut,
            fontWeight: '800',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '16px 36px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: `0 4px 20px rgba(168,132,59,0.3)`,
          }}
        >
          {tB('addToInquiry')} <ArrowRight size={14} />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gastro-card { grid-template-columns: 1fr !important; }
          .gastro-card-image { min-height: 260px !important; }
          .gastro-card-content { padding: 36px 28px !important; }
        }
      `}</style>
    </div>
  );
}