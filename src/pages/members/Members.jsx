import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import Lead from "../../components/lead/Lead";
import Memberslist from "../../components/members/Memberslist";

function Members() {
  const leads = [
    {
      id:1,
      name: "Yogesh",
      domain: "web developer",
      linkedin: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      twitter: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
    },
    {
      id:2,
      name: "Yogesh",
      domain: "web developer",
      linkedin: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      twitter: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
    },
    {
      id:3,
      name: "Yogesh",
      domain: "web developer",
      linkedin: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      twitter: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
    },
    {
      id:4,
      name: "Yogesh",
      domain: "web developer",
      linkedin: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      twitter: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
    },
    {
      id:5,
      name: "Yogesh",
      domain: "web developer",
      linkedin: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      twitter: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
    },
  ];
  const members = [
    {
      id:1,
      name: "Yogesh",
      domain: "web developer",
      linkedin: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      twitter: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      year: "3rd year ",
      branch: "CSE",
      chapter: "PSOC",
    },
    {
      id:2,
      name: "Yogesh",
      domain: "web developer",
      linkedin: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      twitter: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      year: "3rd year ",
      branch: "CSE",
      chapter: "PSOC",
    },
    {
      id:3,
      name: "Yogesh",
      domain: "web developer",
      linkedin: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      twitter: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      year: "3rd year ",
      branch: "CSE",
      chapter: "PSOC",
    },
    {
      id:4,
      name: "Yogesh",
      domain: "web developer",
      linkedin: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      twitter: "https://www.linkedin.com/in/yogesh-mundra-7126a322a/",
      year: "3rd year ",
      branch: "CSE",
      chapter: "PSOC",
    },
  ];
  return (
    <>
      <div className="p-4">
        <div className="text-white text-3xl font-bold my-8 flex justify-center md:text-6xl">
          <h1>Our Team Members</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row px-8 text-2xl justify-center sm:ml-[5rem] sm:justify-normal ">
            <div className="flex items-center justify-center">
              <AiFillCaretRight className="text-white" />
            </div>
            <div className="text-white text-4xl font-bold my-8">
              Former Leads
            </div>
          </div>
          
          <div className="container mx-auto p-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {leads.map((lead) => (
              <div>
                <Lead
                  index={lead.id}
                  linkedin={lead.linkedin}
                  twitter={lead.twitter}
                  name={lead.name}
                  domain={lead.domain}
                />
              </div>
            ))}
          </div>
         
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex flex-row px-8 text-2xl justify-center sm:ml-[5rem] sm:justify-normal ">
            <div className="flex items-center justify-center">
              <AiFillCaretRight className="text-white" />
            </div>
            <div className="text-white text-4xl font-bold my-8">Members</div>
          </div>
          
          <div className="container mx-auto p-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {members.map((member) => (
              <div>
                <Memberslist
                  index={member.id}
                  linkedin={member.linkedin}
                  twitter={member.twitter}
                  name={member.name}
                  domain={member.domain}
                  year={member.year}
                  branch={member.branch}
                  chapter={member.chapter}
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Members;
