import Caffe_phin from '../assets/cafe_phin.jpg';
export default function ArtOfWaitingSection() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary-container -z-10 rounded-sm" />
            <img
              className="w-full h-auto aspect-[3/4] object-cover shadow-2xl rounded-sm"
              alt="Artistic side view of someone pouring hot water into a phin coffee filter"
              src={Caffe_phin}
            />
            <div className="absolute -bottom-8 -right-8 p-6 bg-primary text-white max-w-[200px]">
              <p className="text-xs font-label italic leading-relaxed">
                "Cà phê phin không dành cho người vội vã. Nó là nghệ thuật của sự
                kiên nhẫn."
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="font-headline text-5xl md:text-6xl text-primary mb-8 leading-tight">
              Nghệ Thuật <br />
              Của Sự Chờ Đợi
            </h2>
            <div className="space-y-6 font-body text-on-surface-variant leading-loose text-lg">
              <p>
                Tại Fitchew's Coffee, chúng tôi tin rằng mỗi giọt cà phê rơi xuống là
                một nhịp đập của thời gian. Không có tiếng ồn từ máy móc công nghiệp, không có sự
                hối hả của thế kỷ 21, chúng tôi giữ lại phương thức pha chế thủ
                công bằng phin nhôm truyền thống mang lại cảm giác hoài niệm cho người thưởng thức.
              </p>
              <p>
                Từng hạt cà phê Robusta và Arabica được tuyển chọn từ vùng đất đỏ
                Bazan màu mỡ, trải qua quy trình rang thủ cônghoàn toàn để giữ trọn vẹn hương vị nồng nàn, đắng
                dịu và hậu vị ngọt sâu lắng đọng.
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 mt-4 hover:text-secondary hover:border-secondary transition-all"
                href="#"
              >
                Tìm hiểu quy trình rang xay{' '}
                <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
