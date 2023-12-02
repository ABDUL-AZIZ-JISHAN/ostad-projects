import BreadCrumb from '@/components/breadCrumb'
import TeamMember from '@/components/teamMember'

export const metadata = {
  title: 'Team',
}

export default function Page(){
    return (
        <>
        <BreadCrumb title="Team"/>
        <TeamMember/>
        </>
    )
}