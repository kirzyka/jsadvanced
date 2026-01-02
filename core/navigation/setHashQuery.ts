export function setHashQuery(params: Record<string, string | number | undefined>) {
    const search: URLSearchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== "") {
            search.set(key, String(value));
        }
    });

    location.hash = `/?${search.toString()}`;
}
