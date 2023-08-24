import "./Layout.css"; // Import your CSS file

const Layout = ({ layout, children }) => {
  const layoutMap = {
    grail: "holy-grail",
    massionary: "MassionaryLayout",
    grid: "GridLayout",
  };

  const SelectedLayout = layoutMap[layout] || "DefaultLayout";
  const [appHeader, leftSideNav, content, rightSideNav, appFooter] = children;

  return (
    <div className={SelectedLayout}>
      <header>{appHeader}</header>

      <div className={`${SelectedLayout}-body`}>
        <main className={`${SelectedLayout}-content`}>{content}</main>
        <aside className={`${SelectedLayout}-sidebar-left`}>{leftSideNav}</aside>
        <aside className={`${SelectedLayout}-sidebar-right`}>{rightSideNav}</aside>
      </div>

      <footer>{appFooter}</footer>
    </div>
  );
};

export default Layout;
