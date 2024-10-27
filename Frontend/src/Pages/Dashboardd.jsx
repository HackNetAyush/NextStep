import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";
import { Button, Badge, Chip } from "@nextui-org/react";
import { checker } from "./../assets/checker";
import {
  Bell,
  BookOpen,
  GraduationCap,
  Star,
  ChevronRight,
} from "lucide-react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";

const Dashboardd = () => {
  const progress = 0;
  // useEffect(() => {
  //   checker();
  // }, []);

  const [name, Setname] = useState(" ");

  return (
    <div className="main h-full w-full flex flex-col items-center justify-center">
      <main className="flex  flex-col overflow-x-hidden overflow-y-auto p-5">
        {/* Welcome Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {name}!</h2>
          <p className="text-gray-600">
            You're a creative problem-solver with strong analytical skills. Your
            passion for technology and design makes you an excellent candidate
            for a career in UX/UI Design.
          </p>
        </section>

        {/* Progress Tracker */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Progress</h3>
          <div className="bg-white dark:bg-[#18181b] p-6 rounded-lg shadow-md ">
            <div className="flex justify-between mb-2 ">
              <span className="text-sm font-medium dark:text-slate-300">
                UX/UI Design Track
              </span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress color="primary" value={progress} className="w-full" />
            <div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-white">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
            </div>
          </div>
        </section>

        {/* Career Track Overview */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            UX/UI Design Career Track
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="px-2 py-1">
              <CardHeader className="flex-col items-start">
                <div className="font-bold text-large">Learning Basics</div>
                <div className="text-gray-600 text-sm">
                  Fundamental concepts and tools
                </div>
              </CardHeader>
              <CardBody>
                <ul className="list-disc list-inside">
                  <li>Color Theory</li>
                  <li>Typography</li>
                  <li>User Research</li>
                </ul>
              </CardBody>
            </Card>
            <Card className="px-2 py-1">
              <CardHeader className="flex-col items-start">
                <div className="font-bold text-large">Skill Building</div>
                <div>Practical application of concepts</div>
              </CardHeader>
              <CardBody>
                <ul className="list-disc list-inside">
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>User Testing</li>
                </ul>
              </CardBody>
            </Card>
            <Card className="px-2 py-1">
              <CardHeader className="flex-col items-start">
                <div className="font-bold text-large">Project Work</div>
                <div>Real-world design challenges</div>
              </CardHeader>
              <CardBody>
                <ul className="list-disc list-inside">
                  <li>Portfolio Website</li>
                  <li>Mobile App Redesign</li>
                  <li>E-commerce UX Audit</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Resource Library */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Resource Library</h3>
          <Card className="px-2 py-1">
            <CardHeader className="flex-col items-start justify-center">
              <div className="font-bold text-large">Recommended Resources</div>
              <div>Curated content to boost your skills</div>
            </CardHeader>
            <CardBody>
              <div className="h-[200px] w-full rounded-md border border-default-200 dark:border-default-100  p-4">
                <div className="space-y-4 w-full h-full overflow-y-auto">
                  <div className="flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
                    <div>
                      <h4 className="font-semibold">
                        Introduction to UX Design
                      </h4>
                      <p className="text-sm text-gray-600">Course - 2 hours</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Start
                    </Button>
                  </div>

                  <div className="flex items-center">
                    <Star className="w-6 h-6 mr-2 text-yellow-500" />
                    <div>
                      <h4 className="font-semibold">
                        10 UX Laws Every Designer Should Know
                      </h4>
                      <p className="text-sm text-gray-600">
                        Article - 15 min read
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Read
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-green-500" />
                    <div>
                      <h4 className="font-semibold">Mastering Figma</h4>
                      <p className="text-sm text-gray-600">
                        Video Course - 5 hours
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Watch
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Achievements & Badges */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Achievements</h3>
          <div className="flex space-x-4">
            <div className=" w-fit h-fit border border-default-200 dark:border-default-100  rounded-md text-lg py-2 px-4 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              UX Fundamentals
            </div>
            <div className="text-lg py-2 px-4 flex items-center justify-center border border-default-200 dark:border-default-100  rounded-md">
              <Star className="w-5 h-5 mr-2" />
              First Project Completed
            </div>
          </div>
        </section>

        {/* Community & Mentorship */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Community & Mentorship</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="px-2 py-1">
              <CardHeader className="flex-col items-start">
                <div className="font-bold text-large">Available Mentors</div>
                <div>Connect with industry experts</div>
              </CardHeader>
              <CardBody>
                <div className="flex items-center w-full space-x-4">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    name="Jane"
                  />

                  <div>
                    <p className="font-semibold">Sarah Lee</p>
                    <p className="text-sm text-gray-600">
                      Senior UX Designer at Google
                    </p>
                  </div>
                  <Button size="sm" className="ml-auto float-end">
                    Connect
                  </Button>
                </div>
              </CardBody>
            </Card>
            <Card className="px-2 py-1">
              <CardHeader className="flex-col items-start">
                <div className="font-bold text-large">
                  Community Discussions
                </div>
                <div>Join conversations with peers</div>
              </CardHeader>
              <CardBody>
                <div className="space-y-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded">
                    <p className="font-semibold">UX Design Trends 2024</p>
                    <p className="text-sm text-gray-600">32 participants</p>
                  </a>
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded">
                    <p className="font-semibold">Portfolio Review Session</p>
                    <p className="text-sm text-gray-600">18 participants</p>
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* AI Recommendations */}
        <section>
          <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
          <Card className="px-2 py-1">
            <CardHeader className="flex-col items-start">
              <div className="font-bold text-large">
                Personalized Recommendations
              </div>
              <div>AI-driven insights to boost your career</div>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Focus on User Research</p>
                    <p className="text-sm text-gray-600">
                      Improving your user research skills will complement your
                      design abilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Upcoming UX Conference</p>
                    <p className="text-sm text-gray-600">
                      Consider attending the Virtual UX Summit next month to
                      network and learn.
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Dashboardd;
