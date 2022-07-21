import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={255}
    height={294}
    viewBox="0 0 300 300"
    backgroundColor="#d8d8d8"
    foregroundColor="#2b2c3a">
    <rect x="0" y="0" rx="6" ry="6" width="257" height="171" />
    <rect x="14" y="178" rx="0" ry="0" width="80" height="20" />
    <rect x="9" y="253" rx="0" ry="0" width="254" height="0" />
    <rect x="0" y="253" rx="0" ry="0" width="257" height="3" />
    <rect x="15" y="209" rx="0" ry="0" width="138" height="29" />
    <rect x="15" y="278" rx="0" ry="0" width="88" height="20" />
    <rect x="142" y="268" rx="0" ry="0" width="107" height="32" />
  </ContentLoader>
);

export default Skeleton;
