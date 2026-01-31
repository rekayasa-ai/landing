'use client';

import { ShoppingCart, ExternalLink } from 'lucide-react';

interface DirectBuyButtonProps {
    lynkUrl: string;
    price: string;
    className?: string;
}

export default function DirectBuyButton({
    lynkUrl,
    price,
    className = ''
}: DirectBuyButtonProps) {
    const handleClick = () => {
        window.open(lynkUrl, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className={`btn-primary px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 w-full group ${className}`}
        >
            <ShoppingCart className="w-4 h-4" />
            <span>Beli Sekarang</span>
            <span className="text-white/80">•</span>
            <span className="font-bold">{price}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
    );
}
