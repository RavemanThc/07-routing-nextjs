type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
};

const NotesLayout = ({ children, sidebar, modal }: Props) => {
  return (
    <section>
      <div>{children}</div>
      <div>{modal}</div>
      <div>{sidebar}</div>
    </section>
  );
};

export default NotesLayout;
