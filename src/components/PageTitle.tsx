interface Props extends React.PropsWithChildren {}

const PageTitle = ({ children }: Props) => {
  return (
    <h1 className="text-pink-300 text-3xl font-semibold mb-6 sm:text-6xl">
      {children}
    </h1>
  );
};

export default PageTitle;
