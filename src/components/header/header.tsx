import React, { Fragment, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const token = localStorage.getItem('access_token')

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('email')
  }
  return (
    <div className="flex justify-between py-4">
      <Link to="/" className={`text-[#5cb85c] font-bold text-2xl`}>
        Medium
      </Link>
      <ul className="flex justify-between space-x-4">
        {token ? <UserLinks handleLogout={handleLogout} /> : <GuestLinks />}
      </ul>
    </div>
  )
}

function GuestLinks() {
  return (
    <Fragment>
      <div className="flex justify-between">
        <li className="px-4">
          <Link to={'/login'}>Sign in</Link>
        </li>
        <li>
          <Link to={'/register'}>Sign up</Link>
        </li>
      </div>
    </Fragment>
  )
}

function UserLinks({ handleLogout }: { handleLogout: MouseEventHandler }) {
  return (
    <Fragment>
      <li>
        <Link to={'/setting'}>Setting</Link>
      </li>
      <li>
        <Link to={'/create-post'}>Create Post</Link>
      </li>
      <li>
        <Link onClick={handleLogout} to={'/login'}>
          Log out
        </Link>
      </li>
    </Fragment>
  )
}
