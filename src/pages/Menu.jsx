import menuBotBien from '../assets/menu_bot_bien.jpg'
import menuCotDua from '../assets/menu_cot_dua.jpg'
import menuEspresso from '../assets/menu_espresso.jpg'
import menuLatte from '../assets/menu_latte.jpg'
import menuPure from '../assets/menu_pure.jpg'
import menuSuaDa from '../assets/menu_sua_da.jpg'
import menuTrung from '../assets/menu_trung.jpg'
import { nhomThucDon } from '../data/menu'

function dinhDangGiaVnd(gia) {
  return `${new Intl.NumberFormat('vi-VN').format(gia)}đ`
}

function TheMon({ mon, anh, canh = 'trai', nen = 'sang' }) {
  const daoChieu = canh === 'phai'
  const laNenToi = nen === 'toi'
  const laCaPheTrung = mon.tenMon === 'Cà phê trứng'

  return (
    <article
      className={`grid grid-cols-1 md:grid-cols-12 gap-10 items-center ${
        laNenToi ? 'text-surface' : 'text-on-surface'
      }`}
    >
      <div className={`md:col-span-7 ${daoChieu ? 'md:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-sm">
          <img className="w-full h-[320px] md:h-[420px] object-cover" src={anh} alt={mon.tenMon} />
          <div
            className={`absolute inset-0 ${
              laNenToi ? 'bg-black/35' : 'bg-primary/25'
            } mix-blend-multiply`}
          />
          <div className="absolute left-6 bottom-6 right-6">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs uppercase tracking-[0.22em] font-label font-bold ${
                laNenToi ? 'bg-surface/15 text-surface' : 'bg-surface/70 text-primary'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Món gợi ý
            </div>
            <h3
              className={`font-headline italic text-3xl md:text-4xl mt-3 leading-tight ${
                laCaPheTrung && !laNenToi ? 'text-surface drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]' : ''
              }`}
            >
              {mon.tenMon}
            </h3>
            <p
              className={`mt-3 max-w-2xl leading-relaxed text-base md:text-lg ${
                laNenToi ? 'text-surface/90' : 'text-surface'
              }`}
            >
              {mon.moTa}
            </p>
          </div>
        </div>
      </div>

      <div className={`md:col-span-5 ${daoChieu ? 'md:order-1' : ''}`}>
        <div
          className={`border rounded-sm p-8 md:p-10 ${
            laNenToi
              ? 'border-surface/20 bg-surface/10 backdrop-blur-sm'
              : 'border-surface-container-highest bg-surface'
          }`}
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className={`text-xs uppercase tracking-[0.28em] font-label ${laNenToi ? 'text-surface/75' : 'text-on-surface-variant'}`}>
                Giá bán
              </div>
              <div className={`font-headline italic text-3xl mt-2 ${laNenToi ? 'text-surface' : 'text-primary'}`}>
                {dinhDangGiaVnd(mon.gia)}
              </div>
            </div>
            <div className={`text-xs uppercase tracking-[0.28em] font-label text-right ${laNenToi ? 'text-surface/75' : 'text-on-surface-variant'}`}>
              Tại quán
              <div className={`mt-1 ${laNenToi ? 'text-surface/60' : 'text-on-surface-variant/70'}`}>
                Sài Gòn
              </div>
            </div>
          </div>

          <div
            className={`mt-8 leading-loose text-base md:text-lg ${
              laNenToi ? 'text-surface/85' : 'text-on-surface-variant'
            }`}
          >
            <div className="font-label font-bold tracking-wide uppercase text-xs mb-3">
              Gợi ý trải nghiệm
            </div>
            Uống nóng để cảm nhận hương rang rõ nhất; uống đá cho hậu vị mượt và thơm lâu. Có thể điều chỉnh độ ngọt theo yêu cầu.
          </div>

          <div className="mt-10 pt-6 border-t border-current/10">
            <div className={`text-xs uppercase tracking-[0.28em] font-label ${laNenToi ? 'text-surface/70' : 'text-on-surface-variant'}`}>
              Dịp phù hợp
            </div>
            <div className={`mt-2 ${laNenToi ? 'text-surface' : 'text-on-surface'}`}>
              Sáng sớm, giờ nghỉ trưa, hoặc những buổi chiều muốn chậm lại.
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function DanhSachMon({ danhSach, anhTheoMon, nen = 'sang' }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {danhSach.map((mon) => (
        <div
          key={mon.tenMon}
          className={`border rounded-sm p-8 ${
            nen === 'toi'
              ? 'border-surface/15 bg-surface/10 backdrop-blur-sm text-surface'
              : 'border-surface-container-highest bg-surface text-on-surface'
          }`}
        >
          <div className="flex items-start gap-6">
            <img
              className="w-24 h-24 rounded-sm object-cover shrink-0"
              src={anhTheoMon[mon.tenMon]}
              alt={mon.tenMon}
            />
            <div className="min-w-0">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-headline italic text-2xl leading-tight truncate">{mon.tenMon}</h4>
                <div className="font-label font-bold tracking-wide whitespace-nowrap">
                  {dinhDangGiaVnd(mon.gia)}
                </div>
              </div>
              <p
                className={`${
                  nen === 'toi' ? 'text-surface/85' : 'text-on-surface-variant'
                } mt-3 leading-relaxed text-base md:text-lg`}
              >
                {mon.moTa}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Menu() {
  const anhTheoMon = {
    'Cà phê trứng': menuTrung,
    'Cà phê cốt dừa': menuCotDua,
    'Cà phê bọt biển': menuBotBien,
    'Cà phê nguyên chất': menuPure,
    'Cà phê sữa đá': menuSuaDa,
    'Cà phê Espresso': menuEspresso,
    'Cà phê Latte': menuLatte,
  }

  const nhomDacTrung = nhomThucDon[0]
  const nhomKinhDien = nhomThucDon[1]

  return (
    <main>
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.32em] font-label text-on-surface-variant">
                Rang thủ công truyền thống
              </div>
              <h1 className="font-headline text-6xl md:text-7xl text-primary italic mt-4 tracking-tighter">
                Thực đơn tại quán
              </h1>
              <p className="text-on-surface-variant max-w-2xl leading-loose mt-6 text-base md:text-lg">
                Một bộ sưu tập đồ uống được chọn lọc để bạn nhâm nhi chậm rãi. Mỗi món là một mùi hương, một hồi ức và
                một nhịp sống dịu lại giữa ngày.
              </p>
            </div>

            <div className="flex items-start gap-10">
              <div className="hidden sm:block text-vertical uppercase tracking-[0.28em] text-on-surface-variant text-xs">
                Fitchew’s Farm
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                  Phục vụ tại quán
                </div>
                <div className="mt-2 font-headline italic text-2xl text-primary">Sài Gòn</div>
                <div className="mt-2 text-on-surface-variant">Giờ mở cửa: 07:00 – 22:00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex items-end justify-between gap-8 mb-10">
            <div>
              <h2 className="font-headline italic text-4xl md:text-5xl text-primary">{nhomDacTrung.tieuDe}</h2>
              <p className="mt-4 text-on-surface-variant max-w-2xl leading-loose text-base md:text-lg">
                {nhomDacTrung.moTa}
              </p>
            </div>
            <div className="hidden lg:block text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
              Chọn món theo gu
            </div>
          </div>

          <TheMon mon={nhomDacTrung.mon[0]} anh={anhTheoMon[nhomDacTrung.mon[0].tenMon]} />

          <div className="mt-14">
            <DanhSachMon danhSach={nhomDacTrung.mon.slice(1)} anhTheoMon={anhTheoMon} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-on-primary">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="rounded-sm hero-gradient p-10 md:p-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div>

                <h2 className="font-headline italic text-4xl md:text-5xl text-surface mt-4">{nhomKinhDien.tieuDe}</h2>
                <p className="mt-5 text-surface/80 max-w-2xl leading-loose text-base md:text-lg">
                  {nhomKinhDien.moTa}
                </p>
              </div>
              <div className="text-xs uppercase tracking-[0.28em] font-label text-surface/70">
                Pha chuẩn gu Việt
              </div>
            </div>

            <div className="mt-12">
              <TheMon
                mon={nhomKinhDien.mon[0]}
                anh={anhTheoMon[nhomKinhDien.mon[0].tenMon]}
                canh="phai"
                nen="toi"
              />
            </div>

            <div className="mt-14">
              <DanhSachMon danhSach={nhomKinhDien.mon.slice(1)} anhTheoMon={anhTheoMon} nen="toi" />
            </div>

            <div className="mt-14 text-center text-surface/70">
              “Chúng tôi không vội. Chúng tôi phục vụ thời gian để bạn thưởng thức trọn vẹn.”
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
