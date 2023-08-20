export const dynamic = 'force-dynamic';

import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  try {

    const res = await fetch("http://localhost:3000/api/posts", {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }

}

export const metadata = {
  title: "Jimmy Cooks Blog",
  description: "Jimmy Cooks Blog"
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map(item => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.img}
            />
          </div>
          <div className={styles.conent}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog;