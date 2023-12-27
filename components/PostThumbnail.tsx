import Image from 'next/image';

type PostThumbnailProps = {
  thumbnail: string;
  alt: string;
  width: number;
  height: number;
};
const PostThumbnail = ({ thumbnail, alt, width, height }: PostThumbnailProps): JSX.Element => {
  return (
    <Image
      src={thumbnail}
      alt={alt}
      width={width}
      height={height}
      unoptimized={true}
      className={`rounded-xl`}
    />
  );
};

export default PostThumbnail;
