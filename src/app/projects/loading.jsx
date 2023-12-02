

const Loading = () => {
  return (
    <div className="preloader fixed left-0 top-0 h-screen w-screen overflow-hidden flex justify-center items-center z-[100000] bg-[#20B15A]">
      <div className="container">
        <div className="wrapper">
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
