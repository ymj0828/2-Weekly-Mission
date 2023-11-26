import { API_BASE_URL, API_SAMPLE_FOLDER } from "../constants/apiConstants";

const getFolder = async () => {
  try {
    const response = await fetch(`${API_BASE_URL + API_SAMPLE_FOLDER}`);
    if (!response.ok) {
      throw new Error("유저 데이터를 불러오는데 실패했습니다.");
    }
    const { folder } = await response.json();
    return folder;
  } catch (err) {
    console.error(err);
  }
};

export default getFolder;
