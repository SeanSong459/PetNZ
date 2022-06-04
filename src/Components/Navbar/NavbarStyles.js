import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 341px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 0.18;
`;

export const Logo = styled.div`
  width: 150px;
`;

export const LogoText = styled.div`
  font-family: "Circe";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f46734;
`;

export const Center = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row; */
  flex: 0.7;
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;
