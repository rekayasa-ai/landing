'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
    /** Additional CSS classes */
    className?: string;
}

/**
 * Adsterra Ad Component
 * Uses the invoke.js format from Adsterra dashboard
 */
export default function AdUnit({ className = '' }: AdUnitProps) {
    const adContainerRef = useRef<HTMLDivElement>(null);
    const adId = 'ee1ef9b1241ee2b165e761007de780a5';

    useEffect(() => {
        const container = adContainerRef.current;
        if (!container) return;

        // Check if script already loaded
        const existingScript = document.querySelector(`script[src*="${adId}"]`);
        if (existingScript) return;

        // Create the ad container div
        const adDiv = document.createElement('div');
        adDiv.id = `container-${adId}`;
        container.appendChild(adDiv);

        // Create and inject the script
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = `https://pl28615948.effectivegatecpm.com/${adId}/invoke.js`;
        container.appendChild(script);

        // Cleanup on unmount
        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return (
        <div
            ref={adContainerRef}
            className={`flex items-center justify-center my-8 ${className}`}
            aria-label="Advertisement"
        />
    );
}
