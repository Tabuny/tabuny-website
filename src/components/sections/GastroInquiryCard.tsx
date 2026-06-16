'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Plus, Minus, Check, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const gold = '#C8A46B';
const goldDark = '#A8843B';
const ivory = '#F5F0E8';
const walnut = '#2B1D16';
const wood = '#3A261C';
const darkWood = '#1A110D';
const beige = '#D8C6AE';
const muted = '#9A8672';

export default function GastroInquiryCard() {
  const t = useTranslations('products');
  const tB = useTranslations('forBusinesses');
  const { addItem } = useCart();

  const [kartons, setKartons] = useState(1);
  const [added, setAdded] = useState(false);

  const product = {
    id: 'gastro-tabuny',
    img: '/images/product-gastro.jpg',
    name: t('product3Name'),
    desc: t('product3Desc'),
  };

  const handleAdd = () => {
    // Add the chosen number of Kartons to the inquiry list
    for (let n = 0; n < kartons; n++) {
      addItem({ id: product.id, name: product.name, weight: tB('kartonUnit'), image: product.img });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
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
        <div style={{ padding: '14px 18px', background: 'rgba(200,164,107,0.08)', border: `1px solid rgba(200,164,107,0.2)`, marginBottom: '28px' }}>
          <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', marginBottom: '4px' }}>{tB('packagingLabel')}</div>
          <div style={{ color: ivory, fontSize: '14px', fontWeight: '500' }}>{tB('kartonUnit')}</div>
        </div>

        {/* Karton quantity stepper */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '24px' }}>
          <span style={{ color: beige, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700' }}>{tB('quantityLabel')}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              type="button"
              aria-label="decrease"
              onClick={() => setKartons((k) => Math.max(1, k - 1))}
              style={{ width: '36px', height: '36px', border: `1px solid rgba(200,164,107,0.35)`, background: 'transparent', color: gold, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Minus size={15} />
            </button>
            <span style={{ color: ivory, fontWeight: '800', fontSize: '18px', minWidth: '32px', textAlign: 'center' }}>{kartons}</span>
            <button
              type="button"
              aria-label="increase"
              onClick={() => setKartons((k) => k + 1)}
              style={{ width: '36px', height: '36px', border: `1px solid rgba(200,164,107,0.35)`, background: 'transparent', color: gold, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Plus size={15} />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          style={{
            background: added ? 'linear-gradient(135deg, #4CAF50, #388E3C)' : `linear-gradient(135deg, ${gold}, ${goldDark})`,
            color: added ? 'white' : walnut,
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
            transition: 'all 0.3s ease',
          }}
        >
          {added ? (<><Check size={15} /> {tB('addedToInquiry')}</>) : (<>{tB('addToInquiry')} <ArrowRight size={14} /></>)}
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