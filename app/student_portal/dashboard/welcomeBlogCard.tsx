import React from "react";

const WelcomeBlogCard = () => {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div className="sm:order-2">
          <div className="relative rounded-lg pt-[50%] sm:pt-[100%]">
            <img
              className="absolute left-0 top-0 h-full w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
              alt="Image Description"
            />
          </div>
        </div>

        <div className="sm:order-1">
          <p className="mb-5 inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            Business insight
          </p>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
            <a
              className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
              href="#"
            >
              How to get buy-in and budget for direct hiring
            </a>
          </h2>

          <div className="mt-6 flex items-center sm:mt-10">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full sm:h-14 sm:w-14"
                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
            </div>

            <div className="ml-3 sm:ml-4">
              <p className="font-semibold text-gray-800 dark:text-gray-200 sm:mb-1">
                Louise Donadieu
              </p>
              <p className="text-xs text-gray-500">
                Strategic Marketing Consultant
              </p>
            </div>
          </div>

          <div className="mt-5">
            <a
              className="inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 hover:underline"
              href="#"
            >
              Read more
              <svg
                className="h-2.5 w-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBlogCard;
