import BreadCrumb from '@/components/breadCrumb'
import AllProjects from '@/components/allProjects'


export const metadata = {
  title: 'Projects',
}


export default function Page(){
    return (
        <>
        <BreadCrumb title="All Projects"/>
        <AllProjects/>
        </>
    )
}