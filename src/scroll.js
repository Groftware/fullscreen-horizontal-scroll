import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const FullScreenHorizontalScroll = ({
  children,
  hideScrollX,
  containerStyle,
  containerClassName,
  centerVertical,
}) => {
  const [height, setHeight] = useState(null);

  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const getHeight = () => {
    const elem = containerRef.current;
    const childElem = elem.children;
    let totalWidth = 0;

    for (let i = 0; i < childElem.length; i += 1) {
      childElem[i].style.flexShrink = '0';
      totalWidth += childElem[i].offsetWidth;
    }

    setHeight(totalWidth);
  };

  // WEB BROWSERS
  const handleScroll = (elem) => {
    const wrapper = wrapperRef.current;
    const wrapperTopOffset = Math.round(
      wrapper.getBoundingClientRect().top + window.pageYOffset,
    );

    const elemTop = Math.round(elem.offsetTop);

    const { outerWidth } = window;
    const { clientHeight: eClientHeight } = elem;

    const scrollProgress = elemTop - wrapperTopOffset;
    const scrollLength = height - outerWidth;
    const percent = (scrollProgress / (height - eClientHeight)).toFixed(2);
    const scroll = percent * scrollLength;

    elem.scrollLeft = scroll;
  };

  useEffect(() => {
    const elem = containerRef.current;
    getHeight();

    document.addEventListener('scroll', () => handleScroll(elem), true);
    window.addEventListener('resize', () => getHeight(elem), true);

    return () => {
      document.removeEventListener('scroll', () => handleScroll(elem), true);
      window.removeEventListener('resize', () => getHeight(elem), true);
    };
  }, [height]);

  return (
    <div
      ref={wrapperRef}
      style={{
        height,
        maxWidth: '100vw',
        width: '100vw',
      }}
    >
      <div
        ref={containerRef}
        style={{
          ...containerStyle,
          height: '100vh',
          maxHeight: '100vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: centerVertical ? 'center' : '',
          position: 'sticky',
          top: 0,
          overflowY: 'auto',
          overflowX: hideScrollX ? 'hidden' : '',
        }}
        className={containerClassName}
      >
        {children}
      </div>
    </div>
  );
};

FullScreenHorizontalScroll.propTypes = {
  children: PropTypes.node,
  hideScrollX: PropTypes.bool,
  containerStyle: PropTypes.object,
  containerClassName: PropTypes.string,
  centerVertical: PropTypes.bool,
};

FullScreenHorizontalScroll.defaultProps = {
  children: {},
  hideScrollX: false,
  containerStyle: {},
  containerClassName: '',
  centerVertical: false,
};

export default FullScreenHorizontalScroll;
