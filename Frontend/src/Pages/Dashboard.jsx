import React from "react";
import {
  Heading1,
  MapPin,
  Thermometer,
  SmilePlus,
  Plus,
  Clock,
  Bell,
  Edit,
  Trash,
  Sun,
  Moon,
} from "lucide-react";
import { Button, Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import { DarkModeContext } from "../Contexts/DarkModeContext";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

const userData = {
  name: "Ayush",
  location: "Punjab, India",
  temperature: "19°C",
  mood: "😎",
};

const recentNotes = [
  {
    title: "Meeting Notes",
    category: "Work",
    date: "2 hours ago",
    color: "bg-blue-500",
  },
  {
    title: "Shopping List",
    category: "Personal",
    date: "Yesterday",
    color: "bg-green-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-yellow-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },

  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },

  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },

  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },

  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },

  {
    title: "Project Ideas",
    category: "Personal",
    date: "3 days ago",
    color: "bg-purple-500",
  },
];

const Dashboard = () => {
  const dmc = useContext(DarkModeContext);
  console.log(dmc.DarkMode);

  const { user } = useContext(UserContext);
  // console.log(user.fullname);

  function toggleDarkMode() {
    dmc.setDarkMode(!dmc.DarkMode);
  }

  return (
    <div className="main h-full w-full flex flex-col items-center justify-center ">
      <div className="header w-full h-[70px]  flex items-center justify-center shadow-sm sticky top-0 z-10 bg-[#ffffff] dark:bg-[#00000097] backdrop-blur-lg ">
        <div className="left w-1/2 h-full flex  items-center justify-start p-4 text-2xl font-extrabold">
          JotSpace ✨
        </div>
        <div className="right w-1/2 h-full flex items-center justify-end p-4">
          <Button
            onClick={() => {
              toggleDarkMode();
            }}
            variant="light"
            className="rounded-full p-0 m-0 min-w-fit w-[60px] "
          >
            {dmc.DarkMode ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>

      <div className="main_content w-full h-[calc(100%-70px)]  items-start ">
        <div className="hero w-full  min-h-[150px] flex flex-col justify-center p-5 pb-0 ">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">
              Good Morning, {user.fullname}!
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-default-500">
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                {userData.location}
              </div>
              <div className="flex items-center">
                <Thermometer className="mr-1 h-4 w-4" />
                {userData.temperature}
              </div>
              <div className="flex items-center">
                <SmilePlus className="mr-1 h-4 w-4" />
                Mood: {userData.mood}
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
              <Button color="primary">
                <Plus className="mr-2 h-4 w-4" /> New Note
              </Button>
              <Button variant="bordered">
                <Clock className="mr-2 h-4 w-4" /> View Recent
              </Button>
            </div>
          </section>

          {/* <div className="greetingCard bg-red-300 p-3 rounded-lg">
            <h1>Welcome back, Ayush Swami</h1>
            <Heading1 />
          </div> */}
        </div>

        <section className="mb-8 p-5 pt-0">
          <h3 className="mb-4 text-xl font-semibold">Recently Edited Notes</h3>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-x-auto px-1 pb-2">
            {recentNotes.map((note, index) => (
              <Card key={index} shadow="sm" className="overflow-hidden">
                <div className={`h-24 ${note.color}`}>
                  <div className="h-full w-full bg-gradient-to-br from-white/20 to-white/5"></div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{note.title}</h4>
                  <div className="text-sm text-default-700">
                    {note.category}
                  </div>
                  <p className="mt-2 text-sm text-default-500">
                    Last edited: {note.date}
                  </p>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button size="sm" variant="ghost">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
