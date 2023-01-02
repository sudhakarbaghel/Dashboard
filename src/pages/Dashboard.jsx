import "./dashboard.css"
import Info from "../components/info/Info"
import Score from "../components/score/Score"
import Mailing from "../components/mailing/Mailing"
import Ielts from "../components/ielts/Ielts"
import Applications from "../components/applications/Applications"
import Addresses from "../components/addresses/Addresses"
import CollegeOptions from "../components/collegeOptions/CollegeOptions";
import CollegeInfo from "../components/collegeInfo/CollegeInfo";
import ProfileCard from "../components/profileCard/ProfileCard";
import StartFiling from "../components/startFilling/StartFiling";
import CollegeCourseCard from "../components/collegeCourseCard/CollegeCourseCard";
import PriorityAndIntake from "../components/priorityAndIntake/PriorityAndIntake";
import ProfileAndScore from "../components/profileAndScore/ProfileAndScore";
import ShortList from "../components/shortlist/ShortList";
import Passport from "../components/passport/Passport";
import Nationality from "../components/Nationality/Nationality";
import CountrySearch from "../components/countrySearch/CountrySearch";
import PersonalInfo from "../components/personalInfo/PersonalInfo";



export default function Dashboard() {

    return (
        <div className="dashboard">
            <span>
                Our Branches
            </span>
            <div className="dashboardContainer">
                <div className="dashboardWrapper">
                    <div className="dashboardItem">
                        <Info />
                    </div   >

                    <div className="dashboardItem">
                        <Score />
                    </div></div>
                <div className="dashboardWrapper">
                    <div className="dashboardItem">
                        <Mailing />

                    </div >
                    <div className="dashboardItem">
                        <Ielts />
                    </div>
                </div>
            </div>
            <div className="dashboardContainer1">
                <div className="dashboardWrapper">
                    <div className=" ">
                        <Applications />
                    </div>
                    <div className="dashboardAddressWrapper">
                        <Addresses />
                    </div>

                </div>
            </div>
            <div className="dashboardContainer2">
                <div className="dashboardContainer2Item">
                    <PersonalInfo />

                </div>
                <div className="dashboardContainer2Item1">
                    <CollegeOptions />
                </div>

            </div>
            <div className="dashboardContainer3">
                <div className="dashboardContainer3Item">
                    <CollegeInfo />
                </div>
                <div className= "dashboardContainer3Item" >
                    <ProfileCard />
                </div>

            </div>
            <div className="">
                <StartFiling />
            </div>
            <div className="dashboardPriorityAndIntakeContainer">
                <PriorityAndIntake />
            </div>
            <div className="dashboardContainer5">
                <CollegeCourseCard />
            </div>
            <div >
                <ShortList />
            </div>
            <div className="dashboardContainer">
                <div className="dashboardItem">
                    <ProfileAndScore />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "80px" }} className="dashboardItem">
                    <Mailing />
                    <div className="dashboardCountrySearchWrapper">
                        <CountrySearch />
                    </div>
                </div>
                <div className="dashboardItem">
                    <Passport />
                </div>
                <div className="dashboardItem">
                    <Nationality />
                </div>
            </div>
        </div>
    )
}
