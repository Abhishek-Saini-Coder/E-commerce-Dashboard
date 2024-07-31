export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#orders">Orders</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
