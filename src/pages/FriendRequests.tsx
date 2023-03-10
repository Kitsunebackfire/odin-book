import React from "react";
import Navbar from "../components/Navbar";
import PendingFriendRequest from "../components/PendingFriendRequest";

type Props = {};

const FriendRequests = (props: Props) => {
  const friendList = [
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
  ];
  return (
    <div>
      <Navbar />
      <main className="container flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10 max-w-3xl">
        <div className="mx-4 lg:mx-0 shadow-lg p-2 rounded-lg bg-white space-y-2">
          <h2 className="text-center font-semibold text-lg sm:text-2xl">
            Friend Requests{" "}
            <span className="text-blue-500">({friendList.length})</span>
          </h2>
          <section className="grid grid-cols-1 gap-[10px]">
            {friendList.map((friend, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md border border-grey-400 flex flex-row justify-between items-center p-1 "
                >
                  {/* encase img and a tag in same Link */}
                  <PendingFriendRequest
                    name={friend.name}
                    imgSrc={friend.imgSrc}
                  />
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
};

export default FriendRequests;
