import CTA from "@components/Sections/CTA";
import HeaderInformation from "@components/Sections/HeaderInformation";
import TeamMembers from "@components/Sections/TeamMembers";
import useChangeTitle from "@hooks/useChangeTitle";

function TeamMembersPage() {
    useChangeTitle("Team");
    return (
        <div className="team-members-page">
            <main>
                <HeaderInformation page="team" />
                <TeamMembers />
                <CTA page="team" />
            </main>
        </div>
    )
}

export default TeamMembersPage;