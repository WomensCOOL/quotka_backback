import React from 'react';
import styled from 'styled-components';

const BoardText = styled.div`
  width: 430px;
  padding-top: 0rem;
  font-family: 'SCDream4R';
  font-size: 13px;
  font-weight: normal;
  margin-left: -3px;
  margin-bottom: 20px;
`;

const BoardListTextBox = ({}) => {
  return (
    <BoardText>
      <p>
        쿼카놀이터는 내가 가진 고민을 이야기하고 사람들의 의견을 듣는
        게시판입니다. Write a Post 버튼을 통해 여러분들의 생각을 공유해주세요!
      </p>
    </BoardText>
  );
};

export default BoardListTextBox;
