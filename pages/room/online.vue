<template>
	<view class="uniapp">
		<view v-if="userList.length==0">
			<view class="tipImage">
				<image class="img" src="../../static/image/alert.png" />
			</view>
			<view class="tipText">呀，房间里竟然一个人都没有</view>
		</view>
		<view class="weui-panel weui-panel_access userList" style="margin:0;border-radius: 0;" v-if="userList.length>0">
			<view class="weui-panel__bd">
				<view class="weui-media-box weui-media-box_appmsg" v-for="(item,index) in userList" @click="showMenu(item)">
					<view class="weui-media-box__hd">
						<img class="weui-media-box__thumb" style="border: 1px solid #eee;border-radius: 10px;" :src="item.user_head||'/static/image/nohead.jpg'"
						 alt="">
					</view>
					<view class="weui-media-box__bd">
						<view class="weui-media-box__title"><i style="color:#66CBFF;margin-right:5px;" class="iconfont icon-xingbie-nan"
							 v-if="item.user_sex==1"></i><i style="color:#FE9898;margin-right:5px;" class="iconfont icon-xingbie-nv" v-if="item.user_sex==0"></i>{{urldecode(item.user_name)}}</view>
						<view class="weui-media-box__desc">
							<view class="status">
								<view class="badge" style="color:#999999">ID:{{item.user_id}}</view>
								<view class="badge" v-if="item.user_shutdown">禁言</view>
								<view class="badge" v-if="item.user_songdown">禁歌</view>
							</view>
							<view>{{urldecode(item.user_remark)}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				app: getApp(),
				userList: [],
				room_id: 0,
				isMaster: false,
			}
		},
		onLoad(e) {
			this.room_id = e.room_id || 0;
			this.isMaster = e.room_admin == 1 ? true : false;
			let that = this;
			that.getuserList();
		},
		onPullDownRefresh() {
			this.getuserList();
		},
		onShow() {},
		methods: {
			getuserList() {
				let that = this;
				that.app.request({
					url: "user/online",
					data: {
						room_id: that.room_id
					},
					success: function(res) {
						uni.stopPullDownRefresh();
						that.userList = res.data;
					}
				});
			},
			urldecode(str) {
				return decodeURIComponent(str);
			},
			showMenu(user) {
				let that = this;
				let menu = ['进入主页', '@一下Ta', '送歌给Ta'];
				if (that.isMaster) {
					menu = ['进入主页', '@一下Ta', '送歌给Ta', '禁止点歌', '禁止发言', '全部解禁'];
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
								uni.$emit('AtUserEvent', user);
								uni.navigateBack();
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
			}
		}
	}
</script>

<style>
	@import "/static/style/weui.scss";
	@import "/static/style/main.scss";
	@import '/static/style/font/iconfont.scss';
	.userList {
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.number {
		font-size: 16px;
		font-weight: bolder;
		color: #ff4500;
		margin-right: 5px;
	}

	.badge {
		display: inline-block;
		color: orangered;
		margin-right: 5px;
	}

	.tipImage {
		text-align: center;
		margin-top: 20%;

	}

	.tipImage .img {
		width: 100px;
		height: 100px;
	}

	.tipText {
		margin-top: 5%;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
</style>
