import NavBar from "../features/navbar/Navbar";
import AdminOrders from "../features/Admin/components/AdminOrders";
function AdminOrdersPage() {
return (
    <div>
      <NavBar>
        <AdminOrders></AdminOrders>
      </NavBar>
    </div>
  );
}

export default AdminOrdersPage;
