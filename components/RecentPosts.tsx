import Link from 'next/link';
import PostThumbnail from './PostThumbnail';

const RecentPosts = ({ posts }) => {
  const recentPosts = posts || [];

  return (
    <section className={`mt-10`}>
      <div className={`flex flex-col`}>
        {recentPosts.slice(0, 5).map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
            className={`flex justify-between items-center [&+&]:mt-20`}
          >
            <div className={`flex flex-col items-start w-full mr-24`}>
              <div className={`text-2xl font-semibold mb-2.5`}>{post.title}</div>
              <div className={`font-light`}>{post.description}</div>
            </div>
            <PostThumbnail thumbnail={post.thumbnail} alt={post.title} width={268} height={160} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
