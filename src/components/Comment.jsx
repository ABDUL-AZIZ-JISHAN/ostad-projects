"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AvatarIcon } from "./Icons";

const CommentSection = ({ commentsList = [] }) => {
  const [comments, setComments] = useState(commentsList);
  const [newComment, setNewComment] = useState("");
  const [activeTab, setActiveTab] = useState("commentList");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setNewComment("");
      setActiveTab("commentList");
    }
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
              {comments.map((comment) => {
                const { id, users, descriptions } = comment;
                return (
                  <li key={id} className="text-gray-700 mb-4 border-2 p-4">
                    <div className="flex ">
                      <AvatarIcon className="w-8 h-8 rounded-full mr-2" />
                      <p className="font-bold ml-2">
                        {users.firstName + " " + users.lastName}
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
        <div className="mt-10">
          <textarea
            placeholder="Add your comment..."
            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
