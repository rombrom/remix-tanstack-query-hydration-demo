import type { MetaFunction } from '@remix-run/node';
import { useQuery } from '@tanstack/react-query';
import { getData } from '~/getData';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const { data, error, isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ['num'],
  });

  return (
    <div
      style={{
        color: isLoading ? 'blue' : error ? 'red' : 'green',
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.8',
      }}
    >
      <p>Data: {data}</p>
      <p>Error: {error?.message}</p>
    </div>
  );
}
