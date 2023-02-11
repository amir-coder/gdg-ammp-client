//Projects
import Layout from "components/layout";
export default function Projects() {
    return (
        <div className='flex h-full flex-col justify-center items-center'>
            <h3 className='text-4xl mb-5 font-bold'>Projects</h3>
        </div>
    );
}

Projects.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
  }