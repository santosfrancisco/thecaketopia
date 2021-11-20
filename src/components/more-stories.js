import PostPreview from "./PostPreview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2>More Stories</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {posts.map((post) => (
          <span>{post.title}</span>
        ))}
      </div>
    </section>
  );
}
