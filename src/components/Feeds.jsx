import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FeedForm from './FeedForm';

const Post = styled.div`
  padding-top: 55px;
  @media (max-width: 650px) {
    padding-top: 65px;
  }
`;

const Feeds = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const data = fetch('data/myData.json')
      .then((res) => res.json())
      .then((data) => setData(data.post));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Post>
      {data && data.map((post) => <FeedForm post={post} key={post.idx} />)}
    </Post>
  );
};

export default Feeds;
