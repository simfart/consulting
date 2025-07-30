import React from 'react'
import styles from './Card.module.scss'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className = '', onClick }: CardProps) {
  const cardClasses = [styles.card, className].filter(Boolean).join(' ')

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  )
} 