import LessionPreview from '../components/lessions-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2>
       Lessions
      </h2>
      <div>
        {posts.map((post) => (
          <LessionPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          
          />
        ))}
      </div>
    </section>
  )
}