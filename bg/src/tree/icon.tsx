import React from 'react'

const Folder = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 48 48'>
    <path
      fill='#ffa000'
      d='M40 12H22l-4-4H8c-2.2 0-4 1.8-4 4v8h40v-4c0-2.2-1.8-4-4-4'
    />
    <path
      fill='#ffca28'
      d='M40 12H8c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4'
    />
  </svg>
)

const HTML = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    width='1em'
    height='1em'>
    <path
      fill='#E65100'
      d='m4 4 2 22 10 2 10-2 2-22Zm19.72 7H11.28l.29 3h11.86l-.802 9.335L15.99 25l-6.635-1.646L8.93 19h3.02l.19 2 3.86.77 3.84-.77.29-4H8.84L8 8h16Z'
    />
  </svg>
)

const MD = (
  <svg
    style={{ fontSize: 20 }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    width='1em'
    height='1em'>
    <path
      fill='#42a5f5'
      d='m14 10-4 3.5L6 10H4v12h4v-6l2 2 2-2v6h4V10zm12 6v-6h-4v6h-4l6 8 6-8z'
    />
  </svg>
)

export const Icon = {
  Folder,
  HTML,
  MD,
}
