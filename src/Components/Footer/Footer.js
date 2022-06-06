import React from "react";
import {
  FooterContainer,
  FooterRow,
  FooterColumn,
  FooterTitle,
  FooterLink,
  FooterSocialSection,
  SubscriptionTitle,
  SubscriptionEmail,
  SubscriptionButton,
  SocialIconWrapper,
  SocialIcon,
  SubscriptionWrapper,
} from "./FooterStyle";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterRow>
          <FooterColumn>
            <FooterTitle>About pet.co.nz</FooterTitle>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Help & FAQs</FooterLink>
            <FooterLink href="#">COVID-19</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>General Information</FooterTitle>
            <FooterLink href="#">AutoShip</FooterLink>
            <FooterLink href="#">Shipping & Delivery </FooterLink>
            <FooterLink href="#">Returns</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Accounts</FooterTitle>
            <FooterLink href="#">My Account</FooterLink>
            <FooterLink href="#">Membership Policy</FooterLink>
          </FooterColumn>
        </FooterRow>
        <FooterSocialSection>
          <SubscriptionTitle>
            Subscribe to our newsletter and promotions
          </SubscriptionTitle>
          <SubscriptionWrapper>
            <SubscriptionEmail
              type="text"
              placeholder="Enter your email address"
            ></SubscriptionEmail>

            <SubscriptionButton type="submit">SUBSRIBE</SubscriptionButton>
          </SubscriptionWrapper>

          <SocialIconWrapper>
            <SocialIcon>
              <Icon
                icon="entypo-social:facebook-with-circle"
                color="#3b5998"
                width="50"
                height="50"
              />
            </SocialIcon>
            <SocialIcon>
              <Icon
                icon="entypo-social:instagram-with-circle"
                width="50"
                height="50"
                color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
              />
            </SocialIcon>
            <SocialIcon>
              <Icon
                icon="entypo-social:youtube-with-circle"
                color="red"
                width="50"
                height="50"
              />
            </SocialIcon>
          </SocialIconWrapper>
        </FooterSocialSection>
      </FooterContainer>
    </div>
  );
};

export default Footer;
