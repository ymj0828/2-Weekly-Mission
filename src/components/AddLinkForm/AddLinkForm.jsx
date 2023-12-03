import * as S from "./AddLinkForm.style";
import linkIcon from "../../assets/link-icon.svg";

const AddLinkForm = () => {
  return (
    <S.AddLinkForm>
      <S.FormWrap>
        <img src={linkIcon} alt="링크 추가하기 아이콘" />
        <S.Input type="text" placeholder="링크를 추가해 보세요" />
        <S.Button>추가하기</S.Button>
      </S.FormWrap>
    </S.AddLinkForm>
  );
};
export default AddLinkForm;
