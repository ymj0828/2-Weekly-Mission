import { API_BASE_URL } from "../constants/apiConstants";

const getUserLinks = async (id) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/users/1/links?folderId=${id}`
    );
    if (!response.ok) {
      throw new Error("유저 데이터를 불러오는데 실패했습니다.");
    }
    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export default getUserLinks;
