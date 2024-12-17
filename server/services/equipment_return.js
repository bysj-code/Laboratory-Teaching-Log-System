var Service = require('../core/service.js');

/**
 * 设备归还服务
 */
class Equipment_return extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "equipment_return",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
	Equipment_return
};