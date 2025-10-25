"use client"
import { useState } from "react";

interface CommentFormProps {
  onSubmit?: (data: CommentFormData) => void;
}

export interface CommentFormData {
  name: string;
  email: string;
  website: string;
  comment: string;
  saveInfo: boolean;
}

const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [formData, setFormData] = useState<CommentFormData>({
    name: "",
    email: "",
    website: "",
    comment: "",
    saveInfo: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <section className="mt-12 pt-8">
      <h2 className="text-sm font-bold text-gray-900 mb-4">Leave a Reply</h2>

      <p className="text-sm text-gray-500 mb-6">
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-red-500">*</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name, Email, Website */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name *
            </label>
            <input
              id="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-sm 
               focus:outline-red-500/40 focus:placeholder-transparent 
               transition duration-200 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email *
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-red-500/40"
            />
          </div>

          <div>
            <label htmlFor="website" className="sr-only">
              Website
            </label>
            <input
              id="website"
              type="url"
              placeholder="Website"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-red-500/40"
            />
          </div>
        </div>

        {/* Comment */}
        <div>
          <label htmlFor="comment" className="sr-only">
            Add Comment *
          </label>
          <textarea
            id="comment"
            placeholder="Add Comment *"
            required
            rows={8}
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-red-500/40"
          />
        </div>

        {/* Save Info */}
        <div className="flex items-center gap-2">
          <input
            id="save-info"
            type="checkbox"
            checked={formData.saveInfo}
            onChange={(e) =>
              setFormData({ ...formData, saveInfo: e.target.checked })
            }
            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <label
            htmlFor="save-info"
            className="text-sm text-gray-600 cursor-pointer"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-brand text-white px-6 py-2 rounded-md hover:bg-brand/90 transition-colors"
        >
          Post Comment
        </button>
      </form>
    </section>
  );
};

export default CommentForm;
