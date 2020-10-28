import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app';
App.globalData = {
	//网络请求相关参数
	request: {
		apiUrl: "https://api.bbbug.com/api/",
		baseData: {
			access_token: "",
			plat: 'app',
			version: 10000
		},
		code: {
			success: 200,
			access_token_missing: 400,
			login: 401,
			updateForce: 301,
			update: 302,
			error: 500
		}
	}
};

let app = new Vue(App);
//高度封装一个可复用的请求方法 data参数随便你传 报错算我输
app.request = function(_data) {
	if (_data.type) {
		switch (_data.type.toLowerCase()) {
			case 'json':
				_data.type = 'application/json';
				break;
			case 'form':
				_data.type = 'application/x-www-form-urlencoded';
				break;
			default:
		}
	}
	_data.type = _data.type || 'application/json';

	//预处理是绝对地址还是相对地址，后者需拼接请求基础参数的API根地址
	if (_data.url.indexOf('https://') < 0 && _data.url.indexOf('http://') < 0) {
		_data.url = App.globalData.request.apiUrl + (_data.url || "");
	}
	//读取本地缓存的access_token
	App.globalData.request.baseData.access_token = uni.getStorageSync('access_token') ||
		'45af3cfe44942c956e026d5fd58f0feffbd3a237';

	//是否显示Loading
	if (_data.loading) {
		uni.showLoading({
			mask: true,
			title: _data.loading
		});
	}
	uni.request({
		url: _data.url,
		//默认使用POST请求，除非指定method
		method: _data.method || "POST",
		//默认使用application/json基础header，除非完全自定义header
		header: _data.header || {
			"content-type": _data.type
		},
		//将基础请求参数和本次请求参数合并
		data: {
			...App.globalData.request.baseData,
			...(_data.data || {})
		},
		//固定返回数据格式为json
		dataType: _data.dataType || 'json',
		success(res) {
			_data.loading && uni.hideLoading();
			try {
				switch (res.data.code) {
					case App.globalData.request.code.success:
						//操作成功
						if (_data.success) {
							_data.success(res.data);
						} else {
							uni.showModal({
								title: '操作成功',
								content: res.data.msg,
								showCancel: false
							});
						}
						break;
					case App.globalData.request.code.access_token_missing:
					case App.globalData.request.code.login:
						//需要登录
						if (_data.login) {
							_data.login(res.data);
						} else {
							uni.showModal({
								title: '身份验证失败',
								content: res.data.msg,
								showCancel: false,
								success: function() {
									app.user.login();
								}
							});
						}
						break;
					case App.globalData.request.code.updateForce:
						//需要登录
						uni.showModal({
							title: '当前版本过低',
							content: res.data.msg,
							showCancel: false,
							success: function() {
								if (res.data.data) {
									plus.runtime.openURL(res.data.data);
								}
							}
						});
						break;
					default:
						//解析其他状态码
						if (_data.error) {
							_data.error(res.data);
						} else {
							uni.showModal({
								title: '操作失败(' + res.data.code + ')',
								content: res.data.msg,
								showCancel: false
							});
						}
				}
			} catch (e) {
				console.log(e);
				_data.loading && uni.hideLoading();
				//解析可能发生的异常
				if (_data.fail) {
					_data.fail(e);
				} else {
					uni.showModal({
						title: '数据处理失败',
						content: '解析服务器数据失败，请稍候再试！',
						showCancel: false
					});
				}
			}
		},
		fail(res) {
			_data.loading && uni.hideLoading();
			//请求出现异常
			if (_data.fail) {
				_data.fail(res);
			} else {
				uni.showModal({
					title: '连接失败',
					content: '网络链接失败，请稍候再试！',
					showCancel: false
				});
			}
		},
	});
};
app.user = {
	/**
	 * 获取我的个人信息
	 */
	getMyInfo(_data = {}) {
		app.request({
			'url': 'user/getMyInfo',
			success(res) {
				if (_data.success) {
					_data.success(res.data);
				}
			},
			login(res) {
				if (_data.login) {
					_data.login(res);
				} else {
					app.user.login();
				}
			},
			error(res) {
				if (_data.error) {
					_data.error(res);
				} else {
					app.user.login();
				}
			}
		});
	},
	/**
	 * 打开登录窗口
	 */
	login() {
		app.globalData.request.baseData.access_token = null;
		uni.removeStorageSync('access_token');
		uni.navigateTo({
			url: "/pages/user/login",
			animationType: "slide-in-bottom"
		});
	},
	/**
	 * 退出登录
	 */
	logout(_data) {
		uni.showModal({
			title: "注销登录",
			content: "是否确认退出当前登录的帐号？",
			showCancel: true,
			confirmText: '注销',
			success(res) {
				if (res.confirm) {
					uni.removeStorageSync('access_token');
					app.globalData.request.baseData.access_token = '';
					if (_data.success) {
						_data.success();
					}
				}
			}
		});
	}
};
//通用方法封装
app.libs = {
	//urlencode
	urlencode(data) {
		return encodeURIComponent(data);
	},
	//urldecode
	urldecode(data) {
		return decodeURIComponent(data);
	}
};
app.webSocket = {
	config: {
		wssUrl: "",
	},
	timer: {
		heartBeatTimer: null
	},
	isConnected: false,
	connection: "",
	closeWss() {
		let that = this;
		if (!that.isConnected || !that.connection) {
			return false;
		}
		// plus.push.createMessage('你掉线啦~');
		that.connection.send({
			data: "bye"
		});
		console.error('已执行关闭');
	},
	heartBeat() {
		let that = this;
		if (!that.connection) {
			return;
		}
		clearTimeout(that.timer.heartBeatTimer);
		that.connection.send({
			data: "heartBeat"
		});
		console.log('heartBeat');
		that.timer.heartBeatTimer = setTimeout(function() {
			that.heartBeat();
		}, 10000);
	},
	reConnect() {
		let that = this;
		if (!that.isConnected) {
			setTimeout(function() {
				that.connectWss();
			}, 5000);
		}
	},
	connectWss() {
		let that = this;
		if (that.isConnected || that.connection) {
			return false;
		}
		that.connection = uni.connectSocket({
			url: that.config.wssUrl,
			success: function(res) {
				console.log(res)
				that.connection.onOpen(function(res) {
					that.isConnected = true;
					uni.hideLoading();
					that.heartBeat();
				});


				that.connection.onError(function(res) {
					that.isConnected = false;
					clearTimeout(that.heartBeatTimer);
					that.connection = null;
					uni.hideLoading();
					console.error("error..............");
					that.reConnect();
				});
				that.connection.onClose(function(res) {
					that.isConnected = false;
					clearTimeout(that.heartBeatTimer);
					that.connection = null;
					uni.hideLoading();
					console.error("close..............");
					that.reConnect();
				});
				that.connection.onMessage(function(res) {
					console.log("消息到达");
					uni.$emit('WebSocketMessage', decodeURIComponent(res.data));
				});
			}
		});

	}

};
app.$mount()
