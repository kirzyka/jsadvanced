export function getHashQuery(): URLSearchParams {
    const hash: string = location.hash;
    const idx: number = hash.indexOf("?");

    return new URLSearchParams(idx >= 0 ? hash.slice(idx + 1) : "");
}
