import React from "react";
import { Send } from "lucide-react";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
//   const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-gray-950"
    >
          Submit{" "}
          <Send className="h-[1rem] w-[1rem] opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
    
    </button>
  );
}