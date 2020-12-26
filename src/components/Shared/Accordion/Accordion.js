import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import classes from './Accordion.module.css';

const Accordion = props => {
  const {title, children, color} = props;
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : '0px';
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className={classes.accordion}>
      <h3 className={classes.header}>
        <button
          className={classes.panel}
          onClick={toogleActive}
          type="button"
          aria-controls={classes.content}
          aria-expanded={active}>
          {title}
          <span
            style={{backgroundColor: color}}
            className={active ? `${classes.icon} active` : `${classes.icon}`}>
            {!active && (
              <i
                style={{backgroundColor: color}}
                className={classes.iconBody}
              />
            )}
          </span>
        </button>
      </h3>

      <div ref={contentRef} className={classes.content} id={classes.content}>
        {children}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.string,
};

Accordion.defaultProps = {
  title: '',
  children: [],
  color: '#fff',
};

export default Accordion;
