import CustomerDisplay from "../components/CustomerDisplay";
import Sidebar from "../Dashboard/Sidebars";
import "./pages.css";
function Customers() {
  return (
    <div className="customer-container">
      <div>
        <Sidebar />
      </div>
      <div className="col-16" id="main">
        <CustomerDisplay />
      </div>
    </div>
  );
}

export default Customers;
