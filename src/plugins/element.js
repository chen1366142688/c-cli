import { ElSelect, ElOption, ElOptionGroup, ElInput, ElCard, ElRow, ElCol, ElTable, ElTableColumn, ElButton, ElButtonGroup, ElRadio, ElRadioGroup, ElSwitch } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

const components = [
    ElSelect,
    ElOption,
    ElOptionGroup,
    ElInput,
    ElCard,
    ElRow,
    ElCol,
    ElTable, 
    ElTableColumn,
    ElButton,
    ElButtonGroup,
    ElRadio,
    ElRadioGroup,
    ElSwitch
]

export default (app) => {
    app.use({locale})
    components.forEach(plugin => { 
        app.use(plugin)
    })
}
