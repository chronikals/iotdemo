(() => {
	'use strict';

	const gulp = require('gulp');
	const del = require('del');
	const svgSprite = require('gulp-svg-sprite');

	gulp.task('delete', () => {
        del.sync('out');
    });

    gulp.task('icons', ['delete'], () => {
    	gulp.src('svg/**/*.svg')
            .pipe(svgSprite({
                log: 'info',
                dest: 'out',
                shape: {
                    id: {
                        generator: name => {
                            return name.slice(0, -4)
                                       .replace(/_/g, '-')
                                       .replace(/-24$/g, '')
                                       .replace(/-18$/g, '-small');
                        }
                    }
                },
                mode: {
                    view: {
                        prefix: 'abb-icon-%s',
                        bust: false,
                        render: {
                            scss: true
                        },
                        dimensions: true,
                        example: true
                    },
                    symbol: {
                    	example: true
                    }
                }
            }))
            .pipe(gulp.dest('out'));
    });
})();
