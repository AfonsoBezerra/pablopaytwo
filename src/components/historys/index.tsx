
  const Historys = () => {
    return (
      <div className="bg-blue-500  border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5">
        <div className="max-w-1500 mx-auto relative md:pt-24 pt-14">
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="md:text-[90px] text-[52px] text-center">
              <h1 className="md:leading-normal leading-[60px]">Aventuras criadas</h1>
            </div>
          </div>
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="text-center mt-10 md:text-3xl text-xl max-w-[700px] mx-auto uppercase">
              <p>Pablo está criando novas <span className="line-through opacity-50">histórias</span> aventuras.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Historys;