import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 400px;
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 100px; */
`;

export const FooterRow = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: space-between;
  margin-left: 80px;
  /* max-width: 80%; */
  /* padding: 50px 10px 50px 60px; */
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;
`;

export const FooterLink = styled.a`
  font-family: "Circe"; // need to add font locally
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  text-decoration: none;

  display: flex;
  align-items: center;

  color: #000000;
  &:hover {
    /* color: black;
    transition: 200ms ease-in; */
  }
`;

export const FooterTitle = styled.div`
  font-family: "Circe";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const FooterSocialSection = styled.div`
  flex: 0.28;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 80%;
  /* align-items: center; */
  margin-top: +90px;
`;

export const SubscriptionTitle = styled.div`
  height: 30px;
  font-family: "Circe";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  /* display: flex;
  align-items: center; */

  color: #000000;
`;

export const SubscriptionWrapper = styled.form`
  margin-top: 5px;
  margin-bottom: 20px;
  height: 30px;
`;

export const SubscriptionEmail = styled.input`
  /* margin-top: 10px; */
  width: 200px;
  /* padding-left: 12px; */
  /* border: 1px solid #666666; */
  /* border-right: none; */
  padding: 12px 12px;
`;

export const SubscriptionButton = styled.button`
  padding: 8.4px 30px;
  background: #666666;
  border-radius: 64px;
  cursor: pointer;
  border: none;
  color: white;
  margin-left: -30px;
  font-family: "Circe";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* line-height: 29px; */
`;

export const SocialIconWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  gap: 10px;
`;

export const SocialIcon = styled.div``;
