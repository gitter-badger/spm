
// TODO 检查模块代码中是否包含coffee文件，如果包含怎对整个项目的文件进行提前编译和替换.


module.exports = function(project, callback) {
  console.info('--- SPM COFFEE PLUGIN ---')
  console.empty();

  console.info('SPM coffee plugin execution successfully!');
  console.empty();
  callback();
};

function isCoffee(filepath) {
  return path.extname(filepath) === '.coffee';
}
