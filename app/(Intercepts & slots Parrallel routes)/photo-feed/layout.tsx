type Props = {
  children: React.ReactNode;
  modal: React.ReactNode | null;
};

export default function Layout({ children, modal }: Props) {
  return (
    <>
      {children}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white p- rounded-lg shadow-md shadow-amber-700">
          {modal}
        </div>
      </div>
    </>
  );
}
