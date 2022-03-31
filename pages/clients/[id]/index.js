import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    // load data
    router.push('/clients/max/projecta');
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
