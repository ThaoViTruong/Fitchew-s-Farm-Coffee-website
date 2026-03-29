import { Link, NavLink } from 'react-router-dom'
import logoSrc from '../assets/Logo.png'

export default function Navbar({
  brand = "Fitchew's Farm Coffee",
  items = [
    { label: 'Trang Chủ', to: '/' },
    { label: 'Thực Đơn', to: '/thuc-don' },
    { label: 'Sản Phẩm', to: '/san-pham' },
    { label: 'Câu Chuyện', to: '/cau-chuyen' },
  ],
  ctaLabel = 'Liên Hệ Ngay',
  ctaTo = '/lien-he',
}) {
  return (
    <nav className="sticky top-0 z-40 bg-[#fcf9f4] dark:bg-[#271310] w-full">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
        <Link
          className="flex items-center gap-3 text-[#271310] dark:text-[#fcf9f4] font-headline tracking-tighter"
          to="/"
        >
          <img className="h-15 w-15 rounded-full object-cover" src={logoSrc} alt={`${brand} logo`} />
          <span className="text-3xl font-bold italic">{brand}</span>
        </Link>

        <div className="hidden md:flex items-center gap-x-12">
          {items.map((item) => (
            <NavLink
              key={`${item.label}-${item.to}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#271310] dark:text-[#fcf9f4] border-b-2 border-[#526254] pb-1 font-bold inline-flex transition-transform duration-200 hover:scale-110'
                  : 'text-[#526254] dark:text-[#d3c3c0] font-medium inline-flex transition-transform duration-200 hover:scale-110'
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          className="bg-primary text-on-primary px-6 py-2 rounded-sm font-label uppercase tracking-widest text-medium font-bold hover:opacity-90 transition-all inline-flex items-center justify-center"
          to={ctaTo}
        >
          {ctaLabel}
        </Link>
      </div>
      <div className="bg-[#f6f3ee] dark:bg-[#3e2723] h-px w-full" />
    </nav>
  )
}
