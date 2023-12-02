import { API_BASE_URL, API_SAMPLE_USER } from "../constants/apiConstants";

const getUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL + API_SAMPLE_USER}`);
    if (!response.ok) {
      throw new Error("유저 데이터를 불러오는데 실패했습니다.");
    }
    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export default getUser;
