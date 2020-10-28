<template>
	<view class="uniapp">
		<view class="top" v-if="userInfo">
			<view class="headimg">
				<image :src="urldecode(userInfo.user_head)"></image>
			</view>
			<view class="username">{{urldecode(userInfo.user_name)}}</view>
			<view class="desc">{{urldecode(userInfo.user_remark)}}</view>
			<view style="margin:0px 10%;text-align: center;margin-bottom: 20px;">
				<view class="weui-flex" style="background-color:transparent;">
					<view class="weui-flex__item">
						<view hover-class="weui-grid_active">
							<view class="top_value">{{userInfo.user_song}}</view>
							<view class="top_key">点歌</view>
						</view>
					</view>
					<view class="weui-flex__item">
						<view hover-class="weui-grid_active">
							<view class="top_value">{{userInfo.user_img}}</view>
							<view class="top_key">斗图</view>
						</view>
					</view>
					<view class="weui-flex__item">
						<view hover-class="weui-grid_active">
							<view class="top_value">{{userInfo.user_chat}}</view>
							<view class="top_key">发言</view>
						</view>
					</view>
					<view class="weui-flex__item">
						<view hover-class="weui-grid_active">
							<view class="top_value">{{userInfo.user_gamesongscore}}</view>
							<view class="top_key">猜歌</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="weui-cells">
			<navigator url="./motify" class="weui-cell weui-cell_access">
				<view class="weui-cell__bd">
					<view>
						<i class="item iconfont icon-icon_message"></i>修改资料</view>
				</view>
				<view class="weui-cell__ft"></view>
			</navigator>
			<view class="weui-cell weui-cell_access" v-if="userInfo.myRoom" @click="doJoinMyRoom">
				<view class="weui-cell__bd">
					<view>
						<i class="item iconfont icon-icon_message"></i>我的房间</view>
				</view>
				<view class="weui-cell__ft"></view>
			</view>
			<view class="weui-cell weui-cell_access" v-if="!userInfo.myRoom" @click="doCreateRoom">
				<view class="weui-cell__bd">
					<view>
						<i class="item iconfont icon-icon_message"></i>创建房间</view>
				</view>
				<view class="weui-cell__ft"></view>
			</view>
		</view>
		<view class="weui-cells">
			<view class="weui-cell weui-cell_access" @click="doLogout" v-if="userInfo">
				<view class="weui-cell__bd">
					<view>
						<i class="item iconfont icon-poweroff"></i>退出登录</view>
				</view>
				<view class="weui-cell__ft"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				app: getApp(),
				userInfo: {}
			}
		},
		onLoad() {

		},
		onShow() {
			let that = this;
			that.getMyInfo();
		},
		methods: {
			doCreateRoom() {
				uni.navigateTo({
					url: "../room/create"
				});
			},
			doJoinMyRoom() {
				let that = this;
				uni.showModal({
					title: '换房提醒',
					content: '换房将退出之前所在的房间,是否确认?',
					cancelText: '停留',
					confirmColor: '#FF4500',
					confirmText: '确认',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: '连接房间中'
							});
							that.doLoopToEnter(that.userInfo.myRoom);
						}
					}
				});
			},
			doLoopToEnter(room) {
				let that = this;
				console.log(that.app.webSocket.isConnected)
				if (that.app.webSocket.isConnected) {
					if (!that.isEntering) {
						that.app.webSocket.closeWss();
						that.app.webSocket.connection = null;
						that.app.webSocket.config.wssUrl = '';
						that.isEntering = true;
					}
					setTimeout(function() {
						that.doLoopToEnter(room);
					}, 100);
				} else {
					uni.hideLoading();
					uni.$emit('RoomChanged', room.room_id);
					uni.navigateBack();
				}
			},
			urldecode(str) {
				return decodeURIComponent(str);
			},
			getMyInfo() {
				let that = this;
				that.app.user.getMyInfo({
					success(userInfo) {
						that.userInfo = userInfo;
					}
				});
			},
			doLogin() {
				let that = this;
				that.app.user.login();
			},
			doLogout() {
				let that = this;
				that.app.user.logout({
					success() {
						that.userInfo = null;
						uni.$emit('IndexReload');
						uni.navigateBack();
					}
				});
			}
		}
	}
</script>

<style>
	@import "/static/style/weui.scss";
	@import "/static/style/main.scss";
	@import '/static/style/font/iconfont.scss';

	button {
		background-color: transparent;
		border: none;
		outline: none;
	}

	button::after {
		border: 0
	}

	.item {
		margin-right: 5px;
	}

	.top {
		margin-bottom: 0px;
		margin-top: 30px;
	}

	.headimg {
		text-align: center;
	}

	.headimg>image {
		width: 100px;
		height: 100px;
		border-radius: 100%;
		border: 1px solid #ccc;
	}

	.username {
		text-align: center;
		font-size: 22px;
		font-weight: bord;
	}

	.desc {
		text-align: center;
		font-size: 14px;
		color: #999;
	}

	.top_key {
		font-size: 14px;
		color: #999;
	}

	.top_value {
		font-size: 18px;
		color: #333;
	}

	.weui-cell {
		/* padding: 12px; */
	}
</style>
