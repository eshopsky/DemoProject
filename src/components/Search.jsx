import React from 'react'

const search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type='text' placeholder='Find a user' />
      </div>
      <div className='userChat'>
        <img src='data:image/jpeg;base64,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' />
        <div className="userChatInfo">
          <span>jane</span>
        </div>
      </div>
    </div>
  )
}

export default search