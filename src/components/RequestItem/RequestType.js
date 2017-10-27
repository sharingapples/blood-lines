import PropTypes from 'prop-types';

export default {
  id: PropTypes.number.isRequired,
  patient: PropTypes.string.isRequired,
  bloodGroup: PropTypes.oneOf(['A', 'B', 'O', 'AB']).isRequired,
  bloodRhD: PropTypes.oneOf(['+', '-']).isRequired,
  bloodType: PropTypes.oneOf(['RBC', 'Platelets', 'Plasma']).isRequired,
  urgent: PropTypes.bool.isRequired,
  consultant: PropTypes.string.isRequired,
  reason: PropTypes.string,
  ready: PropTypes.bool,
};
