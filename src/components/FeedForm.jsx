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
  const [loading, setLoading] = useState(true);

  return (
    <Container>
      {!loading && (
        <Header>
          <div className="profile">
            <img src={profile} alt="profile" />
            <span>{id}</span>
          </div>
          <MoreHorizOutlinedIcon />
        </Header>
      )}
      <Image src={url} alt="img" onLoad={() => setLoading(false)} />
      {!loading && (
        <>
          <Icon>
            <div>
              <FavoriteBorderOutlinedIcon />
              <MapsUgcOutlinedIcon />
              <SendRoundedIcon />
            </div>
            <BookmarkBorderOutlinedIcon />
          </Icon>
          <Like>좋아요 {like}개</Like>
          <Content>
            <span className="id">{id}</span>
            <p className="content">{content}</p>
          </Content>
          <Comment />
        </>
      )}
    </Container>
  );
};

export default React.memo(FeedForm);

const Container = styled.div`
  width: 400px;
  margin: 10px auto;
  background-color: #fff;
  border: 1px solid #ccc;
  @media (max-width: 650px) {
    width: 310px;
  }
`;

const Header = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  .profile {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      margin-right: 10px;
    }
    span {
      font-weight: 700;
    }
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Icon = styled.div`
  height: 35px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 650px) {
    height: 45px;
  }
  div {
    width: 100px;
    display: flex;
    justify-content: space-between;
  }
`;

const Like = styled.div`
  height: 30px;
  font-size: 13px;
  font-weight: 600;
  padding: 7px 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 10px 15px;
  .id {
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
  }
  .content {
    font-size: 14px;
  }
`;
