import { useEffect } from "react";

const useKakaoShare = () => {
  const shareKakao = ({ url, title, description, imageUrl }) => {
    const REACT_APP_SHARE_KAKAO_LINK_KEY = "7df72a9443d6a8672a6a96715723c486";

    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(REACT_APP_SHARE_KAKAO_LINK_KEY);
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return { shareKakao };
};

export default useKakaoShare;
