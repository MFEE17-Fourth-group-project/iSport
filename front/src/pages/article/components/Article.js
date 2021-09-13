import Person2 from '../../../images/tabata/1.jpeg';
import { FaClock } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
const Article = () => {
    return (
        <>
            <div className="border-4 border-light-blue-500 border-opacity-100 p-5">
                <img className="mr-4" src={Person2} alt="" />
                <h3 class="text-xl lg:text-2xl xl:text-4xl m-2 text-yellow-400">
                    防疫必備！自組轟菌懶人包，五種居家訓練器材推薦組合
                </h3>
                <div className="m-2 md:flex md:justify-between">
                    <div className="flex items-center">
                        <BsFillPersonFill className="text-yellow-400 mr-1 cursor-pointer" />
                        <h4 className="text-sm text-white mr-4">泰勒</h4>
                        <FaClock className="text-yellow-400 mr-1" />
                        <h4 className="text-xs text-white mr-4">2021/06/22</h4>
                        <FaEye className="text-yellow-400 mr-1" />
                        <h4 className="text-sm text-white mr-4">16,157</h4>
                    </div>
                    <div className="flex items-center">
                        <FaThumbsUp className="text-yellow-400 mr-1 cursor-pointer" />
                        <span className="text-xs text-white mr-4">2844</span>
                        <FaShare className="text-yellow-400 mr-1 cursor-pointer" />
                        <span className="text-xs text-white mr-4">分享</span>
                        <FaRegHeart className="text-red-400 mr-1 cursor-pointer" />
                        <span className="text-xs text-white mr-4">收藏</span>
                    </div>
                </div>
                <div className="m-2">
                    <p className="text-base leading-loose tracking-wide text-white">
                        前陣子在 IG 限時動態
                        跟粉絲們分享了近期籌備的新健身工作室一共添購了哪些健身器材，由於正值防疫期間，陸續有粉絲來請我推薦他們一些居家訓練器材（HomeGym
                        /轟菌）的採購選擇，於是我索性把所有資訊整理成一篇文，以下會針對不同的族群，根據訓練資歷、經濟能力、訓練習慣等因素，去推薦5
                        種不同的居家訓練器材組合
                    </p>
                    <p className="text-base leading-loose tracking-wide text-white">
                        1. 超新手免費組合 ・採購項目：無 ・預估費用：免費
                        <br />
                        ・適合對象：零訓練經驗、想踏入健身領域的新手們
                        <br />
                        ・補充說明：通常這個階段先嘗試各種徒手訓練即可，如徒手深蹲、臀推、分腿蹲、膝蓋跪地伏地挺身等，與其砸錢買器材，不如先養成自身運動習慣、同時建立起基本的肌力與肌耐力。
                        <br />
                    </p>
                    <p className="text-base leading-loose tracking-wide text-white">
                        2. 入門級省錢組合 ・採購項目：低階可調式啞鈴＋低階臥推椅
                        <br />
                        ・適合對象：健齡 1 年內，還未養成長期健身習慣者
                        <br />
                        ・補充說明：通常在這個階段，重量都還沒辦法練到很重，而且也還沒養成長期的健身習慣，建議買一些初階的可調式啞鈴去做一些簡單的負重訓練即可，缺點是使用的便利性與耐用性較低
                        <br />
                        。若再加上一個低階的臥推椅，就有更多訓練變化可以做
                        低階可調式啞鈴
                        <br />
                        ・費用：$1,500 — $3,500 ・關鍵字：迪卡儂、BLADEZ
                        <br />
                        ・備註：重量調整較麻煩 低階臥推椅 ・費用：$2,000 —
                        $3,500
                        <br />
                        ・關鍵字：迪卡儂、BLADEZ、BD-2 ・備註：若練太重容易不穩
                        <br />
                    </p>
                    <p className="text-base leading-loose tracking-wide text-white">
                        3. 中手級高CP組合 ・採購項目：高階可調式啞鈴＋臥推椅
                        ・適合對象️：健齡1 年以上、追求高 CP 值的小資族
                        ・補充說明：接下來的
                        range會越來越廣，光是可調式啞鈴一組的價差就可以從五、六千到兩萬多，基本還是建議自己稍微做點功課，畢竟練到這個階段應該也比較懂得如何評估自身需求、並去挑選合適的器材了。
                        <br />
                        可調式啞鈴
                        <br />
                        ・費用：$6,000 — $25,000
                        <br />
                        ・關鍵字：U50、AD32、Iron Master
                        <br />
                        ・備註：價差大、種類多，建議先評估自身需求 臥推椅
                        ・費用：$4,000 —<br />
                        $8,000 ・關鍵字：馬西椅、Rep椅、AB-5000
                        <br />
                        ・備註：承重穩定性高，找自己喜歡的即可
                        <br />
                    </p>
                </div>
            </div>
        </>
    );
};

export default Article;
