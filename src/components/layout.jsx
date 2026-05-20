import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      <Nav/>
    
      <main>{children}</main>
    </div>
  );
};

export default Layout;