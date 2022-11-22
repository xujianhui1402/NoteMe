import {reactive} from "vue";
class SystemService{
    constructor() {
        this.initData = null
    }

    /**
     * app run and init
     */
    init(){
        /*data = {
            doc: {
                doc1:{
                    name: 'Doc note 1',
                    data:[{
                        date: timestamp,
                        content: 'What do you do today?'
                    }]
                }
            },
            purchase:{
                pur1:{
                    name: 'Purchase note 1',
                    data:[{
                        date: timestamp,
                        content: 'How much do you purchase?',
                        money: 155.21 // unit: ￥
                    }]
                }
            }
        }*/
        let valueName = window.btoa('NoteMeData')
        let data = localStorage.getItem(valueName)
        if(data){
            this.initData = data
        }
    }

    /**
     * save doc
     * @param doc
     * @param callback
     */
    saveDoc(doc=null,callback=null){
        let valueName = window.btoa('NoteMeData')
        if(doc){
            localStorage.setItem(valueName,doc)
        }
        if(typeof callback === 'function'){
            callback()
        }
    }
}
export default reactive(new SystemService())