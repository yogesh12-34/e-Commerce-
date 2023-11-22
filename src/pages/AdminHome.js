import NavBar from "../features/navbar/Navbar";
import AdminProductList from "../features/Admin/components/AdminProductList";
function AdminHome() {
return (
    <div>
      <NavBar>
        <AdminProductList></AdminProductList>
      </NavBar>
    </div>
  );
}

export default AdminHome;
