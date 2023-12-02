const BreadCrumb = ({ title }) => {
  return (
    <div className="breadcrumb bg-[#F8F9FC] pt-[195px] pb-[80px]">
      <div className="container">
        <div className="content">
          <h2 className="text-[#101A29] text-[40px] font-semibold	mb-[15px]">
            {title}
          </h2>
          <p className="ml-[8px] text-[#101A29] font-semibold text-[16px] flex items-center">
            Home
            <svg
              width="9"
              height="13"
              className="mx-[15px]"
              viewBox="0 0 9 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.6875 5.8125C8.09375 6.1875 8.09375 6.84375 7.6875 7.21875L2.6875 12.2188C2.3125 12.625 1.65625 12.625 1.28125 12.2188C0.875 11.8438 0.875 11.1875 1.28125 10.8125L5.5625 6.5L1.28125 2.21875C0.875 1.84375 0.875 1.1875 1.28125 0.8125C1.65625 0.40625 2.3125 0.40625 2.6875 0.8125L7.6875 5.8125Z"
                fill="#101A29"
              />
            </svg>
            <span className="text-[#20B15A]">{title}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
