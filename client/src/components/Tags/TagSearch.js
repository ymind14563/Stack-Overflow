import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TagContainer } from '../../pages/Taglist';

function TagSearch({ isSearch, setIsSearch }) {
  const [query, setQuery] = useState(''); // 입력값 상태
  const [results, setResults] = useState([]); // 검색 결과 상태
  const [filteredResults, setFilteredResults] = useState([]); //검색 결과

  useEffect(() => {
    axios
      .get(
        `https://8625-61-254-8-200.ngrok-free.app/tags?page=1&size=3276&sortBy=tagId`,
        {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        }
      )
      .then(function (response) {
        // 성공한 경우 실행
        setResults(response.data.data);
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    let result = results.filter((tag) =>
      tag.tagName.includes(value.toLowerCase())
    );
    setFilteredResults(result);
    if (value === '') setIsSearch(true);
    else setIsSearch(false);

    // 검색 버튼 또는 엔터 키 입력 시 실행되는 함수
    // 검색 결과를 상태로 관리
  };

  return (
    <TagSearchMain>
      <div className="searchbar-tab">
        <TagSerachBar
          placeholder="  🔍 Filter by tag name"
          type="text"
          value={query}
          onChange={handleChange}
        />{' '}
        <TagsTab>
          <button>Popular</button>
          <button>Name</button>
          <button>New</button>
        </TagsTab>
      </div>
      <TagContainer className="tagcontainer-search">
        {query !== ''
          ? filteredResults.map((tag) => (
              <div className="singleTag sigleTag-search" key={tag.tagId}>
                <div className="singleTagNamePosition">
                  <button className="singleTagNameBtn">
                    <span>{tag.tagName}</span>
                  </button>
                </div>
              </div>
            ))
          : null}
      </TagContainer>
    </TagSearchMain>
  );
}

const TagSearchMain = styled.div`
  .searchbar-tab {
    display: flex;
    justify-content: space-between;
  }
  .tagcontainer-search {
    grid-template-columns: repeat(3, minmax(323px, 1fr));
  }

  .sigleTag-search {
    grid-template-rows: 1fr 1fr;
  }
`;

// const SearchTagContainer = styled.div`
//   color: black;
//   display: grid;
//   max-width: 1050px;
//   gap: 10px;
//   grid-template-rows: repeat(autofit, 1fr);
//   grid-template-columns: repeat(3, minmax(322px, 1fr));
//   font-size: 13px;
//   @media (max-width: 1050px) {
//     grid-template-columns: repeat(3, minmax(250px, 1fr));
//   }
//   @media (max-width: 750px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (max-width: 600px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
//   .singleTagNamePosition {
//     height: 28px;
//     margin-bottom: 12px;
//   }
//   .singleTagNameBtn {
//     background-color: hsl(205, 54%, 88%);
//     border: none;
//     margin: 2px 2px 2px 0px;
//     padding: 4.8px 6px;
//     border-radius: 3px;
//     color: #60849e;
//     cursor: pointer;
//     &:hover {
//       opacity: 0.8;
//     }
//   }
//   .singleTag {
//     display: grid;
//     grid-template-rows: 0.5fr 2fr 0.5fr;
//     border: 1px solid #d6d9dc;
//     padding: 12px;
//     border-radius: 5px;
//   }
//   .singleTagTagDescription {
//     overflow: none;
//   }
// `;

const TagSerachBar = styled.input`
  margin: 10px 0px;
  width: 190px;
  height: 38px;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 13px;
  &:focus {
    outline-style: outset;
    outline-width: 3px;
    outline-color: #ddeaf7;
  }
`;

const TagsTab = styled.div`
  display: flex;
  overflow: hidden;
  height: 35px;
  border: 1px solid hsl(210, 8%, 65%);
  border-radius: 3px;
  button {
    background: rgb(255, 255, 255);
    border: none;
    color: #6b6f73;
    border-left: 1px solid hsl(210, 8%, 65%);
    padding: 0px 10px;
  }
  button:nth-child(1) {
    border: none;
  }
  button:hover {
    background: #f5f5f5;
  }
  button:active {
    box-shadow: 0 0 10px gray;
  }
  button > span {
    padding: 0px 5px;
    margin-left: 3px;
    border-radius: 5px;
    color: #fff;
    background: hsl(206, 100%, 40%);
  }
`;

export default TagSearch;
