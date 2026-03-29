import { Link } from 'react-router-dom'
import Caffe_sua_da from '../assets/menu_sua_da.jpg'
import Caffe_trung from '../assets/menu_trung.jpg'
import Caffe_cot_dua from '../assets/menu_cot_dua.jpg'

export default function SignatureBlendsSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-headline text-5xl text-primary leading-tight">
              Hương Vị Đặc Trưng
            </h2>
          </div>
          <p className="max-w-md text-on-surface-variant font-body">
            Khám phá những công thức pha chế độc bản, kết hợp giữa kỹ thuật truyền thống
            và gu thưởng thức hiện đại.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto md:h-[800px]">
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-sm bg-primary">
            <img
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Cà phê sữa đá"
              src={Caffe_sua_da}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 p-10 text-white">
              <h3 className="font-headline text-3xl mb-2 italic">
                Cà Phê Sữa Đá Sài Gòn
              </h3>
              <p className="font-body text-sm opacity-80 mb-6 max-w-sm">
                Hương vị biểu tượng với sữa đặc đặc sánh và hạt Robusta đậm đà.
              </p>
              <span className="text-xl font-headline">55.000đ</span>
            </div>
          </div>

          <div className="md:col-span-2 group relative overflow-hidden rounded-sm bg-surface-container-highest flex">
            <div className="w-1/2 p-8 flex flex-col justify-center">
              <span className="text-xs font-label text-secondary uppercase tracking-widest mb-2">
                Độc Bản
              </span>
              <h3 className="font-headline text-2xl mb-2 italic text-primary">
                Cà Phê Trứng 
              </h3>
              <p className="text-lg text-on-surface-variant mb-4">
                Lớp kem trứng bông mịn như lụa tan chảy trong espresso nóng.
              </p>
              <span className="text-lg font-headline text-primary">65.000đ</span>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale-[10%] group-hover:scale-110 transition-transform duration-500"
                alt="Cà phê trứng"
                src={Caffe_trung}
              />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-sm bg-surface-container-high">
            <img
              className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500"
              alt="Cà phê nước cốt dừa"
              src={Caffe_cot_dua}
            />
            <div className="absolute inset-0 burlap-overlay flex flex-col justify-end p-6">
              <h3 className="font-headline text-xl text-white italic">
                Cà phê nước cốt dừa
              </h3>
              <span className="text-white text-sm opacity-80">45.000đ</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-sm bg-secondary">
            <div className="p-6 h-full flex flex-col justify-between text-white">
              <span className="material-symbols-outlined text-4xl">restaurant_menu</span>
              <div>
                <h3 className="font-headline text-xl mb-2">Xem Toàn Bộ Menu</h3>
                <p className="text-xs opacity-80">
                  Hơn 15 loại thức uống và sản phẩm.
                </p>
              </div>
              <Link
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-secondary transition-all"
                to="/thuc-don"
                aria-label="Xem thực đơn"
              >
                <span className="material-symbols-outlined">arrow_outward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
