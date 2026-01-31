'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Loader2, CheckCircle, Sparkles } from 'lucide-react';
import { PLACEHOLDER_URLS } from '@/lib/supabase';

interface BridgeButtonProps {
    resourceUrl?: string;
    label?: string;
    className?: string;
}

export default function BridgeButton({
    resourceUrl = PLACEHOLDER_URLS.adsterra,
    label = 'Akses',
    className = ''
}: BridgeButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingPhase, setLoadingPhase] = useState(0);

    const phases = [
        { text: 'Authenticating...', icon: Lock },
        { text: 'Decrypting Knowledge...', icon: Sparkles },
        { text: 'Ready!', icon: CheckCircle },
    ];

    const handleClick = () => {
        if (isLoading) return;

        setIsLoading(true);
        setLoadingPhase(0);

        setTimeout(() => setLoadingPhase(1), 1000);
        setTimeout(() => setLoadingPhase(2), 2500);
        setTimeout(() => {
            window.open(resourceUrl, '_blank');
            setIsLoading(false);
            setLoadingPhase(0);
        }, 3000);
    };

    const CurrentIcon = phases[loadingPhase].icon;

    return (
        <>
            <button
                onClick={handleClick}
                disabled={isLoading}
                className={`btn-primary px-4 py-2 rounded-lg text-sm flex items-center gap-1.5 disabled:opacity-50 ${className}`}
            >
                <span>{label}</span>
            </button>

            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl p-8 max-w-xs w-full mx-4 text-center shadow-2xl"
                        >
                            {/* Progress Bar */}
                            <div className="w-full h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 3, ease: 'linear' }}
                                    className="h-full bg-gradient-to-r from-electric to-purple-500"
                                />
                            </div>

                            {/* Animated Icon */}
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-electric/20 to-purple-500/20 flex items-center justify-center loading-glow">
                                {loadingPhase < 2 ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    >
                                        <CurrentIcon className="w-8 h-8 text-electric" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring' }}
                                    >
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </motion.div>
                                )}
                            </div>

                            {/* Status Text */}
                            <motion.p
                                key={loadingPhase}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-navy font-semibold text-lg"
                            >
                                {phases[loadingPhase].text}
                            </motion.p>
                            <p className="text-gray-400 text-sm mt-2">
                                Mohon tunggu sebentar...
                            </p>

                            {/* Decorative Elements */}
                            <div className="mt-6 flex justify-center gap-1">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-2 h-2 rounded-full ${i <= loadingPhase ? 'bg-electric' : 'bg-gray-200'}`}
                                        animate={i === loadingPhase ? { scale: [1, 1.3, 1] } : {}}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
