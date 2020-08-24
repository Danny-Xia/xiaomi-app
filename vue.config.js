module.exports = {
	devServer: {
		proxy: {
			'/api/student/stuRegister': {
				target: 'https://open.duyiedu.com'
			},
			'/api/student/stuLogin': {
				target: 'https://open.duyiedu.com'
			}
		},
	}
}
