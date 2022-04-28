import { SignInButtom } from "../SignInButtom";
import styles from "./styles.module.scss";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from "../ActiveLink";

export function Header() {
  const { asPath } = useRouter()
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ignews" />

        <nav>
          <ActiveLink activeClassName={styles.active} href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href='/posts' prefetch>
            <a>Posts</a>
          </ActiveLink>
          {/* <Link href='/'>
            <a className={asPath === '/' ? styles.active : '' }>Home</a>
          </Link>
          <Link href='/posts' prefetch>
            <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>
          </Link> */}
        </nav>
        <SignInButtom />
      </div>
    </header>
  );
}
