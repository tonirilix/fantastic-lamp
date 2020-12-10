import React from 'react'
import PropTypes from 'prop-types'

function Notification({ children, variant }) {
    return (
        <div className={variant}>
            {children} with variant {variant}
        </div>
    )
}

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  variant: PropTypes.oneOf(['error','warning']),
};

export default Notification
