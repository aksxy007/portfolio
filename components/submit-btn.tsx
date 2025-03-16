import React from "react";
import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="group flex items-center justify-center gap-2 h-[2.5rem] sm:h-[3rem] w-[8rem] bg-gray-900 !text-white dark:!text-white text-md sm:text-lg rounded-full outline-none transition-all hover:scale-110 hover:bg-gray-950 disabled:scale-100 disabled:opacity-70 dark:disabled:!opacity-10 dark:!bg-black/80 dark:border dark:border-gray-400/30 "
    >
        {
            pending? <div className="h-5 w-5 border-b-2 rounded-full border-white animate-spin "></div>
            :<>
                Submit{" "}
                <Send className="h-[1rem] w-[1rem] opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
        }

    </button>
  );
}