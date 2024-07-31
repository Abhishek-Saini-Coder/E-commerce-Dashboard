import dynamic from "next/dynamic";
import Layout from "../components/Layout";

const ProductCatalog = dynamic(() => import("product-catalog/ProductList"), {
  ssr: false,
});
const OrderManagement = dynamic(() => import("order-management/OrderList"), {
  ssr: false,
});
const UserProfile = dynamic(() => import("user-profile/ProfileInfo"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <h1>E-commerce Dashboard</h1>
      <div>
        <h2>Product Catalog</h2>
        <ProductCatalog />
      </div>
      <div>
        <h2>Order Management</h2>
        <OrderManagement />
      </div>
      <div>
        <h2>User Profile</h2>
        <UserProfile />
      </div>
    </Layout>
  );
}
