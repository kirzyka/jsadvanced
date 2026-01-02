export function getHashPath(): string {
    const hash: string = window.location.hash || "#/";
    const qIndex: number = hash.indexOf("?");

    return qIndex >= 0 ? hash.slice(0, qIndex) : hash;
}
