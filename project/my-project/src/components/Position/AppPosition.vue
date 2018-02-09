<template>
    <div class="app-position" app-box>
        <div class="title">
            GPS定位你所在的城市
        </div>
        <ul class="list-unstyled">
            <li class="city-item-detail city-item-detail-gprs">深圳</li>
        </ul>
        <div class="hot">
            热门城市
        </div>
        <ul class="hotcity">
            <li>北京</li>
            <li>上海</li>
            <li>深圳</li>
            <li>广州</li>
        </ul>
    </div>
</template>
<script>
export default {
        name:'app-position',
        // components:{
        //     AppPosition
        // }
}
</script>
<style lang='scss' scoped>
    .app-position{
        margin-top:0.5rem; 
        .title {
                padding-left: 15px;
                font-size: 14px;
                line-height: 40px;
                background-color: #ebebeb;
                margin-top: -1px;
        }
        .list-unstyled{
                margin: 0;
                 min-width: 320px;
                 border-bottom: #ebebeb 1px solid;
                 .city-item-detail{
                            width: 25%;
                            font-size: 16px;
                            line-height: 46px;
                            text-align: center;
                            display: inline-block;
                            cursor: pointer;
                            color: #838383;
                             color: #e2941a
                 }
        }
        .hot{
                padding-left: 15px;
                font-size: 14px;
                line-height: 40px;
                background-color: #ebebeb;
                margin-top: -1px;
        }
        .hotcity{
                display: flex;
                margin: 0;
                min-width: 320px;
                border-bottom: #ebebeb 1px solid;
                li{
                    width: 25%;
                    font-size: 16px;
                    line-height: 46px;
                    text-align: center;
                    display: inline-block;
                    cursor: pointer;
                    color: #838383;
                    
                }
        }
    }


</style>
