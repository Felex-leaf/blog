module.exports = {
  extends: 'eslint-config-egg/typescript',

  // 根据个人习惯自定义rule
  rules: {
    'react-hooks/exhaustive-deps': 'error', // react-hooks 依赖检查
  },
};
