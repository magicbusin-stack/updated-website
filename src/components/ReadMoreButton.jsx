import React from "react";
import { ArrowRight } from "lucide-react";

/* One shared "Read More" button for the whole site (cards that open a bio pop-up).
   Solid red pill: darkens + lifts on hover, presses in on click, shows a focus ring for keyboard users,
   and stretches full-width on phones so it is easy to tap. */
export default function ReadMoreButton({ onClick, label = "Read More", className = "" }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`group/rm mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-2.5 text-base font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#c41b20] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 min-[480px]:w-fit ${className}`}
        >
            {label}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/rm:translate-x-1" aria-hidden="true" />
        </button>
    );
}
