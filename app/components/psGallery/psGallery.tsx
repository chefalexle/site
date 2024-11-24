'use client'

import { useEffect } from 'react';
//@ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';

import Image from 'next/image';
import Link from 'next/link';

import styles from './psGallery.module.css';
import 'photoswipe/style.css';

export default function SimpleGallery({galleryProps} : {
    galleryProps: galleryProps;
}) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryProps.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      spacing: 0.5,
      preloaderDelay: 500
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className={`${styles['pswp-gallery']}`} id={galleryProps.galleryID}>
      {galleryProps.images.map((image, index) => (
        <Link
          className={`${styles['img-container']} pswp-home-${index} next-img-container`}
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryProps.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <Image className={`next-img-cover`} src={image.thumbnailURL} alt="" fill></Image>
        </Link>
      ))}
    </div>
  );
}

type galleryProps = {
    galleryID: string;
    images: imageType[];
}

type imageType = {
    thumbnailURL: string;
    largeURL: string;
    width: number;
    height: number;
}