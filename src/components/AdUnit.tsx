'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
    /** Adsterra ad key - get this from your Adsterra dashboard */
    adKey?: string;
    /** Ad format: 'iframe' for banner, 'js' for native */
    format?: 'iframe' | 'js';
    /** Ad width in pixels */
    width?: number;
    /** Ad height in pixels */
    height?: number;
    /** Additional CSS classes */
    className?: string;
}

/**
 * Adsterra Native Banner Ad Component
 * 
 * Usage:
 * 1. Get your ad key from Adsterra Publishers dashboard
 * 2. Add your key to environment variable: NEXT_PUBLIC_ADSTERRA_KEY
 * 3. Use: <AdUnit />
 * 
 * Or pass the key directly:
 * <AdUnit adKey="your-key-here" width={300} height={250} />
 */
export default function AdUnit({
    adKey = process.env.NEXT_PUBLIC_ADSTERRA_KEY,
    format = 'iframe',
    width = 300,
    height = 250,
    className = ''
}: AdUnitProps) {
    const adContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Don't load ads if no key is provided
        if (!adKey) {
            console.log('AdUnit: No Adsterra key provided');
            return;
        }

        // Create and inject the ad script
        const container = adContainerRef.current;
        if (!container) return;

        // Clear any existing content
        container.innerHTML = '';

        // Create options script
        const optionsScript = document.createElement('script');
        optionsScript.type = 'text/javascript';
        optionsScript.text = `
            atOptions = {
                'key' : '${adKey}',
                'format' : '${format}',
                'height' : ${height},
                'width' : ${width},
                'params' : {}
            };
        `;
        container.appendChild(optionsScript);

        // Create invoke script
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;
        invokeScript.async = true;
        container.appendChild(invokeScript);

        // Cleanup on unmount
        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, [adKey, format, width, height]);

    // Don't render anything if no ad key
    if (!adKey) {
        return null;
    }

    return (
        <div
            ref={adContainerRef}
            className={`flex items-center justify-center my-8 ${className}`}
            style={{ minHeight: height, minWidth: width }}
            aria-label="Advertisement"
        />
    );
}
