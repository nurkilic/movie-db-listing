const Loading = () => {
  return (
    
      <div className="flex justify-center items-center h-screen bg-[#10141e] ">
      <div className="flex flex-col items-center space-y-4">
        {/* Dönen çember */}
        <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        {/* Yükleniyor metni */}
        <div className="text-white text-lg font-semibold tracking-wider">
          Loading...
        </div>
      </div>
    </div>
   
  );
};

export default Loading;
