import DateFormatter from "../components/date-formatter";
import Link from "next/link";

export default function PostPreview({ title, date, slug }) {
  return (
    <div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <div>
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}
