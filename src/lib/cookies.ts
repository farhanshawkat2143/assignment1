export function setCookie(name: string, value: string, days = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

export function getCookie(name: string) {
  return document.cookie.split('; ').reduce((r, v) => {
    const [k, ...rest] = v.split('=');
    return k === name ? decodeURIComponent(rest.join('=')) : r;
  }, '');
}
