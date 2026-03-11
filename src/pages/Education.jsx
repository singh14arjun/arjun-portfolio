import React from "react";
import { BiCertification, BiSolidCertification } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { educationData } from "../data/educationData";
import { certificationData } from "../data/educationData";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <div className="text-white grid md:grid-cols-2 gap-10 py-20" id="education">
      <div>
        <h1
          className="text-3xl font-bold flex items-center gap-2 mb-6 
  bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          <IoSchoolSharp className="text-blue-400 text-3xl drop-shadow-[0_0_8px_#3b82f6]" />
          Education
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {educationData.map((data, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 via-gray-950 to-black
        p-5 rounded-xl 
        border border-blue-500/20
        hover:border-blue-400
        hover:scale-[1.03]
        hover:shadow-[0_0_20px_rgba(59,130,246,0.45)]
        transition-all duration-300"
            >
              <p className="text-blue-400 text-sm font-medium mb-1">
                {data?.year} - {data?.completeYear}
              </p>

              <h2 className="text-lg font-semibold text-white">
                {data?.degree}
              </h2>

              <p className="text-gray-300 text-sm">{data?.schoolName}</p>

              {data?.university && (
                <p className="text-gray-400 text-xs">{data?.university}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1
          className="text-3xl font-bold flex items-center gap-2 mb-6 
  bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
        >
          <BiSolidCertification className="text-green-400 text-3xl drop-shadow-[0_0_8px_#22c55e]" />
          Certification
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {certificationData.map((data, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 via-gray-950 to-black
        p-5 rounded-xl 
        border border-green-500/20
        hover:border-green-400
        hover:scale-[1.03]
        hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]
        hover:rotate-[0.5deg]
        transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {
                  <data.Logo className="text-3xl text-green-400 drop-shadow-[0_0_10px_#22c55e]" />
                }

                <div>
                  <h2 className="font-semibold text-lg text-white">
                    {data.courseName}
                  </h2>

                  <p className="text-gray-400 text-sm">{data.institution}</p>

                  <p className="text-gray-500 text-sm">
                    {data.duration} • {data.mode}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
