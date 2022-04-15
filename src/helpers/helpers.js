const URL = 'https://autumn-delicate-wilderness.glitch.me/v1';

export async function getFetch(resource) {
  try {
    const token = localStorage.getItem('token');
    const resp = await fetch(`${URL}/${resource}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const dataInJs = await resp.json();
    return dataInJs;
  } catch (error) {
    return false;
  }
}

export async function sendFetch(resource, dataToPost) {
  try {
    const resp = await fetch(`${URL}/${resource}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToPost),
    });
    const dataInJS = await resp.json();
    return dataInJS;
  } catch (error) {
    return false;
  }
}
export async function sendFetchWithToken(resource, dataToPost) {
  try {
    const token = localStorage.getItem('token');
    const resp = await fetch(`${URL}/${resource}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(dataToPost),
    });
    const dataInJS = await resp.json();
    return dataInJS;
  } catch (error) {
    return false;
  }
}