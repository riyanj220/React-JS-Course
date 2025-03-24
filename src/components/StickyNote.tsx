import { FC, useContext } from "react";
import { Note } from "../Types.";
import { AppContext } from "../AppContext";

type StickyNoteItemProps = {
  note: Note;
};

const StickyNote: FC<StickyNoteItemProps> = ({note}) => {

    const {deleteNote,toggleStarNote} = useContext(AppContext);
    
  return (
    <div className="min-w-[200px]">
      <div className="relative max-w-sm border border-gray-300 rounded-lg">
        {note.starred && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 absolute top-2 right-2 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <div className="p-4">
          <p className="text-sm text-gray-500">Note</p>
          <h5 className="text-xl font-semibold">{note.text}</h5>
        </div>
        <div className="flex justify-end p-4 gap-4">
          <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300" onClick={() => {
            toggleStarNote(note.id);
          }}>
            Star
          </button>

          <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300" onClick={()=>{
            deleteNote(note.id);
          }}>
            Delete
          </button>


        </div>
      </div>
    </div>
  );
};

export default StickyNote;
