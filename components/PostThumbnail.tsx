import Image from 'next/image';

type PostThumbnailProps = {
  thumbnail: string;
  alt: string;
};

const PostThumbnail = ({ thumbnail, alt }: PostThumbnailProps): JSX.Element => {
  return <Image src={thumbnail} alt={alt} width={100} height={400} />;
};

export default PostThumbnail;
