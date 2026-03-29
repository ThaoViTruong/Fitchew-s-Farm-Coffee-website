import quietSpace from '../assets/quiet-space.jpg'

export default function QuietSpaceCommunitySection({
  title = (
    <>
      Không gian tĩnh
      <br />
      lặng giữa phố thị.
    </>
  ),
  description = `Fitchew's Farm mang đến một điểm hẹn bình yên, nơi tiếng chim hót và mùi hương cà phê mới rang hòa quyện. Một không gian thiết kế theo phong cách Indochine cổ điển, nơi bạn có thể chậm lại và tận hưởng từng khoảnh khắc.`,
  hoursLabel = 'GIỜ MỞ CỬA',
  hoursValue = '07:00 AM - 10:00 PM',
  addressLabel = 'ĐỊA CHỈ',
  addressValue = '13 ĐƯỜNG SỐ 11, LINH CHIỂU, THỦ ĐỨC, TP.HCM',
  imageAlt = 'Không gian yên tĩnh của Fitchew\'s Farm',
  imageSrc = quietSpace,
  communityTitle = "Tham gia cùng cộng đồng Fitchew's Farm",
  communityDescription = 'Nhận tin tức về các loại hạt mới và các sự kiện thân mật cà phê đặc biệt.',
  emailPlaceholder = 'Nhập địa chỉ email của bạn.',
  submitLabel = 'ĐĂNG KÝ',
}) {
  return (
    <section className="mt-20">
      <div className="bg-[#1a0d0b] text-[#fcf9f4]">
        <div className="max-w-screen-2xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-headline text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6 italic">
                {title}
              </h2>
              <p className="text-[#d3c3c0]/80 leading-relaxed max-w-md">
                {description}
              </p>

              <div className="mt-10 space-y-4 text-[11px] font-label uppercase tracking-[0.25em]">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-10 bg-[#526254]" />
                  <div className="text-lg">
                    <div className="text-[#d3c3c0]/70">{hoursLabel}</div>
                    <div className="mt-1 text-[#fcf9f4]/90 tracking-[0.18em]">
                      {hoursValue}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-10 bg-[#526254]" />
                  <div className="text-lg">
                    <div className="text-[#d3c3c0]/70">{addressLabel}</div>
                    <div className="mt-1 text-[#fcf9f4]/90 tracking-[0.18em]">
                      {addressValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#0f0706] p-6 md:p-10 rounded-sm">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-black/10">
                  <img
                    className="w-full h-full object-cover"
                    alt={imageAlt}
                    src={imageSrc}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0ede8] text-[#271310]">
          <div className="max-w-screen-2xl mx-auto px-8 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-headline italic text-2xl md:text-3xl mb-4">
                {communityTitle}
              </h3>
              <p className="text-on-surface-variant">{communityDescription}</p>

              <form className="mt-10 max-w-xl mx-auto">
                <div className="flex border-2 border-[#271310]/25 rounded-xl overflow-hidden">
                  <input
                    className="flex-1 bg-transparent outline-none placeholder:text-[#271310]/40 font-label text-xs tracking-[0.25em] px-6 py-4"
                    type="email"
                    placeholder={emailPlaceholder}
                  />
                  <button className="shrink-0 bg-[#271310] text-[#fcf9f4] hover:bg-[#526254] transition-colors font-label text-xs tracking-[0.25em] font-semibold uppercase px-6 py-4">
                    {submitLabel}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
