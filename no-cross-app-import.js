// enforce-foo-bar.js
const path = require('path')

const appList = ['apps/base', 'apps/doc', 'packages']
const appKeyList = ['base', 'doc', 'common']
const aliasList = ['@/doc/', '@/base/', '@/common']

const findApp = (filePath) => {
  const index = appList.findIndex(appPathPrefix => filePath.startsWith(appPathPrefix))
  if (index >= 0) return appKeyList[index]
}

const isValid = (from, appKey) => {
  const index = aliasList.findIndex(item => from.startsWith(item))
  // 存在alias，并且是当前目录
  return index >= 0 && appKeyList[index] === appKey
}

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "no cross app import",
    },
    fixable: false,
    schema: []
  },
  create(context) {
    // eslint-disable-next-line no-undef
    const fileName = path.relative(__dirname, context.getFilename())
    const appKey = findApp(fileName)
    console.log(appKey)
    return {
      ImportSpecifier(node) {
        // 检查是否是import语法
        if (node.parent.type === "ImportDeclaration") {
          // 获取from的值
          const from = node.parent.source.value
          // Check if variable name is `foo`
          if (!isValid(from, appKey)) {
            console.log(from)
            context.report({
              node,
              message: '[{{ appKey }}] app, no import from {{ from }}',
              data: {
                appKey,
                from: node.parent.source.value
              }
            });
          }
        }
      }
    };
  }
};