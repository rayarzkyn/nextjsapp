import { useEffect, useState } from "react";

export default function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Komentar</h2>
      {comments.length === 0 ? (
        <p className="text-gray-500">Belum ada komentar.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment.id} className="border p-4 rounded-lg bg-white shadow">
              <p className="font-bold">{comment.name}</p>
              <p className="text-gray-600">{comment.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
