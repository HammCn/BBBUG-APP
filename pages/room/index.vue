<template>
	<view class="uniapp">
		<block v-if="showRoomPage">
			<scroll-view @click="historyClicked" class="historyList" id="historyList" scroll-y="true" :style="{height: style.contentViewHeight + 'px'}"
			 :scroll-with-animation="true" :scroll-top="scrollTop">
				<view id="historyBox">
					<block v-for="(item,index) in historyList">
						<block v-if="item.type=='text'" :id="'sha_'+item.sha">
							<view :class="item.user.user_id==userInfo.user_id?'item mine':'item'">
								<view class="head">
									<image class="userHead" :src="item.user.user_head" @longtap="doAtUser(item.user)" @tap="showMenuUserHead(item)"></image>
								</view>
								<view class="body">
									<view class="userName">{{item.user.user_name}}</view>
									<block v-if="!item.at">
										<pre class="content" v-if="item.user.user_id==userInfo.user_id && userInfo.user_sex==1" style="background-color: #66CBFF;color:black;"
										 v-html="urldecode(item.content)"></pre>
										<pre class="content" v-if="item.user.user_id==userInfo.user_id && userInfo.user_sex==0" style="background-color: #FE9898;color:white;"
										 v-html="urldecode(item.content)"></pre>
										<pre class="content" v-if="item.user.user_id!=userInfo.user_id" v-html="urldecode(item.content)"></pre>
									</block>
									<block v-if="item.at">
										<pre class="content" v-if="item.at.user_id==userInfo.user_id" style="background-color: #666;color:white;"
										 v-html="'@'+urldecode(item.at.user_name)+' '+urldecode(item.content)"></pre>
										<pre class="content" v-if="item.at.user_id!=userInfo.user_id&&item.user.user_id==userInfo.user_id && userInfo.user_sex==1"
										 style="background-color: #66CBFF;color:black;" v-html="'@'+urldecode(item.at.user_name)+' '+urldecode(item.content)"></pre>
										<pre class="content" v-if="item.at.user_id!=userInfo.user_id&&item.user.user_id==userInfo.user_id && userInfo.user_sex==0"
										 style="background-color: #FE9898;color:white;" v-html="'@'+urldecode(item.at.user_name)+' '+urldecode(item.content)"></pre>
										<pre class="content" v-if="item.at.user_id!=userInfo.user_id&&item.user.user_id!=userInfo.user_id" v-html="'@'+urldecode(item.at.user_name)+' '+urldecode(item.content)"></pre>
									</block>
								</view>
							</view>
						</block>
						<block v-if="item.type=='img'" :id="'sha_'+item.sha">
							<view :class="item.user.user_id==userInfo.user_id?'item mine':'item'">
								<view class="head">
									<image class="userHead" :src="item.user.user_head" @longpress="doAtUser(item.user)"></image>
								</view>
								<view class="body">
									<view class="userName">{{item.user.user_name}}</view>
									<view class="content image">
										<image class="img" :src="getStaticUrl(urldecode(item.content))" mode="widthFix" @click="fullViewImage(getStaticUrl(urldecode(item.resource)))"></image>
									</view>
								</view>
							</view>
						</block>
						<block v-if="item.type=='system'">
							<view class="item system">
								<span class="information" :style="{backgroundColor:item.bg||'transparent',color:item.color||'#999'}">{{item.content}}</span>
							</view>
						</block>
					</block>
				</view>
			</scroll-view>
			<view class="chatForm">
				<form @submit="doSendMessage">
					<input class="chatInput" type="text" confirm-type="search" confirm-hold="true" placeholder="全员禁言中,你暂时无法发言" v-model="messageObj.message"
					 v-if="chatType=='text' && room.room_sendmsg==1" disabled="disabled" />
					<input class="chatInput" type="text" confirm-type="search" confirm-hold="true" placeholder="说点什么吧..." v-model="messageObj.message"
					 v-if="chatType=='text' && room.room_sendmsg==0" @keydown="doKeyDown" :focus="messageObj.focus" />
					<input disabled="disabled" v-if="chatType=='voice'" class="chatInput" type="text" confirm-type="search"
					 confirm-hold="true" placeholder="点击这里开始录音">
				</form>
				<view class="chatButton">
					<view class="chatType chatIcon" v-if="chatType=='voice' && room.room_sendmsg==0" @click="chatType='text'"><i class="iconfont icon-changyongtubiao-mianxing-21"></i></view>
					<view class="chatType chatIcon" v-if="chatType=='text' && room.room_sendmsg==0" @click="chatType='voice'"><i class="iconfont icon-changyongtubiao-mianxing-36"></i></view>
					<view class="chatMore chatIcon" @click="showMenuBox=true"><i class="iconfont icon-icon_roundadd_fill"></i></view>
				</view>
			</view>
			<movable-area width="800" height="800" v-if="song.song">
				<movable-view out-of-bounds="true" inertia="true" width="60px" height="60px" direction="all" @click="doMusicClicked">
					<image class="playerImage" :animation="animationData" :src="song.song.pic"></image>
				</movable-view>
			</movable-area>
			<view class="menuBox" v-if="showMenuBox">
				<view class="menuShadow" @click="showMenuBox=false"></view>
				<view class="menuBody">
					<view class="menuItem">
						<view class="menuMain" @click="chooseImage">
							<view class="menuIcon">
								<view class="iconfont icon-icon_photo_fill"></view>
							</view>
							<view class="menuTitle">发图</view>
						</view>
					</view>
					<view class="menuItem">
						<view class="menuMain" @click="doOpenPage('addSong')">
							<view class="menuIcon">
								<view class="iconfont icon-icon_invite_fill"></view>
							</view>
							<view class="menuTitle">点歌</view>
						</view>
					</view>
					<view class="menuItem">
						<view class="menuMain" @click="doOpenPage('songList')">
							<view class="menuIcon">
								<view class="iconfont icon-icon_dingtab"></view>
							</view>
							<view class="menuTitle">已点</view>
						</view>
					</view>
					<view class="menuItem">
						<view class="menuMain" @click="doOpenPage('mySong')">
							<view class="menuIcon">
								<view class="iconfont icon-icon_people_fill"></view>
							</view>
							<view class="menuTitle">我的</view>
						</view>
					</view>
					<view class="menuItem">
						<view class="menuMain" @click="doOpenPage('onLine')">
							<view class="menuIcon">
								<view class="iconfont icon-icon_meeting_fill"></view>
							</view>
							<view class="menuTitle">在线</view>
						</view>
					</view>
					<view class="menuItem">
						<view class="menuMain" @click="doOpenPage('invate')">
							<view class="menuIcon">
								<view class="iconfont icon-changyongtubiao-mianxing-37"></view>
							</view>
							<view class="menuTitle">邀请</view>
						</view>
					</view>
					<view class="menuItem">
						<view class="menuMain" @click="doOpenPage('setting')">
							<view class="menuIcon">
								<view class="iconfont icon-changyongtubiao-mianxing-32"></view>
							</view>
							<view class="menuTitle">管理</view>
						</view>
					</view>
				</view>
			</view>
		</block>
		<view class="formPassword" v-if="showPasswordForm">
			<form @submit="getRoomInfo">
				<view class="formPasswordTitle">请输入密码进入房间</view>
				<view class="formPasswordInput">
					<input type="number" placeholder="请输入密码" password="true" v-model="password" confirm-type="search" confirm-hold="true" />
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 聊天页面时时滚动样式
				scrollTop: 0,
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0
				},
				bgAudioMannager: null,
				config: {
					lockScreen: false,
				},
				showMenuBox: false,
				loading: false,
				showRoomPage: false,
				showPasswordForm: false,
				app: getApp(),
				userInfo: null,
				song: {
					song: null,
					user: null,
				},
				room_id: 0,
				room: false,
				password: "",
				animationData: {},
				rotate: 0,
				playerTimer: null,
				chatType: 'text',
				historyKey: 'historyList_',
				historyList: [],
				messageObj: {
					message: "",
					at: false,
					focus: false,
				},
			}
		},
		mounted() {
			let that = this;
			const res = uni.getSystemInfoSync(); //获取手机可使用窗口高度
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) - 40; //像素 
		},
		onLoad(e) {
			let that = this;
			that.bgAudioMannager = uni.getBackgroundAudioManager();
			this.room_id = uni.getStorageSync('room_id') || 888;
			// this.runPlayAnimation();
			that.app.user.getMyInfo({
				success(userInfo) {
					that.userInfo = userInfo;
					that.getRoomInfo();
				}
			});
			uni.$on('WebSocketMessage', function(data) {
				try {
					that.messageController(JSON.parse(data));
				} catch (error) {
					console.error(error);
				}
			});
			uni.$on('IndexReload', function() {
				that.app.user.getMyInfo({
					success(userInfo) {
						that.userInfo = userInfo;
						that.getRoomInfo();
					}
				});
			});
			uni.$on('AtUserEvent', function(user) {
				that.doAtUser(user);
			});
			uni.$on('RoomChanged', function(room_id) {
				uni.setNavigationBarTitle({
					title: '正在进入'
				});
				that.room_id = room_id;
				that.showPasswordForm = false;
				that.showRoomPage = false;
				that.password = '';
				uni.setStorageSync('room_id', parseInt(that.room_id));
				that.getRoomInfo();
			});
			uni.onKeyboardHeightChange(function(e) {
				const res = uni.getSystemInfoSync(); //获取手机可使用窗口高度
				that.style.pageHeight = res.windowHeight;
				that.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) - (e.height ==
					0 ? 40 : 20) - e.height; //像素 
				that.autoScroll();
			});
			that.bgAudioMannager.onCanplay(function() {
				that.runPlayAnimation();
				let time = parseInt(new Date().valueOf() / 1000) - that.song.since - 3;
				that.bgAudioMannager.seek(time > 0 ? time : 0);
			});
			that.bgAudioMannager.onEnded(function() {
				that.stopPlayerAnimation();
				that.song = {
					song: null,
					user: null
				};
			});
		},
		onShow() {
			let that = this;
			if (that.bgAudioMannager.src) {
				that.bgAudioMannager.play();
			}
			that.password = '';
			that.autoScroll();
		},
		onNavigationBarButtonTap(res) {
			let that = this;
			console.log(res);
			switch (res.text) {
				case '换房':
					uni.navigateTo({
						url: "./select"
					});
					break;
				case '我的':
					if (that.userInfo.user_id <= 0) {
						that.app.user.login();
					} else {
						uni.navigateTo({
							url: '../user/index'
						});
					}
					break;
				default:
			}
		},
		methods: {
			doKeyDown() {
				let that = this;
				if (that.messageObj.at) {
					if (that.messageObj.message.indexOf('@' + decodeURIComponent(that.messageObj.at.user_name)) < 0) {
						//@的昵称已经被改过了
						that.messageObj.at = false;
					}
				}
			},
			doMusicClicked() {
				let that = this;
				let menu = [
					'不喜欢'
				];
				if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {
					menu = [
						'切歌'
					];
				}
				uni.showActionSheet({
					itemList: menu,
					success: function(res) {
						console.log(res.tapIndex);
						let buttonName = menu[res.tapIndex];
						switch (buttonName) {
							case '切歌':
								uni.showModal({
									title: '切歌提醒',
									content: '是否确认切掉当前播放的歌?',
									cancelText: '取消',
									confirmColor: '#FF4500',
									confirmText: '切歌',
									success: function(res) {
										if (res.confirm) {
											that.app.request({
												url: "song/pass",
												data: {
													room_id: that.room_id,
													mid: that.song.song.mid
												},
												success: function() {}
											});
										}
									}
								});
								break;
							case '不喜欢':
								that.app.request({
									url: "song/pass",
									data: {
										room_id: that.room_id,
										mid: that.song.song.mid
									},
									success: function(res) {
										that.bgAudioMannager.pause();
										that.stopPlayerAnimation();
										that.song = {
											song: null,
											user: null
										};
										uni.showModal({
											title: '不喜欢',
											content: res.msg,
											showCancel: false,
											success: function() {}
										})
									}
								});
								break;
							default:
						}
					}
				})
			},
			doAtUser(user) {
				let that = this;
				that.messageObj.at = user;
				that.messageObj.message = "@" + decodeURIComponent(user.user_name) + " " + that.messageObj.message;
				that.messageObj.focus = true;
			},
			autoScroll() {
				let that = this;
				that.$nextTick(function() {
					let query = uni.createSelectorQuery();
					query.select('#historyList').boundingClientRect();
					query.select('#historyBox').boundingClientRect();
					query.exec(function(res) {
						if (res[0] && res[1]) {
							console.log(res[0].height);
							console.log(res[1].height);
							that.scrollTop = res[1].height - res[0].height + 150;
						}
					});
				});
			},
			historyClicked() {
				let that = this;
				that.showMenuBox = false;
				uni.hideKeyboard();
			},
			saveMessageHistory() {
				let that = this;
				uni.setStorageSync(that.historyKey + that.room_id, JSON.stringify(that.historyList));
			},
			messageController(msg) {
				let that = this;
				console.log(msg.type);
				switch (msg.type) {
					case 'text':
					case 'img':
					case 'system':
						that.addMessageToList(msg);
						break;
					case 'addSong':
						if (msg.at) {
							that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 送了一首 《" + msg.song.name + "》 给 " +
								decodeURIComponent(msg.at.user_name), '#333');
						} else {
							that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 点了一首《" + msg.song.name + "》", '#333');
						}
						that.saveMessageHistory();
						break;
					case 'pass':
						that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 切掉了《" + msg.song.name + "》", '#ff4500');
						that.saveMessageHistory();
						break;
					case 'chat_bg':
						that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 运气大爆发,触发了点歌背景墙特效(1小时内播放歌曲时有效)!", 'green', '#eee');
						that.saveMessageHistory();
						break;
					case 'push':
						that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 将歌曲 《" + msg.song.name + "》 设为置顶候播放");
						that.saveMessageHistory();
						break;
					case 'removeSong':
						that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 将歌曲 《" + msg.song.name + "》 从队列移除");
						that.saveMessageHistory();
						break;
					case 'removeban':
						that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 将 " + decodeURIComponent(msg.ban.user_name) +
							" 解禁");
						that.saveMessageHistory();
						break;
					case 'shutdown':
						that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 禁止了用户 " + decodeURIComponent(msg.ban.user_name) +
							" 发言");
						that.saveMessageHistory();
						break;
					case 'songdown':
						that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 禁止了用户 " + decodeURIComponent(msg.ban.user_name) +
							" 点歌");
						that.saveMessageHistory();
						break;
					case 'back':
						for (let i = 0; i < that.historyList.length; i++) {
							if (that.historyList[i].key == msg.key) {
								that.historyList.splice(i, 1);
								break;
							}
						}
						that.addSystemMessage(decodeURIComponent(msg.user.user_name) + " 撤回了一条消息");
						that.saveMessageHistory();
						break;
					case 'playSong':
						that.playMusic(msg);
						break;
					default:
				}
			},
			playMusic(msg) {
				let that = this;
				if (that.song.song && that.song.song.mid == msg.song.mid) {
					return;
				}
				console.log('Play Music');
				that.song = msg;
				that.bgAudioMannager.title = "正在播放 " + msg.song.name;
				that.bgAudioMannager.singer = msg.song.singer + ' - ' + that.room.room_name;
				that.bgAudioMannager.coverImgUrl = msg.song.pic;
				that.bgAudioMannager.src = "https://api.bbbug.com/api/song/playurl?mid=" + msg.song.mid;
				that.bgAudioMannager.play();
				that.addSystemMessage('正在播放 ' + msg.song.name + '(' + msg.song.singer + ')');
			},
			doSendMessage(e) {
				let that = this;
				let message_old = that.messageObj.message;
				let message = message_old;
				that.messageObj.message = '';
				if (message_old) {
					if (that.messageObj.at) {
						message = message_old.replace("@" + decodeURIComponent(that.messageObj.at.user_name),
							'');
					}
					that.app.request({
						url: "message/send",
						data: {
							type: 'text',
							where: "channel",
							to: that.room_id,
							msg: encodeURIComponent(message),
							at: that.messageObj.at
						},
						success: function(res) {},
						error: function(res) {
							that.messageObj.message = message_old;
							uni.showModal({
								title: '发送失败',
								content: res.msg,
								showCancel: false
							});
						}
					});
				}
			},
			addMessageToList(msg) {
				let that = this;
				if (that.historyList.length > 100) {
					that.historyList.shift();
				}
				that.historyList.push(msg);
				that.saveMessageHistory();
				that.autoScroll();
			},
			runPlayAnimation() {
				let that = this;
				that.stopPlayerAnimation();
				var animation = uni.createAnimation({
					duration: 10000,
					timingFunction: 'linear',
				});
				that.rotate += 60;
				if (that.rotate > 360) {
					that.rotate = 0;
				}
				that.rotate -= 180;
				animation.rotate(that.rotate).step();
				that.animationData = animation.export();
				clearTimeout(that.playerTimer);
				that.playerTimer = setTimeout(function() {
					that.runPlayAnimation();
				}.bind(that), 10000);
			},
			stopPlayerAnimation() {
				let that = this;
				clearTimeout(that.playerTimer);
				that.animationData = {};
			},
			urldecode(str) {
				return decodeURIComponent(str);
			},
			getRoomInfo() {
				let that = this;
				uni.showLoading({
					title: '连接房间服务器'
				});
				that.app.request({
					url: 'room/getRoomInfo',
					data: {
						room_id: that.room_id,
						room_password: that.password
					},
					success(res) {
						that.room = res.data;
						uni.setNavigationBarTitle({
							title: that.room.room_name
						});
						that.app.request({
							url: 'room/getWebsocketUrl',
							data: {
								channel: that.room_id
							},
							success: function(res) {
								uni.hideLoading();
								that.app.webSocket.config.wssUrl = 'wss://websocket.bbbug.com/?account=' +
									res.data.account + '&channel=' +
									res.data.channel + '&ticket=' + res.data.ticket;
								if (!that.app.webSocket.isConnected) {
									that.app.webSocket.connectWss();
								}
								let str = uni.getStorageSync(that.historyKey + that.room_id) || false;
								// that.historyList = str ? JSON.parse(str) : [];
								that.addSystemMessage(that.room.room_notice || '服务器连接成功');
								that.showPasswordForm = false;
								that.showRoomPage = true;
								that.autoScroll();
							},

							error: function(res) {
								console.log(res);
							}
						});
					},
					error(res) {
						uni.hideLoading();
						if (res.code == 403) {
							uni.setNavigationBarTitle({
								title: '密码房'
							});
							that.showPasswordForm = true;
							that.showRoomPage = false;
							if (that.password) {
								uni.showModal({
									showCancel: false,
									title: '进入失败',
									content: res.msg,
									success: function() {}
								});
							}
						} else {
							uni.showModal({
								showCancel: false,
								title: '进入失败',
								content: res.msg,
								success: function() {
									uni.navigateBack();
								}
							});
						}
					}
				});
			},
			addSystemMessage(msg, color = '#999', bg = 'tansparent') {
				let that = this;
				that.historyList.push({
					type: "system",
					content: msg,
					bg: bg,
					color: color
				});
				that.autoScroll();
			},
			doOpenPage(page) {
				let that = this;
				that.showMenuBox = false;
				switch (page) {
					case 'addSong':
						uni.navigateTo({
							url: '../song/search?room_id=' + that.room_id
						});
						break;
					case 'mySong':
						uni.navigateTo({
							url: '../song/my?room_id=' + that.room_id
						});
						break;
					case 'songList':
						uni.navigateTo({
							url: '../song/list?room_id=' + that.room_id
						});
						break;
					case 'onLine':
						let isMaster = 0;
						if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {
							isMaster = 1;
						}
						uni.navigateTo({
							url: './online?room_id=' + that.room_id + "&room_admin=" + isMaster
						});
						break;
					default:
				}
			},
			showMenuUserHead(msg) {
				console.log(msg);
				let user = msg.user;
				let that = this;
				let menu = ['进入主页', '@一下Ta', '送歌给Ta'];
				if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {
					menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息', '禁止点歌', '禁止发言', '全部解禁'];
				} else if (user.user_id == that.userInfo.user_id) {
					//发消息人是自己
					menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息'];
				} else {
					//其他人的消息
				}
				uni.showActionSheet({
					itemList: menu,
					success: function(res) {
						switch (menu[res.tapIndex]) {
							case '送歌给Ta':
								uni.navigateTo({
									url: '../song/search?room_id=' + that.room_id + "&at=" + user.user_id + "&name=" + user.user_name
								});
								break;
							case '@一下Ta':
								that.doAtUser(user);
								break;
							case '全部解禁':
								that.app.request({
									url: 'user/removeban',
									data: {
										room_id: that.room_id,
										user_id: user.user_id
									},
									loading: "解禁中",
									success: function(res) {
										uni.showModal({
											title: '解禁成功',
											content: res.msg,
											showCancel: false,
											success: function() {
												that.getuserList();
											}
										});
									}
								});
								break;
							case '禁止发言':
								that.app.request({
									url: 'user/shutdown',
									data: {
										room_id: that.room_id,
										user_id: user.user_id
									},
									loading: "禁言中",
									success: function(res) {
										uni.showModal({
											title: '禁言成功',
											content: res.msg,
											showCancel: false,
											success: function() {
												that.getuserList();
											}
										});
									}
								});
								break;
							case '禁止点歌':
								that.app.request({
									url: 'user/songdown',
									data: {
										room_id: that.room_id,
										user_id: user.user_id
									},
									loading: "禁歌中",
									success: function(res) {
										uni.showModal({
											title: '禁歌成功',
											content: res.msg,
											showCancel: false,
											success: function() {
												that.getuserList();
											}
										});
									}
								});
								break;
							default:
						}
					}
				});
			},
			getStaticUrl(url) {
				if (url.indexOf('https://') > -1 || url.indexOf('http://') > -1) {
					return url;
				} else {
					return 'https://api.bbbug.com/uploads/' + url;
				}
			},
			chooseImage() {
				let that = this;
				that.showMenuBox = false;
				uni.chooseImage({
					sizeType: "compressed",
					sourceType: ['album'],
					count: 1,
					fail: function(res) {
						console.log(res);
					},
					success: function(res) {
						uni.showLoading({
							title: '处理中'
						});
						uni.compressImage({
							src: res.tempFilePaths[0],
							quality: 50,
							success: function(res) {
								uni.uploadFile({
									url: that.app.globalData.request.apiUrl + "attach/uploadimage",
									filePath: res.tempFilePath,
									name: 'file',
									formData: that.app.globalData.request.baseData,
									success: function(uploadFileRes) {
										uni.hideLoading();
										let response = {};
										try {
											response = JSON.parse(uploadFileRes.data);
										} catch (err) {
											uni.showModal({
												showCancel: false,
												title: '上传失败',
												content: '服务器发生错误',
												success: function() {}
											});
										}
										if (response.code == 200) {
											that.app.request({
												url: "message/send",
												data: {
													where: 'channel',
													to: that.room_id,
													type: 'img',
													msg: response.data.attach_thumb,
													resource: response.data.attach_path,
												},
												success: function(res) {},
												error: function(res) {
													that.messageObj.message = message_old;
													uni.showModal({
														title: '发送失败',
														content: res.msg,
														showCancel: false
													});
												}
											});
										} else {
											uni.showModal({
												showCancel: false,
												title: '上传失败',
												content: response.msg,
												success: function() {}
											});
										}
									}
								});
							}
						})
					}
				});
			},
			fullViewImage(url) {
				uni.previewImage({
					urls: [url],
					longPressActions: {
						itemList: ['保存图片', '举报图片'],
						success: function(data) {},
						fail: function(err) {}
					}
				});
			}
		}
	}
</script>

<style>
	.playerImage {
		width: 60px;
		height: 60px;
		border-radius: 100%;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		pointer-events: auto;
	}

	.female {
		background-color: #FE9898;
		color: #999;
	}

	.male {
		background-color: #66CBFF;
		color: white;
	}

	.chatForm {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		height: 50px;
		background-color: white;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.chatInput {
		position: fixed;
		left: 10px;
		bottom: 15px;
		right: 90px;
		padding: 10px;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.chatIcon {
		color: #666;
		display: inline-block;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		white-space: 0;
	}

	.chatIcon i {
		font-size: 32px;
	}

	.chatButton {
		position: fixed;
		bottom: 5px;
		right: 5px;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.historyList {
		z-index: 0;
		overflow: hidden;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
	}

	.item {
		margin: 20px 10px;
		position: relative;
	}

	.userHead {
		width: 40px;
		height: 40px;
		border-radius: 5px;
		border: 1px solid #eee;
	}

	.item .head {
		position: absolute;
		left: 0px;
		top: 0px;
	}

	.mine .head {
		position: absolute;
		right: 0px;
		left: auto;
		top: 0px;
	}

	.item .body {
		margin-left: 50px;
		margin-top: 20px;
		text-align: left;
	}

	.mine .body {
		margin-left: auto;
		margin-right: 50px;
		margin-top: 20px;
		text-align: right;
	}

	.item .body .userName {
		font-size: 14px;
	}

	.item .body .content {
		overflow: hidden;
		text-align: left;
		display: inline-block;
		max-width: 60%;
		background-color: #ddd;
		padding: 8px 16px;
		margin: 5px 0px;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
		color: #333;
		word-wrap: break-word;
		word-break: break-all;
		font-size: 15px;
		white-space: pre-wrap;
	}

	.item .body .image {
		padding: 0;
		white-space: none;
	}

	.item .body .image .img {
		max-width: 150px;
		border-radius: 10px;
	}

	.mine .body .content {
		color: white;
	}

	.system {
		text-align: center;
		margin: 10px 0px;
	}

	.system .information {
		padding: 5px 10px;
		font-size: 12px;
		/* background-color: #ddd; */
		color: #999;
		max-width: 80%;
		border-radius: 5px;
	}

	.formPassword {
		position: fixed;
		left: 0;
		right: 0;
		top: constant(safe-area-inset-top) + 60;
		bottom: constant(safe-area-inset-bottom);
		z-index: 999;
		background-color: #f5f5f5;
		text-align: center;
	}

	.formPasswordTitle {
		font-size: 18px;
		color: #333;
		margin-top: 30%;
	}

	.formPasswordInput {
		margin-top: 20px;
		text-align: center;
	}

	.formPasswordInput input {
		padding: 10px 15px;
		border-radius: 10px;
		background-color: white;
		width: 200px;
		display: inline-block;
	}

	scroll-view {
		z-index: -1;
	}

	movable-area {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	movable-view {
		width: 60px;
		height: 60px;
		position: absolute;
		left: auto;
		top: 20px;
		right: 20px;
		pointer-events: auto;
	}

	.menuBox {}

	.menuShadow {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 10;
		pointer-events: auto;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.menuBody {
		z-index: 10;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		height: 130px;
		background-color: white;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		white-space: none;
		padding: 10px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.menuItem {
		display: inline-block;
		width: 25%;
		text-align: center;
		margin-bottom: 10px;
	}

	.menuIcon .iconfont {
		font-size: 24px;
		color: #666;
	}

	.menuTitle {
		font-size: 12px;
		color: #999;
	}
</style>
