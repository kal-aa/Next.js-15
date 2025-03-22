const layout = ({ children }: { children: React.ReactNode }) => {
  // const getRandonInt = (num: number) => {
  //   return Math.floor(Math.random() * num);
  // };

  // const random = getRandonInt(2);

  // if (random === 1) {
  //   throw new Error("Too bad, Error has occured");
  // }
  
  return (
    <div>
      <h1 className="heading">layout Login</h1>
      {children}
    </div>
  );
};

export default layout;
