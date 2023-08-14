import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem provident consequatur maxime veritatis optio eius numquam earum odit atque nisi unde ad, cupiditate at excepturi odio, rem tempore amet similique.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/2345245"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/23455234"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eveniet molestiae impedit dolore reiciendis perferendis est natus minima atque incidunt pariatur vitae unde eius accusamus qui adipisci inventore perspiciatis, quo obcaecati velit corporis. Deleniti, voluptatibus. Quae fuga ab incidunt fugiat consequuntur nostrum explicabo? Itaque deleniti reprehenderit quae nostrum dicta reiciendis dignissimos eaque eum earum rerum atque nisi expedita maiores est iste, quia repudiandae amet quasi impedit. Obcaecati sint blanditiis tempore aut dolor quos provident consectetur earum voluptatum. Maxime nulla ea sit, rerum minus, animi quidem perferendis deleniti, accusantium deserunt odio cupiditate! Est illo ipsa at maxime veritatis consequatur doloribus, eaque distinctio recusandae temporibus. Porro dolore eaque similique deserunt quibusdam voluptas error suscipit rerum, fuga iusto eveniet est labore laboriosam magni, voluptates veniam impedit reprehenderit quod doloribus! Velit quas vitae, eius itaque perspiciatis autem fugiat dolores sapiente rem tenetur doloremque hic architecto a quidem. Accusamus, magni nobis! Pariatur odit cupiditate ducimus repellat distinctio accusamus quis dicta. Sequi quod consequuntur quae! Odit unde delectus pariatur alias placeat qui, magni eos aspernatur reprehenderit necessitatibus perspiciatis reiciendis sit natus magnam sapiente neque quo commodi quae odio laboriosam dolorem incidunt ratione mollitia. Doloribus impedit sint aperiam! Omnis nesciunt ea, vero aut tempora culpa aperiam amet?
        </p>
      </div>
    </div>
  )
}

export default BlogPost;