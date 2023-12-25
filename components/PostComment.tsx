import { useRef } from 'react';
import useGiscus from '../hooks/giscus/useGiscus';

const PostComment = (): JSX.Element => {
  const commentRef = useRef<HTMLElement>(null);

  useGiscus(commentRef);

  return <section className={`mt-14`} ref={commentRef}></section>;
};

export default PostComment;
