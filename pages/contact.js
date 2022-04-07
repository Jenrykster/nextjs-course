import ContactForm from '../components/contact/contact-form';
import Head from 'next/head';
import { Fragment } from 'react';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <meta name='description' content='content description' />
      </Head>
      <ContactForm />;
    </Fragment>
  );
}

export default ContactPage;
