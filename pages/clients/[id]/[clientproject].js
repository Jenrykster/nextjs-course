import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Project {router.query.clientproject}</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
