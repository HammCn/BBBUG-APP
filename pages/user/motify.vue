<template>
	<view class="content">
		<form bindsubmit="doSubmit" bindreset="formReset">
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<view class="weui-label">头像</view>
					</view>
					<view class="weui-cell__ft">
						<image class="weui-media-box__thumb" @click="chooseImage" :src="formData.user_head||'/static/image/nohead.jpg'"
						 style="width:30px;height:30px;"></image>
					</view>
				</view>
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<view class="weui-label">昵称</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="你牛批的名字" type="text" v-model="formData.user_name" />
					</view>
				</view>
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<view class="weui-label">签名</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="你的个性签名" type="text" v-model="formData.user_remark" />
					</view>
				</view>
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<view class="weui-label">性别</view>
					</view>
					<view class="weui-cell__bd">
						<picker :value="formData.user_sex" :range="sexList" range-key="title" @change="onSexChanged">
							<view class="uni-input">{{sexList[formData.user_sex].title}}</view>
						</picker>
					</view>
				</view>
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<view class="weui-label">密码</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="你的登录密码" password="true" v-model="formData.user_password" />
					</view>
				</view>
			</view>
			<view class="weui-btn-area">
				<button class="weui-btn weui-btn_primary" @click="doSubmit">保存资料</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				app: getApp(),
				userInfo: {},
				formData: {
					user_name: "",
					user_head: "",
					user_remark: "",
					user_sex: 0,
					user_password: ""
				},
				sexList: [{
						value: 0,
						title: "女生"
					},
					{
						value: 1,
						title: "男生"
					}
				]
			}
		},
		mounted() {

		},
		onShow() {
			let that = this;
			that.getMyInfo();
		},
		methods: {
			getMyInfo() {
				let that = this;
				that.app.user.getMyInfo({
					success(userInfo) {
						that.userInfo = userInfo;
						that.formData.user_name = that.urldecode(userInfo.user_name);
						that.formData.user_remark = userInfo.user_remark;
						that.formData.user_sex = userInfo.user_sex;
						that.formData.user_head = userInfo.user_head;
						that.formData.user_password = "";
					}
				});
			},
			getStaticUrl(url) {
				if (url.indexOf('https://') > -1 || url.indexOf('http://') > -1) {
					return url;
				} else {
					return 'https://cdn.bbbug.com/uploads/' + url;
				}
			},
			chooseImage() {
				let that = this;
				that.showMenuBox = false;
				uni.chooseImage({
					sizeType: "compressed",
					sourceType: ['album'],
					count: 1,
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
									formData: Object.assign({}, that.app.globalData.request.baseData, {
										isHead: 1
									}),
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
											that.formData.user_head = that.getStaticUrl(response.data.attach_thumb);
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
			onSexChanged(e) {
				this.formData.user_sex = e.target.value;
			},
			doSubmit() {
				let that = this;
				that.app.request({
					url: "user/updateMyInfo",
					loading: "更新中",
					data: that.formData,
					success: function(res) {
						uni.$emit('IndexReload');
						uni.navigateBack();
					}
				});
			},
			urldecode(str) {
				return decodeURIComponent(str);
			}
		}
	}
</script>

<style>
	@import "/static/style/weui.scss";
	@import "/static/style/main.scss";
	@import '/static/style/font/iconfont.scss';
	.title {
		font-size: 32px;
		text-align: center;
		margin-top: 60px;
	}

	.desc {
		font-size: 14px;
		color: #999999;
		text-align: center;
	}
</style>
