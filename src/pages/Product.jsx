import { useState } from 'react'
import { Link } from 'react-router-dom'
import spAmNuoc from '../assets/sp_am_nuoc.png'
import spBoDungCuPha from '../assets/sp_dung_cu_pha.png'
import spHat250 from '../assets/sp_hat_250g.jpg'
import spHat500 from '../assets/sp_hat_500g.png'
import spMayXayTay from '../assets/sp_may_xay_bang_tay.png'
import spNuocCot from '../assets/sp_nuoc_cot_pha_san.png'
import spBoQuaTang from '../assets/sp_bo_qua_tang.png'
import spXay250 from '../assets/sp_xay_250g.png'
import spXay500 from '../assets/sp_xay_500g.png'
import { cacLoaiHatBot, nhomSanPham } from '../data/product'

function dinhDangGiaVnd(gia) {
  return `${new Intl.NumberFormat('vi-VN').format(gia)}đ`
}

function taoIdDanhMuc(tieuDe) {
  const chuThuong = tieuDe.toLowerCase()
  const boDau = chuThuong.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const chiChuVaSo = boDau.replace(/[^a-z0-9]+/g, '-')
  const catDauCuoi = chiChuVaSo.replace(/(^-|-$)/g, '')
  return `danh-muc-${catDauCuoi}`
}

function ModalChiTietSanPham({
  mo,
  nhom,
  sanPham,
  anh,
  daChon = [],
  onDoi,
  onDong,
  onXacNhan,
}) {
  if (!mo || !sanPham) return null

  const coLuaChon = sanPham.coTheChonLoai

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/55" onClick={onDong} />
      <div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
        <div className="w-full max-w-5xl bg-surface rounded-sm border border-surface-container-highest shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 bg-surface-container-low">
              <div className="relative">
                <img
                  className="w-full max-h-[70vh] object-contain"
                  src={anh}
                  alt={sanPham.tenSanPham}
                />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface/85 text-primary text-xs uppercase tracking-[0.22em] font-label font-bold">
                    Xem chi tiết
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                      {nhom ?? 'Sản phẩm'}
                    </div>
                    <h3 className="font-headline italic text-3xl text-primary mt-2">{sanPham.tenSanPham}</h3>
                    <div className="mt-3 font-label font-bold tracking-wide text-on-surface">
                      {dinhDangGiaVnd(sanPham.gia)}
                    </div>
                  </div>
                  <button
                    className="w-10 h-10 rounded-sm border border-surface-container-highest text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors"
                    type="button"
                    onClick={onDong}
                    aria-label="Đóng"
                  >
                    ✕
                  </button>
                </div>

                <p className="mt-5 text-on-surface-variant leading-relaxed text-base md:text-lg">
                  {sanPham.moTa}
                </p>

                {coLuaChon ? (
                  <div className="mt-8">
                    <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                      Tuỳ chọn loại
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {cacLoaiHatBot.map((loai) => {
                        const dangChon = daChon.includes(loai)
                        return (
                          <button
                            key={loai}
                            type="button"
                            onClick={() => onDoi(loai)}
                            className={`px-4 py-2 rounded-sm border text-sm font-label tracking-wide transition-colors ${
                              dangChon
                                ? 'bg-primary text-on-primary border-primary'
                                : 'bg-surface text-on-surface border-surface-container-highest hover:border-primary/40'
                            }`}
                          >
                            {loai}
                          </button>
                        )
                      })}
                    </div>

                    <div className="mt-5 text-on-surface-variant">
                      Đã chọn:{' '}
                      <span className="text-on-surface">{daChon.length ? daChon.join(', ') : 'Chưa có'}</span>
                    </div>
                  </div>
                ) : null}

                <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <Link
                    className="text-primary underline underline-offset-4"
                    to="/lien-he"
                    onClick={onDong}
                  >
                    Liên hệ tư vấn
                  </Link>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="px-5 py-3 rounded-sm border border-surface-container-highest text-on-surface hover:border-primary/40 transition-colors font-label tracking-wide"
                      onClick={onDong}
                    >
                      Đóng
                    </button>
                    {coLuaChon ? (
                      <button
                        type="button"
                        className="px-5 py-3 rounded-sm bg-primary text-on-primary hover:opacity-90 transition-opacity font-label tracking-wide"
                        onClick={onXacNhan}
                      >
                        Lưu lựa chọn
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TheSanPham({ sanPham, anh, luaChonLoai = [], onChon }) {
  const coLuaChon = sanPham.coTheChonLoai

  return (
    <button
      type="button"
      onClick={() => onChon(sanPham)}
      className={`text-left border rounded-sm overflow-hidden transition-colors ${
        coLuaChon
          ? 'border-surface-container-highest bg-surface hover:border-primary/35'
          : 'border-surface-container-highest bg-surface'
      }`}
    >
      <div className="relative">
        <img className="w-full h-56 object-cover" src={anh} alt={sanPham.tenSanPham} />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        {coLuaChon ? (
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface/80 text-primary text-xs uppercase tracking-[0.22em] font-label font-bold">
              Chọn loại
            </span>
          </div>
        ) : null}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-6">
          <h3 className="font-headline italic text-2xl text-primary leading-tight">{sanPham.tenSanPham}</h3>
          <div className="font-label font-bold tracking-wide whitespace-nowrap text-on-surface">
            {dinhDangGiaVnd(sanPham.gia)}
          </div>
        </div>
        <p className="mt-3 text-on-surface-variant leading-relaxed text-base">{sanPham.moTa}</p>

        {coLuaChon ? (
          <div className="mt-5 text-sm text-on-surface-variant">
            Loại đã chọn:{' '}
            <span className="text-on-surface">
              {luaChonLoai.length ? luaChonLoai.join(', ') : 'Chưa chọn'}
            </span>
          </div>
        ) : (
          <div className="mt-5 text-sm text-on-surface-variant">Nhấn để xem tại quầy ở Sài Gòn</div>
        )}
      </div>
    </button>
  )
}

export default function Product() {
  const anhTheoId = {
    'hat-250': spHat250,
    'hat-500': spHat500,
    'xay-250': spXay250,
    'xay-500': spXay500,
    'nuoc-cot': spNuocCot,
    'am-co-ngong': spAmNuoc,
    'may-xay-tay': spMayXayTay,
    'bo-dung-cu-pha': spBoDungCuPha,
    'bo-qua-tang': spBoQuaTang,
  }

  const danhMuc = ['Tất cả', ...nhomSanPham.map((n) => n.tieuDe)]
  const [danhMucDangChon, setDanhMucDangChon] = useState('Tất cả')

  const [sanPhamDangChon, setSanPhamDangChon] = useState(null)
  const [nhomDangChon, setNhomDangChon] = useState(null)
  const [anhDangChon, setAnhDangChon] = useState(null)
  const [dangMoModal, setDangMoModal] = useState(false)
  const [luaChonLoaiTheoId, setLuaChonLoaiTheoId] = useState({})
  const [luaChonTam, setLuaChonTam] = useState([])

  function timSanPhamTheoId(id) {
    for (const nhom of nhomSanPham) {
      for (const sanPham of nhom.sanPham) {
        if (sanPham.id === id) return { sanPham, nhom: nhom.tieuDe }
      }
    }
    return null
  }

  const nhomHienThi = nhomSanPham

  function chonDanhMuc(dm) {
    setDanhMucDangChon(dm)
    const id = dm === 'Tất cả' ? 'danh-sach-san-pham' : taoIdDanhMuc(dm)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  function moChiTiet(sp, nhom) {
    setSanPhamDangChon(sp)
    setNhomDangChon(nhom ?? null)
    setAnhDangChon(anhTheoId[sp.id] ?? null)
    setLuaChonTam(sp.coTheChonLoai ? luaChonLoaiTheoId[sp.id] ?? [] : [])
    setDangMoModal(true)
  }

  function dongModal() {
    setDangMoModal(false)
    setSanPhamDangChon(null)
    setNhomDangChon(null)
    setAnhDangChon(null)
    setLuaChonTam([])
  }

  function doiLoai(loai) {
    setLuaChonTam((cu) => (cu.includes(loai) ? cu.filter((x) => x !== loai) : [...cu, loai]))
  }

  function xacNhanLoai() {
    if (!sanPhamDangChon) return
    setLuaChonLoaiTheoId((cu) => ({ ...cu, [sanPhamDangChon.id]: luaChonTam }))
    dongModal()
  }

  return (
    <main>
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">

              <h1 className="font-headline italic text-6xl md:text-7xl text-primary mt-4 tracking-tighter">
                Nghệ thuật pha chế thủ công.
              </h1>
              <p className="mt-6 text-on-surface-variant leading-loose max-w-2xl text-base md:text-lg">
                Từ hạt rang đến dụng cụ pha, mọi thứ được chọn lọc để bạn tự tạo ra một ly cà phê “đúng gu” tại nhà. Chúng tôi cung cấp các sản phẩm chất lượng với tiêu chí 3 KHÔNG: <br />
                "KHÔNG chất bảo quản"<br/>
                 "KHÔNG chất tạo màu"<br/>
                 "KHÔNG pha các loại hạt khác"<br />
                  Quán hiện chỉ phục vụ tại <span className="text-on-surface font-bold">Sài Gòn</span>.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  className="bg-primary text-on-primary px-7 py-4 rounded-sm font-label uppercase tracking-widest text-sm font-bold inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
                  to="/lien-he"
                >
                  Tư vấn chọn gu <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <div className="px-7 py-4 rounded-sm border border-surface-container-highest bg-surface text-on-surface-variant">
                  Gợi ý: Hạt/Bột có thể chọn nhiều loại
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-sm">
                <img className="w-full h-[360px] md:h-[460px] object-cover" src={spAmNuoc} alt="Ấm cổ ngỗng" />
                <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
                <div className="absolute left-6 bottom-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface/75 text-primary text-xs uppercase tracking-[0.22em] font-label font-bold">
                    Nổi bật
                  </div>
                  <div className="mt-3 font-headline italic text-3xl text-surface drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                    Ấm cổ ngỗng
                  </div>
                  <div className="mt-2 text-surface/90 text-base md:text-lg leading-relaxed">
                    Kiểm soát dòng rót mượt mà để pha pour-over chuẩn vị.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-28">
                <div className="text-xs uppercase tracking-[0.32em] font-label text-on-surface-variant">
                  Danh mục sản phẩm
                </div>
                <div className="mt-5 border border-surface-container-highest rounded-sm bg-surface overflow-hidden">
                  {danhMuc.map((dm) => {
                    const dangChon = dm === danhMucDangChon
                    return (
                      <button
                        key={dm}
                        type="button"
                        onClick={() => chonDanhMuc(dm)}
                        className={`w-full text-left px-5 py-4 border-b last:border-b-0 border-surface-container-highest transition-colors ${
                          dangChon
                            ? 'bg-secondary-container text-primary font-bold'
                            : 'bg-surface text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        {dm}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-8 p-6 rounded-sm bg-surface-container-low border border-surface-container-highest text-on-surface-variant">
                  <div className="text-xs uppercase tracking-[0.28em] font-label font-bold text-primary">
                    Lưu ý
                  </div>
                  <div className="mt-3 leading-relaxed text-base">
                    Hạt và bột cà phê có thể chọn nhiều loại: Arabica, Robusta, Cherry, Culi, Moca.
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div id="danh-sach-san-pham" className="scroll-mt-32" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <button
                  type="button"
                  onClick={() => {
                    const item = timSanPhamTheoId('nuoc-cot')
                    if (item) moChiTiet(item.sanPham, item.nhom)
                  }}
                  className="text-left border border-surface-container-highest rounded-sm overflow-hidden bg-surface hover:border-primary/35 transition-colors"
                >
                  <div className="relative">
                    <img className="w-full h-56 object-cover" src={spNuocCot} alt="Nước cốt pha sẵn" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                  </div>
                  <div className="p-7">
                    <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                      Tinh chất & pha sẵn
                    </div>
                    <div className="mt-2 font-headline italic text-3xl text-primary">Nước cốt pha sẵn</div>
                    <div className="mt-3 text-on-surface-variant leading-relaxed text-base">
                      Pha nhanh với đá hoặc sữa. Tiện cho văn phòng và những ngày bận rộn.
                    </div>
                    <div className="mt-5 font-label font-bold tracking-wide">{dinhDangGiaVnd(79000)}</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const item = timSanPhamTheoId('may-xay-tay')
                    if (item) moChiTiet(item.sanPham, item.nhom)
                  }}
                  className="text-left border border-surface-container-highest rounded-sm overflow-hidden bg-surface hover:border-primary/35 transition-colors"
                >
                  <div className="relative">
                    <img className="w-full h-56 object-cover" src={spMayXayTay} alt="Máy xay tay" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                  </div>
                  <div className="p-7">
                    <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                      Dụng cụ
                    </div>
                    <div className="mt-2 font-headline italic text-3xl text-primary">Máy xay tay</div>
                    <div className="mt-3 text-on-surface-variant leading-relaxed text-base">
                      Xay vừa đủ cho mỗi lần pha, giữ hương thơm tươi mới.
                    </div>
                    <div className="mt-5 font-label font-bold tracking-wide">{dinhDangGiaVnd(850000)}</div>
                  </div>
                </button>
              </div>

              {nhomHienThi.map((nhom) => (
                <section
                  key={nhom.tieuDe}
                  id={taoIdDanhMuc(nhom.tieuDe)}
                  className="mb-14 scroll-mt-32"
                >
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                      <h2 className="font-headline italic text-4xl text-primary">{nhom.tieuDe}</h2>
                      <p className="mt-4 text-on-surface-variant leading-loose text-base md:text-lg max-w-3xl">
                        {nhom.moTa}
                      </p>
                    </div>
                    <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                      Phục vụ tại Sài Gòn
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {nhom.sanPham.map((sp) => (
                      <TheSanPham
                        key={sp.id}
                        sanPham={sp}
                        anh={anhTheoId[sp.id]}
                        luaChonLoai={luaChonLoaiTheoId[sp.id] ?? []}
                        onChon={(sanPham) => moChiTiet(sanPham, nhom.tieuDe)}
                      />
                    ))}
                  </div>
                </section>
              ))}

              <div className="rounded-sm hero-gradient p-10 md:p-12 text-surface">
                <div className="text-xs uppercase tracking-[0.32em] font-label text-surface/70">
                  Gói quà tinh tế
                </div>
                <div className="mt-4 font-headline italic text-4xl md:text-5xl">Bộ quà tặng Fitchew’s Farm</div>
                <div className="mt-4 text-surface/80 leading-loose text-base md:text-lg max-w-3xl">
                  Chọn hạt/bột theo gu người nhận, thêm dụng cụ và phụ kiện để món quà trở thành một trải nghiệm trọn vẹn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalChiTietSanPham
        mo={dangMoModal}
        nhom={nhomDangChon}
        sanPham={sanPhamDangChon}
        anh={anhDangChon}
        daChon={luaChonTam}
        onDoi={doiLoai}
        onDong={dongModal}
        onXacNhan={xacNhanLoai}
      />
    </main>
  )
}
