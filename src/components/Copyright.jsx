const CopyRight = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 bg-opacity-90 backdrop-filter backdrop-blur-lg text-white py-4">
      <div className="container text-center flex justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Trendy News. All rights reserved.
        </p>
        <p>Designed and developed by Abdul Aziz Jishan</p>
      </div>
    </div>
  );
};

export default CopyRight;
