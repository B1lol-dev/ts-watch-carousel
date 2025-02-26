interface IContainer {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainer) => {
  return <div className="max-w-[1400px] px-4 w-full mx-auto">{children}</div>;
};
