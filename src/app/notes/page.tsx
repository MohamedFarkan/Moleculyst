"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

interface Note {
  id: string;
  title: string;
  description: string;
  date: number; // timestamp
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // New state to track which note is expanded
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedNotes = localStorage.getItem("notes");
      if (storedNotes) {
        const parsedNotes: Note[] = JSON.parse(storedNotes);
        setNotes(parsedNotes);
      }
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && hasLoaded) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes, hasLoaded]);

  const addNote = () => {
    if (!title.trim() || !description.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      date: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setDescription("");
    setIsFormVisible(false);
  };

  const updateNote = () => {
    if (!title.trim() || !description.trim() || !editingId) return;

    const updatedNotes = notes.map((note) =>
      note.id === editingId
        ? {
            ...note,
            title: title.trim(),
            description: description.trim(),
            date: Date.now(),
          }
        : note,
    );

    setNotes(updatedNotes);
    setEditingId(null);
    setTitle("");
    setDescription("");
    setIsFormVisible(false);
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter((note) => note.id !== id);
    setNotes(updated);
    if (expandedNoteId === id) {
      setExpandedNoteId(null);
    }
  };

  const handleEditNote = (note: Note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setDescription(note.description);
    setIsFormVisible(true);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setIsFormVisible(false);
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { formattedDate, formattedTime };
  };

  return (
    <DefaultLayout>
      <div className="bg-gray-100 dark:bg-gray-900 mx-auto mt-1 min-h-screen max-w-3xl p-6 pl-0 pr-0 transition-colors duration-300">
        <h1 className="mb-8 text-center text-4xl font-bold text-blue-700 dark:text-blue-400">
          My Notes
        </h1>

        {!isFormVisible && (
          <div className="flex justify-center">
            <button
              onClick={() => setIsFormVisible(true)}
              className="mb-6 w-fit rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              + Add New Note
            </button>
          </div>
        )}

        {isFormVisible && (
          <div className="dark:bg-gray-800 text-gray-500 dark:text-gray-400 mx-auto mb-8 w-full max-w-[340px] rounded-xl bg-white p-4 py-8 text-left text-sm shadow-[0px_0px_10px_0px] shadow-black/10 transition-colors duration-300 md:p-6">
            <h2 className="text-gray-800 dark:text-gray-200 mb-9 text-center text-2xl font-bold">
              {editingId ? "Update Note" : "Create New Note"}
            </h2>
            <div className="border-gray-500/10 dark:border-gray-400/10 my-2 flex items-center gap-1 rounded border bg-indigo-500/5 pl-2 dark:bg-indigo-400/5">
              <input
                className="placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-200 w-full bg-transparent py-2.5 outline-none"
                type="text"
                placeholder="Note Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="border-gray-500/10 dark:border-gray-400/10 mb-4 mt-2 flex items-center gap-1 rounded border bg-indigo-500/5 pl-2 dark:bg-indigo-400/5">
              <textarea
                className="placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-200 w-full resize-none bg-transparent py-2.5 outline-none"
                placeholder="Write your note..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
              />
            </div>

            <button
              onClick={editingId ? updateNote : addNote}
              type="submit"
              className="mb-0 w-full rounded bg-indigo-500 py-2.5 font-medium text-white transition hover:bg-indigo-600/90 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              {editingId ? "Update Note" : "Add Note"}
            </button>
            <p className="mt-4 text-center">
              <a
                onClick={handleCancelEdit}
                className="cursor-pointer text-[#ef4444] underline transition-transform duration-200 hover:scale-110 hover:text-[#b91c1c] dark:text-[#f87171] dark:hover:text-[#dc2626]"
              >
                Cancel
              </a>
            </p>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {notes.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 col-span-full text-center">
              No notes yet.
            </p>
          ) : (
            notes.map((note) => {
              const { formattedDate, formattedTime } = formatDate(note.date);
              const isExpanded = expandedNoteId === note.id;
              const shouldShowToggle = note.description.length > 200;

              return (
                <div
                  key={note.id}
                  className="dark:bg-gray-900 dark:shadow-gray-700 group flex min-h-[18rem] min-w-[320px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="h-2 w-full rounded-t-lg bg-blue-500 opacity-70 transition-all duration-300 group-hover:opacity-100 dark:bg-blue-400"></div>

                  <div className="flex flex-grow flex-col overflow-hidden p-5">
                    <h2 className="mb-2 text-xl font-semibold text-blue-800 dark:text-blue-300">
                      {note.title}
                    </h2>
                    <p
                      className={`text-gray-700 dark:text-gray-300 mb-2 overflow-hidden text-ellipsis ${
                        isExpanded ? "" : "line-clamp-4"
                      }`}
                    >
                      {note.description}
                    </p>

                    {shouldShowToggle && (
                      <button
                        className="mb-2 w-fit text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                        onClick={() =>
                          setExpandedNoteId(isExpanded ? null : note.id)
                        }
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}

                    <div className="mt-auto">
                      <hr />
                      <div className="text-gray-500 dark:text-gray-400 mt-4 flex flex-col gap-1 text-xs">
                        <span>{formattedDate}</span>
                        <span className="text-gray-400 dark:text-gray-500 font-semibold">
                          {formattedTime}
                        </span>
                        <div className="flex gap-4">
                          <button
                            onClick={() => handleEditNote(note)}
                            className="text-[18px] font-bold text-blue-500 transition hover:text-blue-700 dark:hover:text-blue-400"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteNote(note.id)}
                            className="text-[18px] font-bold text-[#ef4444] transition hover:text-[#b91c1c] dark:text-[#f87171] dark:hover:text-[#ef4444]"
                          >
                            <RiDeleteBin5Line />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Notes;
