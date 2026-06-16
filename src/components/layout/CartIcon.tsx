'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ShoppingBasket } from 'lucide-react';

const CartIcon = () => {
  const { totalItems } = useCart();
  const locale = useLocale();
  const getHref = (path: string) => `/${locale}${path}`;

  if (totalItems === 0) return null;

  return (
    <Link
      href={getHref('/cart')}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '42px',
        height: '42px',
        border: '1px solid rgba(200,164,107,0.4)',
        color: '#C8A46B',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      <ShoppingBasket size={18} />
      <span style={{
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        backgroundColor: '#C8A46B',
        color: '#2B1D16',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        fontWeight: '800',
      }}>
        {totalItems}
      </span>
    </Link>
  );
};

export default CartIcon;