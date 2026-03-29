import spBoQuaTang from '../assets/sp_bo_qua_tang.png'

export default function Contact() {
  const diaChi = '13 đường số 11, Linh Chiểu, Thủ Đức'
  const hotline = '0343213540'
  const email = 'thaovicotntctv@gmail.com'
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(diaChi)}&output=embed`

  function guiEmail(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const hoTen = String(data.get('hoTen') ?? '').trim()
    const emailNguoiGui = String(data.get('email') ?? '').trim()
    const soDienThoai = String(data.get('soDienThoai') ?? '').trim()
    const chuDe = String(data.get('chuDe') ?? '').trim()
    const noiDung = String(data.get('noiDung') ?? '').trim()

    const tieuDe = `Liên hệ từ website${hoTen ? ` - ${hoTen}` : ''}`
    const body = [
      `Họ và tên: ${hoTen || '(Không cung cấp)'}`,
      `Email: ${emailNguoiGui || '(Không cung cấp)'}`,
      `Số điện thoại: ${soDienThoai || '(Không cung cấp)'}`,
      `Chủ đề: ${chuDe || '(Không cung cấp)'}`,
      '',
      'Nội dung:',
      noiDung || '(Không có nội dung)',
    ].join('\n')

    const mailto = `mailto:${email}?subject=${encodeURIComponent(tieuDe)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <main>
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.32em] font-label text-on-surface-variant">
                Kết nối cùng Fitchew’s Farm
              </div>
              <h1 className="font-headline italic text-6xl md:text-7xl text-primary mt-4 tracking-tighter">
                Liên hệ với chúng tôi.
              </h1>
              <p className="mt-6 text-on-surface-variant leading-loose max-w-2xl text-base md:text-lg">
                Nếu bạn cần tư vấn chọn gu, đặt quà tặng hoặc muốn hợp tác, hãy để lại lời nhắn. Chúng tôi sẽ phản hồi
                sớm nhất có thể.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-sm border border-surface-container-highest bg-surface">
                <img
                  className="w-full h-[320px] md:h-[420px] object-cover"
                  src={spBoQuaTang}
                  alt="Bộ quà tặng Fitchew’s Farm"
                />
                <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
                <div className="absolute left-6 bottom-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface/75 text-primary text-xs uppercase tracking-[0.22em] font-label font-bold">
                    Hỗ trợ nhanh
                  </div>
                  <div className="mt-3 font-headline italic text-3xl text-surface drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                    Chỉ cần gủi một tin, chúng tôi sẵn sàng.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="border border-surface-container-highest rounded-sm overflow-hidden bg-surface">
            <div className="relative">
              <iframe
                title="Bản đồ Fitchew’s Farm"
                src={mapSrc}
                className="w-full h-[320px] md:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute left-6 top-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface/85 text-primary text-xs uppercase tracking-[0.22em] font-label font-bold">
                  <span className="material-symbols-outlined text-base leading-none">location_on</span>
                  {diaChi}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.32em] font-label text-on-surface-variant">
                Thông tin liên hệ
              </div>

              <div className="mt-6 space-y-4 text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg leading-none text-primary">location_on</span>
                  <div>
                    <div className="text-on-surface font-bold">Địa chỉ</div>
                    <div className="mt-1 leading-relaxed">{diaChi}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg leading-none text-primary">call</span>
                  <div>
                    <div className="text-on-surface font-bold">Hotline</div>
                    <a className="mt-1 inline-block hover:text-primary transition-colors" href={`tel:${hotline}`}>
                      {hotline}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg leading-none text-primary">mail</span>
                  <div>
                    <div className="text-on-surface font-bold">Email</div>
                    <a className="mt-1 inline-block hover:text-primary transition-colors" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg leading-none text-primary">schedule</span>
                  <div>
                    <div className="text-on-surface font-bold">Giờ mở cửa</div>
                    <div className="mt-1">07:00 – 22:00</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-sm bg-surface border border-surface-container-highest text-on-surface-variant">
                “Tách cà phê ngon nhất là tách cà phê được thưởng thức cùng những tâm hồn đồng điệu.”
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="border-[3px] border-primary/30 rounded-sm bg-surface p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.32em] font-label text-on-surface-variant">
                  Gửi lời nhắn
                </div>
                <h2 className="mt-3 font-headline italic text-4xl text-primary">Chúng tôi lắng nghe.</h2>
                <p className="mt-4 text-on-surface-variant leading-relaxed text-base md:text-lg max-w-2xl">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại để hỗ trợ bạn nhanh nhất.
                </p>

                <form className="mt-8" onSubmit={guiEmail}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="block">
                      <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                        Họ và tên
                      </div>
                      <input
                        className="mt-2 w-full rounded-sm border border-surface-container-highest bg-surface px-4 py-3 outline-none focus:border-primary/40"
                        name="hoTen"
                        placeholder="Ví dụ: Nguyễn Văn A"
                      />
                    </label>

                    <label className="block">
                      <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                        Email
                      </div>
                      <input
                        className="mt-2 w-full rounded-sm border border-surface-container-highest bg-surface px-4 py-3 outline-none focus:border-primary/40"
                        name="email"
                        placeholder="email@domain.com"
                      />
                    </label>

                    <label className="block">
                      <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                        Số điện thoại
                      </div>
                      <input
                        className="mt-2 w-full rounded-sm border border-surface-container-highest bg-surface px-4 py-3 outline-none focus:border-primary/40"
                        name="soDienThoai"
                        placeholder="Nhập số điện thoại"
                      />
                    </label>

                    <label className="block">
                      <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                        Chủ đề
                      </div>
                      <select
                        className="mt-2 w-full rounded-sm border border-surface-container-highest bg-surface px-4 py-3 outline-none focus:border-primary/40"
                        name="chuDe"
                        defaultValue="tu-van"
                      >
                        <option value="tu-van">Tư vấn chọn gu</option>
                        <option value="don-hang">Đặt hàng / Quà tặng</option>
                        <option value="hop-tac">Hợp tác</option>
                        <option value="khac">Khác</option>
                      </select>
                    </label>
                  </div>

                  <label className="block mt-6">
                    <div className="text-xs uppercase tracking-[0.28em] font-label text-on-surface-variant">
                      Nội dung
                    </div>
                    <textarea
                      className="mt-2 w-full min-h-36 rounded-sm border border-surface-container-highest bg-surface px-4 py-3 outline-none focus:border-primary/40"
                      name="noiDung"
                      placeholder="Hãy cho chúng tôi biết bạn cần hỗ trợ gì..."
                    />
                  </label>

                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-on-surface-variant text-sm">
                      Hoặc gọi trực tiếp: <a className="text-primary underline underline-offset-4" href={`tel:${hotline}`}>{hotline}</a>
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-on-primary px-8 py-4 rounded-sm font-label uppercase tracking-widest text-sm font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-3 justify-center"
                    >
                      Gửi email <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
