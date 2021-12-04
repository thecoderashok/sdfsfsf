import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function PostCard({ post }) {
 
  const tag = [(post.tags).split(",")];
  
  return (
    <div>
      <Link href="/blog/[category]/[id]" as={`/blog/${post.category}/${post.id}`} passHref>
         <div className={styles.postContainer}>
                <div className={styles.postbox__postDetails}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postDescription}>{post.description}</p>
                    {/* <div className={styles.postTag}>{post.tags}</div> */}
                    <li className={styles.postTag}>{tag}</li>

            
                <div className={styles.postBottomContainer}>
                    <span className={`${styles.postdate}, ${styles.span_desktop}`}>{post.date}</span>
                    <span className={`${styles.postReadtime}, ${styles.span_desktop}`}>{post.readtime}</span>
                </div>
              
            </div>
            <img className={styles.coverimage} src={post.coverimage} alt={post.title}/>
        </div>
      </Link>
    </div>
  )
}

export default PostCard

