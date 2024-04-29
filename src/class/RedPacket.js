import defaultUrl from '@/asserts/WechatIMG101.jpeg';
import {sample,random} from 'lodash'
export default class RedPacket {
    constructor(options) {
        //每个红包图片,地址,宽度,高度,回调
        this.url = options.url || defaultUrl;
        this.width = options.width || '20vw';
        this.height = options.height || 'auto';
        this.callback = options.callback;
        //红包轨道
        this.track=options.track || sample([0,20,40,60,80])
        //红包最终旋转角度
        this. rotate=options.rotate || random(-360,360)
        //红包掉落速度
        this.duration=options.duration || random(3.1,8.1)
        //红包父容器
        this.parent = options.parent || document.body;
        //创建红包
        this.create();
    }

    //方法
    create() {
        //创建红包 DOM 元素
        const img = document.createElement('img');
        //图片地址
        img.src = this.url;
        //图片宽度,高度,位置
        img.style.width = this.width;
        img.style.height = this.height;
        
        
        //开启定位
        img.style.position ='absolute'
        //红包轨道
        img.style.left=this.track +'vw'
        // img.animate([关键帧,,,,],{配置对象})
        img.animate([
            { transform: 'translateY(-50) rotate(0)' },
            { transform: 'translateY(120vh) rotate(' + this.rotate + 'deg)' }
        ], {
            duration: this.duration * 1000,
            fill:'forwards'
        });
        //图片的回调
        img.ontouchstart = () => this.destroy(img);
        
        //父容器
        this.parent.appendChild(img);
        setTimeout(()=>{
            img.remove()
        },this.duration*1000)
    }

    destroy(currentImg) {
        if (currentImg) {
            currentImg.remove();
        }
        if (this.callback) {
            this.callback();
        }
    }
}