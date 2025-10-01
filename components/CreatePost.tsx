'use client'

import { useState } from 'react'

interface Post {
  id: number
  content: string
  author: string
  timestamp: Date
}

interface CreatePostProps {
  onPostCreated?: (post: Post) => void
}

const CreatePost = ({ onPostCreated }: CreatePostProps) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      const newPost: Post = {
        id: Date.now(),
        content: content.trim(),
        author: 'あなた',
        timestamp: new Date()
      }
      onPostCreated?.(newPost)
      setContent('')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">新しい投稿</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="何を考えていますか？"
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
        />
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={!content.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            投稿
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
