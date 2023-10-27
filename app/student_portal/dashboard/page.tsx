import { Calender } from "@/components";
import StudentCard from "../studentCard";
import BlogList from "./blogList";
import StudentLectures from "./studentLectures";
import WelcomeBlogCard from "./welcomeBlogCard";

const StudentDashboardPage = () => {
  return (
    <div className="lg:flex lg:justify-between">
      <div className="lg:col-span-2 lg:mr-96">
        <StudentCard />
        <WelcomeBlogCard />
        <BlogList />
      </div>
      {/* TODO: Fake box */}
      <div className="hidden h-[calc(100vh-8rem)] lg:flex"></div>
      <div className="lg:fixed lg:right-6 lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-96 lg:flex-col lg:p-2">
        {/* <div className="fixed right-4 top-5 z-40 h-3/4 w-32 bg-green-500"></div> */}
        <div className="hidden lg:flex">
          <Calender />
        </div>
        <div className="mt-2 h-[17.5rem] overflow-y-hidden rounded-lg bg-section-light dark:bg-section-dark">
          <StudentLectures />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
