import { Link } from 'react-router-dom'
import intro from '../assets/intro.png'

export default function HeroSection() {
  return (
    <section className="relative min-h-[921px] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
          alt="Close-up of a traditional stainless steel Vietnamese phin coffee filter dripping dark espresso into a glass with condensed milk"
          src={intro}
        />
        <div className="absolute inset-0 hero-gradient opacity-40" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="font-headline text-6xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tighter italic">
            Đánh thức <br />
            Hồi ức Việt.
          </h1>
          <p className="font-body text-surface text-lg md:text-xl max-w-xl leading-relaxed opacity-90 mb-10">
            Hương vị cà phê nguyên bản mang đậm tinh hoa đất trời từ vùng Tây Nguyên Việt Nam. Một không
            gian tách biệt để bạn tìm lại nhịp sống chậm giữa lòng thành phố Hồ Chí Minh.
          </p>
          <div className="flex gap-6">
            <Link
              className="bg-white text-primary px-8 py-4 rounded-sm font-label uppercase tracking-widest text-sm font-bold flex items-center gap-3"
              to="/thuc-don"
            >
              Khám Phá Menu{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
