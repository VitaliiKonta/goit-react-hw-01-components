import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 600px;
  margin: 50px auto;
  background-color: #fff;

  th,
  td {
    padding: 10px;
    text-align: center;
    border: 1px solid #555;
    color: #040016;
  }

  th {
    background-color: #31c7c7;
    color: #f1eded;
  }

  tr {
    text-transform: capitalize;

    :nth-of-type(even) {
      background-color: #fff;
    }
    :hover {
      cursor: pointer;
      background-color: #9998a3;
    }
  }
`;
