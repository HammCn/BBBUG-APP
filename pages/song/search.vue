<template>
	<view class="uniapp">
		<view class="searchbox">
			<form @submit="doSearchSong">
				<view class="weui-cells weui-cells_form" style="margin:0;border-radius:0;background-color:transparent;padding:8px;">
					<view class="weui-cell" style="padding: 5px 10px;">
						<view class="weui-cell__bd">
							<input class="weui-input" type="text" confirm-type="search" placeholder="输入歌手/歌名/专辑搜索" v-model="keyword"
							 confirm-hold="true"></input>
						</view>
						<view class="weui-cell__ft" @click="doSearchSong">
							<i class="iconfont icon-search" style="font-size: 24px;"></i>
						</view>
					</view>
				</view>
			</form>
		</view>
		<view class="weui-panel weui-panel_access" v-if="at>0" @click="at=0;">
			<view class="weui-panel__bd">
				<view class="weui-media-box weui-media-box_text">
					<view class="weui-media-box__desc" style="-webkit-line-clamp:1;font-size: 16px;"><span style="color:orangered;margin-right:5px;">取消送歌给：</span>ID:{{at}}
						{{name}}</view>
				</view>
			</view>
		</view>
		<view v-if="songList.length==0">
			<view class="tipImage">
				<image class="img" src="../../static/image/alert.png" />
			</view>
			<view class="tipText">没有搜索到歌曲呀,换个关键词试试吧</view>
		</view>
		<view class="weui-panel weui-panel_access songList" style="margin:0;border-radius: 0;" v-if="songList.length>0">
			<view class="weui-panel__bd">
				<view class="weui-media-box weui-media-box_appmsg" v-for="(item,index) in songList" @click="showMenu(item)">
					<view class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="item.pic" alt="">
					</view>
					<view class="weui-media-box__bd">
						<view class="weui-media-box__title">{{item.name}}</view>
						<view class="weui-media-box__desc">
							歌手：{{item.singer}}
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
				keyword: "",
				room_id: 0,
				page: 1,
				at: 0,
				name: ''
			}
		},
		onLoad(e) {
			this.room_id = e.room_id || 0;
			this.at = e.at || 0;
			this.name = decodeURIComponent(e.name) || '';
			let that = this;
			this.doSearchSong();
		},
		onPullDownRefresh() {
			this.doSearchSong();
		},
		onShow() {},
		methods: {
			doSearchSong() {
				let that = this;
				uni.hideKeyboard();
				that.app.request({
					url: "song/search",
					loading: "搜索中",
					data: {
						keyword: that.keyword,
						page: that.page
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
				let menu = ['点歌'];
				if (that.at > 0) {
					menu = ['送歌'];
				}
				uni.showActionSheet({
					itemList: menu,
					success: function(res) {
						switch (res.tapIndex) {
							case 0:
								that.app.request({
									url: 'song/addSong',
									data: {
										mid: song.mid,
										at: that.at,
										room_id: that.room_id
									},
									loading: that.at ? "送歌中" : "点歌中",
									success: function(res) {
										uni.showModal({
											title: that.at ? '送歌成功' : '点歌成功',
											content: res.msg,
											showCancel: true,
											cancelText: that.at ? '继续送歌' : '继续点歌',
											confirmText: '返回房间',
											success: function(res) {
												if (res.confirm) {
													uni.navigateBack();
												}
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
	.searchbox {
		margin: 0px;
		background-color: white;
		border-bottom: 1px solid #eee;
		margin-bottom: 10px;
	}

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
</style>
