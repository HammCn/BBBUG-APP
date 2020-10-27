<script>
	export default {
		data() {
			return {
				// app: getApp()
			}
		},
		onLaunch() {
			let that = this;
		},
		onShow() {
			let that = this;
			getApp().user.getMyInfo({
				success: function(res) {
				}
			});
		},
		onHide() {
			let that = this;
			// if (getApp().webSocket.connection) {
			// 	getApp().webSocket.closeWss();
			// }
		},
        onUniNViewMessage:function(e){
          console.log("App.vue收到数据")
          console.log(JSON.stringify(e.data))  
        },
		methods: {}
	}
</script>

<style>

</style>
