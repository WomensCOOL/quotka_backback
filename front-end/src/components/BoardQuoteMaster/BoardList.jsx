import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import TitleBoxContainer from 'components/BoardQuoteMaster/Section/Board/BoardTitle';
import { Link } from 'react-router-dom';
import BoardListTextBox from './Section/List/BoardListText';
import styled from 'styled-components';
import WriteButton from './Section/List/WriteButton';

/**
 * BoardList class
 */

const BoardTopBlock = styled.ul`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

function BoardList(history) {
  /**
   *
   */
  return (
    <>
      <TitleBoxContainer></TitleBoxContainer>
      <BoardTopBlock>
        <BoardListTextBox></BoardListTextBox>
        <WriteButton></WriteButton>
      </BoardTopBlock>
      <BoardTable>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8</td>
              <td className="listtitle">구의 증명</td>
              <td>jyjjang</td>
              <td>2022-07-29</td>
              <td>18</td>
            </tr>
            <tr>
              <td>7</td>
              <td className="listtitle">고귀한 것</td>
              <td>bbyousr</td>
              <td>2022-07-28</td>
              <td>21</td>
            </tr>
            <tr>
              <td>6</td>
              <td className="listtitle">열등이 나를 자주 산책시켰다.</td>
              <td>안녕너너</td>
              <td>2022-07-28</td>
              <td>11</td>
            </tr>
            <tr>
              <td>5</td>
              <td className="listtitle">결국 모든 관계는 변한다</td>
              <td>새벽</td>
              <td>2022-07-27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="listtitle">따뜻하고 투명한 유리병</td>
              <td>stars</td>
              <td>2022-07-27</td>
              <td>17</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="listtitle">색이 바랜 벽지도</td>
              <td>하늘고양이</td>
              <td>2022-07-26</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="listtitle">당신은 소심한 타자입니다</td>
              <td>쿼억카</td>
              <td>2022-07-25</td>
              <td>20</td>
            </tr>
            <tr>
              <td>1</td>
              <td className="listtitle">안되면 울어. 그리고 다시 해.</td>
              <td>그냥해</td>
              <td>2022-07-24</td>
              <td>45</td>
            </tr>
          </tbody>
        </Table>
      </BoardTable>
    </>
  );
}

export default BoardList;

const BoardTable = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-collapse: separate;
  border-spacing: 0 10px;

  .num {
    width: 5%;
    text-align: center;
  }
  .date {
    width: 7%;
  }
  .title {
    width: 25%;
    text-align: center;
  }
  .content {
    width: 63%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    border-top: 1px solid #444444;
    margin-top: 7px;
  }

  tbody {
    font-family: 'SCDream';
    font-weight: 900;
  }

  td {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #444444;
    margin-left: 10px;
  }

  .listtitle {
    text-align: left;
  }

  th {
    padding: 15px;
    border-bottom: 1px solid #444444;
    margin-left: 10px;
  }

  thead {
    font-family: 'SCDream-bold';
    font-weight: 100;
  }
`;
