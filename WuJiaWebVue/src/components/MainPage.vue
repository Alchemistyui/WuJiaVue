<template>
    <div>
        <PropertyHeader></PropertyHeader>

        <PropertyAccount></PropertyAccount>
    </div>
</template>

<script>
    import PropertyAccount from './PropertyAccount'
    import PropertyHeader from './PropertyHeader'

    export default {
        components: {
                    PropertyHeader,
                    PropertyAccount

                },
                data () {
                    return {

                    }
                }
    }
</script>