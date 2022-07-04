import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import FeedForm from './FeedForm';

const Feeds = () => {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    const data = fetch('data/myData.json')
      .then((res) => res.json())
      .then((data) => setData(data.post));
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Feed>
      {data && data.map((feed) => <FeedForm feed={feed} key={feed.idx} />)}
    </Feed>
  );
};

export default Feeds;

const Feed = styled.div``;
