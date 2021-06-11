import DateFormatter from "../components/date-formatter";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
