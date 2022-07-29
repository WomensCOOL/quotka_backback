import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import TitleBoxContainer from 'components/BoardPlayground/Section/Board/BoardTitle';
import { Link } from 'react-router-dom';
import BoardListTextBox from './Section/List/BoardListText';
import styled from 'styled-components';
import WriteButton from './Section/List/WriteButton';
import Axios from 'axios';
import CommonTable from 'components/table/CommonTable';
import CommonTableColumn from 'components/table/CommonTableColumn';
import CommonTableRow from 'components/table/CommonTableRow';

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

function GetData() {
  const [data, setData] = useState({});

  useEffect(() => {
    Axios.get('/board/playGround').then(response => {
      setData(response.data);
    });
  }, []);

  const item = Object.values(data).map(item => (
    <CommonTableRow key={item.id}>
      <CommonTableColumn>{item.id}</CommonTableColumn>
      <CommonTableColumn>{item.title}</CommonTableColumn>
      <CommonTableColumn>{item.author}</CommonTableColumn>
      <CommonTableColumn>{item.createDate}</CommonTableColumn>
      <CommonTableColumn>{item.count}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function BoardList() {
  const item = GetData();
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
              <td>10</td>
              <td className="listtitle">
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to="/quotemaster/board/quotkaId"
                >
                  너무 더워서 잠을 못 자겠음
                </Link>
              </td>
              <td>쿼키티키</td>
              <td>2022-07-29</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9</td>
              <td className="listtitle">
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to="/quotemaster/board/quotkaId"
                >
                  코로나 재유행이래 나도 걸림
                </Link>
              </td>
              <td>우나나나</td>
              <td>2022-07-29</td>
              <td>13</td>
            </tr>
            <tr>
              <td>8</td>
              <td className="listtitle">나 큰 결심 했는데 용기 주라</td>
              <td>안녕노노</td>
              <td>2022-07-29</td>
              <td>10</td>
            </tr>
            <tr>
              <td>7</td>
              <td className="listtitle">인간관계 스트레스 고민</td>
              <td>youandi</td>
              <td>2022-07-28</td>
              <td>24</td>
            </tr>
            <tr>
              <td>6</td>
              <td className="listtitle">포토샵 잘 아는 사람</td>
              <td>담쟁</td>
              <td>2022-07-28</td>
              <td>7</td>
            </tr>
            <tr>
              <td>5</td>
              <td className="listtitle">마라탕 먹고 싶다</td>
              <td>감성주</td>
              <td>2022-07-27</td>
              <td>11</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="listtitle">요즘 영화 추천 좀</td>
              <td>mommiiin</td>
              <td>2022-07-27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="listtitle">과외에서 겪은 일</td>
              <td>햄스튜</td>
              <td>2022-07-26</td>
              <td>16</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="listtitle">인스타 보여주기식</td>
              <td>바람바람</td>
              <td>2022-07-25</td>
              <td>33</td>
            </tr>
            <tr>
              <td>1</td>
              <td className="listtitle">서울 당일치기 놀거리!</td>
              <td>bbyousr</td>
              <td>2022-07-24</td>
              <td>39</td>
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
