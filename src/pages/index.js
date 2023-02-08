
import Layout from '../../components/layout'


export default function Overview() {
  return (
    <div className='flex h-full flex-col justify-center items-center '>
      <h3 className='text-4xl mb-5 font-bold'>Overview</h3>
    </div>
  );
}


Overview.getLayout = function getLayout(page) {
  return (
      <Layout>{page}</Layout>
  )
}