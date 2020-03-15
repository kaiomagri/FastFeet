import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function AvatarDeliveryman({
  backColor,
  textColor,
  imgPath,
  initials,
  name,
  showName,
}) {
  return (
    <Container backColor={backColor} textColor={textColor}>
      {imgPath ? (
        <img src={imgPath} alt={name} />
      ) : (
        <div>
          <span>{initials}</span>
        </div>
      )}
      {showName && <span>{name}</span>}
    </Container>
  );
}

AvatarDeliveryman.propTypes = {
  showName: PropTypes.bool.isRequired,
  backColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
