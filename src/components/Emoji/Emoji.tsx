import React from 'react'

export interface EmojiProps {
  label?: string
  symbol: string
  className?: string
}

const Emoji = function ({ label = '', symbol, className }: EmojiProps) {
  return (
    <span
      className={className}
      role="img"
      aria-label={label}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}

export default Emoji
