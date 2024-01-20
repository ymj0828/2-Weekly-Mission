import axios from "axios";

axios.defaults.baseURL = "https://bootcamp-api.codeit.kr/api";

export async function postSignRequest(url, body) {
  try {
    const res = await axios.post(url, body);
    return res.data.data;
  } catch {}
}
