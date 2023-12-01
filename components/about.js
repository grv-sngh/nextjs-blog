import utilStyles from'../styles/utils.module.css';

export default function About() {
    return (
        <section className={utilStyles.headingMd}>
        <p>Hi I'm Gaurav. I'm an Engineering Student at VESIT. You can find me here.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        </section>
    )
}