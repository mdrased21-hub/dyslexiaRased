import React from 'react';
import PropTypes from 'prop-types';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import Card, { CardBody } from '../bootstrap/Card';
import PrismCode from '../extras/PrismCode';

const CommonCodePreview = ({ children, className, code, language }) => {
	if (children) {
		return (
			<Card shadow='none' borderSize={1} className={classNames('rounded-2', className)}>
				<CardBody>{children}</CardBody>
				<PrismCode
					className='my-0 rounded-bottom'
					code={
						code ||
						jsxToString(children, {
							functionNameOnly: true,
							useFunctionCode: true,
							shortBooleanSyntax: true,
						})
					}
					language={language}
					rounded={0}
				/>
			</Card>
		);
	}
	return (
		<PrismCode
			className={classNames('my-0', className)}
			code={
				code ||
				jsxToString(children, {
					functionNameOnly: true,
					useFunctionCode: true,
					shortBooleanSyntax: true,
				})
			}
			language={language}
		/>
	);
};
CommonCodePreview.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	code: PropTypes.string,
	language: PropTypes.string,
};
CommonCodePreview.defaultProps = {
	children: null,
	className: null,
	code: null,
	language: 'jsx',
};

export default CommonCodePreview;
