type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section>
      <div>{children}</div>
      <div>{sidebar}</div>
    </section>
  );
};

export default NotesLayout;
