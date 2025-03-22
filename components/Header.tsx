const Header = () => {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  console.log("Header rendered");

  return (
    <header className="bg-blue-500 p-[1rem]">
      <p>Header</p>
    </header>
  );
};

export default Header;
