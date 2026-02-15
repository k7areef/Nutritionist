import HeaderInformation from "@components/Sections/HeaderInformation";
import useChangeTitle from "@hooks/useChangeTitle";

function TeamMembersPage() {
    useChangeTitle("Team");
    return (
        <div className="team-members-page">
            <main>
                <HeaderInformation page="team" />
            </main>
        </div>
    )
}

export default TeamMembersPage;