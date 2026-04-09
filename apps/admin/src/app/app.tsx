export function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="bg-secondary py-6 text-white shadow-md">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto p-6">
        <div className="grid grid-cols-3 gap-6 mb-8 max-md:grid-cols-1">
          <div className="bg-white rounded-md p-6 shadow-sm">
            <h3 className="text-sm text-ink-light uppercase tracking-wider mb-2">Total Products</h3>
            <p className="text-2xl font-bold text-primary">156</p>
          </div>
          <div className="bg-white rounded-md p-6 shadow-sm">
            <h3 className="text-sm text-ink-light uppercase tracking-wider mb-2">Orders Today</h3>
            <p className="text-2xl font-bold text-success">24</p>
          </div>
          <div className="bg-white rounded-md p-6 shadow-sm">
            <h3 className="text-sm text-ink-light uppercase tracking-wider mb-2">Revenue</h3>
            <p className="text-2xl font-bold text-accent">$4,280</p>
          </div>
        </div>

        <div className="bg-white rounded-md p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink mb-4">Recent Orders</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-ink-lighter">
                <th className="py-3 text-sm text-ink-light font-medium">Order ID</th>
                <th className="py-3 text-sm text-ink-light font-medium">Customer</th>
                <th className="py-3 text-sm text-ink-light font-medium">Amount</th>
                <th className="py-3 text-sm text-ink-light font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-ink-lighter">
                <td className="py-3 text-sm">#1234</td>
                <td className="py-3 text-sm">Jane Cooper</td>
                <td className="py-3 text-sm font-medium">$120.00</td>
                <td className="py-3"><span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success">Completed</span></td>
              </tr>
              <tr className="border-b border-ink-lighter">
                <td className="py-3 text-sm">#1235</td>
                <td className="py-3 text-sm">Wade Warren</td>
                <td className="py-3 text-sm font-medium">$85.50</td>
                <td className="py-3"><span className="text-xs px-2 py-1 rounded-full bg-warning/10 text-warning">Pending</span></td>
              </tr>
              <tr>
                <td className="py-3 text-sm">#1236</td>
                <td className="py-3 text-sm">Esther Howard</td>
                <td className="py-3 text-sm font-medium">$210.00</td>
                <td className="py-3"><span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
