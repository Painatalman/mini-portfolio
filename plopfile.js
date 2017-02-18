module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name',
      },
    ],
    actions: (data) => {
      const componentPath = `src/components/{{pascalCase name}}`;
      const templatePath = `plop-templates/Component`;
      const actions = [
        {
          type: 'add',
          path: `${componentPath}/index.tsx`,
          templateFile: `${templatePath}/index.tsx.hbs`,
        },
        {
          type: 'add',
          path: `${componentPath}/test.tsx`,
          templateFile: `${templatePath}/test.tsx.hbs`,
        },
      ];

      return actions;
    },
  });

  plop.setGenerator('util-or-hook', {
    description: 'Enter util function name (camelCase)',
    prompts: [
      {
        type: 'confirm',
        name: 'isHook',
        message: 'Is it a React Hook?',
        default: false,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter util or hook name (camelCase)',
      },
    ],
    actions: (data) => {
      const basePath = data.isHook ? `src/hooks` : `src/utils`;
      const utilPath = `${basePath}/{{camelCase name}}`;
      const extension = data.isHook ? 'tsx' : 'ts';

      return [
        {
          type: 'add',
          path: `${utilPath}/index.${extension}`,
          templateFile: 'plop-templates/utils/index.ts.hbs',
        },
        {
          type: 'add',
          path: `${utilPath}/test.${extension}`,
          templateFile: 'plop-templates/utils/test.ts.hbs',
        },
      ];
    },
  });
};
