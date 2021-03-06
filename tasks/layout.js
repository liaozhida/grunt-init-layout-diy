'use strict';

var stringformat = require('stringformat');

module.exports = function(grunt) {

	grunt.registerMultiTask('layout', '文件初始化布局插件', function() {
		var options = this.options({
			dist: './',
			format: []
		});

		grunt.log.subhead('开始创建 ...');

		var _f = grunt.option('format');

		if ((typeof _f === 'boolean') === false && _f) {
			options['format'] = _f.split(',');
		}

		(this.data.tree || []).forEach(function(f) {

			f = f.replace(/\s/ig, '');

			var args = options.format.slice(0);
			args.unshift(f);

			var rf = stringformat.apply(null, args);
			if (rf.indexOf('{') >= 0) {
				grunt.log.warn(f + ' : 需要提供参数, 请使用类似命令(grunt layout --format a,b) 其中a,b为具体参数');
			} else {
				var filepath = options.dist + rf;
				if (rf[rf.length - 1] === '/') { //文件夹
					if (grunt.file.exists(filepath)) {
						grunt.log.warn(filepath + ' : 已经存在');
					} else {
						grunt.file.mkdir(filepath);
						grunt.log.success(filepath + ' : 文件夹创建成功');
					}
				} else {
					if (grunt.file.exists(filepath)) {
						grunt.log.warn(filepath + ' : 已经存在');
					} else {
						grunt.file.write(filepath, '', {
							encoding: 'utf8'
						});
						grunt.log.success(filepath + ' : 文件创建成功');
					}
				}
			}

		});
	});

};