'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Re-initializes WOW.js on every route change.
 * Also ensures .wow elements are always visible as fallback.
 */
export default function WowReinit() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // First: immediately make all wow elements visible
        // so content is never stuck invisible
        document.querySelectorAll('.wow').forEach((el) => {
            el.style.visibility = 'visible';
        });

        // Then: try to reinit WOW.js for animations
        const reinit = () => {
            if (window.WOW) {
                // Reset animation state
                document.querySelectorAll('.wow').forEach((el) => {
                    el.classList.remove('animated');
                    el.style.visibility = '';
                    el.style.animationName = '';
                });
                try {
                    new window.WOW({ live: false }).init();
                } catch (e) {
                    // If WOW fails, make everything visible
                    document.querySelectorAll('.wow').forEach((el) => {
                        el.style.visibility = 'visible';
                    });
                }
            } else {
                // WOW not loaded yet — make everything visible as fallback
                document.querySelectorAll('.wow').forEach((el) => {
                    el.style.visibility = 'visible';
                });
            }

            // Also re-init all other theme plugins (slicknav, swiper, etc)
            if (window.initThemePlugins && window.jQuery) {
                window.initThemePlugins(window.jQuery);
            }
        };

        const timer = setTimeout(reinit, 200);
        return () => clearTimeout(timer);
    }, [pathname]); // re-run on every route change

    return null;
}
