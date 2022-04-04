import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';
import Head from 'next/head';
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS events</title>
        <meta name='description' content='Find a lot of cool events' />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
