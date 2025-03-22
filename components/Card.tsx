const Card = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className="p-[100px] m-[10px] shadow-red-400 shadow-2xl border flex justify-center items-center">
      {children}
    </div>
  );
};

export default Card;
