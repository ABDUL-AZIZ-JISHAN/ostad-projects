"use client";
import Image from "next/image";
import { useState } from "react";

const CommentSection = ({ commentsList = [] }) => {
  const [comments, setComments] = useState(commentsList);
  const [newComment, setNewComment] = useState({
    users: { name: "" },
    descriptions: "",
  });
  const [activeTab, setActiveTab] = useState("commentList");

  const handleAddComment = (e) => {
    e.preventDefault();
    const newCom = { id: comments.length + 100, ...newComment };
    setComments([newCom, ...comments]);
    setActiveTab("commentList");
    setNewComment({
      users: { name: "" },
      descriptions: "",
    });
  };

  return (
    <div className="container py-[80px] ">
      <div className="flex space-x-4">
        <button
          className={`py-2 px-4 rounded-md ${
            activeTab === "commentList"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("commentList")}
        >
          Comments List
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            activeTab === "createComment"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("createComment")}
        >
          Create Comment
        </button>
      </div>

      {activeTab === "commentList" && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Comments List</h2>
          {comments.length === 0 ? (
            <p className="text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            <ul className="">
              {comments.map((comment, ind) => {
                const { id, users, descriptions } = comment;
                return (
                  <li key={id} className="text-gray-700 mb-4 border-2 p-4">
                    <div className="flex ">
                      <svg
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                      <p className="font-bold ml-2">
                        {users.name || users.firstName + " " + users.lastName}
                      </p>
                    </div>
                    <div className="mt-3">
                      <p>{descriptions}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}

      {activeTab === "createComment" && (
        <form onSubmit={handleAddComment} className="mt-10">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border p-2 mb-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={newComment.users.name}
            onChange={(e) =>
              setNewComment({
                ...newComment,
                users: {
                  name: e.target.value.trim(),
                },
              })
            }
          />
          <textarea
            placeholder="your comment..."
            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={newComment.descriptions}
            onChange={(e) =>
              setNewComment({
                ...newComment,
                descriptions: e.target.value,
              })
            }
          />
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
            type="submit"
          >
            Add Comment
          </button>
        </form>
      )}
    </div>
  );
};

export default CommentSection;
