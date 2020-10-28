<template>
	<view class="uniapp">
		<view v-if="songList.length==0">
			<view class="tipImage">
				<image class="img" src="../../static/image/alert.png" />
			</view>
			<view class="tipText">播放列表快空啦,快去点歌吧</view>
		</view>
		<view class="weui-panel weui-panel_access songList" style="margin:0;border-radius: 0;" v-if="songList.length>0">
			<view class="weui-panel__bd">
				<view class="weui-media-box weui-media-box_appmsg" v-for="(item,index) in songList" @click="showMenu(item.song)">
					<view class="weui-media-box__hd">
						<img class="weui-media-box__thumb song_image" :src="item.song.pic" alt="">
					</view>
					<view class="weui-media-box__bd">
						<view class="weui-media-box__title"><span class="number">No.{{index+1}}</span>{{item.song.name}}({{item.song.singer}})</view>
						<view class="weui-media-box__desc">
							<block v-if="item.at">
								{{urldecode(item.user.user_name)}} 送给 {{urldecode(item.at.user_name)}} 的歌
							</block>
							<block v-if="!item.at">
								{{urldecode(item.user.user_name)}} 点的歌
							</block><br>.
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
				songList: [],
				room_id: 0,
			}
		},
		onLoad(e) {
			this.room_id = e.room_id || 0;
			let that = this;
			that.getSongList();
		},
		onPullDownRefresh() {
			this.getSongList();
		},
		onShow() {},
		methods: {
			getSongList() {
				let that = this;
				that.app.request({
					url: "song/songList",
					data: {
						room_id: that.room_id
					},
					success: function(res) {
						uni.stopPullDownRefresh();
						that.songList = res.data;
					}
				});
			},
			urldecode(str) {
				return decodeURIComponent(str);
			},
			showMenu(song) {
				let that = this;
				let menu = ['置顶', '删除'];
				uni.showActionSheet({
					itemList: menu,
					success: function(res) {
						switch (res.tapIndex) {
							case 0:
								that.app.request({
									url: 'song/push',
									data: {
										mid: song.mid,
										room_id: that.room_id
									},
									loading: "置顶中",
									success: function(res) {
										uni.showModal({
											title: '置顶成功',
											content: res.msg,
											showCancel: false,
											success: function() {
												that.getSongList();
											}
										});
									}
								});
								break;
							case 1:
								that.app.request({
									url: 'song/remove',
									data: {
										mid: song.mid,
										room_id: that.room_id
									},
									loading: "移除中",
									success: function(res) {
										uni.showModal({
											title: '移除成功',
											content: res.msg,
											showCancel: false,
											success: function() {
												that.getSongList();
											}
										});
									}
								});
								break;
							default:
						}
					}
				})
			}
		}
	}
</script>

<style>
	@import "/static/style/weui.scss";
	@import "/static/style/main.scss";
	@import '/static/style/font/iconfont.scss';
	.songList {
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.number {
		font-size: 16px;
		font-weight: bolder;
		color: #ff4500;
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
	.song_image{
		border-radius: 10px;
	}
</style>
