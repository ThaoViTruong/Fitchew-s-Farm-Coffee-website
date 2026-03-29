import logoSrc from '../assets/Logo.png'
import { Link } from 'react-router-dom'

export default function Footer({
  brand = "Fitchew's Farm Coffee",
  address = '13 đường số 11, Linh Chiểu, Thủ Đức',
  hotline = '0343213540',
  columns = [
    {
      title: 'VỀ CHÚNG TÔI',
      links: [
        { label: 'Trang Chủ', to: '/' },
        { label: 'Thực đơn', to: '/thuc-don' },
        { label: 'Sản phẩm', to: '/san-pham' },
        { label: 'Câu chuyện', to: '/cau-chuyen' },


      ],
    },
    {
      title: 'GIAO HÀNG NHANH',
      links: [
        { label: `Hotline: ${hotline}`, href: `tel:${hotline}` },
        { label: 'Chăm sóc khách hàng: thaovicotntctv@gmail.com', href: 'mailto:thaovicotntctv@gmail.com' },
      ],
    },
    {
      title: 'HỖ TRỢ KHÁCH HÀNG',
      links: [
        { label: 'Các hình thức thanh toán', to: '/ho-tro/thanh-toan' },
        { label: 'Hướng dẫn đổi trả và hoàn tiền', to: '/ho-tro/doi-tra' },
        { label: 'Hướng dẫn mua hàng', to: '/ho-tro/mua-hang' },
        { label: 'Chính sách giao nhận/vận chuyển', to: '/ho-tro/van-chuyen' },
        { label: 'Chính sách bảo mật thông tin', to: '/ho-tro/bao-mat' },
      ],
    },
  ]
}) {
  return (
    <footer className="mt-20 bg-primary text-on-primary  ">
      <div className="border-t-2 border-secondary" />
      <div className="max-w-screen-2xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-3">
            <div className="flex items-center gap-4">
              <img className="h-16 w-auto rounded-full" src={logoSrc} alt={`${brand} logo`} />
              <div className="font-headline italic text-lg leading-tight">{brand}</div>
            </div>

            <div className="mt-6 space-y-3 text-xs text-on-primary/85">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base leading-none">
                  location_on
                </span>
                <span>{address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base leading-none">
                  call
                </span>
                <a className="hover:text-secondary-container transition-colors" href={`tel:${hotline}`}>
                  {hotline}
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="font-label uppercase tracking-widest text-xs font-semibold mb-5">
                  {col.title}
                </div>
                <ul className="space-y-2 text-sm text-on-primary/85">
                  {col.links.map((l) => (
                    <li key={`${l.label}-${l.href ?? l.to}`}>
                      {l.to ? (
                        <Link className="hover:text-secondary-container transition-colors" to={l.to}>
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          className="hover:text-secondary-container transition-colors"
                          href={l.href}
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
