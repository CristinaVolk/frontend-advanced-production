const interfaceConst = 'interface';

module.exports = (componentName) => `import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames';

import classes from './${componentName}.module.scss'

${interfaceConst} ${componentName}Props {
	className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
	const {className} = props;
	
	return (
		<div className={classNames(classes.${componentName}, {}, [className])}>

		</div>
	);
})
  
`;
