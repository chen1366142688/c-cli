<template>
	<div class="test">
		<h2>Test</h2>
        <ElRow>
            <ElCol>
                <ElButton type="primary" @click="$router.back(-1)">返回</ElButton>
            </ElCol>
        </ElRow>
        <ElTable :data="tableData" style="width:100%" stripe>
            <ElTableColumn prop="date" label="日期" width="180"></ElTableColumn>
            <ElTableColumn prop="name" label="姓名" width="180"></ElTableColumn>
            <ElTableColumn prop="address" label="地址"></ElTableColumn>
        </ElTable>
	</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                    {date: '2016-05-02',name:'王小虎',address:'上海市静安区普陀东路225号'},
                    {date: '2016-05-03',name:'王大虎',address:'上海市静安区普陀东路224号'}
                ]
        }
    }
}
</script>

<style lang="scss">
	.test{
		display: flex;
		color: red;
	}
</style>