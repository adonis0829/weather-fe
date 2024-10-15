import { useCallback, useRef } from 'react';

export function useDebounce(fn: (...args: any[]) => void, delay: number) {
    const timer = useRef<ReturnType<typeof setTimeout>>();

    const debouncedFn = useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }, [fn, delay]);

    return debouncedFn;
}