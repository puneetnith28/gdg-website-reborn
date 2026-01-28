"use client";

import type React from "react";
import { useState } from "react";
import ProfileCard from "./ProfileCard";

interface TeamMember {
  image: string;
  name: string;
  position: string;
  category: string;
  year: string;
}

const teamMembers: TeamMember[] = [
  {
    image: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    position: "Web Team Lead",
    category: "Web Team",
    year: "Year 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Bob Smith",
    position: "AI/ML Team Lead",
    category: "AI/ML Team",
    year: "Year 4",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Charlie Brown",
    position: "UI/UX Team Lead",
    category: "UI/UX Team",
    year: "Year 2",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Daisy Lee",
    position: "Android Team Lead",
    category: "Android Team",
    year: "Year 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Evan Wright",
    position: "Web Developer",
    category: "Web Team",
    year: "Year 2",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Fayla Grey",
    position: "AI/ML Mentor",
    category: "AI/ML Team",
    year: "Year 4",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "George Miller",
    position: "UI/UX Designer",
    category: "UI/UX Team",
    year: "Year 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Henry Lang",
    position: "Android Developer",
    category: "Android Team",
    year: "Year 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Ivy White",
    position: "Web Developer",
    category: "Web Team",
    year: "Year 2",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jack Black",
    position: "AI/ML Researcher",
    category: "AI/ML Team",
    year: "Year 4",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Kimberly Brown",
    position: "UI/UX Researcher",
    category: "UI/UX Team",
    year: "Year 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Liam Green",
    position: "Android Researcher",
    category: "Android Team",
    year: "Year 2",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Mona Blue",
    position: "Web Developer",
    category: "Web Team",
    year: "Year 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Nina Grey",
    position: "AI/ML Specialist",
    category: "AI/ML Team",
    year: "Year 2",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Oscar Green",
    position: "UI/UX Designer",
    category: "UI/UX Team",
    year: "Year 4",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Paul White",
    position: "Android Developer",
    category: "Android Team",
    year: "Year 4",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Quinn Yellow",
    position: "Web Developer",
    category: "Web Team",
    year: "Year 2",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Rita Black",
    position: "AI/ML Researcher",
    category: "AI/ML Team",
    year: "Year 4",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Sam Blue",
    position: "UI/UX Designer",
    category: "UI/UX Team",
    year: "Year 2",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Tom Red",
    position: "Android Team Lead",
    category: "Android Team",
    year: "Year 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Uma Green",
    position: "Web Developer",
    category: "Web Team",
    year: "Year 4",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Vicky Blue",
    position: "AI/ML Specialist",
    category: "AI/ML Team",
    year: "Year 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Will Brown",
    position: "UI/UX Researcher",
    category: "UI/UX Team",
    year: "Year 2",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Xander Red",
    position: "Android Developer",
    category: "Android Team",
    year: "Year 4",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Yara White",
    position: "Web Team Lead",
    category: "Web Team",
    year: "Year 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Zane Black",
    position: "AI/ML Team Lead",
    category: "AI/ML Team",
    year: "Year 2",
  },
];

const categories = [
  "All",
  "Web Team",
  "AI/ML Team",
  "UI/UX Team",
  "Android Team",
];

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 rounded-lg ${
          currentPage === 1
            ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
            : "bg-orange-500 text-white"
        }`}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === index + 1
              ? "bg-orange-500 text-white"
              : "bg-white text-black border border-neutral-300 hover:bg-neutral-200"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-1 rounded-lg ${
          currentPage === totalPages
            ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
            : "bg-orange-500 text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

const TeamSelector: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const filteredTeamMembers =
    selectedCategory === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) =>
            member.category === selectedCategory ||
            member.year === selectedCategory
        );

  const paginatedTeamMembers = filteredTeamMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalItems = filteredTeamMembers.length;

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 min-h-screen p-8">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-6 animate-fadeInUp relative group">
        <span className="text-neutral-800 dark:text-white">Meet Our</span>{" "}
        <span className="text-orange-500">Team</span>
        <span className="absolute left-0 top-full w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </h1>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-white text-black border border-neutral-300 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Team Members Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {paginatedTeamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
            category={member.category}
            year={member.year}
          />
        ))}
      </div>

      {/* No Results Message */}
      {filteredTeamMembers.length === 0 && (
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-lg mt-6">
          No team members found in this category.
        </p>
      )}

      {/* Pagination Component */}
      {filteredTeamMembers.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default TeamSelector;
