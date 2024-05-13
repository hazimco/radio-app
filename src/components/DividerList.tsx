interface Props extends React.PropsWithChildren {}

const DividerList = ({ children }: Props) => {
  return <ul className="divide-y divide-y-1 divide-slate-800">{children}</ul>;
};

export default DividerList;
