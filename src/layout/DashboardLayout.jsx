import { Outlet, Link, useLocation } from "react-router";

export default function DashboardLayout() {
  const location = useLocation();
  const menus = [
    { name: "Send Money", path: "/dashboard" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "transaction", path: "/dashboard/transaction" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-xl font-bold mb-6">My App</h1>
        <nav className="space-y-2">
          {menus.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded 
                ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-200"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
