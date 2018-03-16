 <template>
     <div id="PropertyRegist">
         <p>身份认证</p>
         <p>我们会为你分配一个新的公司账号</p>

         <p><label for="propertyName">公司名称 </label><input id="propertyName" v-model="propertyName"></p>
         <p><label for="contact">公司法人 </label><input id="contact" v-model="contact"></p>
         <!-- 需额外的后端数据 -->
         <p><label for="IDNumber">身份证号 </label><input id="IDNumber" v-model="IDNumber"></p>
         <p><label for="contactPhone">联系电话 </label><input id="contactPhone" v-model="contactPhone"></p>
         <p><label for="wuyeKey">公司操作密码 </label><input id="wuyeKey" v-model="wuyeKey"></p>
         <p><label for="reWuyeKey">确认密码 </label><input id="reWuyeKey" v-model="reWuyeKey"></p>
        <!-- 需额外的后端数据 -->
         <p><label for="aLiPay">支付宝账号 </label><input id="aLiPay" v-model="aLiPay"></p>
         <p><label for="xiaoquName">小区名称 </label><input id="xiaoquName" v-model="xiaoquName"></p>
         <p>
            <label for="xiaoquAdd">小区地址 </label>
            <city-select v-model="cityInfo"></city-select>
            <input id="xiaoquAdd" v-model="xiaoquAdd" placeholder="请输入详细地址">
        </p>
        <!-- 需额外的后端数据 -->
        <p><label for="serviceTel">客服电话 </label><input id="serviceTel" v-model="serviceTel"></p>
        <p>法人身份证明</p>
        <p>营业执照</p>
        <p>小区LOGO</p>


        <button>注册</button>
        <p>需等待三个工作日的审核</p>


        <button>下载吾家APP</button>

    </div>
</template>

<script>
import CitySelect from './CitySelect.vue'
export default {
    name: 'PropertyRegist',
    data() {
        return {
            contact: '',
            IDNumber: '',
            contactPhone: '',
            wuyeKey: '',
            reWuyeKey: '',
            aLiPay: '',
            xiaoquName: '',
            xiaoquAdd: '',
            serviceTel: '',
            cityInfo: '',
            propertyName: ''


        }
    },
    components: {
     CitySelect
   },
   computed: {
     cityName() {
       const names = [];
       this.cityInfo.province && names.push(this.cityInfo.province.name + ' ')
       this.cityInfo.city     && names.push(this.cityInfo.city.name + ' ')
       this.cityInfo.block    && names.push(this.cityInfo.block.name + ' ')
       return names.join('')
     }
   }
}
</script>

