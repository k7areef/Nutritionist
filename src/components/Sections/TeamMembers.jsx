import teamImage1 from "@assets/images/team-members/1.png";
import teamImage2 from "@assets/images/team-members/2.png";
import teamImage3 from "@assets/images/team-members/3.png";
import teamImage4 from "@assets/images/team-members/4.png";
import TeamMemebersData from "@data/teamMembers.json";

const imagesMaper = {
    1: teamImage1,
    2: teamImage2,
    3: teamImage3,
    4: teamImage4
}

function TeamMembers() {
    return (
        <section className="team-members-section py-5 md:py-10" id="teamMembers">
            <div className="container">
                <div className="members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        TeamMemebersData.map((member, index) => (<div className="team-member-card" key={member.id || index}>
                            <div className="member-image w-full rounded-lg overflow-hidden aspect-square">
                                <img src={imagesMaper[member.id]} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="info w-fit relative z-1 -translate-y-1/2 rounded-tr-2xl bg-green-95 p-3 md:p-5">
                                <h3 className="mb-1.5 sm:text-lg md:text-xl font-semibold">{member.name}</h3>
                                <p className="font-medium text-sm!">{member.description}</p>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamMembers;