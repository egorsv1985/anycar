import {useState, useEffect} from "react";
import styles from '../styles/Article.module.scss'

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import Loader from "../components/Loader";

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, fetchPost} from "../redux/actions";

export default function Article() {
  const [open, setOpen] = useState(false);

  const [lang, setLang] = useState("ru");

  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const [post, setPost] = useState(null)
  const [morePosts, setMorePosts] = useState(null)

  const [loader, setLoader] = useState(true)

  const article = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(fetchPosts(lang));
    setTimeout(() => setLoader(false), 1000)
  }, [])

  useEffect(() => {
    let url = window.location.protocol + '//' + window.location.host + window.location.pathname;

    setPost(posts.filter(el => el.url === `${url}${url[url.length - 1] === "/" ? '' : '/'}`)[0])
  }, [posts])

  useEffect(() => {
    setMorePosts(posts.filter(el => posts.indexOf(el) !== posts.indexOf(post)));
    if (post) {
      dispatch(fetchPost(post.ID));
    }
  },[post])

  return (
    <>
      {post && article &&
        <div>
          <Header lang={lang} translateLink={article.translation_url} />

          <main className={styles.main}>
            <section className={styles.article}>
              <div className="container">
                <img alt="" className={styles.article__top} src={post.thumbnail} />
                <span className={styles.article__date}>{post.post_date.split(' ')[0].replace(/-/g, '.')}</span>
                <h1 className={styles.article__title} dangerouslySetInnerHTML={{__html: post.post_title}} />
                <div className={styles.article__content} dangerouslySetInnerHTML={{__html: post.post_content}} />
              </div>
            </section>

            <section className={styles.moreArticles}>
              <div className="container">
                <h2>Больше статей</h2>
                <ul>
                  {morePosts.slice(0, 3).map(post => (
                    <li className={styles.article} key={post.ID}>
                      <a href={post.url}>
                        <img alt="" src={post.thumbnail} />
                        <div className={styles.article__info}>
                          <span className={styles.article__info_date}>{post.post_date.split(' ')[0].replace(/-/g, '.')}</span>
                          <p dangerouslySetInnerHTML={{__html: post.post_title}} />
                          <span className={styles.article__info_link}>
                            Узнать больше
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="url(#paint0_linear)"/>
                              <defs>
                                <linearGradient id="paint0_linear" x1="-5.58793e-08" y1="4.5" x2="15" y2="4.5" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#4CB7CC"/>
                                  <stop offset="1" stopColor="#52DAAC"/>
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </main>

          <Footer lang={lang} />
          <Popup open={open} setOpen={setOpen} />
        </div>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}
