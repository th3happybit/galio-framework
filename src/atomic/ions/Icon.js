import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import GalioTheme, { withGalio } from '../../theme';
import getIconType from '../../helpers/getIconType';
import galioConfig from '../../config/galio.json';

const Galio = createIconSetFromIcoMoon(galioConfig, 'Galio', './fonts/galio.ttf');

function Icon({
  name = null,
  family = null,
  size = null,
  color = null,
  styles = {},
  theme = GalioTheme,
  medium = false,
  large = false,
  ...rest
}) {
  if (family === 'Galio') {
    if (name) {
      return (
        <Galio
          name={name}
          size={size || (medium ? theme.SIZES.ICON_MEDIUM : (large ? theme.SIZES.ICON_LARGE : theme.SIZES.ICON))}
          color={color || theme.COLORS.THEME.BLACK}
          {...rest}
        />
      );
    }
  } else {
    const IconInstance = getIconType(family);
    if (name && IconInstance) {
      return (
        <IconInstance
          name={name}
          size={size || (medium ? theme.SIZES.ICON_MEDIUM : (large ? theme.SIZES.ICON_LARGE : theme.SIZES.ICON))}
          color={color || theme.COLORS.THEME.BLACK}
          {...rest}
        />
      );
    }
  }

  return null;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  styles: PropTypes.any,
  theme: PropTypes.any,
  medium: PropTypes.bool,
  large: PropTypes.bool,
};

export default withGalio(Icon);
