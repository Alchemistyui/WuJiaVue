<template>
    <div id="homePage">
        <PropertyHeader></PropertyHeader>



    </div>
</template>

<script>
import PropertyHeader from './PropertyHeader'
import RollAdv from './RollAdv'
export default {
    name: 'homePage',
    components: {
        RollAdv,
        PropertyHeader
    },
    data () {
        return {

        }
    }
}
</script>