<template>
	<view class="uniapp">
		<view v-if="songList.length==0">
			<view class="tipImage">
				<image class="img" src="../../static/image/alert.png" />
			</view>
			<view class="tipText">你竟然还一首歌没点过?快去点歌吧!</view>
		</view>
		<view class="weui-panel weui-panel_access songList" style="margin:0;border-radius: 0;" v-if="songList.length>0">
			<view class="weui-panel__bd">
				<view class="weui-media-box weui-media-box_appmsg" v-for="(item,index) in songList" @click="showMenu(item)">
					<view class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="item.pic" alt="">
					</view>
					<view class="weui-media-box__bd">
						<view class="weui-media-box__title">{{item.name}}</view>
						<view class="weui-media-box__desc">点过 <span style="color:orangered;font-size:16px;">{{item.played}}</span> 次 歌手
							{{item.singer}}</view>
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
				isPullDown: false,
			}
		},
		onLoad(e) {
			this.room_id = e.room_id || 0;
		},
		onPullDownRefresh() {
			this.isPullDown = true;
			this.getMySongList();
		},
		onShow() {
			let that = this;
			that.getMySongList();
		},
		methods: {
			getMySongList() {
				let that = this;
				that.app.request({
					url: "song/mySongList",
					success: function(res) {
						if (that.isPullDown) {
							uni.stopPullDownRefresh();
							that.isPullDown = false;
						}
						that.songList = res.data;
					}
				});
			},
			showMenu(song) {
				let that = this;
				uni.showActionSheet({
					itemList: ['点歌', '删除'],
					success: function(res) {
						switch (res.tapIndex) {
							case 0:
								that.app.request({
									url: 'song/addSong',
									data: {
										mid: song.mid,
										at: null,
										room_id: that.room_id
									},
									loading: "点歌中",
									success: function(res) {
										uni.showModal({
											title: '点歌成功',
											content: res.msg,
											showCancel: false,
											success: function() {
												that.getMySongList();
											}
										});
									}
								});
								break;
							case 1:
								uni.showToast({
									icon: 'none',
									title: '即将上线'
								})
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
