import styled from "@emotion/styled";

export const CenteredDiv = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width:400px;
  height: 300px;
  text-align: center;
`;

export const Box = styled.div`
  background:white;
  width:300px;
  border-radius:6px;
  margin: 0 auto 0 auto;
  padding:0px 0px 70px 0px;
  border: #3853bf 4px solid;
`;

export const UserIdPw = styled.input`
  background:#ecf0f1;
  border: #ccc 1px solid;
  border-bottom: #ccc 2px solid;
  padding: 8px;
  width:250px;
  color:#AAAAAA;
  margin-top:10px;
  font-size:1em;
  border-radius:4px;
`;

export const Button = styled.button`
  background:#2ecc71;
  width:125px;
  padding-top:5px;
  padding-bottom:5px;
  color:white;
  border-radius:4px;
  border: #27ae60 1px solid;
  margin-top:20px;
  margin-bottom:20px;
  float:left;
  margin-left:88px;
  font-weight:800;
  font-size:0.8em;
  &:hover {
    background:#2CC06B;
  }
`;

export const ForGet = styled.a`
  color:#f1c40f;
  text-decoration: underline;
`;
