import { API_BASE_URL } from "../constants/apiConstants";

const getLink = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/1/folders`);
    if (!response.ok) {
      throw new Error("유저 데이터를 불러오는데 실패했습니다.");
    }
    const { data } = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getLink;
