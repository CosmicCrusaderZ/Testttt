import React, { useState } from 'react'

const ChatUI = () => {
  const [message, setMessage] = useState('')

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="font-bold text-sm">SC</span>
          </div>
          <h2 className="text-xl font-bold">Chats</h2>
        </div>
        {/* Chat list */}
        <div className="space-y-4">
          {['John Doe', 'Jane Smith'].map((name, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 cursor-pointer">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-sm">{name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-400">{index === 0 ? 'Online' : 'Offline'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="bg-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-sm">JD</span>
            </div>
            <div>
              <h3 className="font-bold">John Doe</h3>
              <p className="text-sm text-gray-400">Online</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-400 hover:text-gray-100">📞</button>
            <button className="text-gray-400 hover:text-gray-100">📹</button>
            <button className="text-gray-400 hover:text-gray-100">⋮</button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
          <div className="flex justify-start">
            <div className="bg-gray-800 rounded-lg p-3 max-w-xs lg:max-w-md">
              <p>Hey, how are you?</p>
              <p className="text-xs text-gray-400 mt-1">10:00 AM</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-600 rounded-lg p-3 max-w-xs lg:max-w-md">
              <p>I'm doing great, thanks! How about you?</p>
              <p className="text-xs text-gray-300 mt-1">10:05 AM</p>
            </div>
          </div>
        </div>

        {/* Message input */}
        <div className="bg-gray-800 p-4">
          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-gray-100">📎</button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 text-gray-100 rounded-full py-2 px-4"
            />
            <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700">➤</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatUI
