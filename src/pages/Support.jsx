import { useParams } from 'react-router-dom'

export default function Support() {
  const { topic } = useParams()

  return (
    <main>
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto px-8">
          <h1 className="font-headline text-5xl md:text-6xl text-primary italic mb-6">
            Hỗ Trợ Khách Hàng
          </h1>
          <p className="text-on-surface-variant max-w-2xl leading-loose">
            Chủ đề: {topic}
          </p>
        </div>
      </section>
    </main>
  )
}
