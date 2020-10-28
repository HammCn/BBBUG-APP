<template>
	<view class="uniapp">
		<view v-for="(item,index) in roomList" @click="doEnterRoom(item)" class="roomBg">
			<view class="roomTitle">
				<i class="iconfont roomType icon-xiaoxi2" v-if="item.room_type==0"></i>
				<i class="iconfont roomType icon-changyongtubiao-mianxing-61" v-if="item.room_type==1"></i>
				<i class="iconfont roomType icon-shezhi3" v-if="item.room_type==2"></i>
				<i class="iconfont roomType icon-book" v-if="item.room_type==3"></i>
				{{item.room_name}}
				<font class="roomOnline" v-if="item.room_online>0">({{item.room_online}})</font>
				<span class="roomRight"><i class="iconfont icon-lock-fill roomLock" v-if="item.room_public==1"></i><span class="roomId">ID:{{item.room_id}}</span></span>
			</view>
			<view class="roomBottom">
				<image :src="item.user_head || '/static/image/nohead.jpg'" class="roomImage"></image>
				<view class="roomUser">
					<view>
						房主: {{app.libs.urldecode(item.user_name)}}
					</view>
					<view class="roomNotice">{{item.room_notice||'未填写房间公告'}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				isEntering: false,
				app: getApp(),
				roomList: [],
				userInfo: false,
				topHeight: 0,
				typeList: [{
					value: 0,
					title: "普通文字聊天房"
				}, {
					value: 1,
					title: "一起听歌音乐房"
				}, {
					value: 2,
					title: "听歌猜歌游戏房"
				}],
			}
		},
		mounted() {

		},
		onLoad() {
			let that = this;
			that.loading = true;
		},
		onShow() {
			let that = this;
			that.app.user.getMyInfo({
				success: function(userInfo) {
					that.userInfo = userInfo;
					that.getHotRooms();
				}
			});
		},
		onPullDownRefresh() {
			this.getHotRooms();
		},
		onNavigationBarButtonTap(res) {
			let that = this;
			switch (res.text) {
				case '创建':
					if (that.userInfo && that.userInfo.myRoom) {
						uni.showModal({
							title: "已有房间",
							content: "你已经创建了'" + that.userInfo.myRoom.room_name + "',是否进入该房间?",
							confirmText: "进入房间",
							success(res) {
								if (res.confirm) {
									uni.showLoading({
										title: '连接房间中'
									});
									that.doLoopToEnter(that.userInfo.myRoom);
								}
							}
						});
					} else {
						uni.navigateTo({
							url: "../room/create"
						});
					}
					break;
				default:
			}
		},
		methods: {
			getHotRooms() {
				let that = this;
				that.app.request({
					url: "room/hotRooms",
					loading: that.loading ? "Loading..." : false,
					data: {},
					success(res) {
						uni.stopPullDownRefresh();
						that.loading = false;
						that.roomList = res.data;
					}
				});
			},
			doEnterRoom(room) {
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
							that.doLoopToEnter(room);
						}
					}
				});
			},
			doLoopToEnter(room) {
				let that = this;
				if (that.app.webSocket.isConnected) {
					if (!that.isEntering) {
						that.app.webSocket.closeWss();
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
			}
		}
	}
</script>

<style>
	@import "/static/style/weui.scss";
	@import "/static/style/main.scss";
	@import '/static/style/font/iconfont.scss';

	.roomBg {
		background-color: white;
		padding: 10px;
		border-radius: 10px;
		margin: 10px;
		position: relative;
		height: 100px;
	}

	.roomTitle {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;
		font-size: 16px;
		margin-right: 80px;
	}

	.roomBottom {
		position: absolute;
		right: 10px;
		bottom: 10px;
		left: 10px;
	}

	.roomOnline {
		color: orangered;
	}

	.roomType {
		font-size: 16px;
		font-weight: bold;
		color: orangered;
		padding: 2px;
		margin-left: 5px;
	}

	.roomNotice {
		font-size: 12px;
		color: #AAAAAA;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.roomUser {
		margin-left: 50px;
		font-size: 14px;
		color: #333;
		margin-top: 10px;
		line-height: 22px;
	}

	.roomImage {
		width: 40px;
		height: 40px;
		border-radius: 10px;
		margin-top: 10px;
		position: absolute;
		background-color: #F5F5F5;
		border: 1px solid #F5F5F5;
	}


	.roomId {
		font-size: 12px;
		color: #666;
		background-color: #F5F5F5;
		padding: 1px 5px;
		border-radius: 3px;
		font-weight: 100;
	}

	.roomRight {
		position: absolute;
		right: 10px;
		top: 10px;
		vertical-align: middle;
	}

	.roomLock {
		color: orangered;
		font-size: 14px;
	}
</style>
