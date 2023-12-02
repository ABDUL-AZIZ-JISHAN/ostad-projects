import BreadCrumb from '@/components/breadCrumb'
import TestimonialList from '@/components/testimonialList'

export const metadata = {
  title: 'Testimonial',
}

export default function Page(){
    return (
        <>
        <BreadCrumb title="Testimonial List"/>
        <TestimonialList/>
        </>
    )
}