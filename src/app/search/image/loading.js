function Skeleton() {
  return (
    <div className="min-w-[200px] animate-pulse">
      <div className="w-full h-48 mb-4 loading-image-item"></div>
      <div className="h-2 w-48 mb-2.5 loading-image-item"></div>
      <div className="h-2 w-44 mb-2.5 loading-image-item"></div>
    </div>
  );
}

export default function loading() {
  return (
    <div className="wrapper">
      <div className="flex flex-col gap-6 pt-10 sm:space-x-4 sm:flex-row">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}
