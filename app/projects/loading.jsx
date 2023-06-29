import Image from 'next/image';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Image
        src="/assets/icons/loader.svg"
        width={50}
        height={50}
        alt="loader"
      />
    </div>
  );
};

export default Loading;
