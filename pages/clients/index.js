import Link from 'next/link';

function ClientPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'bruh', name: 'Bruh' },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{ pathname: '/clients/[id]', query: { id: client.id } }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientPage;
