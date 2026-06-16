'use client';

import { useCart } from '@/context/CartContext';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBasket } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems } = useCart();
  const locale = useLocale();
  const t = useTranslations('cart');
  const getHref = (path: string) => `/${locale}${path}`;

  const gold = '#C8A46B';
  const goldDark = '#A8843B';
  const ivory = '#F5F0E8';
  const walnut = '#2B1D16';
  const wood = '#3A261C';
  const darkWood = '#1A110D';
  const beige = '#D8C6AE';
  const muted = '#9A8672';

  return (
    <div style={{ backgroundColor: walnut, minHeight: '100vh', paddingTop: '120px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 48px' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ color: gold, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '1px', backgroundColor: gold }} />
            {t('label')}
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 5vw, 60px)', color: ivory, fontWeight: '900', letterSpacing: '-0.02em' }}>
            {t('title')}
          </h1>
          <div style={{ width: '56px', height: '3px', background: `linear-gradient(90deg, ${gold}, ${goldDark})`, marginTop: '16px' }} />
        </div>

        {items.length === 0 ? (
          /* Empty inquiry list */
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <ShoppingBasket size={64} color={muted} />
            </div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>
              {t('empty')}
            </h2>
            <p style={{ color: muted, fontSize: '15px', marginBottom: '40px' }}>
              {t('emptyDesc')}
            </p>
            <Link
              href={getHref('/for-businesses')}
              style={{
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
              }}
            >
              {t('backToShop')} <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <>
            {/* Inquiry Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    backgroundColor: wood,
                    border: `1px solid rgba(200,164,107,0.15)`,
                    padding: '20px 24px',
                  }}
                >
                  {/* Image */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    flexShrink: 0,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: `1px solid rgba(200,164,107,0.2)`,
                  }} />

                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', color: ivory, fontWeight: '700', fontSize: '18px', marginBottom: '4px' }}>
                      {item.name}
                    </h3>
                    <p style={{ color: muted, fontSize: '13px' }}>{item.weight}</p>
                  </div>

                  {/* Quantity */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        border: `1px solid rgba(200,164,107,0.3)`,
                        background: 'transparent',
                        color: gold,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ color: ivory, fontWeight: '700', fontSize: '16px', minWidth: '24px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        border: `1px solid rgba(200,164,107,0.3)`,
                        background: 'transparent',
                        color: gold,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ background: 'transparent', border: 'none', color: muted, cursor: 'pointer', padding: '8px' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div style={{
              backgroundColor: darkWood,
              border: `1px solid rgba(200,164,107,0.2)`,
              padding: '32px 36px',
              marginBottom: '24px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ color: beige, fontSize: '15px', fontWeight: '500' }}>{t('quantity')}</span>
                <span style={{ color: ivory, fontWeight: '700', fontSize: '18px' }}>{totalItems}</span>
              </div>
              <div style={{ height: '1px', background: 'rgba(200,164,107,0.15)', marginBottom: '24px' }} />
              <p style={{ color: muted, fontSize: '13px', lineHeight: '1.7', marginBottom: '32px' }}>
                {t('priceNote')}
              </p>
              <Link
                href={getHref('/contact')}
                style={{
                  background: `linear-gradient(135deg, ${gold}, ${goldDark})`,
                  color: walnut,
                  fontWeight: '800',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '16px 40px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: `0 4px 20px rgba(168,132,59,0.3)`,
                }}
              >
                {t('checkout')} <ArrowRight size={14} />
              </Link>
            </div>

            <Link
              href={getHref('/for-businesses')}
              style={{
                color: muted,
                fontSize: '13px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center',
              }}
            >
              ← {t('continueShopping')}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}