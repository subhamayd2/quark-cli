const js = (name:string) => ({
    default: `const ${name} = () => <div>${name}</div>;

export default ${name};
`,

    hasProps: `import PropTypes from 'prop-types';

const ${name} = (props) => <div>${name}</div>;

${name}.propTypes = {};

export default ${name};
`,

});

const ts = (name:string) => ({
    default: js(name).default,
    hasProps: `import React from 'react';

interface IAppbarProps {
    children: React.ReactNode;
}

const Appbar = ({ children }: IAppbarProps) => <div>Appbar {children}</div>;

export default Appbar;
`,
});

const templates = {
    js,
    ts,
    useReactNamespace: `import React from 'react';
`,
    intl: `{
    
}`,
};

export default templates;
