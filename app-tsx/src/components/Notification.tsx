import React, { ReactElement } from 'react'

export type Props = {
  children: ReactElement,
  variant: 'error' | 'warning',
};

const Notification = ({ children, variant }: Props) => {
  return (
    <div className={variant}>
        {children} with variant {variant}
    </div>
  )
}

export default Notification;
