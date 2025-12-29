type Procedure = (...args: any[]) => any;

interface DebouncedFunction<F extends Procedure> {
    (...args: Parameters<F>): void;
    cancel: () => void;
}

export function debounce<F extends Procedure>(func: F, wait: number): DebouncedFunction<F> {
    if (typeof func !== "function") {
        throw new TypeError("Expected a function as the first argument");
    }
    if (typeof wait !== "number" || wait < 0) {
        throw new TypeError("Wait time must be a non-negative number");
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const debounced = (...args: Parameters<F>): void => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, wait);
    };

    debounced.cancel = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    };

    return debounced;
}
