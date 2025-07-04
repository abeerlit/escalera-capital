"use client";
import { timeAgo } from "@/utils/helpers/date-time-helpers";
import React, { useState } from "react";

interface Note {
    id: string;
    content: string;
    createdAt: Date;
}

const USER = {
    name: "Bobby Magee",
    initials: "BM"
};

export const Notes = () => {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: "1",
            content: "Note 1",
            createdAt: new Date(),
        },
    ]);
    const [newNote, setNewNote] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        if (!newNote.trim()) return;
        setIsSaving(true);
        setTimeout(() => {
            setNotes([
                {
                    id: Date.now().toString(),
                    content: newNote,
                    createdAt: new Date(),
                },
                ...notes,
            ]);
            setNewNote("");
            setIsSaving(false);
        }, 300);
    };

    return (
        <div>
            {/* Add new note */}
            <div className="flex flex-col gap-4 p-4 max-w-5xl">
                <textarea
                    className="w-full border border-gray-300 rounded p-3 resize-none text-gray-800"
                    rows={3}
                    placeholder="Add new note"
                    value={newNote}
                    onChange={e => setNewNote(e.target.value)}
                />
                <button
                    onClick={handleSave}
                    disabled={!newNote.trim() || isSaving}
                    className="bg-black ms-auto rounded-md text-white px-6 py-2 disabled:bg-gray-100 disabled:text-gray-500 cursor-pointer"
                >
                    Save
                </button>
            </div>
            <hr className="my-6 border-gray-200" />
            {/* Notes list */}
            <div className="space-y-8 p-4">
                {notes.map(note => (
                    <div key={note.id}>
                        <div className="flex items-start gap-4">
                            {/* Avatar */}
                            <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-500">
                                {USER.initials}
                            </span>
                            <div>
                                <h2 className="font-bold text-lg">{USER.name}</h2>
                                <p className="text-gray-400 text-sm">{timeAgo(note.createdAt)}</p>
                            </div>
                        </div>
                        <p className="mt-2 ps-4">
                            {note.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
