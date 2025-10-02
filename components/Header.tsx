const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
           
            <h1 className="text-[20px] font-bold text-gray-900">株式会社MOGCIA</h1>
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all font-semibold shadow-lg"
            >
              無料相談
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
