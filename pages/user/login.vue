<template>
	<view class="content">
		<view class="title">BBBUG</view>
		<view class="desc">一个划水聊天音乐聊天室</view>
		<form bindsubmit="formSubmit" bindreset="formReset">
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<view class="weui-label">帐号</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="你的登录邮箱" type="email" v-model="user_account" />
					</view>
					<view class="weui-cell__ft" @click="sendEmail"><i class="iconfont icon-mail" style="font-size:28px;"></i></view>
				</view>
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<view class="weui-label">密码</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="你的登录密码" password="true" v-model="user_password" />
					</view>
				</view>
			</view>
			<view class="weui-btn-area">
				<button class="weui-btn weui-btn_primary" @click="doLogin">登录聊天室</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				app: getApp(),
				user_account: "admin@hamm.cn",
				user_password: ""
			}
		},
		mounted() {

		},
		methods: {
			doLogin() {
				let that = this;
				that.app.request({
					url: "user/login",
					loading: "Login...",
					data: {
						user_account: that.user_account,
						user_password: that.user_password
					},
					success: function(res) {
						console.log(res);
						uni.setStorageSync('access_token', res.data.access_token);
						that.app.user.getMyInfo();
						uni.$emit('IndexReload');
						uni.navigateBack();
					}

				});
			},
			sendEmail() {
				let that = this;
				that.app.request({
					url: "sms/email",
					loading: "发送中",
					data: {
						email: that.user_account,
					},
					success: function(res) {
						uni.showModal({
							title: "发送成功",
							content: res.msg,
							showCancel: false
						});
					}

				});
			},
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
