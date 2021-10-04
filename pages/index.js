import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>My List | Home</title>
        <meta name="keywords" content='people'/>
      </Head>
      <div>

        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla officia, alias amet molestiae perferendis. Neque, perferendis dicta veniam aliquam tempore quae at provident velit reprehenderit nihil. Velit, quis optio.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias commodi sapiente distinctio voluptatem cum ducimus omnis facere a aut ad, expedita perspiciatis asperiores numquam tenetur eveniet dicta aspernatur possimus?</p>

        <Link href="/people">
          <a className={styles.btn}>See People Listing</a>
        </Link>

      </div>
    </>
  )
}
