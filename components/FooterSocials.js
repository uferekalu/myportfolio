'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function FooterSocials(props) {
  const router = useRouter();
  return (
    <>
      <Image
        onClick={
          props.imgSrc === '/assets/images/monodometwittericon.png'
            ? () => {
                router.push('https://twitter.com/lushak_tech');
              }
            : props.imgSrc === '/assets/images/monodomelinkedinicon.png'
            ? () =>
                router.push('https://www.linkedin.com/in/kalu-ufere-a5b0787a/')
            : props.imgSrc === '/assets/images/monodomefacebookicon.png'
            ? () => router.push('https://www.facebook.com/dekalusha')
            : undefined
        }
        style={{
          maxWidth: '100%',
          width: props.contact ? '50px' : '24px',
          cursor: 'pointer',
        }}
        src={props.imgSrc}
        width={props.contact ? '50' : '24'}
        height={props.contact ? '50' : '24'}
        alt="social"
      />
    </>
  );
}
