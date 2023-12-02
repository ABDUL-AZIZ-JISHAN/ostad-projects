import BreadCrumb from '@/components/breadCrumb'
import OurServices from '@/components/ourServices'



export const metadata = {
  title: 'Service',
}


export default function Page(){
    return (
        <>
        <BreadCrumb title="Our Services"/>
        <OurServices/>
        </>
    )
}