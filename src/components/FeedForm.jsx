import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Comment from './Comment';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const FeedForm = ({ feed }) => {
  const { id, profile, content, url, like } = feed;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container isLoading={isLoading}>
      <Header>
        <Profile>
          <ProfileImage src={profile} alt="profile" />
          <Id>{id}</Id>
        </Profile>
        <MoreHorizOutlinedIcon />
      </Header>
      <Image src={url} alt="img" onLoad={() => setIsLoading(false)} />
      <Icon>
        <IconWrap>
          <FavoriteBorderOutlinedIcon />
          <MapsUgcOutlinedIcon />
          <SendRoundedIcon />
        </IconWrap>
        <BookmarkBorderOutlinedIcon />
      </Icon>
      <Like>좋아요 {like}개</Like>
      <ContentWrap>
        <ContentId>{id}</ContentId>
        <Content>{content}</Content>
      </ContentWrap>
      <Comment />
    </Container>
  );
};

export default React.memo(FeedForm);

const Container = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
  width: 500px;
  margin: 10px auto;
  background-color: #fff;
  border: ${({ theme }) => theme.border.main};
  @media (max-width: 650px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 13px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 10px;
`;

const Id = styled.span`
  font-weight: 700;
`;

const Image = styled.img`
  width: 100%;
`;

const Icon = styled.div`
  height: 35px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.max} {
    height: 45px;
  }
`;

const IconWrap = styled.div`
  width: 105px;
  display: flex;
  justify-content: space-between;
`;

const Like = styled.div`
  height: 22px;
  font-size: 14px;
  font-weight: 600;
  padding: 7px 13px 0px;
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 13px 15px;
`;

const ContentId = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
`;
const Content = styled.p`
  font-size: 14px;
`;
