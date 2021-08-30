import HomePage14 from './../../images/homepage/homepage-14.jpg';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';

const ArticleSection = () => {
    return (
        <div className="relative h-175 w-full">
            <BsFillCaretLeftFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 transform -translate-y-1/2 cursor-pointer z-10" />
            <img
                src={HomePage14}
                className="h-full w-full object-cover filter brightness-50"
            />
            <BsFillCaretRightFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 right-2/4 transform -translate-y-1/2 cursor-pointer" />
            <div className="absolute top-0 m-auto h-full overflow-y-auto w-screen">
                <h2 className="text-white text-2xl w-2/4 px-20">
                    精選影片
                        </h2>
                <p className="font-normal text-white tracking-wide leading-snug mb-4 w-2/4 px-20">
                    章節一：我該增肌還是減脂？健身基礎知識判斷
                            <br />
                            1-1：帶你了解 inbody 各種真實資訊 教你看Inbody數據
                            <br />
                            1-2：設定自己的目標（增肌、減脂、同時增肌減脂）
                            <br />
                            PEETA增肌計畫EP01 ｜增肌重訓課表＋TDEE觀念
                            <br />
                            PEETA教室：何時增肌｜減脂｜TDEE | 如何達到理想身材？
                            <br />
                            PEETA增肌計畫EP02 | 重訓進步的關鍵！！漸進性負重增加
                            <br />
                            1-3：用 APP 飲食控制：
                            <br />
                            下載這個APP，增肌減脂成功一半！-Myfitnesspal操作介紹
                            <br />
                    <br />
                            章節二：減重飲食的各種方法介紹
                            <br />
                            2-1：飲食減肥重種類：低碳、低脂、碳循環、生酮的操作方式
                            <br />
                            哪種飲食最能有效減脂？｜低醣、生酮、低脂、間歇式斷食
                            <br />
                            2-2：斷食執行方式：168、186、204 ...等斷食法
                            <br />
                            適合輕斷食的三種時間｜斷食全攻略-EP2｜營養師這樣說
                            <br />
                            2-3：碳循環飲食：高低碳日的搭配，達到增肌減脂目的
                            <br />
                            碳循環飲食 -<br />
                            增肌減脂必備｜最棒的健身飲食？｜10週增肌計畫EP-08
                            <br />
                    <br />
                            章節三：肩部肌群訓練動作
                            <br />
                            3-1：運動防疫小教室-第八堂/肩膀推舉
                            <br />
                            3-2：三運健身器材教學-肩推機#10
                            <br />
                    <br />
                            章節四：胸部肌群訓練動作
                            <br />
                            4-1：三運健身器材教學-雙功能蝴蝶機#09
                            <br />
                            4-2：三運健身器材教學-胸推機#08
                            <br />
                            4-3：運動防疫小教室/第二堂-伏地挺身
                            <br />
                    <br />
                            章節五：背部肌群訓練動作
                            <br />
                            5-1：運動防疫小教室-第六堂/背部訓練
                            <br />
                            5-2：三運健身器材教學-滑輪下拉機#07
                            <br />
                            5-3：三運健身器材教學-多功能滑輪下拉機#06
                            <br />
                            5-4：三運健身器材教學-坐姿划船機#05
                            <br />
                    <br />
                            章節六：腿部肌群訓練動作
                            <br />
                            6-1：運動防疫小教室/第五堂-分腿蹲
                            <br />
                            6-2：運動防疫小教室/第一堂-深蹲
                            <br />
                            6-3：三運健身器材教學-腿部外展內收機#04
                            <br />
                            6-4：三運健身器材教學-腿部彎曲機#03
                            <br />
                            6-5：三運健身器材教學-腿部推蹬機 #01
                            <br />
                            6-6：三運健身器材教學-大腿伸展機#02
                            <br />
                    <br />
                </p>
            </div>
        </div>
    );
};

export default ArticleSection;
