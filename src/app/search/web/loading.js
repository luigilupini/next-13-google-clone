import React from 'react';

function Skeleton() {
  return (
    <div className="loading-web-placeholder">
      <div className="h-2.5 w-48 loading-web-item"></div>
      <div className="h-3.5 max-w-[360px] loading-web-item"></div>
      <div className="h-2 max-w-[560px] loading-web-item"></div>
      <div className="h-2 max-w-[530px] loading-web-item"></div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="wrapper">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
