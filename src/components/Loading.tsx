import LoadingBar from 'react-top-loading-bar';

type LoadingProps = {
  isLoading: boolean;
};

const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <main className='w-full min-h-screen bg-teal'>
      <LoadingBar color='#98D3C5' progress={isLoading ? 70 : 100} />
    </main>
  );
};

export default Loading;
