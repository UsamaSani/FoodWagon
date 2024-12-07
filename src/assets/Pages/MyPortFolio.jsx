import React, { useEffect, useState } from "react";
import axios from "axios";

function MyPortFolio() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = "UsamaSani";

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching repos data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-800">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 px-4 sm:px-6 md:px-8">
      {/* Profile Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <img
          src={userData?.avatar_url}
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-4 shadow-xl border-4 border-blue-600"
        />
        <h1 className="text-3xl font-bold text-gray-100">{userData?.name}</h1>
        <p className="text-lg text-gray-300 mt-2">{userData?.bio}</p>
        <p className="text-gray-400 mt-2">Location: {userData?.location}</p>
        <a
          href={userData?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Visit GitHub Profile
        </a>
      </div>

      {/* Repositories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-500">{repo.name}</h2>
              <p className="text-gray-400 mt-2">
                {repo.description || "No description available"}
              </p>
              <div className="mt-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyPortFolio;
