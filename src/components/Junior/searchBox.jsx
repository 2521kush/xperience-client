import styled from "styled-components";
import icSearch from "assets/ic_search.png";

const SearchBox = (props) => {
  const { searchOption } = props;
  return (
    <StSearchBox>
      <input
        type="text"
        placeholder={
          searchOption === "Company"
            ? "궁금한 회사를 검색해보세요"
            : "궁금한 직무를 검색해보세요"
        }
      />
      <img src={icSearch} alt="검색" />
    </StSearchBox>
  );
};

export default SearchBox;
const StSearchBox = styled.div`
  width: 323px;
  height: 37px;

  background: #e8e7fb;
  border-radius: 5px;

  & > input {
    height: 18px;
    width: 280px;
    margin: 7px;
    background: #e8e7fb;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
  }
  & > input:active {
    outline: none;
    box-shadow: none;
    border: none;
  }
  & > input:focus {
    outline: none;
  }

  & > img {
    width: 12px;
    height: 12px;
    margin-top: 11px;
  }
`;
