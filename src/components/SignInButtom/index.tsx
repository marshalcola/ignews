import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./style.module.scss";
import { signIn, useSession } from "next-auth/react";

export function SignInButtom() {
  const { data: session } = useSession();

  return session ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      Marshal Cola
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type="button"
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}