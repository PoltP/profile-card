import React from 'react';
import { Svg} from 'expo';
const { Path } = Svg;

// Icons svg markup size is decreased using https://jakearchibald.github.io/svgomg/ tool

const getBackIcon = color => <Svg width="20" height="16" fill="none" viewBox="0 0 20 16">
	<Path fill={color || "#F00"} d="M8.707 1.707A1 1 0 0 0 7.293.293l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L3.414 9H19a1 1 0 1 0 0-2H3.414l5.293-5.293z" />
</Svg>;

module.exports = {
	getBackIcon: getBackIcon
}