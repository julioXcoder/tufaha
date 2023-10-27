import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Button>
        <Link href="/student_portal/dashboard">Student Portal</Link>
      </Button>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      {/* <main className="p-4 sm:ml-64">
        <div className="mt-14 rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <div className="lg:flex lg:justify-between">
            <div className="lg:col-span-2 lg:mr-72"></div>

            <div className="hidden h-[calc(100vh-8rem)] lg:flex"></div>
            <div className="bg-red-500 lg:fixed lg:right-6 lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-72 lg:p-2">
              left
            </div>
          </div>
        </div>
      </main> */}
    </div>
  );
}
