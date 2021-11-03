import Footer from "components/Footer";
import DataTable from "components/DataTable";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        
        <h1 className="text-primary">Óla mundo!</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );

}

export default App;
