import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/avatar.png'
          alt='An image showing Joao'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm João</h1>
      <p>I blog about games and sometimes about web development.</p>
    </section>
  );
}

export default Hero;
