export function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="bg-primary py-6 text-white shadow-md">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-2xl font-bold">Nx Shop</h1>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto p-6">
        <h2 className="text-xl font-semibold mb-6">Featured Products</h2>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="h-48 bg-ink-lighter" />
              <div className="p-4">
                <p className="text-sm text-ink-light mb-1">{product.category}</p>
                <h3 className="font-semibold text-ink mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-dark">
                    ${product.price}
                  </span>
                  {product.inStock ? (
                    <span className="text-xs text-success font-medium">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-xs text-error font-medium">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const products = [
  { name: 'Wireless Headphones', category: 'Electronics', price: '79.99', inStock: true },
  { name: 'Running Shoes', category: 'Sports', price: '129.99', inStock: true },
  { name: 'Coffee Maker', category: 'Kitchen', price: '49.99', inStock: false },
  { name: 'Backpack', category: 'Travel', price: '59.99', inStock: true },
  { name: 'Smart Watch', category: 'Electronics', price: '199.99', inStock: true },
  { name: 'Yoga Mat', category: 'Sports', price: '29.99', inStock: true },
];

export default App;
