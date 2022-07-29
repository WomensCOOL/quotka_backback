import React, { useState } from 'react';
import styled from 'styled-components';
import Quotka from 'assests/Logo.png';

const TrendingBox = props => {
  return (
    <>
      <Box>
        <table className="trendingBox">
          <tr>
            <th className="num">{props.num}</th>
            <td className="user">
              <Img src={Quotka} />
              name
            </td>
          </tr>
          <tr>
            <th className="num"></th>
            <td className="content">쿼카는 행복한가? 해피쿼카에 대해</td>
          </tr>
          <tr>
            <th className="num"></th>
            <td className="date">2022.07.23</td>
          </tr>
        </table>
      </Box>
    </>
  );
};

export default TrendingBox;

const Box = styled.h2`
  margin: 0 auto;
  width: 30%;
  height: 150px;

  .num {
    padding-right: 8px;
    font-size: 25px;
    font-family: 'SCDream-bold';
    color: #c5ad81;
  }

  .date {
    font-size: 5px;
  }

  .content {
    vertical-align: middle;
    height: 70px;
  }
  .user {
    vertical-align: middle;
  }
`;

const Img = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 10px;
  vertical-align: middle;
`;
