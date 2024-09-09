import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Free Subdomains',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Open Domains provides free subdomains for personal websites, open-source projects, and more. You can register subdomains like <code>foo.is-cool.dev</code> or <code>bar.is-not-a.dev</code> easily.
      </>
    ),
  },
  {
    title: 'Full DNS Record Support',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Open Domains supports various DNS records such as A, AAAA, CNAME, MX, and TXT records, giving you full control over your domain configuration.
      </>
    ),
  },
  {
    title: 'Easy and Accessible',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Registering a subdomain is quick and easy. Just choose a subdomain and configure it to suit your needs without any complicated steps.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
